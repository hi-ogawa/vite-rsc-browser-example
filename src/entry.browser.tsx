import {
  createFromFetch,
  createFromReadableStream,
  createTemporaryReferenceSet,
  encodeReply,
  setServerCallback,
} from "@vitejs/plugin-rsc/browser";
import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  unstable_createCallServer as createCallServer,
  unstable_RSCHydratedRouter as RSCHydratedRouter,
  type unstable_RSCPayload as RSCServerPayload,
  type DataRouter,
} from "react-router";
import { loadEntryRsc } from "../browser-mode/runtime";

async function fetchRsc(request: Request): Promise<Response> {
  const entry: typeof import("./entry.rsc") = await loadEntryRsc();
  return entry.default.fetch(request);
}

async function main() {
  setServerCallback(
    createCallServer({
      createFromReadableStream,
      createTemporaryReferenceSet,
      encodeReply,
      fetch: fetchRsc,
    }),
  );

  const url = new URL(window.location.href);
  url.pathname = url.pathname + ".rsc";
  const payload = await createFromFetch<RSCServerPayload>(
    fetchRsc(new Request(url)),
  );

  startTransition(() => {
    createRoot(document).render(
      <StrictMode>
        <RSCHydratedRouter
          createFromReadableStream={createFromReadableStream}
          payload={payload}
          fetch={fetchRsc}
        />
      </StrictMode>,
    );
  });

  if (import.meta.hot) {
    import.meta.hot.on("rsc:update", () => {
      __reactRouterDataRouter.revalidate();
    });
  }
}

declare global {
  var __reactRouterDataRouter: DataRouter;
}

main();
