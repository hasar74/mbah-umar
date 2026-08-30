import { useEffect, useState } from "react";

const links = [
  { href: "#riwayat", label: "Riwayat" },
  { href: "#silsilah", label: "Silsilah" },
  { href: "#khalifah", label: "Khalifah" },
  { href: "#hikmah", label: "Hikmah" },
  { href: "#suluk-panji", label: "Suluk Panji" },
  { href: "#galeri", label: "Galeri" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-lg shadow-black/20" : "bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center font-display text-gold text-sm group-hover:bg-gold/10 transition-colors">
            م
          </span>
          <span className="font-display text-parchment text-lg tracking-wide">
            Mbah Umar Tali Woro
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-sans text-sm text-parchment/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Buka menu"
          aria-expanded={open}
          className="md:hidden text-parchment"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 font-sans text-sm text-parchment/85 bg-ink/95">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 border-b border-parchment/10 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
