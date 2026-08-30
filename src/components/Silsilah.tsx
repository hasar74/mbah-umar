import { guruSanad, thoriqohSilsilah } from "../data/content";

export default function Silsilah() {
  return (
    <section id="silsilah" className="bg-ink text-parchment py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="eyebrow mb-3">02&ndash;03 &middot; Silsilah Guru &amp; Sanad Keilmuan</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-6">
          Rantai yang Tak Terputus
        </h2>
        <p className="font-serif text-parchment/75 leading-relaxed max-w-2xl mb-14">
          Mbah Umar Taliworo merupakan murid dari Mbah Kyai Mas Haji Tuan
          Sholeh Gambiran, Pati. Berikut runtutan sanad keilmuan beliau,
          disusun layaknya tali yang menyambungkan satu guru ke guru
          berikutnya:
        </p>

        {/* Sanad guru langsung */}
        <ol className="mb-16">
          {guruSanad.map((nama, i) => (
            <li key={nama} className="tali-thread relative pl-9 pb-7 last:pb-0">
              <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-ink border border-gold flex items-center justify-center font-sans text-[0.7rem] text-gold-soft">
                {i + 1}
              </span>
              <span className="font-serif text-parchment/90">{nama}</span>
            </li>
          ))}
        </ol>

        <div className="border-t border-parchment/15 pt-14">
          <h3 className="font-display text-2xl mb-2">
            Silsilah Thoriqoh Naqsyabandiyah Kholidiyah Mujadiddiyah
          </h3>
          <p className="font-serif text-parchment/70 leading-relaxed max-w-2xl mb-10">
            Disusun menurun (top-down), mulai dari Allah SWT hingga kepada
            Mbah Umar Taliworo Klaling Kudus &mdash; 36 nama yang setiap
            satunya meneruskan sanad kepada nama berikutnya.
          </p>

          <ol className="grid sm:grid-cols-2 gap-x-10">
            {thoriqohSilsilah.map((nama, i) => {
              const isLast = i === thoriqohSilsilah.length - 1;
              return (
                <li
                  key={nama}
                  className={`tali-thread relative pl-9 pb-6 font-serif text-sm ${
                    isLast ? "text-gold-soft font-medium" : "text-parchment/80"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0.5 w-6 h-6 rounded-full flex items-center justify-center font-sans text-[0.65rem] border ${
                      isLast
                        ? "bg-gold text-ink border-gold"
                        : "bg-ink-light border-parchment/25 text-parchment/60"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {nama}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
