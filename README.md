# Quit Anything — Official Website

A responsive React + TypeScript website for Quit Anything, a personal habit-tracking app. Includes product pages, contact support, privacy and terms drafts, and data-deletion guidance.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Deployment

### Vercel

Import this repository into Vercel. Use the Vite preset, `npm run build` as the build command, and `dist` as the output directory. Add a rewrite so all paths serve `index.html` (Vercel's Vite framework preset generally handles SPA routing). Confirm the canonical domain and update `public/sitemap.xml` and `public/robots.txt` to match it.

### GitHub Pages

This project uses React Router's browser history routing. For GitHub Pages, configure the site at the repository path and set Vite's `base` to `/quit-anything-website/`; add a Pages-compatible SPA fallback (for example, deploy with a workflow that copies `dist/index.html` to `dist/404.html`). Update sitemap/robots URLs if the published domain or path differs. The current default `base: '/'` is suitable for a root-domain deployment such as Vercel; set the base to the repository path for project Pages.

## Before launch

- Verify all privacy and data handling statements against the Android app, SDKs, Play Console declarations, storage and backup behaviour.
- Obtain legal review of the Terms and Privacy Policy. Fill in the app operator's legal identity, applicable jurisdiction and required postal/contact details where required.
- Confirm app feature availability against the released version. Add the official Google Play URL when it is available; no store link is fabricated here.
- Replace the example GitHub Pages sitemap URLs with the actual production site URL and verify canonical metadata.

The contact form deliberately uses a `mailto:` handoff and does not transmit form data to a website backend.
