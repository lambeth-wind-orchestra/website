# Lambeth Wind Orchestra (LWO) - Developer Guide

This document outlines the coding standards, design principles, and operational workflows for the Lambeth Wind Orchestra website.

## Project Architecture

- **Framework**: Astro 5 (using Tailwind CSS 4).
- **Styling**: Tailwind CSS for layout and design. Global styles are managed in `src/styles/global.css`.
- **Content Management**: Content is managed via Markdown files in `src/content/`.

## Core Principles

### 1. Content-First Workflow

The website is designed to be manageable by non-technical users. **Always update content in Markdown files (`src/content/`) rather than hard-coding it in Astro components.**

- If a component needs new editable fields, add them to the frontmatter in the corresponding Markdown file and update the content schema in `src/content/config.ts`.

### 2. Visual Identity & Design System

LWO uses a clean, photography-focused design.

- **Color Palette**:
  - Primary Background: White
  - Primary Accents: `#1C2634` (Navy) - Used for navigation, paragraph text, and dark accents.
  - Secondary Accents: `#92B5AC` (Sage) - Used for headings, hero backgrounds, and light accents.
- **Typography**: Work Sans (Google Fonts) for all text.
- **Layout Consistency**: Use standard container padding: `px-6 sm:px-8 lg:px-12`.
- **Aesthetic**: Avoid heavy borders, offset shadows, or "cartoony" elements.

### 3. SVG Best Practices

- Root element of SVG components (e.g., `Logo.astro`) should be the `<svg>` tag.
- Use `fill="currentColor"` on SVG paths to allow dynamic color inheritance from parent containers.

### 4. Accessibility & SEO

- Use semantic HTML tags.
- Ensure proper ARIA labels (e.g., the site logo in the header uses `aria-label="Lambeth Wind Orchestra Home"`).
- For visually hidden but screen-reader accessible text, use Tailwind's `sr-only` classes.

## Development Workflows

- **Formatting**: Run `npm run format` (Prettier) before committing.
- **Testing**: End-to-end tests and visual verifications are performed using Playwright.
- **Verification**: Maintain manual verification scripts and screenshots in a `./verification/` directory (relative to the project root).

## Site Structure

- The site uses a flat structure where possible.
- Secondary pages (About, Events, Join) use their own directories with `index.astro` files.
- The navigation bar is relative (non-sticky).
