export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-12 pb-6">
      <div className="card px-6 py-8 card-hover">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="uppercase tracking-widest text-xs text-zinc-500">Portfolio</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
              Hello, I’m <span className="accent-grad">Sahib</span>
            </h1>
            <p className="mt-2 text-zinc-600">
              A multidisciplinary designer crafting clean, memorable logos.
            </p>
          </div>
          <nav className="flex gap-2">
            <a className="px-3 py-2 text-sm hairline rounded-xl hover:bg-zinc-50 focus-ring" href="#work">Work</a>
            <a className="px-3 py-2 text-sm hairline rounded-xl hover:bg-zinc-50 focus-ring" href="#about">About</a>
            <a className="px-3 py-2 text-sm hairline rounded-xl hover:bg-zinc-50 focus-ring" href="mailto:you@email.com">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}