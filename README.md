# Vite RSC Browser Example

A demo of running React Router RSC data mode entirely in the browser.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/hi-ogawa/vite-rsc-browser-example)

## Usage

```sh
# Development
pnpm dev

# Production build
pnpm build
pnpm preview
```

## How It Works

This is a variant of the "No SSR" pattern ([`@vitejs/plugin-rsc` example](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc/examples/no-ssr), [`react-router` template](https://github.com/remix-run/react-router-templates/pull/142)) where the `rsc` environment runs via a custom module runner in the browser instead of the default Node.js environment.

React Router RSC API's `fetch` override (e.g. `<RSCHydratedRouter fetch={fetchRsc} ... />`) allows redirecting all RSC requests to run in the browser instead of a server.

## Limitations

- Some RSC features (e.g., `React.cache`) rely on `AsyncLocalStorage`, which is not available in browsers.
- The build output `dist/client/__server` contains non-hashed files (`index.js`, `__vite_rsc_assets_manifest.js`).
- During development, the RSC module runner in the browser requests too much `/@vite/invoke-rsc?...`, which may be slow.

## Related

- [vite-plugin-react PR #933](https://github.com/vitejs/vite-plugin-react/pull/933)
- [react-router-templates PR #142](https://github.com/remix-run/react-router-templates/pull/142)
- https://bsky.app/profile/danabra.mov/post/3m3iei53v3c2k
