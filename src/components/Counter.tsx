"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="not-prose rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Interactive Counter (Client Component)
      </h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-2xl font-bold text-gray-900">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          +
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        This component uses{" "}
        <code className="rounded bg-gray-100 px-1 py-0.5">"use client"</code> to
        enable interactivity with React hooks.
      </p>
    </div>
  );
}
