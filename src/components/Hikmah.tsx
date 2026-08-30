import { hikmah } from "../data/content";

export default function Hikmah() {
  return (
    <section id="hikmah" className="bg-maroon text-parchment py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="eyebrow text-parchment/70 mb-3">08 &middot; Hikmah dan Nasihat</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12">
          Kedekatan Murid dan Guru Mursyid
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {hikmah.map((h) => (
            <div key={h.arab} className="border border-parchment/20 rounded-sm p-8">
              <p dir="rtl" className="font-display text-3xl leading-loose mb-4">
                {h.arab}
              </p>
              <p className="font-serif italic text-parchment/80">&ldquo;{h.arti}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-left space-y-5 font-serif text-parchment/85 leading-relaxed">
          <p>
            Asy-Syekh Muhammad Amin bin Fathullah Zadah al-Kurdi al-Irbili,
            dalam kitabnya <em>Tanwir al-Qulub fi Mu'amalati 'Allami
            al-Ghuyub</em> (hal. 568), menuliskan bahwa kedekatan seorang
            murid dengan Syekh Mursyid bukanlah semata karena kedekatan
            pribadinya, dan bukan pula karena mencari sesuatu dari sosoknya
            secara zahir. Kedekatan itu dilandasi keyakinan bahwa segala
            kedudukan sang guru merupakan karunia Allah semata &mdash;
            diibaratkan seorang fakir yang berdiri di depan pintu rumah orang
            kaya, dengan keyakinan bahwa yang sesungguhnya memberi nikmat
            hanyalah Allah.
          </p>
          <p>
            Sudah semestinya bagi seorang murid untuk mengetahui silsilah
            gurunya. Sebab, apabila rantai sanad sang guru tidak bersambung
            hingga kepada Nabi Muhammad ﷺ, maka terputuslah aliran
            keberkahan tersebut &mdash; sehingga bai'at dan ijazah darinya
            tidak dapat diambil.
          </p>
        </div>
      </div>
    </section>
  );
}
