# Project Structure & Organization

## File Organization
```
PFO2_KIRO/
├── .git/                 # Git version control
├── .kiro/                # Kiro AI assistant configuration
│   └── steering/         # AI guidance documents
├── .vscode/              # VS Code settings
├── index.html            # Main HTML document
├── styles.css            # All CSS styles
├── main.js               # All JavaScript functionality
└── AGENTS.md             # Development guidelines and prompt template
```

## HTML Structure (index.html)

### Section Order (CRITICAL - Do not change)
1. **Header** - Fixed navigation bar with logo and menu
2. **Hero** - Full viewport height hero section with CTA
3. **About** - Company introduction with visual grid
4. **Services** - 6-card grid showcasing offerings
5. **Testimonials** - Carousel with 4 client testimonials
6. **Contact** - Two-column layout with form and contact details
7. **Footer** - Multi-column footer with navigation and social links

### HTML Conventions
- Semantic HTML5 tags (`<header>`, `<section>`, `<footer>`, `<nav>`, `<article>`)
- BEM-like naming convention for CSS classes (block__element--modifier)
- Section comments: `<!-- SECTION: Hero -->` at the start of each major section
- IDs on sections for anchor navigation: `id="hero"`, `id="about"`, etc.
- All anchor links use `href="#sectionId"` format
- Forms use `novalidate` attribute (visual feedback only, no submission)

## CSS Structure (styles.css)

### Organization by Section
1. **Variables & Reset** - CSS custom properties and base resets
2. **Typography Utilities** - Reusable text styles
3. **Buttons** - Button variants and states
4. **Header** - Fixed navigation and burger menu
5. **Hero** - Hero section with animated shapes
6. **About** - Two-column layout with visual grid
7. **Services** - Service cards grid
8. **Testimonials** - Carousel and controls
9. **Contact** - Form and contact details
10. **Footer** - Footer layout and navigation
11. **Scroll Reveal Animation** - IntersectionObserver effects
12. **Responsive** - Media queries for 4 breakpoints

### CSS Naming Convention
- **Block**: `.header`, `.hero`, `.service-card`
- **Element**: `.header__logo`, `.hero__title`, `.service-card__icon`
- **Modifier**: `.btn--primary`, `.header__nav-link--cta`, `.service-card--featured`

### Layout Patterns
- Container max-width: `1200px` with auto margins
- Standard section padding: `7rem 1.5rem` (reduced to `4rem 1.5rem` on mobile)
- Grid gaps: `1.5rem` to `5rem` depending on context
- Consistent border-radius using CSS variables

## JavaScript Structure (main.js)

### Code Organization (in order)
1. **Header scroll state** - Adds `.scrolled` class on scroll
2. **Mobile burger menu** - Toggle navigation visibility
3. **Smooth scroll** - Anchor link navigation with offset
4. **Active nav link** - Highlights current section in menu
5. **Testimonials carousel** - Swipe, buttons, dots, auto-play
6. **Scroll reveal** - Programmatically adds `.reveal` classes and observes
7. **Form feedback** - Visual confirmation on submit

### JavaScript Conventions
- Element selection via `getElementById` and `querySelector`
- Event listeners with descriptive function names
- Passive listeners for scroll events: `{ passive: true }`
- Touch event handling for mobile swipe
- IntersectionObserver for performance-efficient scroll animations

## Component Patterns

### Cards
All cards follow a consistent structure:
- Container with padding and border-radius
- Hover state with transform and shadow
- Icon container at top
- Title and description text

### Forms
- Two-column layout for related fields (single column on mobile)
- Labels above inputs
- Focus states with border color and box-shadow
- Consistent input styling with custom select dropdown

### Navigation
- Desktop: Horizontal nav with inline links
- Mobile: Burger menu with slide-down overlay
- Active link highlighting based on scroll position
- Smooth scroll with header offset compensation

## Animation Patterns

### Keyframe Animations
- `@keyframes floatShape` - Background shape floating
- `@keyframes blobMorph` - Hero blob morphing
- `@keyframes cardFloat` - Floating hero cards
- `@keyframes scrollBounce` - Scroll indicator bounce
- `@keyframes fadeInUp/Left/Right` - Initial entrance animations

### Scroll Reveal
- `.reveal` class for elements to animate on scroll
- Variants: `.reveal--left`, `.reveal--right`
- `data-delay` attribute for staggered animations
- IntersectionObserver triggers `.visible` class

## Design System Constraints

### Color Usage Rules
1. **NEVER** add colors outside the defined palette
2. Use CSS variables for all color references
3. Derive hover/active states using `rgba()` with opacity
4. Background alternates between `--white` and `--background`

### Typography Rules
1. No emojis anywhere in visible HTML
2. Use system font stack with Segoe UI as primary
3. Font sizes use `clamp()` for fluid scaling
4. Consistent font-weight scale (500, 700, 800, 900)

### Spacing Rules
1. Use CSS Grid and Flexbox for layouts (no float or absolute positioning for layout)
2. Gap properties for spacing between items
3. Padding/margin values multiples of 0.25rem
4. Section padding scales down on smaller breakpoints

## Common Modifications

### Adding a New Section
1. Add section HTML with proper ID and BEM classes
2. Create corresponding CSS section in styles.css
3. Add scroll-reveal classes programmatically in main.js
4. Add navigation link in header if needed
5. Update smooth scroll offset if section has special requirements

### Adding a New Color Variant
```css
/* Derive from existing palette */
--primary-hover: rgba(79, 79, 196, 0.9);
--primary-border: rgba(79, 79, 196, 0.2);
```

### Updating Responsive Behavior
Follow mobile-first approach:
1. Write base styles for mobile (≤480px)
2. Add tablet styles at `@media (max-width: 768px)`
3. Add desktop styles at `@media (max-width: 1100px)` if needed
4. Wide screens inherit desktop by default

## Git Workflow (if applicable)
- Main branch contains production-ready code
- Commit messages should describe the change clearly
- Test responsiveness before committing
- Check all sections work after changes

## Quality Checklist
- [ ] All colors from defined palette only
- [ ] No emojis in visible content
- [ ] Responsive across all 4 breakpoints
- [ ] Smooth scroll with proper offset
- [ ] Form has visual feedback
- [ ] Carousel works on touch devices
- [ ] Scroll reveal animations trigger correctly
- [ ] No console errors in browser DevTools
