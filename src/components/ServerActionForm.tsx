"use client";

import { useState } from "react";
import { greetUser } from "./actions";

export function ServerActionForm() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const result = await greetUser(name);
      setGreeting(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="not-prose rounded-lg border border-purple-300 bg-purple-50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-purple-900">
        Server Action Example
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-md border border-purple-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !name.trim()}
          className="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-700 disabled:bg-purple-300"
        >
          {loading ? "Greeting..." : "Get Server Greeting"}
        </button>
      </form>
      {greeting && (
        <div className="mt-4 rounded-md bg-white p-4">
          <p className="text-purple-900">{greeting}</p>
        </div>
      )}
      <p className="mt-4 text-sm text-purple-600">
        This form calls a{" "}
        <code className="rounded bg-white px-1 py-0.5">"use server"</code>{" "}
        action that runs server-side logic.
      </p>
    </div>
  );
}
