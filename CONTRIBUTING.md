# Contributing to Smile Turkey

First off, thank you for considering contributing to Smile Turkey! It's people like you that make this platform better for everyone.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)

---

## Code of Conduct

This project adheres to a code of professionalism and respect. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm
- Git
- Code editor (VS Code recommended)

### Local Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/smile-tr.git
   cd smile-tr
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Copy environment template:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser

---

## Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test additions/updates

Examples:
- `feature/add-online-booking`
- `fix/chatbot-api-error`
- `docs/update-readme`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
-  `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation change
- `style`: Code style change (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(chatbot): add multi-language support"
git commit -m "fix(contact): resolve form submission error"
git commit -m "docs(readme): update installation instructions"
```

---

## Coding Standards

### TypeScript

- ✅ Use TypeScript strict mode
- ✅ Define interfaces for all component props
- ✅ Avoid `any` type unless absolutely necessary
- ✅ Use meaningful variable and function names

**Example:**
```typescript
interface TreatmentCardProps {
  title: string;
  price: string;
  features: string[];
  slug: string;
}

export function TreatmentCard({ title, price, features, slug }: TreatmentCardProps) {
  // Component implementation
}
```

### React/Next.js

- ✅ Use functional components with hooks
- ✅ Use `'use client'` directive only when needed
- ✅ Implement proper error boundaries
- ✅ Use Next.js Image component for images
- ✅ Follow composition over inheritance

**File Structure:**
```typescript
// 1. Imports
import React from 'react';
import { Component } from 'library';

// 2. Types/Interfaces
interface Props {}

// 3. Component
export default function Component({ props }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Effects
  useEffect(() => {}, []);
  
  // 6. Handlers
  const handleClick = () => {};
  
  // 7. Render
  return <div>...</div>;
}
```

### CSS/Styling

- ✅ Use TailwindCSS utility classes
- ✅ Follow mobile-first responsive design
- ✅ Use custom CSS classes for reusable styles (e.g., `.crystal-card`)
- ✅ Maintain consistent spacing and sizing
- ✅ Follow the Diamond Protocol design system

**Class Order:**
1. Layout (flex, grid)
2. Positioning (relative, absolute)
3. Sizing (w-, h-)
4. Spacing (p-, m-)
5. Typography (text-, font-)
6. Colors (bg-, text-)
7. Effects (shadow-, border-)
8. Transitions/Animations

---

## Testing

### Before Submitting

Run these checks locally:

```bash
# Build check
npm run build

# Lint check
npm run lint

# Type check
npx tsc --noEmit
```

### Manual Testing Checklist

- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on mobile viewport (375px, 768px, 1024px)
- [ ] Verify no console errors
- [ ] Check accessibility (keyboard navigation, screen reader)
- [ ] Verify links work correctly
- [ ] Test form submissions (if applicable)

---

## Submitting Changes

### Pull Request Process

1. **Update your fork:**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Build passes (`npm run build`)

## Screenshots (if applicable)
Add screenshots to show visual changes.

## Related Issues
Closes #issue_number
```

### Review Process

- PRs require at least 1 approval
- Automated checks must pass (linting, build)
- Maintainers may request changes
- BE PATIENT - reviews may take a few days

---

## Areas for Contribution

### High Priority

1. **Image Assets** (Quota blocked until Feb 7, 2026)
   - Blog cover images (8 remaining)
   - Success story transformations (6 pairs)
   - Journey step images (3)
   - Clinic facility photos (9)

2. **Internationalization (i18n)**
   - Add Turkish language support
   - Create language switcher
   - Translate all content

3. **Testing**
   - Add unit tests for components
   - Add E2E tests with Playwright
   - Improve test coverage

### Medium Priority

- Accessibility improvements (WCAG 2.1 AA compliance)
- Performance optimizations
- SEO enhancements
- Mobile UX improvements
- Analytics integration

### Good First Issues

Look for issues labeled `good-first-issue` on GitHub - these are beginner-friendly!

---

## Questions?

- Open an issue for bugs or feature requests
- Email: nnesipoglu@outlook.com
- Check existing issues before creating new ones

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Smile Turkey better! 🦷✨
