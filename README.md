# Portfolio

Source code for [sammcnab.co.uk](https://sammcnab.co.uk) - my professional portfolio and project website.

The site provides a concise overview of my work across healthcare simulation, immersive technologies, software development and clinical practice.

## Technology

The portfolio is built with:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

The project uses Node.js 24 and npm.

## Local development

Clone the repository:

```bash
git clone https://github.com/smcnab1/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:3000
```

## Quality checks

Run the main project checks with:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Additional dependency and dead-code checks can be run with:

```bash
npm audit
npx knip
```

## Deployment

The production site is deployed to Vercel and available at:

**https://sammcnab.co.uk**

## Issues and contributions

Bugs and improvement suggestions can be submitted through [GitHub Issues](https://github.com/smcnab1/portfolio/issues).

For contribution guidance, see [CONTRIBUTING.md](.github/CONTRIBUTING.md).

For potential security vulnerabilities, please follow the [Security Policy](.github/SECURITY.md) rather than opening a public issue.

## Licence

This project is licensed under the [MIT Licence](LICENSE.md).
