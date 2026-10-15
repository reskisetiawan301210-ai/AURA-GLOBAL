# DOKUMEN ARSITEKTUR & IMPLEMENTASI REDESIGN AURA GLOBAL DIGITAL WEB STUDIO

**URL Situs**: [https://auraglobal.my.id/](https://auraglobal.my.id/)  
**Brand**: AURA GLOBAL Digital Web Studio  
**Branch Utama**: `main` (tersinkronisasi dengan `origin/main` & `origin/redesign/navy-landing-v1`)  
**Status Implementasi**: **SELESAI (100% PRODUCTION-READY)**  
**Verifikasi Browser CDP**: 19 dari 19 rute LULUS (0 console errors, 0 network errors, 0 broken assets)

---

## 1. Identitas Brand & Sistem Desain Terpadu (Navy Blue White)

Situs telah dimigrasikan sepenuhnya dari skema warna lama ke sistem desain modern bernuansa *editorial tech agency*:

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
1. **Zero External Dependencies**: Menghapus seluruh aset dari `cdn.phototourl.com`. Seluruh gambar, logo, favicon, dan cover blog disimpan secara lokal di direktori `/assets/` (`logo.svg`, `favicon.svg`, `hero-mockup.png`, cover artikel SVG).
2. **Zero Emoji**: Tidak ada emoji hiasan (`✨`, `🚀`, dll.) di seluruh teks, heading, badge, tombol, maupun footer. Seluruh indikator visual menggunakan SVG terukur atau icon material yang terintegrasi.
3. **Data Provenance & Kejujuran Informasi**:
   - Nomor WhatsApp Resmi: `+62 858-6151-0159` (`https://wa.me/6285861510159`).
   - Email Resmi: `info@auraglobal.my.id`.
   - Lokasi Terverifikasi: Majalengka, Jawa Barat, Indonesia.
   - Paket Harga Resmi:
     - **Basic**: Rp500.000 (Landing page 1 halaman ringkas)
     - **Starter**: Rp800.000 (Multi-halaman UMKM 3–5 halaman)
     - **Professional**: Rp1.200.000 (Website profil perusahaan terlengkap, paling populer)
     - **Premium**: Rp1.800.000+ (Katalog interaktif & fitur kustom)
   - Kebijakan Pembayaran: DP 50% di awal dan pelunasan 50% setelah website selesai diuji dan siap tayang. Domain & hosting termasuk pada tahun pertama.

---

## 2. Struktur Arsitektur Halaman (19 Rute Aktif)

Semua halaman menggunakan navigasi standar responsif dengan logo SVG vektor dan footer 4-kolom yang seragam:

### Halaman Utama & Fitur Studio:
1. `/` — **Beranda (Landing Page Editorial)**:
   - Header sticky dengan navigasi penuh dan tombol WhatsApp.
   - Hero editorial dengan headline berimbang, mockup laptop+HP interaktif, dan statistik terverifikasi.
   - 4 Pilar Keunggulan Studio.
   - 4 Kartu Portofolio Pilihan dengan modal lightbox interaktif.
   - 4 Paket Investasi Transparan (Basic, Starter, Professional, Premium).
   - Seksi 7B: 3 Artikel Edukasi Terbaru dari Blog.
   - Banner CTA Navy dan Footer 4-kolom.

2. `/layanan/` — **Halaman Layanan & Solusi**:
   - Komparasi mendalam 5 lini layanan utama (Company Profile, Website UMKM, Toko Online, Landing Page Iklan, Redesign Web).

3. `/portofolio/` & `/portfolio/` — **Galeri Portofolio Lengkap**:
   - 8 proyek web terkurasi dengan filter kategori interaktif (*Semua, UMKM & Toko, Profil Perusahaan, Wisata & Jasa*).
   - Modal detail proyek dengan spesifikasi teknis dan tombol konsultasi WhatsApp proyek spesifik.

4. `/estimasi/` — **Kalkulator Estimasi Biaya Interaktif**:
   - 4 langkah pemilihan (Tipe Website, Jumlah Halaman, Fitur Tambahan, Kecepatan Pengerjaan).
   - Perhitungan matematis real-time berbasis `config/pricing.js`.
   - Tombol checkout otomatis menyusun ringkasan ke format pesan WhatsApp.

5. `/harga/` — **Paket Harga & Matriks Komparasi**:
   - Rincian 4 paket harga resmi.
   - Tabel perbandingan fasilitas 10 fitur.
   - FAQ seputar transparansi perpanjangan tahunan.

6. `/tentang/` — **Profil Studio & Prinsip Kerja**:
   - Nilai kerja studio, kepemilikan aset klien, kode semantik, dan arsitektur performa tinggi.

7. `/kontak/` — **Saluran Komunikasi**:
   - Form pesan tervalidasi yang langsung menyambung ke WhatsApp studio.
   - Detail jam operasional dan lokasi kantor Majalengka.

8. `/jasa-pembuatan-website-majalengka/` — **Landing Page SEO Lokal**:
   - Dioptimalkan untuk kata kunci lokal Majalengka & Kawasan Rebana Kertajati.
   - Dilengkapi Schema `LocalBusiness` terverifikasi.

9. `/404.html` — **Halaman Error Branded**:
   - Tampilan bersih dengan opsi navigasi kembali dan tombol bantuan WhatsApp.

### Blog & Insight Edukasi:
10. `/blog/` — **Arsip Artikel Blog**:
    - Grid artikel editorial dengan cover SVG lokal, estimasi waktu baca, dan tombol konsultasi.
11. `/blog/mengapa-bisnis-perlu-website/` — **Artikel 1**: Urgensi website bisnis sendiri.
12. `/blog/cara-mempercepat-website-di-smartphone/` — **Artikel 2**: Optimasi performa mobile.
13. `/blog/persiapan-sebelum-membuat-website-bisnis/` — **Artikel 3**: Panduan persiapan materi sebelum memesan website.

### Pusat Panduan & Edukasi:
14. `/panduan/` — **Indeks Panduan & Edukasi**:
    - Hub panduan strategi digital untuk UMKM.
15. `/panduan/berapa-harga-pembuatan-website-umkm/` — Panduan rincian biaya pembuatan website UMKM.
16. `/panduan/cara-memilih-jasa-pembuatan-website-bisnis/` — 6 cara memilih developer website terpercaya.
17. `/panduan/manfaat-website-bisnis-lokal-majalengka/` — 7 manfaat website untuk bisnis di Majalengka.
18. `/panduan/perbedaan-landing-page-dan-company-profile/` — Komparasi detail landing page vs company profile.

---

## 3. Hasil Pengujian Kualitas & Kinerja

- **Hasil Tes Otomatis (Headless Edge CDP)**:
  - 19 dari 19 rute berstatus **100% PASS**.
  - 0 Network Errors (tidak ada 404 pada CSS, JS, SVG, gambar, maupun font).
  - 0 Console Errors (semua skrip tereksekusi tanpa exception).
  - `#page-curtain` yang sempat menyebabkan tautan terintersepsi telah dibersihkan secara total.
  - Vektor SVG `/assets/logo.svg` dan `/assets/favicon.svg` tampil tajam di seluruh viewport (360px mobile hingga 1920px desktop).

---

## 4. Konfigurasi Deployment & SEO

- `robots.txt`: Mengizinkan perayapan bot mesin pencari ke seluruh direktori publik dan merujuk ke sitemap.
- `sitemap.xml`: Memuat seluruh 19 URL dengan prioritas terukur dan `lastmod: 2026-10-15`.
- `vercel.json`:
  ```json
  {
    "cleanUrls": true,
    "trailingSlash": true
  }
  ```
