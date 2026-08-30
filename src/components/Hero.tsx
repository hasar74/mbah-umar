export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-end bg-ink text-parchment overflow-hidden"
    >
      {/* Foto latar makam, diredupkan agar teks tetap terbaca */}
      <img
        src="images/kompleks-makam.jpeg"
        alt="Kawasan komplek makam Mbah Umar Taliworo, Klaling, Jekulo, Kudus"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

      {/* Motif benang/tali tipis di sisi kanan — menautkan pada makna nama "Tali Woro" */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-16 top-24 bottom-24 w-px bg-rope-line opacity-70"
      />

      <div className="relative max-w-6xl mx-auto px-5 pb-20 pt-40 w-full">
        <p className="eyebrow mb-5">Klaling &middot; Jekulo &middot; Kudus &middot; Jawa Tengah</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.15] max-w-3xl">
          Syekh Haji Muhammad Umar Klaling
        </h1>
        <p className="font-display italic text-2xl sm:text-3xl text-gold-soft mt-3">
          Mbah Umar Tali Woro
        </p>
        <p className="font-serif text-parchment/80 max-w-xl mt-6 leading-relaxed">
          Pejuang dalam laskar Pangeran Diponegoro, sekaligus pengajar Tarekat
          Naqsyabandiyah Kholidiyah di Desa Klaling — yang sanad keilmuannya
          masih terus disambung dan diziarahi hingga hari ini.
        </p>

        <div className="flex flex-wrap gap-4 mt-9">
          <a
            href="#riwayat"
            className="px-6 py-3 rounded-sm bg-gold text-ink font-sans text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors"
          >
            Baca Riwayat Hidup
          </a>
          <a
            href="#lokasi"
            className="px-6 py-3 rounded-sm border border-parchment/30 font-sans text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
          >
            Lokasi Ziarah
          </a>
        </div>
      </div>
    </section>
  );
}
