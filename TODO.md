# Portfolio Refactor TODO List - Final Fixes

## 1. File Replacements & Cleanup
- [ ] Replace page.tsx with page-new.tsx content
- [ ] Replace about/page.tsx with about/page-new.tsx
- [ ] Replace projects/page.tsx with projects/page-new.tsx
- [ ] Replace services/page.tsx with services/page-new.tsx
- [ ] Replace contact/page.tsx with contact/page-updated.tsx
- [ ] Delete old -old and -new files after replacement
- [ ] Update imports in layout.tsx if needed

## 2. Design & Visual Fixes
- [ ] Update globals.css with new color palette variables
- [x] Fix ScrollProgress gradient to blue-purple
- [x] Add Framer Motion animations to hero and project hovers
- [ ] Ensure button hover effects (scale + shadow)
- [ ] Add subtle section dividers (CSS waves)

## 3. Technical/Performance Fixes
- [ ] Move viewport from metadata to generateViewport() in all pages
- [ ] Add JSON-LD structured data for Person/Projects
- [ ] Optimize images with next/image (WebP, sizes, priority)
- [ ] Add dynamic imports for code-splitting
- [ ] Remove unused CSS classes
- [ ] Add loading states to contact form
- [ ] Fix resume download path in resume/page.tsx

## 4. SEO/Accessibility/Extras
- [ ] Add unique titles per page
- [ ] Ensure WCAG AA contrast with blue theme
- [ ] Add focus-visible styles
- [ ] Add custom cursor effect (optional)
- [ ] Test keyboard navigation

## 5. Testing & Deployment
- [ ] Run npm run build and lint
- [ ] Test with browser_action (sections, animations, form)
- [ ] Run Lighthouse audit (aim 90+)
- [ ] Deploy to Netlify/Vercel
- [ ] Final cleanup and TODO update
