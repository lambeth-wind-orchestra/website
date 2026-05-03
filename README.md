# Lambeth Wind Orchestra Website

Welcome to the repository for the Lambeth Wind Orchestra website.

This website is built with [Astro 5](https://astro.build/), styled with [Tailwind CSS 4](https://tailwindcss.com/), and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / Hybrid)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Typography:** [Work Sans](https://fonts.google.com/specimen/Work+Sans)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Content:** Markdown (using Astro Content Layer)

## Project Structure

```text
/
├── public/              # Static assets (images, favicons, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Website content (Markdown files)
│   │   ├── events/      # Event definitions
│   │   ├── pages/       # General page content (Home, About, etc.)
│   │   └── config.ts    # Content schema definitions
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route-based pages (.astro files)
│   ├── styles/          # Global styles and Tailwind configuration
│   └── env.d.ts         # TypeScript environment definitions
├── package.json         # Project dependencies and scripts
├── wrangler.jsonc       # Cloudflare Pages configuration
└── astro.config.mjs     # Astro configuration
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.18.1 or later recommended)
- `npm` (comes with Node.js)

### Local Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd lambeth-wind-orchestra
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

### Build and Preview

To build the site for production and preview it locally:

```sh
npm run build
npm run preview
```

## Content Management

Non-technical users who want to update the website's content (e.g., adding events or editing page text) should refer to the **[Content Guide](./CONTENT_GUIDE.md)**.

## Contributing

### Coding Standards

- We use [Prettier](https://prettier.io/) to maintain consistent code formatting. Run `npm run format` before submitting.
- **No Emojis:** Do not use emojis in the codebase, documentation, or website content.

### General Guidelines

- Maintain the vibrant and inclusive design aesthetic.
- Ensure all changes meet at least WCAG AA accessibility standards.
- Follow the directory-based routing logic for the 'About' section.

## Contact & Support

Lambeth Wind Orchestra is a registered charity (Charity No. 1138703).
