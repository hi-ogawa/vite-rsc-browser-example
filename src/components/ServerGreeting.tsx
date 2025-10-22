export async function ServerGreeting() {
  // Simulate async data fetching on the server
  await new Promise((resolve) => setTimeout(resolve, 100));

  const greetings = [
    "Hello from the Server!",
    "Bonjour from the Server!",
    "Hola from the Server!",
    "Ciao from the Server!",
    "こんにちは from the Server!",
  ];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  const timestamp = new Date().toISOString();

  return (
    <div className="not-prose rounded-lg border border-green-300 bg-green-50 p-6 shadow-sm">
      <p className="mb-1 text-green-800">{randomGreeting}</p>
      <p className="text-sm text-green-700">Rendered at: {timestamp}</p>
      <h3 className="mt-4 text-green-900">
        Since this runs on browser, it can even access `window.navigator`
      </h3>
      <p className="mt-1 text-sm text-green-700">
        navigator.userAgent: <code>{navigator.userAgent}</code>
      </p>
    </div>
  );
}
