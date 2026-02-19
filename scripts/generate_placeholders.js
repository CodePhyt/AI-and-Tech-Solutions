const fs = require('fs');
const path = require('path');

const images = [
    // Services
    { path: 'public/images/services/ai-software.jpg', title: 'AI SOFTWARE', color: '#00d4ff' },
    { path: 'public/images/services/smart-home.jpg', title: 'SMART HOME', color: '#ffd700' },
    { path: 'public/images/services/global-trade.jpg', title: 'GLOBAL TRADE', color: '#00d4ff' },
    { path: 'public/images/services/consulting.jpg', title: 'CONSULTING', color: '#ffd700' },
    { path: 'public/images/services/digital-media.jpg', title: 'DIGITAL MEDIA', color: '#00d4ff' },

    // Projects
    { path: 'public/images/projects/project-smarthome.jpg', title: 'SMART HOME LAB', color: '#00d4ff' },
    { path: 'public/images/projects/project-logistics.jpg', title: 'LOGISTICS PLATFORM', color: '#ffd700' },
    { path: 'public/images/projects/project-health.jpg', title: 'HEALTH BRIDGE', color: '#00d4ff' },
];

const generateSVG = (title, color) => `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${color}" stroke-opacity="0.1" stroke-width="1"/>
        </pattern>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#grad)" />
    
    <!-- Grid Overlay -->
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Border -->
    <rect x="20" y="20" width="760" height="560" fill="none" stroke="${color}" stroke-width="2" stroke-opacity="0.5" />
    
    <!-- Center Content -->
    <rect x="0" y="250" width="800" height="100" fill="#000" fill-opacity="0.7" />
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dy=".3em" letter-spacing="4">${title}</text>
    
    <!-- Tech Decoration -->
    <circle cx="40" cy="40" r="4" fill="${color}" />
    <circle cx="760" cy="40" r="4" fill="${color}" />
    <circle cx="40" cy="560" r="4" fill="${color}" />
    <circle cx="760" cy="560" r="4" fill="${color}" />
</svg>`;

const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

images.forEach(img => {
    const fullPath = path.join(__dirname, '..', img.path);
    ensureDirectoryExistence(fullPath);
    // Note: Saving as .jpg but content is SVG. Browsers often handle this, but ideally we should update code to .svg or use a library to convert.
    // For a quick placeholder fix without changing all code structure, an SVG definition inside a file named .jpg might not render in <img src>.
    // BETTER APPROACH: Save as .svg and update code, OR (simpler for now) just save as .svg and assume we update the code later?
    // Wait, the user code imports these as: imageUrl: '/images/services/ai-software.jpg'
    // Next.js Image component might fail if the extension doesn't match content.
    // Let's create them as .svg and update the code to point to .svg?

    // Actually, let's keep it simple. I will save them as .svg files, and then I will update the 2 files (services.ts and projects/page.tsx) to point to .svg instead of .jpg.
    // This is cleaner than faking file extensions.

    const svgPath = fullPath.replace('.jpg', '.svg');
    fs.writeFileSync(svgPath, generateSVG(img.title, img.color));
    console.log(`Generated ${svgPath}`);
});
