# Web2Table Company Website

The public-facing Web2Table marketing website, built with React, TypeScript, React Router, and Vite.

## Development

Requirements: Node.js 20+ and npm.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Modular architecture

The application is organized by responsibility rather than keeping page composition, copy, and business behavior inside the same components.

- `src/App.tsx` — route table only
- `src/pages/` — page-level composition, including the home page and legal pages
- `src/components/layout/` — shared site header and footer
- `src/components/sections/` — independent marketing sections
- `src/components/legal/` — reusable privacy and consent UI
- `src/components/` — small shared presentation components
- `src/content/` — editable site copy, navigation, package catalog, and solution-role content
- `src/config/` — centralized site-wide configuration such as contact and platform URLs
- `src/services/` — behavior outside presentation components, such as preparing demo inquiry emails
- `src/styles/` — global design tokens, shared styles, and responsive styling

### Architecture rules

1. Keep components focused on rendering and local interaction.
2. Keep reusable business behavior in services and pure functions where possible.
3. Keep marketing copy and catalog data outside UI components.
4. Centralize shared URLs and contact details in configuration.
5. Keep shared UI in reusable components; avoid duplicated layout behavior.
6. Preserve routes, responsive behavior, brand styling, accessibility, and deployment settings when refactoring.

## Deployment

The production build is generated in `dist/`. The GitHub `main` branch triggers the existing automated deployment workflow. Hostinger serves the production site on the custom domain; the GitHub Pages basename is retained for the repository preview.

## Product accuracy

Public copy should describe intended product workflows without unsupported claims about customer counts, uptime, revenue results, or integrations. Use only approved Web2Table imagery and brand assets.
