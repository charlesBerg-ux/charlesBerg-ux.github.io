# CLAUDE.md — Charles Berg UX Portfolio

This file documents the structure, conventions, and workflows for this repository. It is intended to help AI assistants understand the codebase and contribute effectively.

---

## Project Overview

This is a **static HTML/CSS portfolio site** for Charles Berg, a UX designer specializing in AgeTech and accessibility. It is hosted on GitHub Pages at `crb.is` (configured via `CNAME`).

**Key characteristics:**
- Pure HTML + CSS — no build system, no JavaScript framework, no package manager
- All styling is embedded in `<style>` tags within each HTML file
- No external CSS files, no bundler, no transpilation step
- Deployed directly from the repository root via GitHub Pages

---

## Repository Structure

```
/
├── CNAME                  # Custom domain: crb.is
├── index.html             # Main portfolio homepage (~900 lines)
├── portfolio.html         # Alternate portfolio view using Tailwind (CDN)
├── magnifier.html         # Case study: Pixel Magnifier (~520 lines)
├── simple-view.html       # Case study: Simple View — aging-in-place (~290 lines)
├── guided-step.html       # Case study: Guided Step — AI nav for blind users (~345 lines)
├── gh-lights.html         # Case study: Google Home Lights (~260 lines)
├── crb.html               # Experimental/staging version
├── feb42026.html          # Staging version (dated Feb 4 2026)
├── gemstaging.html        # Staging version (Gemini comparison)
└── assets2025/            # Images, GIFs, and PDFs for case studies
    ├── Magnifier/         # Pixel Magnifier assets
    ├── SimpleView/        # Simple View assets
    ├── GuidedStep/        # Guided Step assets
    └── Resumes/           # PDF resumes (Charles Berg)
```

### Page Roles

| File | Purpose |
|------|---------|
| `index.html` | Production homepage — primary entry point |
| `magnifier.html` | Deep-dive case study for the Pixel Magnifier project |
| `simple-view.html` | Deep-dive case study for Simple View |
| `guided-step.html` | Deep-dive case study for Guided Step |
| `gh-lights.html` | Shorter Google Home Lights case study |
| `portfolio.html` | Secondary portfolio view (Tailwind-based, experimental) |
| `crb.html`, `feb42026.html`, `gemstaging.html` | Staging/WIP versions — not production |

---

## Development Workflow

### No Build Step Required

There is no build process. To work on this site:
1. Edit HTML files directly
2. Open in a browser to preview (or use any static file server)
3. Push to `origin/main` to deploy via GitHub Pages

### Git Branches

- `main` — production branch, auto-deployed to GitHub Pages
- `master` — older branch (may be aliased to main)
- `claude/*` — AI-generated feature branches

### Staging Files

Files like `feb42026.html` and `gemstaging.html` are experimental versions used for testing layout changes before merging into `index.html`. They are **not deployed as primary pages**.

### Asset Naming Conventions

Files in `assets2025/` follow these patterns:
- `!Hero.png` — Hero/leading image (the `!` prefix sorts it first in file explorers)
- `!LSHappyPath.gif` — Animated walkthroughs
- Screen mockups are named `screen0.png`, `screen1.png`, etc.
- Rejected concepts use "Rejected" in the filename

---

## Design System

The design system lives entirely in `<style>` blocks at the top of each HTML file. The primary design tokens are defined as CSS custom properties on `:root`.

### Color Palette

```css
--color-bg: #F2EADF           /* Warm beige — page background */
--color-surface: #FFFFFF      /* White — card backgrounds */
--color-text-primary: #1A1A1A /* Near-black — body text */
--color-text-secondary: #4A4A4A
--color-text-tertiary: #6B6B6B
--color-accent: #2A4E38       /* Forest green — primary brand */
--color-accent-dark: #1E3A28
--color-accent-light: #F0F5F2
--color-warm: #C05A2C         /* Rust/orange — secondary brand */
--color-border: #D6CFC5       /* Light taupe */
--color-image-bg: #3A3632     /* Dark brown — image placeholders */
```

### Spacing Scale

```css
--space-xs: 0.5rem    /* 8px */
--space-sm: 1rem      /* 16px */
--space-md: 1.5rem    /* 24px */
--space-lg: 2.5rem    /* 40px */
--space-xl: 4rem      /* 64px */
--space-2xl: 6rem     /* 96px */
--space-3xl: 8rem     /* 128px */
```

### Border Radius

```css
--radius-sm: 8px
--radius-md: 16px
--radius-lg: 24px
```

### Shadows and Transitions

```css
--shadow-card: 0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)
--shadow-card-hover: 0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)
--transition-smooth: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Typography

- **Font family:** "Funnel Sans" (loaded from Google Fonts), with system font stack fallback
- **Sizing:** `clamp()` for all fluid text — minimum, preferred (vw-based), maximum
- **Line heights:** 1.6 for body, 1.08–1.75 for headings/labels
- **Letter spacing:** Adjusted per context for readability

```css
/* Example heading scale */
font-size: clamp(2.25rem, 5vw, 3.5rem);   /* h1 */
font-size: clamp(1.5rem, 3vw, 2.25rem);   /* h2 */
```

---

## HTML Conventions

### Semantic Structure

Every page uses full semantic HTML5:

```html
<header>       <!-- Site navigation -->
<nav>          <!-- Navigation links -->
<main>         <!-- Primary page content -->
<section>      <!-- Thematic content groups -->
<article>      <!-- Standalone content (project cards) -->
<footer>       <!-- Footer content -->
```

ARIA attributes are used for complex regions:
- `aria-label` on `<nav>`, `<section>`, and icon-only buttons
- `role="list"` / `role="listitem"` where semantic list elements are not used
- `aria-hidden="true"` on decorative SVG icons

### Skip Link

Every page includes a skip-to-content link as the first focusable element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

It is visually hidden by default and revealed on `:focus`.

### Inline SVG Icons

All icons are embedded SVG, not icon fonts or external images. They include:
- `aria-hidden="true"` to hide from screen readers when decorative
- Consistent `width`/`height` and `viewBox` attributes

### Phone Mockup Component

Case study pages use a CSS-only phone mockup pattern:

```html
<div class="phone-mockup">
  <div class="phone-screen">
    <img src="assets2025/..." alt="...">
  </div>
</div>
```

The mockup uses `border-radius`, `border`, and `box-shadow` to simulate a device frame.

---

## CSS Conventions

### All Styles Embedded

CSS lives in `<style>` tags in `<head>`. There are no external stylesheets (except Google Fonts via `<link>`).

### CSS Variables Always Used for Design Tokens

Never hardcode colors, spacing, or radius values in component rules. Always reference custom properties:

```css
/* Correct */
background-color: var(--color-accent);
padding: var(--space-md);

/* Incorrect */
background-color: #2A4E38;
padding: 1.5rem;
```

### Layout: Grid and Flexbox

- **Grid** for two-column content sections
- **Flexbox** for navigation, card internals, and inline groups
- Responsive via `@media (max-width: 768px)` — single breakpoint

```css
/* Typical two-column pattern */
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

@media (max-width: 768px) {
  .two-col-grid {
    grid-template-columns: 1fr;
  }
}
```

### Container Pattern

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
}
```

### Hover and Focus States

Interactive elements must have both `:hover` and `:focus-visible` states. Focus rings use:

```css
outline: 3px solid var(--color-accent);
outline-offset: 3px;
```

### Transitions

All hover state changes use `--transition-smooth` for consistency:

```css
transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
```

---

## Accessibility Requirements

This portfolio is specifically about AgeTech and accessibility design — the code must exemplify these values.

**Non-negotiable requirements:**
1. All images must have descriptive `alt` text (or `alt=""` if purely decorative)
2. Color contrast must meet WCAG 2.1 AA (4.5:1 for body text, 3:1 for UI components)
3. All interactive elements must be keyboard-navigable with visible focus indicators
4. Headings must follow a logical hierarchy (`h1` → `h2` → `h3`)
5. Skip-to-content link must be present on every page
6. No content conveyed by color alone

---

## Content Conventions

### Project Card Structure

Each project card on the homepage follows this pattern:
- Section label (uppercase, small)
- Heading (project name)
- Role and year
- Brief description
- 2–3 key metrics (large number + label)
- CTA link (arrow icon + "View case study")
- Image/mockup on the alternating side

### Case Study Page Structure

1. Back link (← Portfolio)
2. Hero section: title, subtitle, key metrics
3. Sections: Background → Problem → Process → Solution → Results
4. Inline images and GIFs from `assets2025/`
5. Stats grid for quantified outcomes
6. Quote blocks for user/stakeholder feedback

### Metrics Display

Quantified outcomes are displayed prominently using this pattern:

```html
<div class="metrics-grid">
  <div class="metric-card">
    <span class="metric-number">94%</span>
    <span class="metric-label">Task completion rate</span>
  </div>
</div>
```

The number uses a large font size in `--color-accent` or `--color-warm`.

---

## Key Projects

| Project | File | Focus |
|---------|------|-------|
| Pixel Magnifier | `magnifier.html` | Low vision accessibility tool for Android |
| Simple View | `simple-view.html` | Aging-in-place app simplification |
| Guided Step | `guided-step.html` | AI-powered navigation for blind/low-vision users |
| Google Home Lights | `gh-lights.html` | Smart home accessibility |
| Calling on Assistant | *(homepage section only)* | Voice interface for older adults |

---

## What Not to Do

- **Do not add a build system** unless explicitly requested — the static-file approach is intentional
- **Do not create external CSS files** — keep styles co-located in each HTML file
- **Do not add JavaScript** unless explicitly needed for a specific interaction
- **Do not use Tailwind CDN outside of `portfolio.html`** — `index.html` and case study pages use the custom design system
- **Do not hardcode design tokens** — always use CSS custom properties
- **Do not break heading hierarchy** — AI assistants commonly skip heading levels
- **Do not remove accessibility features** (skip links, ARIA labels, alt text) when editing layouts
- **Do not commit binary assets** without confirming they belong in `assets2025/`
- **Do not push to `main` directly** — use feature branches and PRs
