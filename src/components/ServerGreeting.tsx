export async function ServerGreeting() {
  // Simulate async data fetching on the server
  await new Promise((resolve) => setTimeout(resolve, 100));

  return (
    <div className="not-prose rounded-lg border border-green-300 bg-green-50 p-6 shadow-sm">
      <p className="text-sm text-green-700">
        Rendered at: {new Date().toISOString()}
      </p>
      <p className="mt-1 text-sm text-green-700">
        navigator.userAgent: <code>{navigator.userAgent}</code>
      </p>
    </div>
  );
}
