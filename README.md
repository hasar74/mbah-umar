# Mbah Umar Tali Woro — Website Riwayat & Silsilah

Website arsip riwayat hidup, silsilah keilmuan, dan lokasi ziarah
**Syekh Haji Muhammad Umar Klaling (Mbah Umar Tali Woro)** — pejuang laskar
Pangeran Diponegoro dan pengajar Tarekat Naqsyabandiyah Kholidiyah di Desa
Klaling, Kecamatan Jekulo, Kabupaten Kudus.

## Struktur Teknologi

| Komponen       | Pilihan             |
|----------------|----------------------|
| Bahasa         | TypeScript          |
| UI             | React 19            |
| Build tool     | Vite                |
| CSS            | Tailwind CSS        |
| Hosting        | GitHub Pages        |
| Repository     | GitHub              |
| Domain         | Bisa custom domain  |

**Kenapa Vite, bukan Next.js?** Karena hosting langsung di GitHub Pages, situs
statis (tanpa server Node.js yang berjalan terus) lebih sederhana dibangun
dengan Vite dibanding Next.js yang didesain untuk server-side rendering.

## Struktur Folder

```
mbah-umar/
│
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions: build & deploy otomatis ke Pages
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # navigasi + menu mobile
│   │   ├── Hero.tsx         # judul & pembuka
│   │   ├── About.tsx        # riwayat hidup & perjuangan
│   │   ├── Silsilah.tsx     # sanad guru & rantai thoriqoh (36 nama)
│   │   ├── Murid.tsx        # 29 khalifah & sambungan sanad
│   │   ├── History.tsx      # latar sejarah tarekat & 5 jalur az-Zuhdi
│   │   ├── Hikmah.tsx       # hikmah dan nasihat
│   │   ├── Gallery.tsx      # galeri foto makam & dokumen sanad
│   │   ├── Location.tsx     # lokasi & tradisi ziarah + peta
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── content.ts       # seluruh data teks (silsilah, murid, dll.)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public/
│   └── images/               # 7 foto dari dokumen sumber
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

> Catatan: struktur di atas menambahkan folder `src/data/` dan dua komponen
> tambahan (`Silsilah.tsx`, `Murid.tsx`, `Hikmah.tsx`) dibanding rencana awal,
> supaya isi silsilah yang sangat panjang (36 nama sanad thoriqoh + 29
> khalifah) tidak menumpuk semua dalam satu file `History.tsx`.

## Arsitektur Alur Kerja

```
Naskah riwayat (dokumen sumber)
        ↓
Konten disusun ke src/data/content.ts
        ↓
React + TypeScript (src/components/*.tsx)
        ↓
Vite build → npm run build
        ↓
dist/
        ↓
GitHub Repository
        ↓
GitHub Actions (.github/workflows/deploy.yml)
        ↓
GitHub Pages
        ↓
Website online
```

## Menjalankan di Lokal

```bash
npm install
npm run dev        # buka http://localhost:5173
```

## Build Produksi

```bash
npm run build       # hasil ada di folder dist/
npm run preview     # cek hasil build secara lokal
```

## Deploy ke GitHub Pages

Ada dua cara — pilih salah satu.

### Cara 1 — Otomatis lewat GitHub Actions (disarankan)

1. Buat repository baru di GitHub, misalnya bernama `mbah-umar`.
2. Push seluruh isi folder ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Website riwayat Mbah Umar Tali Woro"
   git branch -M main
   git remote add origin https://github.com/<username>/mbah-umar.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages → Build and deployment → Source**, pilih
   **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan otomatis build & deploy
   setiap kali ada push ke `main`.
5. Website akan tersedia di `https://<username>.github.io/mbah-umar/`.

### Cara 2 — Manual dengan `gh-pages`

```bash
npm run deploy
```

Perintah ini akan build lalu mempublikasikan folder `dist/` ke branch
`gh-pages`. Aktifkan GitHub Pages dari branch tersebut di **Settings → Pages**.

### Penting: `base` di `vite.config.ts`

```ts
export default defineConfig({
  plugins: [react()],
  base: '/mbah-umar/',
})
```

- Jika nama repository **berbeda**, ganti `/mbah-umar/` sesuai nama repo,
  contoh: `base: '/nama-repo-anda/'`.
- Jika website di-deploy ke **custom domain** (lihat bagian di bawah), ubah
  `base` menjadi `'/'`.

## Menggunakan Domain Sendiri (Custom Domain)

GitHub Pages mendukung custom domain secara gratis:

1. Tambahkan file `public/CNAME` berisi domain Anda, misalnya:
   ```
   mbahumartaliworo.com
   ```
2. Di pengaturan DNS domain, arahkan:
   - Untuk domain apex (`mbahumartaliworo.com`): buat **A record** ke IP
     GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
   - Untuk subdomain (`www` atau lainnya): buat **CNAME record** menunjuk ke
     `<username>.github.io`.
3. Di **Settings → Pages**, isi kolom *Custom domain* dengan domain Anda dan
   aktifkan **Enforce HTTPS**.
4. Ubah `base: '/'` di `vite.config.ts` karena domain sendiri melayani dari
   root, bukan dari sub-path repository.

## Tentang Backend/Database

Struktur di atas murni **front-end statis**. Jika ke depan dibutuhkan fitur
dinamis (misalnya buku tamu peziarah, formulir donasi, atau CMS agar konten
mudah diubah tanpa coding), GitHub Pages saja tidak cukup karena tidak
menjalankan server. Source code tetap bisa memakai GitHub, tetapi
backend/database perlu layanan terpisah, misalnya:

- **Database/Backend-as-a-Service:** Supabase, Firebase
- **Form handling tanpa backend sendiri:** Formspree, Getform
- **Serverless function:** Cloudflare Workers, Vercel Functions, Netlify
  Functions (front-end tetap di GitHub Pages, hanya endpoint API yang
  dipindah ke layanan ini)

## Kredit Konten

Seluruh teks riwayat, silsilah, dan foto pada situs ini diringkas dari
naskah dokumen sumber "Syekh Haji Muhammad Umar Klaling (Mbah Umar Tali
Woro)" yang diberikan pengguna.
