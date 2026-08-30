import { galeri, silsilahFoto } from "../data/content";

export default function Gallery() {
  return (
    <section id="galeri" className="bg-parchment py-24">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow text-maroon/70 mb-3">10 &middot; Galeri Foto</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-10">
          Jejak yang Terekam
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {galeri.map((g) => (
            <figure key={g.src} className="group overflow-hidden rounded-sm border border-ink/10">
              <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="font-sans text-xs text-ink/70 px-3 py-2 bg-ink/[0.03]">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="font-display text-xl text-ink mb-6">
          Dokumentasi Sanad &amp; Silsilah
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {silsilahFoto.map((g) => (
            <figure key={g.src} className="group overflow-hidden rounded-sm border border-ink/10">
              <div className="aspect-[3/4] overflow-hidden bg-ink/5">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="font-sans text-xs text-ink/70 px-3 py-2 bg-ink/[0.03]">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
