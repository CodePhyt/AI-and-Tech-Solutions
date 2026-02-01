# 🚀 Smile Turkey - Deployment Guide

Complete deployment guide for the Smile Turkey platform. This guide covers both Vercel (recommended) and manual deployment methods.

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
- [Manual Deployment](#manual-deployment)
- [Post-Deployment Checklist](#post-deployment-checklist)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18.x or later installed
- ✅ Git repository set up
- ✅ Environment variables configured
- ✅ Google Gemini API key (for AI chatbot)
- ✅ Domain name (optional, for custom domain)

---

## Environment Variables

### Required Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# AI Chatbot (REQUIRED for chatbot functionality)
GEMINI_API_KEY="your_google_gemini_api_key_here"

# Site Configuration
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL="nnesipoglu@outlook.com"
NEXT_PUBLIC_CONTACT_PHONE="+905302876350"
```

### Optional Variables (Production)

```bash
# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_META_PIXEL_ID="123456789"

# Database (if needed)
DATABASE_URL="postgresql://..."
```

### Getting API Keys

**Google Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create or select a project
3. Generate API key
4. Copy key to `GEMINI_API_KEY` in your environment

---

## Vercel Deployment (Recommended)

Vercel provides the easiest deployment experience for Next.js applications.

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# Development preview
vercel

# Production deployment
vercel --prod
```

### Step 4: Configure Environment Variables

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all variables from `.env.example`
4. Set variables for Production, Preview, and Development

### Step 5: Custom Domain (Optional)

1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## Manual Deployment

### Option 1: Docker Deployment

**1. Create Dockerfile** (already exists if in project):

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**2. Build Docker Image:**

```bash
docker build -t smile-turkey .
```

**3. Run Container:**

```bash
docker run -p 3000:3000 \
  -e GEMINI_API_KEY="your_key" \
  -e NEXT_PUBLIC_SITE_URL="https://yourdomain.com" \
  smile-turkey
```

### Option 2: Traditional Server Deployment

**1. Build the Application:**

```bash
npm run build
```

**2. Start Production Server:**

```bash
npm start
```

**3. Use PM2 for Process Management:**

```bash
# Install PM2
npm install -g pm2

# Start app with PM2
pm2 start npm --name "smile-turkey" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

**4. Configure Reverse Proxy (Nginx):**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**5. Setup SSL with Let's Encrypt:**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renew
sudo certbot renew --dry-run
```

---

## Post-Deployment Checklist

After deployment, verify the following:

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Treatment pages accessible
- [ ] Blog posts display
- [ ] Contact form submits (if configured)
- [ ] AI chatbot responds (if GEMINI_API_KEY set)

### SEO & Performance
- [ ] Run Lighthouse audit (target: 90+ Performance, SEO, Accessibility)
- [ ] Verify meta tags in page source
- [ ] Check sitemap.xml is accessible
- [ ] Validate robots.txt
- [ ] Test site speed (GTmetrix/PageSpeed Insights)

### Links & Integrations
- [ ] LinkedIn link opens correctly
- [ ] WhatsApp Careers link works
- [ ] Email links formatted correctly
- [ ] Phone numbers click-to-call on mobile

### Analytics (if configured)
- [ ] Google Analytics tracking
- [ ] Meta Pixel firing
- [ ] Verify events in analytics dashboard

### Security
- [ ] SSL certificate active (HTTPS)
- [ ] Environment variables secure (not in git)
- [ ] No sensitive data in client-side code
- [ ] CORS configured correctly (if API routes used)

---

## Troubleshooting

### Build Failures

**Issue**: Build fails during deployment
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variable Issues

**Issue**: Chatbot not working
- Verify `GEMINI_API_KEY` is set in production environment
- Check API key is valid at Google AI Studio
- Ensure variable name matches exactly (case-sensitive)

### Performance Issues

**Issue**: Slow page loads
- Enable image optimization (Next.js default)
- Check for large bundle sizes: `npm run build` output
- Use CDN for static assets
- Enable Gzip/Brotli compression

---

## Monitoring & Maintenance

### Recommended Tools

- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry, LogRocket
- **Analytics**: Google Analytics 4, Plausible
- **Performance**: Vercel Analytics, New Relic

### Regular Maintenance

- Update dependencies monthly: `npm update`
- Review security alerts: `npm audit`
- Monitor error logs regularly
- Backup database (if applicable)

---

## Support

For deployment issues:
- Email: nnesipoglu@outlook.com
- GitHub: https://github.com/CodePhyt/smile-tr

---

## Deployment Platforms Comparison

| Platform | Pros | Cons | Best For |
|----------|------|------|----------|
| **Vercel** | ✅ Easiest setup<br>✅ Auto HTTPS<br>✅ Global CDN | ⚠️ Vendor lock-in | Most projects |
| **Netlify** | ✅ Simple UI<br>✅ Good free tier | ⚠️ Edge functions limits | Static-heavy sites |
| **AWS** | ✅ Full control<br>✅ Scalable | ❌ Complex setup | Enterprise |
| **DigitalOcean** | ✅ Affordable<br>✅ Developer-friendly | ⚠️ Manual config | Custom needs |
| **Self-Hosted** | ✅ Complete control<br>✅ No limits | ❌ Requires DevOps | Advanced users |

**Recommendation**: Start with Vercel for simplicity, migrate to custom hosting if needed later.
