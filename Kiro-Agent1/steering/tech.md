# Technical Stack

## Architecture
Single-page static website with no backend or build process. All code is contained in three files that can be opened directly in any modern browser.

## Tech Stack
- **HTML5**: Semantic markup, single self-contained file architecture
- **CSS3**: Pure CSS with CSS custom properties (no frameworks like Tailwind or Bootstrap)
- **JavaScript**: Vanilla ES6+ (no React, Vue, jQuery, or other frameworks)
- **External Dependencies**: 
  - Google Fonts (CDN)
  - Font Awesome icons (CDN) or inline SVG
  - No bundlers, no build tools, no compilation required

## File Structure
```
/
├── index.html       # Main HTML with embedded styles and scripts option
├── styles.css       # All CSS styles with custom properties
└── main.js          # Vanilla JavaScript for interactivity
```

## CSS Architecture

### Custom Properties (CSS Variables)
All colors defined in `:root`:
```css
--text:       rgb(7, 8, 23);
--background: rgb(231, 231, 233);
--primary:    rgb(79, 79, 196);
--secondary:  rgb(216, 131, 241);
--accent:     rgb(208, 118, 184);
```

**CRITICAL**: Never introduce colors outside this palette. Derive variants using `rgba()` with opacity.

### Design Tokens
- Border radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Transitions: `--transition` (cubic-bezier for smooth animations)

### Responsive Design
Mobile-first with 4 breakpoints:
- **Mobile**: ≤ 480px
- **Tablet**: 481px – 768px
- **Desktop**: 769px – 1200px
- **Wide**: 1201px+

Uses CSS Grid and Flexbox for layouts.

## JavaScript Patterns

### Core Functionality
- Smooth scroll navigation with offset compensation for sticky header
- Hamburger menu toggle for mobile
- Header scroll state (adds shadow and visual change)
- Active nav link highlighting based on scroll position
- Testimonials carousel with touch/swipe support
- Scroll reveal animations using IntersectionObserver
- Form visual feedback (no actual submission)

### Code Style
- Modern ES6+ syntax (const/let, arrow functions, template literals)
- Event delegation where appropriate
- Passive event listeners for scroll performance
- No jQuery or framework dependencies

## Browser Compatibility
Targets modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support. Uses standard web APIs without polyfills.

## Common Commands
**Development**: Open `index.html` directly in browser (no server needed)

**Testing**: Refresh browser after changes to HTML/CSS/JS files

**Validation**: Use browser DevTools for debugging and responsiveness testing

## Performance Considerations
- Inline SVG icons for zero HTTP requests
- CSS animations with `transform` and `opacity` for GPU acceleration
- Passive scroll listeners to prevent jank
- IntersectionObserver for efficient scroll reveal animations
- Minimal external dependencies (only Google Fonts CDN)
