export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-parchment/10 text-parchment/60 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-parchment/80">
          Mbah Umar Tali Woro <span className="text-gold-soft">&middot;</span> Klaling, Jekulo, Kudus
        </p>
        <p className="font-sans text-xs text-center sm:text-right">
          &copy; {year}. Disusun sebagai arsip riwayat dan silsilah untuk
          menjaga sanad keilmuan tetap tersambung.
        </p>
      </div>
    </footer>
  );
}
