Tentu, ini draf dokumentasi `README.md` yang lengkap dan ramah untuk developer pemula, sesuai dengan permintaan Anda.

-----

# Jericobots - Katalog & Situs Perusahaan 🤖

Selamat datang di repositori Jericobots\! Ini adalah proyek situs web yang dibangun menggunakan Next.js dan Tailwind CSS, berfungsi sebagai katalog produk dan halaman utama untuk perusahaan teknologi fiktif, Jericobots, yang berfokus pada AI dan Robotika.

Dokumentasi ini dibuat untuk membantu developer, terutama pemula, memahami cara kerja, struktur kode, dan cara menjalankan aplikasi ini secara lokal.

## 📋 Daftar Isi

  - [✨ Overview Aplikasi](https://www.google.com/search?q=%23-overview-aplikasi)
  - [🛠️ Prasyarat & Instalasi](https://www.google.com/search?q=%23%EF%B8%8F-prasyarat--instalasi)
  - [🚀 Cara Penggunaan](https://www.google.com/search?q=%23-cara-penggunaan)
  - [📂 Struktur Kode](https://www.google.com/search?q=%23-struktur-kode)
  - [🤔 Troubleshooting Umum](https://www.google.com/search?q=%23-troubleshooting-umum)
  - [🗺️ Roadmap Pengembangan](https://www.google.com/search?q=%23%EF%B8%8F-roadmap-pengembangan)

-----

## ✨ Overview Aplikasi

**Jericobots** adalah sebuah situs web interaktif yang menampilkan profil perusahaan teknologi. Tujuannya adalah untuk:

1.  **Memamerkan Produk**: Menampilkan katalog produk unggulan di bidang AI, Robotika, dan Otomatisasi.
2.  **Membangun Citra**: Meningkatkan citra perusahaan sebagai pelopor teknologi industri.
3.  **Menarik Klien & Talenta**: Melalui studi kasus, blog, dan halaman karir.

Aplikasi ini sepenuhnya responsif dan dirancang dengan estetika modern yang cocok untuk industri teknologi B2B.

-----

## 🛠️ Prasyarat & Instalasi

Sebelum memulai, pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:

  * [Node.js](https://nodejs.org/) (v18.0 atau lebih baru)
  * [Bun](https://bun.sh/) (Digunakan sebagai package manager & runtime)
  * [Git](https://git-scm.com/)

### Langkah-langkah Instalasi

1.  **Clone Repositori**
    Buka terminal Anda dan jalankan perintah berikut:

    ```bash
    git clone https://<URL_REPOSITORI_ANDA>.git
    cd jericobots
    ```

2.  **Instal Dependensi**
    Proyek ini menggunakan `bun` sebagai *package manager*. Jalankan perintah:

    ```bash
    bun install
    ```

    Perintah ini akan membaca `package.json` dan menginstal semua paket yang dibutuhkan.

-----

## 🚀 Cara Penggunaan

Setelah instalasi selesai, Anda bisa menjalankan server pengembangan lokal.

1.  **Jalankan Server Development**

    ```bash
    bun run dev
    ```

2.  **Buka di Browser**
    Buka peramban Anda dan kunjungi [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000). Anda akan melihat halaman utama Jericobots.

Setiap perubahan yang Anda buat pada kode (misalnya di `src/app/page.tsx`) akan secara otomatis terlihat di peramban berkat fitur *Hot Reloading* dari Next.js.

-----

## 📂 Struktur Kode

Struktur folder proyek ini dirancang agar mudah dikelola dan diskalakan. Berikut adalah penjelasan direktori dan file utamanya:

```
jericobots/
├── .next/              # Direktori build (dihasilkan otomatis)
├── public/             # Aset statis seperti gambar & font
├── src/
│   ├── app/
│   │   ├── globals.css   # File CSS global
│   │   ├── layout.tsx    # Layout utama aplikasi (termasuk tag <html> dan <body>)
│   │   └── page.tsx      # Halaman utama aplikasi (/)
│   │
│   ├── components/
│   │   ├── sections/     # Komponen besar untuk setiap bagian halaman (Hero, Footer, dll.)
│   │   └── ui/           # Komponen UI kecil yang dapat digunakan kembali (Button, Card, dll.)
│   │
│   └── libs/
│       └── utils.ts      # Fungsi utilitas (contoh: fungsi 'cn' untuk menggabungkan class Tailwind)
│
├── package.json        # Daftar dependensi dan skrip proyek
├── tailwind.config.ts  # Konfigurasi Tailwind CSS
├── tsconfig.json       # Konfigurasi TypeScript & path aliases
└── netlify.toml        # Konfigurasi untuk deployment di Netlify (opsional)
```

### Penjelasan Fungsi Utama

  * **`src/app/page.tsx`**: Ini adalah pintu masuk utama halaman Anda. File ini mengimpor dan menyusun semua komponen dari `src/components/sections/` untuk membangun tampilan lengkap.
  * **`src/app/layout.tsx`**: File ini membungkus seluruh aplikasi. Di sinilah Anda mendefinisikan metadata global (seperti judul tab peramban), memuat font, dan mengatur struktur HTML dasar.
  * **Komponen di `src/components/sections/`**: Setiap file di sini (misalnya, `HeroSection.tsx`, `Footer.tsx`) mewakili satu bagian besar dari halaman. Memecah halaman menjadi komponen seperti ini membuatnya lebih mudah untuk dikelola.
  * **Komponen di `src/components/ui/`**: Berisi komponen-komponen UI dari `shadcn/ui` yang telah Anda kustomisasi. Komponen ini (seperti `Button` dan `Card`) digunakan di seluruh aplikasi untuk menjaga konsistensi visual.
  * **`libs/utils.ts`**: Berisi fungsi `cn` yang sangat berguna untuk menggabungkan *class name* secara kondisional di Tailwind CSS.

-----

## 🤔 Troubleshooting Umum

Berikut adalah beberapa masalah umum yang mungkin Anda hadapi dan cara mengatasinya:

1.  **Error: "Module not found: Can't resolve '@/libs/utils'"**

      * **Penyebab**: *Path alias* (`@/`) tidak terkonfigurasi dengan benar atau nama folder salah.
      * **Solusi**: Pastikan Anda memiliki direktori `src/libs` (bukan `src/lib`) dan `tsconfig.json` Anda berisi konfigurasi `paths` yang benar.

2.  **Judul Tab Browser Tidak Berubah**

      * **Penyebab**: Server *development* Next.js menggunakan *cache*.
      * **Solusi**: Hentikan server (`Ctrl + C`) dan jalankan kembali (`bun run dev`). Pastikan juga metadata hanya didefinisikan di `src/app/layout.tsx`.

3.  **Gaya Tailwind CSS Tidak Tampil**

      * **Penyebab**: Konfigurasi di `tailwind.config.ts` mungkin salah.
      * **Solusi**: Pastikan properti `content` di `tailwind.config.ts` sudah mencakup semua path file yang menggunakan class Tailwind (`./src/**/*.{js,ts,jsx,tsx,mdx}`).

-----

## 🗺️ Roadmap Pengembangan

Proyek ini memiliki banyak potensi untuk dikembangkan lebih lanjut. Berikut adalah beberapa ide untuk masa depan:

  * [ ] **Halaman Detail Produk**: Membuat halaman dinamis untuk setiap produk yang ada di katalog.
  * [ ] **Sistem Blog Penuh**: Mengintegrasikan CMS (seperti Sanity atau Contentful) atau menggunakan file Markdown untuk mengelola postingan blog.
  * [ ] **Formulir Kontak Fungsional**: Menghubungkan formulir "Jadwalkan Demo" dan "Kontak" ke layanan email atau *backend*.
  * [ ] **Mode Gelap (Dark Mode)**: Mengimplementasikan *toggle* untuk beralih antara tema terang dan gelap.
  * [ ] **Animasi & Interaktivitas**: Menambahkan lebih banyak animasi (misalnya dengan Framer Motion) untuk meningkatkan pengalaman pengguna.

-----

Terima kasih telah menggunakan proyek ini. Jangan ragu untuk berkontribusi\! ✨
