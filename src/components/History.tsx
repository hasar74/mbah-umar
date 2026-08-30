const jalurZuhdi = [
  "Asy-Syekh Sulaiman az-Zuhdi → Syekh Sulaiman Al-Quraimy → Syekh 'Abdullah Arzinjani Affandi al-Makkiy → Maulana Syekh Khalid al-Baghdadiy.",
  "Asy-Syekh Sulaiman az-Zuhdi → Syekh Sulaiman Al-Quraimiy → Maulana Syekh Khalid al-Baghdadiy.",
  "Asy-Syekh Sulaiman az-Zuhdi → Syaikh Isma'il al-Barusy Simambur Minangkabaw al-Makkiy → Syekh Abdullah Arzinjani Affandi al-Makkiy → Maulana Syekh Khalid al-Baghdadiy.",
  "Asy-Syekh Sulaiman az-Zuhdi → Syekh Isma'il al-Barusiy Simambur Minangkabaw al-Makkiy → Syekh Sulaiman al-Quraimiy → Maulana Syekh Khalid al-Baghdadiy.",
  "Asy-Syekh Sulaiman az-Zuhdi → Syekh Isma'il al-Barusiy Simambur Minangkabaw al-Makkiy → Syekh Sulaiman al-Quraimiy → Syekh 'Abdullah ar-Zinjaniy Affandiy al-Makkiy → Maulana Syekh Khalid al-Baghdadiy.",
];

export default function History() {
  return (
    <section className="bg-ink-light text-parchment py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="eyebrow mb-3">06 &middot; Latar Belakang Sejarah</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-6">
          Dari Jabal Qubais ke Klaling
        </h2>

        <div className="space-y-5 font-serif text-parchment/80 leading-relaxed">
          <p>
            Dalam kitab <em>Majmu' Rasail</em> karya Syekh Sulaiman az-Zuhdi
            disebutkan bahwa asy-Syekh Sulaiman al-Quraimi merupakan murid
            langsung dari Maulana Syekh Khalid al-Baghdadiy, tokoh pendiri
            jalur al-Kholidiyyah (1779&ndash;1827).
          </p>
          <p>
            Maulana Syekh Khalid al-Baghdadiy mengangkat dan mengutus
            khalifahnya, 'Abdallah Al-Arzinjani &mdash; keturunan Kurdi/Turki
            dari Erzincan &mdash; untuk menyebarkan Tarekat Naqsyabandiyah
            Khalidiyah di Makkah. Beliau kemudian dikenal sebagai Syekh
            Abdullah al-Affandi al-Makki dan membangun zawiyah di Jabal Abu
            Qubais, tidak jauh dari Ka'bah.
          </p>
          <p>
            Syekh Abdullah Affandi mengangkat dua khalifah utama di Makkah:
            Syekh Sulaiman al-Qarimi (melanjutkan kepemimpinan di Jabal
            Qubais), dan Syekh Yahya al-Daghistani, yang kemudian mengangkat
            anaknya, Syekh Khalil Hamdi, penulis kitab <em>Irsyad
            Al-Raghibin</em> (Istanbul, 1307 H/1889&ndash;1890 M).
          </p>
        </div>

        <div className="mt-14 border-t border-parchment/15 pt-12">
          <p className="eyebrow mb-3">07 &middot; Lima Jalur Silsilah Sanad</p>
          <h3 className="font-display text-2xl mb-6">
            Jalur Sanad asy-Syekh Sulaiman az-Zuhdi
          </h3>
          <p className="font-serif text-parchment/70 leading-relaxed mb-8 max-w-2xl">
            Asy-Syekh Sulaiman az-Zuhdi tercatat memiliki lima varian jalur
            silsilah sanad yang bersambung hingga Maulana Syekh Khalid
            al-Baghdadiy:
          </p>

          <div className="grid gap-4">
            {jalurZuhdi.map((j, i) => (
              <div
                key={i}
                className="flex gap-4 bg-parchment/[0.04] border border-parchment/10 rounded-sm p-5"
              >
                <span className="font-display text-gold-soft text-xl flex-none">
                  {i + 1}
                </span>
                <p className="font-serif text-sm text-parchment/80 leading-relaxed">{j}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
