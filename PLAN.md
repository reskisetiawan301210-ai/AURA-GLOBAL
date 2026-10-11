# PLAN REDESIGN TOTAL AURA GLOBAL (https://auraglobal.my.id/)

## 1. Titik Pemulihan (Recovery Point)
- **Git Branch Backup**: `backup-before-redesign` dibuat pada commit `c874c2d`.
- **Status Git Awal**: Clean working tree.
- **Strategi Rollback**: Jika diperlukan pemulihan, jalankan `git checkout backup-before-redesign` atau `git reset --hard c874c2d`.

---

## 2. Arah Visual & Konsep Komposisi
- **Konsep**: *Boutique Digital Web Studio* bertaraf premium dengan palet dominan Putih Bersih (Off-White) & Aksen Royal Purple `#5300B7`.
- **Karakter**: Bersih, berwibawa, modern, terpercaya, bukan sekadar landing page murah atau template generik.
- **Komposisi Editorial**:
  - Spacing lega berirama (kombinasi `py-20` hingga `py-32` dengan kontras background halus antar-section).
  - Browser mockup realistis untuk portfolio showcase dengan badge & indikator status proyek.
  - Micro-interactions halus (hover card elevation, subtle gradient glow, smooth transitions).
  - Floating WhatsApp Quick Action di mobile & desktop tanpa mengganggu konten utama.

---

## 3. Sistem Desain (Design System Tokens)

### A. Palet Warna (Color Palette)
- **Primary Brand**: `#5300B7` (Royal Purple - tombol utama, aksen penting, logo).
- **Primary Container / Hover**: `#430094` (Darker royal purple untuk state hover).
- **Primary Tint / Soft**: `#F3EEFC` / `#EBDEFF` (Latar badge, highlight tagar).
- **Neutral Surface Lowest**: `#FFFFFF` (Kartu utama, kontras tinggi).
- **Neutral Background**: `#FAFAFC` (Latar dasar nyaman di mata, bukan putih silau mentah).
- **Neutral Surface Low**: `#F3F2F7` (Latar section kontras lembut).
- **Neutral Border**: `#E6E1F0` / `rgba(83, 0, 183, 0.12)` (Garis halus berkarakter).
- **Text Headings / Display**: `#0F0C20` (Gelap pekat berwibawa, WCAG AAA).
- **Text Body / Secondary**: `#4A455A` (Abu-abu netral hangat, sangat mudah dibaca, WCAG AA).
- **Text Muted**: `#726D82` (Keterangan sekunder, metadata).

### B. Tipografi (Typography)
- **Font Display / Headings**: `Plus Jakarta Sans`, font-weight 700 & 800, tracking-tight, fluid clamp font size.
- **Font Body**: `Plus Jakarta Sans`, font-weight 400 & 500, line-height 1.6 - 1.75, batas lebar baris maks 65 karakter.
- **Font Label / Monospace / Badges**: `Plus Jakarta Sans`, font-weight 600 - 700, uppercase letter-spacing 0.05em - 0.15em.

### C. Elemen UI & Komponen
- **Header & Navbar**:
  - Sticky dengan blur glassmorphism (`backdrop-blur-md bg-white/85 border-b border-purple-100/60`).
  - Brand identity: Logo icon + `AURA GLOBAL` + badge `DIGITAL WEB STUDIO`.
  - Link navigasi dengan active/hover indicator ungu.
  - CTA WhatsApp langsung di header.
  - Mobile drawer menu terstruktur rapi.
- **Tombol (Buttons)**:
  - Primer: Solid `#5300B7` + hover lift effect + shadow halus.
  - Sekunder: Soft purple `#F3EEFC` + border halus + text `#5300B7`.
  - Outline: Border `#5300B7` + transparent background.
  - Ukuran touch target min 44px di mobile.
- **Kartu (Cards)**:
  - Sudut rounded halus (`rounded-2xl` & `rounded-3xl`).
  - Border tipis (`border border-[#E6E1F0]`).
  - Subtle layered shadow (`shadow-[0_4px_20px_rgba(83,0,183,0.04)]` yang naik saat hover).
- **Mockup Showcase Browser**:
  - Top bar browser dengan 3 window control dots, URL bar clean, dan gambar 16:10 aspect ratio.

---

## 4. Struktur Halaman & Hierarki Konten (Berdasarkan Konten Riil)

1. **Header & Navigation**: Logo AURA GLOBAL, nav links (Home, Layanan, Portofolio, Alur Kerja, Harga, FAQ, Kontak), tombol WhatsApp CTA.
2. **Hero Section (Two-Column Editorial)**:
   - Kiri: Badge status studio, headline tajam & berorientasi hasil, deskripsi solutif, CTA Konsultasi WhatsApp + CTA Lihat Portofolio, 3 pilar utama (Desain Custom, 100% Responsif, Integrasi WhatsApp).
   - Kanan: Ilustrasi 3D karakter memegang laptop dengan preview website & subtle ambient purple glow.
   - Bawah Hero: Trust bar kategori bisnis riil yang dilayani.
3. **Nilai & Filosofi (Value Proposition)**:
   - Statement terarah tentang transformasi digital bisnis.
   - 4 pilar keunggulan AURA GLOBAL: Kredibilitas Profesional, Kemudahan Ditemukan, Informasi Terstruktur, Konversi WhatsApp Terarah.
4. **Portofolio Terverifikasi (Featured Showcase)**:
   - Menampilkan **4 proyek riil yang 100% terverifikasi aktif**:
     1. **Danih Konstruksi** (`https://danieh-konstruksi.vercel.app`) - Company Profile & Sewa Alat Berat
     2. **Noiré Café** (`https://noirecafe.vercel.app`) - Specialty Coffee & Culinary Experience
     3. **Velora Drive** (`https://veloradrive.vercel.app`) - Executive Mobility & Rental Mobil
     4. **Citumang Rafting** (`https://citumangrafting.vercel.app`) - Wisata Alam & Body Rafting Pangandaran
   - Mockup browser responsif, deskripsi peranan & fitur, tombol "Lihat Live Demo" (buka tab baru `rel="noopener noreferrer"`), tombol "Detail Proyek" (modal interaktif).
5. **Layanan Spesifik (Services Overview)**:
   - Company Profile Website
   - UMKM & Local Business Website
   - Online Catalog & Menu Digital
   - Landing Page Konversi
   - Website Redesign & Modernisasi
   - Custom Business Solution
6. **Alur Kerja Transparan (Transparent Process)**:
   - 6 langkah nyata:
     1. Konsultasi Gratis & Identifikasi Kebutuhan
     2. Perencanaan Konsep & Arah Desain
     3. Persetujuan Konsep Desain
     4. Pembayaran DP 50%
     5. Pengembangan Website & Penyesuaian
     6. Pelunasan 50% & Publikasi Online
7. **Paket Harga Transparan (Transparent Pricing)**:
   - Harga valid: Mulai dari Rp350.000
   - Paket Basic: Rp350.000 (Landing Page ringkas, domain request klien, hosting modern, integrasi WA)
   - Paket Starter: Rp500.000 (Multi-halaman dasar, domain request klien, hosting standard)
   - Paket Professional: Rp800.000 (Desain kustomisasi penuh, domain request klien, hosting premium, SEO dasar) — *Most Popular*
   - Paket Premium: Rp1.200.000 (Katalog produk interaktif, hosting prioritas, support eksklusif 1 bulan)
   - Tombol pesan WhatsApp terisi otomatis per paket.
8. **Pertanyaan yang Sering Diajukan (FAQ Komprehensif & Jujur)**:
   - Memperbaiki duplikasi jawaban yang ada sebelumnya dengan 8 jawaban konkret mengenai biaya, DP 50%, domain/hosting, proses revisi, durasi pengerjaan, dan konsultasi.
9. **Kontak & Konsultasi Langsung**:
   - Info kontak riil: WhatsApp `+62 858-6151-0159`, email `info@auraglobal.my.id`, link domain `https://auraglobal.my.id`.
   - Formulir pesan interaktif dengan opsi kirim langsung ke WhatsApp.
10. **Footer Studio**: Identitas AURA GLOBAL, navigasi cepat, kontak, dan hak cipta.
11. **Floating WhatsApp Button**: Tombol mengambang di kanan bawah yang nyaman digunakan di mobile tanpa menutupi konten.
12. **Modal Portofolio Interaktif**: Lightbox detail spesifikasi proyek dengan kontrol swipe mobile & keyboard accessibility.

---

## 5. Technical SEO & AI Search Architecture
- Canonical URL: `https://auraglobal.my.id/`
- Open Graph & Twitter Cards lengkap dengan `og:locale="id_ID"`, `og:site_name="AURA GLOBAL"`.
- Favicon & Apple Touch Icon.
- **JSON-LD Schema Markup Valid**:
  - `Organization` & `ProfessionalService` (AURA GLOBAL, logo, url, contactPoint, priceRange).
  - `WebSite` Schema.
  - `FAQPage` Schema (8 tanya-jawab riil).
  - `OfferCatalog` / `Service` Schema untuk paket pembuatan website.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Target WCAG AA pada semua teks dan kontrol interaktif.
