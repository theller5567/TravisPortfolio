# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Contact form (SendGrid)

The contact form submits to a Netlify serverless function that sends email via [SendGrid](https://sendgrid.com/).

**Netlify environment variables**

- `SENDGRID_API_KEY` (required) – API key from [SendGrid API Keys](https://app.sendgrid.com/settings/api_keys).
- `SENDGRID_FROM_EMAIL` (optional) – Sender address; must be a [verified single sender or domain](https://docs.sendgrid.com/ui/account-and-settings/sender-auth) in SendGrid. Defaults to `noreply@example.com` if unset.

Set these in **Netlify → Site configuration → Environment variables**. For each variable, set **Scopes** to include **Functions** (or **All**) so the serverless function can read them at runtime. Use `netlify dev` locally so the function and env vars work.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
