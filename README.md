# Find Your Line — Clean Launch Build

**Tagline:** Choose your line. Own your direction.

This is the clean React + Vite 6 + Cloudflare build for the Find Your Line founding pilot.

## Pricing

- $99 to start
- 11 monthly payments of $200
- Total program investment: $2,299

## Expected structure

```text
find-your-line-clean/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── vite.config.ts
├── wrangler.jsonc
├── public/
│   └── find-your-line-logo.png
└── src/
    ├── main.tsx
    └── styles.css
```

## Cloudflare

Build command:

```text
npm run build
```

Deploy command:

```text
npx wrangler deploy
```

The included `wrangler.jsonc` points Cloudflare static assets to `./dist`.

## Before accepting real customers

The application form is still a prototype. Connect it to a secure form/backend and complete privacy, billing, legal, and data-retention review before collecting real applicant data.
