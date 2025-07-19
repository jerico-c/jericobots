# Jericobots - Website & Catalog 🤖

Selamat datang di repositori Jericobots! Ini adalah proyek situs web yang dibangun dengan Next.js dan Tailwind CSS, berfungsi sebagai katalog produk dan halaman utama untuk perusahaan teknologi fiksi, Jericobots, yang berfokus pada AI dan Robotika.

Dokumentasi ini dirancang untuk membantu pengembang, terutama pemula, memahami cara kerja aplikasi, struktur kodenya, dan cara menjalankannya secara lokal.

## 📋 Daftar Isi

  - [✨ Gambaran Umum Aplikasi](#gambaran-umum-aplikasi)
  - [🛠️ Prasyarat & Instalasi](#prasyarat--instalasi)
  - [🚀 Cara Menggunakan](#cara-menggunakan)
  - [📂 Struktur Kode](#struktur-kode)
  - [🤔 Pemecahan Masalah Umum](#pemecahan-masalah-umum)
  - [🗺️ Peta Jalan Pengembangan](#peta-jalan-pengembangan)

-----

<a id="gambaran-umum-aplikasi"></a>
## ✨ Gambaran Umum Aplikasi

**Jericobots** adalah situs web interaktif yang menampilkan profil perusahaan teknologi. Tujuannya adalah untuk:

1.  **Menampilkan Produk**: Menampilkan katalog produk unggulan dalam AI, Robotika, dan Otomasi.
2.  **Membangun Citra Merek**: Meningkatkan citra perusahaan sebagai pelopor dalam teknologi industri.
3.  **Menarik Klien & Talenta**: Melalui studi kasus, blog, dan halaman karir.

Aplikasi ini sepenuhnya responsif dan dirancang dengan estetika modern yang cocok untuk industri teknologi B2B. Semua tombol dan tautan navigasi di halaman ini sekarang berfungsi untuk mengarahkan pengguna ke bagian yang relevan di dalam halaman (dengan *smooth scroll*) atau ke tautan eksternal yang sesuai.

-----

<a id="prasyarat--instalasi"></a>
## 🛠️ Prasyarat & Instalasi

Sebelum memulai, pastikan Anda memiliki perangkat lunak berikut yang terinstal di komputer Anda:

  * [Node.js](https://nodejs.org/) (v18.0 atau lebih baru)
  * [Bun](https://bun.sh/) (Digunakan sebagai manajer paket & runtime)
  * [Git](https://git-scm.com/)

### Langkah-Langkah Instalasi

1.  **Kloning Repositori**
    Buka terminal Anda dan jalankan perintah berikut:

    ```bash
    git clone https://jerico-c/jericobots.git
    cd jericobots
    ```

2.  **Instal Dependensi**
    Proyek ini menggunakan `bun` sebagai manajer paketnya. Jalankan perintah:

    ```bash
    bun install
    ```

    Perintah ini akan membaca file `package.json` dan menginstal semua paket yang diperlukan.

-----

<a id="cara-menggunakan"></a>
## 🚀 Cara Menggunakan

Setelah instalasi selesai, Anda dapat menjalankan server pengembangan lokal.

1.  **Jalankan Server Pengembangan**

    ```bash
    bun run dev
    ```

2.  **Buka di Peramban**
    Buka peramban Anda dan navigasikan ke [http://localhost:3000](http://localhost:3000). Anda akan melihat halaman utama Jericobots.

Setiap perubahan yang Anda buat pada kode (misalnya, di `src/app/page.tsx`) akan secara otomatis tercermin di peramban, berkat fitur *Hot Reloading* Next.js. Tombol dan tautan navigasi di halaman utama telah diimplementasikan agar berfungsi, mengarahkan pengguna ke bagian halaman yang relevan atau ke tautan eksternal (misalnya, email atau media sosial) menggunakan `asChild` prop pada komponen `Button` untuk mempertahankan gaya dan semantik yang tepat.

-----

<a id="struktur-kode"></a>
## 📂 Struktur Kode

Struktur folder proyek dirancang agar mudah dikelola dan diskalakan. Berikut adalah penjelasan tentang direktori dan file utama:

````

jericobots/
├── .next/              \# Direktori build (dibuat secara otomatis)
├── public/             \# Aset statis seperti gambar & font
├── src/
│   ├── app/
│   │   ├── globals.css   \# File CSS global
│   │   ├── layout.tsx    \# Tata letak aplikasi utama (termasuk tag \<html\> dan \<body\>)
│   │   └── page.tsx      \# Halaman aplikasi utama (/)
│   │
│   ├── components/
│   │   ├── sections/     \# Komponen besar untuk setiap bagian halaman (Hero, Footer, dll.)
│   │   └── ui/           \# Komponen UI kecil yang dapat digunakan kembali (Button, Card, dll.)
│   │
│   └── libs/
│       └── utils.ts      \# Fungsi utilitas (misalnya, fungsi 'cn' untuk menggabungkan kelas Tailwind)
│
├── package.json        \# Daftar dependensi dan skrip proyek
├── tailwind.config.ts  \# Konfigurasi Tailwind CSS
├── tsconfig.json       \# Konfigurasi TypeScript & alias path
└── netlify.toml        \# Konfigurasi untuk deployment di Netlify (opsional)

```

### Fungsi File Utama

  * **`src/app/page.tsx`**: Ini adalah titik masuk utama untuk halaman utama Anda. File ini mengimpor dan mengatur semua komponen dari `src/components/sections/` untuk membangun tampilan lengkap. Sekarang, file ini juga mengimplementasikan fungsionalitas navigasi internal halaman dan tautan eksternal untuk tombol.
  * **`src/app/layout.tsx`**: File ini membungkus seluruh aplikasi. Di sinilah Anda mendefinisikan metadata global (seperti judul tab peramban), memuat font, dan mengatur struktur HTML dasar.
  * **Komponen di `src/components/sections/`**: Setiap file di sini (misalnya, `HeroSection.tsx`, `Footer.tsx`) mewakili bagian utama halaman. Memecah halaman seperti ini membuatnya lebih mudah dikelola.
  * **Komponen di `src/components/ui/`**: Berisi komponen UI dari `shadcn/ui` yang telah Anda sesuaikan. Komponen-komponen ini (seperti `Button` dan `Card`) digunakan di seluruh aplikasi untuk menjaga konsistensi visual. Komponen `Button` sekarang mendukung prop `asChild` untuk memungkinkan penggunaannya sebagai tautan (`<a>`) tanpa kehilangan styling tombol.
  * **`libs/utils.ts`**: Berisi fungsi utilitas `cn`, yang sangat membantu untuk menggabungkan nama kelas secara kondisional di Tailwind CSS.

-----

<a id="pemecahan-masalah-umum"></a>
## 🤔 Pemecahan Masalah Umum

Bagian ini akan ditambahkan jika ada masalah umum yang sering terjadi.

-----

<a id="peta-jalan-pengembangan"></a>
## 🗺️ Peta Jalan Pengembangan

Proyek ini memiliki banyak potensi untuk pengembangan di masa mendatang. Berikut adalah beberapa ide:

  * [ ] **Halaman Detail Produk**: Buat halaman dinamis untuk setiap produk dalam katalog.
  * [ ] **Sistem Blog Lengkap**: Integrasikan CMS (seperti Sanity atau Contentful) atau gunakan file Markdown untuk mengelola postingan blog.
  * [ ] **Formulir Kontak Fungsional**: Hubungkan formulir "Jadwalkan Demo" dan "Kontak" ke layanan email atau backend. (Saat ini menggunakan tautan `mailto:`)
  * [ ] **Mode Gelap**: Implementasikan sakelar untuk beralih antara tema terang dan gelap.
  * [ ] **Animasi & Interaktivitas**: Tambahkan lebih banyak animasi (misalnya, dengan Framer Motion) untuk meningkatkan pengalaman pengguna.
```
