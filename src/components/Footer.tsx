export function Footer() {
  return (
    <footer className="py-10 mt-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
          © 2026 CodeWithBenjamin. Built with Next.js + Tailwind.
        </div>
        <div className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
          Designed with ♥ and too much coffee.
        </div>
      </div>
    </footer>
  );
}
