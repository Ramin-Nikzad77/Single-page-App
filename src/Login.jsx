import { useLocation, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from.pathname || "/checkout";
  function handleLogin() {
    onLogin();
    navigate(from, { replace: true });
  }
  return (
    <main className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-5 py-16">
      <section className="w-full max-w-md border-y border-ink/15 py-10 text-center sm:py-14">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">Welcome back</p>
        <h1 className="font-display text-4xl">A moment for you.</h1>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-muted">Sign in to continue to checkout.</p>
        <button onClick={handleLogin} className="mt-8 rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-moss">Login</button>
      </section>
    </main>
  );
}
