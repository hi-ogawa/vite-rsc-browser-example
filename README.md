# Vite RSC Browser Example

An experimental example demonstrating React Server Components (RSC) running entirely in the browser using `@vitejs/plugin-rsc`.

## Getting Started

```sh
# development
pnpm dev

# production
pnpm build
pnpm preview
```

## Limitations

- Some RSC features (e.g. `React.cache`) relies on `AsyncLocalStorage`, which is not available in browsers.
- The build output `dist/client/__server` contains non-hashed files (`index.js`, `__vite_rsc_assets_manifest.js`).
- During development, rsc module runner on browser requests `/@vite/invoke-rsc?...` and it's likely slow.

## Related 

- [vite-plugin-react PR #933](https://github.com/vitejs/vite-plugin-react/pull/933)
- [react-router-templates PR #142](https://github.com/remix-run/react-router-templates/pull/142)
