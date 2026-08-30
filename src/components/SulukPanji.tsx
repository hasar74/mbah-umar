import { sulukPanji, daftarPupuh, sulukPanjiFoto } from "../data/content";

export default function SulukPanji() {
  return (
    <section id="suluk-panji" className="bg-ink-light text-parchment py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="eyebrow mb-3">11 &middot; Karya Tulis</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-2">
          Kitab Suluk Panji
        </h2>
        <p className="font-display italic text-gold-soft mb-8">
          Karya Mbah Umar Taliworo
        </p>

        <div className="space-y-5 font-serif text-parchment/80 leading-relaxed max-w-2xl">
          <p>{sulukPanji.pengantar}</p>
          <p>{sulukPanji.alurTembang}</p>
        </div>

        {/* Daftar Pupuh */}
        <div className="mt-14">
          <h3 className="font-display text-xl mb-6">
            Daftar Pupuh (Sub-bab)
          </h3>
          <ol className="grid sm:grid-cols-3 gap-x-8 gap-y-3">
            {daftarPupuh.map((nama, i) => (
              <li
                key={`${nama}-${i}`}
                className="flex gap-3 font-serif text-sm text-parchment/80"
              >
                <span className="font-sans text-gold flex-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {nama}
              </li>
            ))}
          </ol>
        </div>

        {/* Keterangan Fisik Naskah */}
        <div className="mt-14 border-t border-parchment/15 pt-12">
          <h3 className="font-display text-xl mb-6">
            Keterangan Fisik Naskah
          </h3>
          <ul className="space-y-3 max-w-2xl">
            {sulukPanji.keteranganFisik.map((k, i) => (
              <li key={i} className="flex gap-3 font-serif text-sm text-parchment/80 leading-relaxed">
                <span className="text-gold">&mdash;</span>
                {k}
              </li>
            ))}
          </ul>
        </div>

        {/* Foto naskah */}
        <div className="mt-14 border-t border-parchment/15 pt-12">
          <h3 className="font-display text-xl mb-6">
            Dokumentasi Naskah
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {sulukPanjiFoto.map((g) => (
              <figure
                key={g.src}
                className="group overflow-hidden rounded-sm border border-parchment/15"
              >
                <div className="aspect-[3/4] overflow-hidden bg-parchment/5">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="font-sans text-xs text-parchment/70 px-3 py-2 bg-parchment/[0.04]">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <blockquote className="mt-14 border-l-2 border-gold pl-6 py-1 max-w-2xl">
          <p className="font-display italic text-lg text-parchment/90">
            {sulukPanji.penutup}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
