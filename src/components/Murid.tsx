import { muridKhalifah, sambunganSanad } from "../data/content";

export default function Murid() {
  return (
    <section id="khalifah" className="bg-parchment py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="eyebrow text-maroon/70 mb-3">04 &middot; Para Murid dan Khalifah</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
          29 Khalifah Penerus Ijazah
        </h2>
        <p className="font-serif text-ink/75 leading-relaxed max-w-2xl mb-10">
          Mbah Umar Taliworo Klaling memiliki banyak murid. Sebanyak 29 di
          antaranya tercatat menerima ijazah dan diangkat menjadi khalifah:
        </p>

        <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-20">
          {muridKhalifah.map((nama, i) => (
            <li key={nama} className="flex gap-3 font-serif text-ink/85 text-sm leading-relaxed">
              <span className="font-sans text-gold flex-none">{String(i + 1).padStart(2, "0")}</span>
              <span>{nama}</span>
            </li>
          ))}
        </ol>

        <div className="border-t border-ink/10 pt-14">
          <p className="eyebrow text-maroon/70 mb-3">05 &middot; Sambungan Sanad</p>
          <h3 className="font-display text-2xl text-ink mb-8">
            Dari Beberapa Murid, Bercabang ke Generasi Berikutnya
          </h3>

          <div className="space-y-8">
            {sambunganSanad.map((s) => (
              <div key={s.jalur} className="bg-ink/[0.03] border border-ink/10 rounded-sm p-6">
                <h4 className="font-display italic text-lg text-maroon mb-2">{s.jalur}</h4>
                <p className="font-serif text-ink/80 text-sm leading-relaxed">{s.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
