import { Counter } from "../../components/Counter";
import { ServerGreeting } from "../../components/ServerGreeting";
import { ServerActionForm } from "../../components/ServerActionForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <article className="prose mx-auto">
        <h1>React Router RSC in Browser</h1>

        <h2>1. Server Component</h2>
        <ServerGreeting />

        <h2>2. Client Component</h2>
        <Counter />

        <h2>3. Server Actions</h2>
        <ServerActionForm />
      </article>
    </main>
  );
}
