# DOKUMEN ARSITEKTUR & IMPLEMENTASI TAHAP 3 AURA GLOBAL DIGITAL WEB STUDIO

**URL Situs**: [https://auraglobal.my.id/](https://auraglobal.my.id/)  
**Brand**: AURA GLOBAL Digital Web Studio  
**Branch Utama**: `main` (tersinkronisasi dengan `origin/main` & `origin/redesign/navy-landing-v1`)  
**Status Implementasi**: **SELESAI (100% PRODUCTION-READY TAHAP 3)**  
**Verifikasi Browser CDP**: 25 dari 25 rute LULUS (0 console errors, 0 network errors, 0 broken assets)

---

## 1. Identitas Brand & Sistem Desain Terpadu (Navy Blue White)

Situs telah dimigrasikan sepenuhnya ke sistem desain modern bernuansa *editorial tech agency*:

- **Navy Utama**: `#0B1F3F` (Background gelap hero, kartu CTA, footer, teks judul berwibawa)
- **Navy Deep / Dark**: `#07152B` (Hover state, borders kontras)
- **Blue Accent**: `#1D6FE8` (Aksen interaktif, badge kategori, link aktif, highlight)
- **Blue Light**: `#EBF3FE` (Background pill, kartu sekunder, state hover terang)
- **Blue Border**: `#D0E3FC` (Batas kartu dan input interaktif)
- **Body Text**: `#5A6A85` (Teks paragraf dengan kontras tinggi dan mudah dibaca)
- **Muted Text**: `#64748B` (Keterangan sekunder dan metadata)
- **Surface Alt**: `#F3F6FA` (Background seksi berselang-seling)
- **Surface Bg**: `#FFFFFF` (Putih murni untuk keleluasaan whitespace)

### Aturan Baku yang Diterapkan:
1. **Zero External CDN Dependencies**: Seluruh gambar, logo SVG, favicon, mockup WebP, dan fotografi artikel Unsplash disimpan secara lokal di direktori `/assets/`.
2. **Zero Emoji**: Tidak ada emoji hiasan di seluruh teks, heading, badge, tombol, maupun footer. Seluruh indikator visual menggunakan SVG terukur.
3. **Data Provenance & Kredibilitas Transparan**:
   - Nomor WhatsApp Resmi: `+62 858-6151-0159` (`https://wa.me/6285861510159`).
   - Email Resmi: `info@auraglobal.my.id`.
   - Lokasi Terverifikasi: Majalengka, Jawa Barat, Indonesia.
   - Paket Harga Resmi:
     - **Basic**: Rp500.000 (Landing page 1 halaman ringkas)
     - **Starter**: Rp800.000 (Multi-halaman UMKM 3–4 halaman)
     - **Professional**: Rp1.200.000 (Website profil perusahaan terlengkap, paling populer)
     - **Premium**: Rp1.800.000+ (Katalog interaktif & fitur kustom)
   - Kebijakan Pembayaran: DP 50% di awal dan pelunasan 50% setelah website selesai diuji dan disetujui. Domain & hosting termasuk pada tahun pertama.
4. **Zero Mentions of Hosting Provider (Vercel)**: Dilarang menyebut kata "Vercel" di seluruh teks publik, FAQ, atau metadata. Menggunakan istilah umum seperti "cloud hosting berkecepatan tinggi".

---

## 2. Struktur Arsitektur Halaman (25+ Rute Aktif)

### A. Halaman Utama & Fitur Studio:
1. `/` — **Beranda (Landing Page)**:
   - Header sticky dengan navigasi penuh dan logo SVG tajam.
   - Hero editorial dengan Single Responsive H1 di DOM (tanpa duplikasi).
   - 4 Pilar Keunggulan Studio.
   - 4 Kartu Portofolio Pilihan (menghubungkan langsung ke `/portofolio/:slug/` tanpa badge "Contoh Desain").
   - 9 Layanan Studio (Grid 3x3 mencakup 3 layanan baru).
   - Testimoni netral (*"Gambaran pengalaman bekerja sama dengan AURA GLOBAL"*).
   - 3 Paket Investasi Transparan + Banner Proyek Kustom + Tabel Komparasi Fitur Lengkap.
   - 13 FAQ Komprehensif (termasuk Web App, IoT, dan Undangan Digital).
   - 3 Artikel Edukasi Terbaru dengan foto WebP asli.
   - Banner CTA Navy dan Footer.

2. `/portofolio/` & `/portfolio/` — **Galeri Portofolio & 8 Detail Proyek Standalone**:
   - `/portofolio/toko-serba-ada/` — Toko Online & Katalog WhatsApp
   - `/portofolio/segar-mart/` — Supermarket & Buah Segar
   - `/portofolio/villa-panorama/` — Penginapan Wisata & Booking
   - `/portofolio/sinar-jaya-motor/` — Showroom & Servis Otomotif
   - `/portofolio/rumah-sehat/` — Klinik Kesehatan & Jadwal Dokter
   - `/portofolio/danih-konstruksi/` — Jasa Kontraktor & Bangunan
   - `/portofolio/noire-cafe/` — Cafe & Restoran Modern
   - `/portofolio/velora-drive/` — Sewa Mobil & Transportasi
   - `/portofolio/citumang-rafting/` — Wisata Alam & Body Rafting

3. `/blog/` — **Blog Suite & 6 Artikel Panduan Mendalam (1.350 – 1.550 kata)**:
   - `/blog/mengapa-bisnis-perlu-website/`
   - `/blog/cara-mempercepat-website-di-smartphone/`
   - `/blog/persiapan-sebelum-membuat-website-bisnis/`
   - `/blog/faktor-biaya-pembuatan-website/`
   - `/blog/cara-memilih-domain-dan-hosting/`
   - `/blog/panduan-seo-dasar-umkm/`

4. `/layanan/` — **Halaman Induk Layanan & 3 Subpage Spesialisasi**:
   - `/layanan/aplikasi-web-sistem-informasi/` — Laravel / PHP Custom Systems
   - `/layanan/jasa-iot-arduino-esp/` — IoT Arduino / ESP32 Hardware & Web Monitoring
   - `/layanan/undangan-digital-pernikahan/` — Mobile-First Wedding Invitations

5. `/undangan-digital/demo/` — **2 Demo Interaktif Undangan Digital**:
   - `/undangan-digital/demo/elegan/?to=Nama-Tamu` — Tema Elegan dengan Audio-on-click
   - `/undangan-digital/demo/minimalis/?to=Nama-Tamu` — Tema Minimalis Modern

6. `/estimasi/` — **Kalkulator Estimasi Biaya Interaktif**:
   - Simulasi harga berbasis `config/pricing.js` yang mendukung jenis kustom (Web App, IoT, Undangan Digital).

7. Halaman Pendukung:
   - `/harga/` — Rincian Paket Harga
   - `/tentang/` — Profil Studio & Nilai Kerja
   - `/kontak/` — Formulir & Kontak WhatsApp
   - `/jasa-pembuatan-website-majalengka/` — Landing Page SEO Lokal
   - `/panduan/` — Pusat Panduan & Edukasi UMKM
   - `/404.html` — Halaman Error 404 Branded

---

## 3. Hasil Pengujian Kualitas & Kinerja

- **Hasil Tes Otomatis (Headless Edge CDP)**:
  - 25 dari 25 rute berstatus **100% PASS** (HTTP 200).
  - 0 Network Errors (tidak ada aset hilang atau 404).
  - 0 Broken Internal Links (1.410 link terverifikasi mengarah ke file nyata).
  - 0 Console Errors (semua JavaScript dieksekusi bersih).
  - 100% Bebas kata terlarang "Vercel" di seluruh konten publik.
  - Vektor SVG `/assets/logo.svg` dan root favicon package lengkap (`favicon.ico`, `favicon.svg`, `favicon-48x48.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`).

---

## 4. Konfigurasi Deployment & SEO

- `robots.txt`: Mengizinkan perayapan bot mesin pencari ke seluruh direktori publik dan merujuk ke sitemap.
- `sitemap.xml`: Memuat seluruh URL resmi dengan prioritas terukur dan `lastmod: 2026-10-15`.
- `vercel.json`:
  ```json
  {
    "cleanUrls": true,
    "trailingSlash": true
  }
  ```
