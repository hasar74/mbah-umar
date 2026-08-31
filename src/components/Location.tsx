export default function Location() {
  return (
    <section id="lokasi" className="bg-ink text-parchment py-24">
      <div className="max-w-4xl mx-auto px-5">
        <p className="eyebrow mb-3">09 &middot; Lokasi dan Tradisi Ziarah</p>
        <h2 className="font-display text-3xl sm:text-4xl mb-8">
          Taliworo, Klaling, Jekulo, Kudus
        </h2>

        <p className="font-serif text-parchment/80 leading-relaxed max-w-2xl mb-12">
          Mbah Umar Taliworo dikenal sebagai seorang ulama dan tokoh penyebar
          agama Islam yang makamnya berada di kawasan Taliworo, Klaling,
          Jekulo, wilayah Kabupaten Kudus, Jawa Tengah. Beliau dihormati oleh
          masyarakat setempat sebagai tokoh yang berjasa dalam dakwah Islam
          pada masanya.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="font-display text-xl text-gold-soft mb-4">
              Lokasi dan Ziarah
            </h3>
            <ul className="space-y-3 font-serif text-parchment/80 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-gold">&mdash;</span>
                Makam beliau sering dikunjungi oleh peziarah, baik dari
                masyarakat lokal maupun dari luar daerah.
              </li>
              <li className="flex gap-3">
                <span className="text-gold">&mdash;</span>
                Terletak di Dusun Jeploso, Desa Klaling, Kecamatan Jekulo,
                Kabupaten Kudus.
              </li>
              <li className="flex gap-3">
                <span className="text-gold">&mdash;</span>
                Menjadi salah satu tempat wisata religi yang dikenal di
                masyarakat sekitar.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-gold-soft mb-4">
              Tradisi Setempat
            </h3>
            <ul className="space-y-3 font-serif text-parchment/80 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-gold">&mdash;</span>
                Warga sekitar secara rutin datang untuk mendoakan beliau.
              </li>
              <li className="flex gap-3">
                <span className="text-gold">&mdash;</span>
                Acara haul atau peringatan kadang diadakan oleh warga setempat
                untuk mengenang jasa-jasa beliau.
              </li>
            </ul>
          </div>
        </div>

        {/* Peta lokasi */}
        <div className="rounded-sm overflow-hidden border border-parchment/15">
          <iframe
            title="Peta Lokasi Makam Mbah Umar Taliworo, Klaling, Jekulo, Kudus"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.85761330297!2d110.81330627161904!3d-6.786144407474618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70d1d8e867c9d3%3A0x2c74c8ca44d762fa!2sMaqbaroh%20Mbah%20Umar%20Taliworo!5e0!3m2!1sid!2sid!4v1788180450715!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">"
            className="w-full h-80 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        
          href="https://maps.app.goo.gl/AXdSBfxZB4VzgkW37"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-sm border border-gold/60 font-sans text-sm text-gold-soft hover:bg-gold/10 transition-colors"
        >
          Buka di Google Maps
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="font-serif italic text-parchment/50 text-xs mt-4">
          Sumber referensi tambahan mengenai lokasi ziarah dapat ditelusuri
          melalui pemberitaan media daring seputar makam-makam bersejarah di
          wilayah Kudus dan Jawa Tengah.
        </p>
      </div>
    </section>
  );
}
