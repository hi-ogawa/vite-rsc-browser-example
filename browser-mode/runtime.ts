export async function loadEntryRsc() {
  return import("virtual:vite-rsc-browser-mode/load-rsc" as any);
}
