// Seluruh data pada file ini diringkas dari naskah riwayat
// "Syekh Haji Muhammad Umar Klaling (Mbah Umar Tali Woro)".

export const guruSanad = [
  "Mbah Kyai Mas Haji Tuan Sholeh Gambiran, Pati",
  "Syekh Sulaiman Al-Quraimiy",
  "Syekh 'Abdullah Affandi",
  "Syekh Kholid al-Baghdadiy",
];

export const thoriqohSilsilah = [
  "Allah SWT",
  "Malaikat Jibril",
  "Nabi Muhammad SAW",
  "Saiyidina Abubakar Asshidiq",
  "Shahabat Salman Alfarisi",
  "Syeich Qosim Bin Muhammad",
  "Syeich Ja'far Shodiq",
  "Syeich Abu Yazid Al Bustomi",
  "Syeich Abu Hasan Al Khorkhoni",
  "Syeich Muhammad Yusuf Al Hamdani",
  "Syeich Abdul Kholiq Al Ghujdiwani",
  "Syeich Al 'Arif Wiwikri",
  "Syeich Ahmad Anjir Al Fagnawi",
  "Syeich 'Ali Al Romtoni",
  "Syeich Muhammad Babassamas As Samasi",
  "Syeich Amir Kulal",
  "Syeich Muhammad Bahauddin, Imam Thoriqoh",
  "Syeich 'Alauddin Al Atori",
  "Syeich Muhammad Yaqub al Jarkhi",
  "Syeich Abdullah Al Ukhri",
  "Syeich Muhammad Zahid",
  "Syeich Muhammad Darwis",
  "Syeich Khowajaki Al Amkani",
  "Syeich Ahmad Faruqi Asarohindi, Imam Robani Mujadid Al Fisani",
  "Syeich Muhammad Ma'sum",
  "Syeich Syaifuddin",
  "Syeich Muh Nur Al Badwani",
  "Syeich Habibullah Syamsudin Al Jan Janani",
  "Syeich Abdullah Addahlawi",
  "Syeich Maulana Cholid Al Bagdadi",
  "Syeich Abdullah Afandi Al Maki",
  "Syeich Sulaiman Afandi Qorimi",
  "Syeich Ismail Burusi",
  "Syeich Sulaiman Afandi Zuhdi Jabal Qubais",
  "K. Muhammad Sholeh Pati",
  "K. Muhammad Umar Taliworo Klaling Kudus",
];

export const muridKhalifah = [
  "Simbah Kyai Abdullah Kelaling",
  "Simbah Kyai Abdul Manan Bareng",
  "Simbah Kyai Haji Muhammad Thohir Tawung Tanjungsari",
  "Simbah Kyai Parta Palesan",
  "Simbah Kyai Syarif Bojonegoro",
  "Simbah Kyai Ibrohim Serumbung",
  "Simbah Kyai Adam Brankal",
  "Simbah Kyai Samsukan Guling",
  "Simbah Kyai Muhammad Hasan Ngadiyabolo",
  "Simbah Kyai Thoyyib Tawung",
  "Simbah Kyai Khamdani Kalirong, Kecamatan Grogol, Kabupaten Kediri (dekat makam Mbah Mursyad, kakek Mbah Kyai Hasan Besari Ponorogo)",
  "Simbah Kyai Ali Rahmat Kapas Nganjuk",
  "Simbah Kyai Markam Jatijajar Mbahrowo",
  "Simbah Kyai Tarnuji Kelaling",
  "Simbah Kyai Sulaiman Lebak Ayu Madiun",
  "Simbah Kyai Muhammad Jaiz Pingit",
  "Simbah Kyai Darkun Tumulus Sragen",
  "Simbah Kyai Supardi Saliyan Pati",
  "Simbah Kyai Abu Bahri Kebun Duren",
  "Simbah Kyai Abdullah Jatisari",
  "Simbah Kyai Muhammad Hasan Marwi Candi Gempur",
  "Simbah Kyai Fatawi Ngasinan Kentung Ngawi",
  "Simbah Kyai Tamim Nambangan Gesi Sragen",
  "Simbah Kyai Musa Srumbung",
  "Simbah Kyai Muraib Klepu Pingit",
  "Simbah Kyai Qurtubi Tegal Jualan",
  "Simbah Kyai Hasan Marhaban Bandang, Purwodadi",
  "Simbah Kyai Sulaiman Jati Kradenan",
  "Simbah Kyai Saridho Bonang, Lasem, Rembang",
];

export type SambunganSanad = {
  jalur: string;
  isi: string;
};

export const sambunganSanad: SambunganSanad[] = [
  {
    jalur: "Jalur Mbah Kyai Imam Fatawi Ngasinan",
    isi: "Mbah Kyai Imam Fatawi Ngasinan Gentong Paron, Ngawi, Jawa Timur, memiliki murid Kyai Imam Mas'udi. Kyai Imam Mas'udi memiliki murid KH Ahmad Sa'id, yang kemudian memiliki murid sekaligus putra bernama Kyai Muhammad Muslih bin KH Ahmad Sa'id.",
  },
  {
    jalur: "Jalur Mbah Kyai Hasan Marhaban Bandang",
    isi: "Mbah Kyai Hasan Marhaban Bandang, Wirosari, Grobogan, Purwodadi, memiliki murid Simbah Kyai Ahmad Samingun. Kyai Ahmad Samingun memiliki murid Simbah Kyai Muhammad Djuwadi (Abdul Jabar), yang memiliki anak sekaligus murid, Gus Ahmad Yasin.",
  },
  {
    jalur: "Jalur Mbah Saridlo Basthul Barri Bonang, Lasem",
    isi: "Memiliki banyak murid, di antaranya Mbah Anwar (ayah dari Mbah Shobib), Mbah Ma'ruf Ceglik Japan Colo Kudus, Mbah Sabuni dan adiknya Mbah Surat(no), Mbah KH Achmad Dachlan Bolo Agung Kayen Pati, serta Mbah Umar Sidin Lengkong Batangan Pati. Dari jalur ini sanad kemudian bercabang lagi kepada KH 'Ali Munadi, Kyai Ismail Al Arif Gringging Dawe Kudus, hingga KH Achmad Hanafi Hanan dan Gus Kyai Wildan Bulung Kulon, Jekulo, Kudus; serta kepada Mbah Kyai Soetarto Gambiran Pati dan KH Noor Affandi Slagi, Bangsri, Jepara.",
  },
  {
    jalur: "Jalur Simbah Kyai Sulaiman Lebak Ayu Madiun",
    isi: "Dikenal pula sebagai K. Muhammad Sulaiman, Lebakayu, Sawahan, Madiun. Sanad beliau bercabang melalui dua murid: Syekh Muhammad Sholeh (bersambung hingga Gus Thohir, Kyai Dimyati, Kyai Hadi Sumarno, Gus Mudhir, Mbah Kyai Kholil Imam Nawawi, hingga Syekh Fajar Rohman Pondok Ibadurrohman), dan K. Hasan As'ari Sawahan Madiun, yang muridnya KH Abdul Wahab mendirikan Pondok Pesantren Ahlul Muqorrobin, Pleset, Pangkur, Ngawi.",
  },
];

export const hikmah = [
  {
    arab: "اِخْتِلَافُ أُمَّتِيْ رَحْمَة",
    arti: "Perbedaan umatku adalah rahmat.",
  },
  {
    arab: "اِخْتِلَافُ أُمَّتِيْ رَاحَةٌ",
    arti: "Perbedaan umatku adalah kelonggaran.",
  },
];

export const sulukPanji = {
  pengantar:
    "Suluk Panji adalah salah satu karya Mbah Umar Taliworo yang membahas ilmu syariat, tasawuf, dan ma'rifat. Kitab ini disusun dalam bentuk tembang macapat, tradisi sastra Jawa kuno yang memadukan keindahan bahasa dengan kedalaman makna hidup manusia. Melalui rangkaian pupuh (sub-bab), kitab ini menggambarkan perjalanan hidup manusia secara utuh, mulai dari masa muda, proses kelahiran diri, bimbingan hidup, ketertarikan pada lawan jenis, ujian nafsu, hingga kesadaran akan kefanaan dan kembalinya manusia kepada asalnya.",
  alurTembang:
    "Kitab diawali dengan tembang Sinom yang melambangkan masa muda penuh semangat, kemudian berlanjut melalui Dandanggula, Mijil, dan Kinanthi yang berulang sebagai simbol harapan, kelahiran, dan bimbingan hidup. Pada pupuh Asmorodono, kitab menandai fase ketertarikan terhadap lawan jenis sebagai bagian alami perjalanan manusia. Perjalanan kemudian memasuki Durmo yang menggambarkan ujian nafsu, sebelum akhirnya ditutup dengan Maskumambang, tembang yang sarat renungan tentang kefanaan dan kematian.",
  keteranganFisik: [
    "Judul asli pada sampul kitab tidak dapat dipastikan lagi (lupa/tidak terbaca), sehingga kitab ini lebih dikenal dan disebut dengan nama Suluk Panji.",
    "Sampul kitab asli terbuat dari bahan kulit.",
    "Menurut keterangan Mbah Affandi Jepara, naskah kitab ditulis menggunakan biting aren, yaitu lidi atau bilah dari pohon aren yang diruncingkan dan digunakan sebagai alat tulis tradisional.",
  ],
  penutup:
    "Sebagai naskah yang lahir dari kesederhanaan alat tulis namun kaya akan kedalaman makna, Suluk Panji menjadi warisan budaya sekaligus tuntunan spiritual yang mengajak pembacanya untuk mengenal diri dan mengenal Tuhannya.",
};

export const daftarPupuh = [
  "Sinom",
  "Dandanggula",
  "Mijil",
  "Kinanthi",
  "Blabak",
  "Badayan",
  "Dandanggula",
  "Kinanthi",
  "Dandanggula",
  "Asmorodono",
  "Dandanggula",
  "Durmo",
  "Dandanggula",
  "Kinanthi",
  "Mijil",
  "Maskumambang",
  "Dandanggula",
  "Kinanthi",
];

export const sulukPanjiFoto = [
  {
    src: "images/suluk-panji-halaman-1.jpeg",
    caption: "Naskah Suluk Panji, halaman pembuka",
  },
  {
    src: "images/suluk-panji-halaman-2.jpeg",
    caption: "Naskah Suluk Panji, ditulis dengan aksara Pegon",
  },
  {
    src: "images/suluk-panji-halaman-3.jpeg",
    caption: "Naskah Suluk Panji, salah satu halaman pupuh",
  },
];

export const galeri = [
  {
    src: "images/makam-mbah-umar.jpeg",
    caption: "Makam Mbah Umar Taliworo",
  },
  {
    src: "images/kompleks-makam.jpeg",
    caption: "Kawasan Komplek Makam",
  },
  {
    src: "images/makam-mbah-amongrogo.jpeg",
    caption: "Makam Mbah Buyut Suryo Dipokusumo Among Rogo",
  },
  {
    src: "images/makam-tampak-depan.jpeg",
    caption: "Makam Mbah Umar dan Mbah Amongrogo, tampak depan",
  },
];

export const silsilahFoto = [
  { src: "images/sanad-keilmuan.jpeg", caption: "Sanad Keilmuan Mbah Umar" },
  { src: "images/silsilah-tarekat-1.jpeg", caption: "Silsilah jalur Tarekat Naqsyabandiyah (1)" },
  { src: "images/silsilah-tarekat-2.jpeg", caption: "Silsilah jalur Tarekat Naqsyabandiyah (2)" },
];
