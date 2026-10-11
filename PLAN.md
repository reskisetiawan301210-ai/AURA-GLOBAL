# PLAN REDESIGN TOTAL AURA GLOBAL (https://auraglobal.my.id/)
*Berdasarkan Sintesis 3 Gambar Referensi Desain Resmi & Data Riil Proyek*

---

## 1. Titik Pemulihan (Recovery Point)
- **Branch Aktif**: `redesign/aura-global`
- **Branch Backup**: `backup-before-redesign` (commit `c874c2d`)
- **Commit Baseline**: `7ad627d`
- **Strategi Rollback**: Jika diperlukan, dapat kembali ke branch backup atau commit baseline kapan saja:
  ```bash
  git checkout backup-before-redesign
  # atau
  git checkout main
  ```

---

## 2. Analisis & Sintesis 3 Gambar Referensi Desain

### A. Referensi 1: Hero Studio Ungu Lembut
- **Karakteristik Visual**: Latar lapang off-white / lavender lembut, headline display besar, badge kecil berakar studio di atas headline, dua CTA berdampingan (solid gelap/ungu + outline/sekunder), kartu melayang halus, dan gelombang transisi organik.
- **Penerapan AURA GLOBAL**:
  - Latar hero `hero-glow` dengan gradien radial lavender lembut `#F3EEFC` ke `#FAFAFC`.
  - Badge: `✨ DIGITAL WEB STUDIO • PEMBUATAN WEBSITE BISNIS & UMKM ✨`.
  - Headline editorial: *"Punya Usaha, Tapi Belum <span class="text-primary">Punya Website?</span>"*.
  - Dual CTA: Tombol utama solid Royal Purple (`#5300B7`) untuk Konsultasi WhatsApp + Tombol sekunder untuk Jelajahi Portofolio.
  - Mempertahankan visual karakter 3D memegang laptop (`assets/hero-illustration.png`) yang telah disetujui sebelumnya, diselaraskan dengan ambient glow ungu lembut.
  - Trust bar: Menghindari logo fiktif; diganti dengan deretan kategori bisnis nyata yang dilayani studio.

### B. Referensi 2: Portofolio Monokrom Editorial & Dark CTA Banner
- **Karakteristik Visual**: Judul portofolio besar di kiri dengan teks pendamping di kanan, tab filter kategori bergaris bawah (*underlined tabs*), grid 2 kolom dengan mockup browser besar dan bersih, caption berisi nama proyek, kategori, dan tombol panah ↗, serta pita CTA gelap sebelum footer.
- **Penerapan AURA GLOBAL**:
  - Header Portofolio: Judul *"Karya Terverifikasi &amp; Portofolio"* di kiri dan deskripsi naratif di kanan.
  - Tab Filter Kategori Interaktif: *Semua Proyek*, *Company Profile*, *Cafe &amp; Resto*, *Rental &amp; Travel*, *Wisata Alam*.
  - Grid 2 Kolom Mockup Browser: Menampilkan 4 proyek live yang 100% terverifikasi aktif (Danih Konstruksi, Noiré Café, Velora Drive, Citumang Rafting) dengan status jujur `Proyek Website` dan tombol *"Kunjungi Website ↗"*.
  - Lightbox Modal Interaktif: Zoom gambar, spesifikasi lengkap, navigasi keyboard (Esc/Panah), dan touch swipe.
  - Dark / Deep Purple Pre-Footer CTA Banner: *"Create Something Extraordinary Together!"* yang disesuaikan dalam Bahasa Indonesia: *"Siap Membawa Bisnis Anda Tampil Lebih Profesional di Internet?"*.

### C. Referensi 3: Layanan Kartu Ungu, Paket Harga, & Royal Purple Footer
- **Karakteristik Visual**: Kartu layanan dengan ikon ungu dan link *"Konsultasi Layanan Ini &rarr;"*, kartu harga 3-4 kolom dengan daftar fitur bercentang, serta footer penuh warna ungu (`#5300B7`) multi-kolom yang megah dan berwibawa.
- **Penerapan AURA GLOBAL**:
  - Layanan: 6 kartu layanan spesifik dengan ikon ungu, deskripsi padat, dan pemicu WhatsApp instan.
  - Harga: 4 paket transparan dari data riil proyek (Basic Rp350k, Starter Rp500k, Professional Rp800k [paling populer], Premium Rp1.2jt).
  - Footer: Berlatar **Royal Purple Penuh (`#5300B7`)** dengan 4 kolom terstruktur (Profil & Status Studio, Navigasi Cepat, Layanan, Kontak Resmi WhatsApp/Email) dan kontras teks putih berstandar WCAG AAA.

---

## 3. Inventarisasi & Klasifikasi Aset Portofolio (Section 7.1)

| Nama File / Aset | Status | Kategori Bisnis | Live URL (Hanya Proyek Asli) | Keterangan Verifikasi |
| :--- | :---: | :--- | :--- | :--- |
| `assets/portfolio-company.jpg` | **PROYEK ASLI** | Company Profile | `https://danieh-konstruksi.vercel.app` | Terverifikasi aktif di Vercel. PT/CV Danih Konstruksi. |
| `assets/portfolio-cafe.jpg` | **PROYEK ASLI** | Cafe & Resto | `https://noirecafe.vercel.app` | Terverifikasi aktif di Vercel. Noiré Café & Bistro. |
| `assets/portfolio-rental.jpg` | **PROYEK ASLI** | Rental & Travel | `https://veloradrive.vercel.app` | Terverifikasi aktif di Vercel. Velora Drive Executive Mobility. |
| `assets/portfolio-citumang.jpg` | **PROYEK ASLI** | Wisata & Outdoor | `https://citumangrafting.vercel.app` | Terverifikasi aktif di Vercel. Citumang Rafting Pangandaran. |
| `assets/hero-illustration.png` | **ASET BRAND HERO** | Visual Studio | - | Karakter 3D dengan laptop dan preview website sesuai arahan user. |
| Gambar Referensi Upload | **REFERENSI DESAIN** | Inovasi UI/UX | - | Acuan arah desain (bukan proyek nyata AURA GLOBAL, tidak diklaim sebagai karya klien). |
| Logo Klien Eksternal | **NONAKTIF** | - | - | Belum ada logo klien terverifikasi; bagian logo dinonaktifkan sesuai Aturan Keras 7.4. |

---

## 4. Arsitektur Data Portofolio Terpusat (`portfolio-data.js`)
Pemisahan data dan tampilan agar mudah dikelola oleh pemilik website:
- File `portfolio-data.js` menyimpan array `portfolioItems` dengan skema:
  - `id`, `title`, `slug`, `category`, `categoryKey`, `type` (`proyek_asli` / `konsep` / `draft`)
  - `badge`, `description`, `detailDescription`, `features`, `tech`, `url`, `image`, `imageAlt`
  - `published` (boolean), `featured` (boolean)
- File `brand-logos.js` disiapkan untuk logo klien masa depan (dalam keadaan nonaktif/kosong).
- Panduan pengelolaan lengkap didokumentasikan di `PORTFOLIO.md`.

---

## 5. Technical SEO & Schema Markup
- Canonical URL: `https://auraglobal.my.id/`
- Valid JSON-LD `@graph`:
  - `ProfessionalService` (AURA GLOBAL, WhatsApp, Email, URL, PriceRange Rp350k - Rp1.2jt)
  - `WebSite` (AURA GLOBAL)
  - `FAQPage` (8 tanya-jawab terverifikasi)
- Open Graph & Twitter Cards lengkap dengan `og:locale="id_ID"` dan `og:image`.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Aksesibilitas WCAG AA (kontras teks, focus visible, ARIA modal, alt text jujur).
