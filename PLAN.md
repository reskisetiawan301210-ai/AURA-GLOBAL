# PLAN REDESIGN VISUAL TOTAL (VERSI 2) AURA GLOBAL DIGITAL WEB STUDIO
**URL Situs**: [https://auraglobal.my.id/](https://auraglobal.my.id/)  
**Brand**: AURA GLOBAL Digital Web Studio  
**Branch Aktif**: `redesign/aura-global-v2`  
**Branch Cadangan**: `backup-v1-state` (status v1) & `backup-before-redesign` (status situs asli)  

---

## 1. Analisis Masalah Versi 1 & Sasaran Versi 2

### Masalah Nyata Versi 1:
1. **Layout Terkurung Kotak ("Website in a Box")**: Seluruh halaman dibungkus dalam canvas card dengan `max-w-[1440px]`, `rounded-[36px]`, `border`, `shadow`, dan margin luar di atas background gelap/tinted. Navbar dan hero ikut terjebak di tengah layar; ruang monitor besar terbuang sia-sia.
2. **Pemenggalan Headline Hero Buruk**: Pemenggalan baris tidak terencana (misalnya *"Kami Merancang & / Membangun / Website Bisnis Berdaya / Saing."*) dengan kata yatim *"Saing."* di baris bawah.
3. **Emoji & Badge Klaim Tanpa Bukti**: Penggunaan emoji (`✨`) pada badge dan klaim seperti *"Studio Aktif"*, *"Siap Menerima Proyek Baru"*, *"Respon Cepat"*, *"super cepat di smartphone"*.
4. **Mockup Proyek Buram & Menutup Konten**: Screenshot proyek tertutup lapisan hover/overlay gelap dan tombol "Lihat Detail Spesifikasi Proyek" menimpa gambar. Bilah alamat memuat label dekoratif *"Proyek Terverifikasi"*.
5. **Portofolio Terlalu Cepat Muncul**: Pengguna menggulir sedikit langsung melihat portofolio tanpa membangun pemahaman mengenai studio, nilai, proses, dan teknologi terlebih dahulu.
6. **Teks Salinan Referensi**: Teks seperti *"Bold Ideas, Stunning Results"* dan *"Create Something Extraordinary Together"* tersalin dari gambar referensi.
7. **Ketidaksesuaian Ejaan**: Ketidakjelasan nama proyek (misal Danih Konstruksi vs URL `danieh-konstruksi.vercel.app`).

### Sasaran Versi 2:
- **Layout Full-Width Sejati**: `html` dan `body` ber-margin 0. Latar belakang navbar, hero, tiap section, CTA banner, dan footer membentang penuh dari tepi kiri ke tepi kanan layar (gutter 0). Konten di dalam memakai kontainer fluid dengan padding `clamp(20px, 4vw, 72px)` dan `max-w-[1440px]` hingga `1520px`.
- **Hero Bersih & Berwibawa**: Headline terukur 2-3 baris dengan `text-wrap: balance`, tanpa kata yatim, deskripsi berbasis manfaat, dual CTA (WhatsApp + Portofolio), tanpa emoji, tanpa badge klaim tak berdasar. Visual showcase tajam, bersih tanpa overlay atau tombol yang menimpa screenshot.
- **Alur 12 Bagian Beranda yang Mendalam**: Total panjang halaman sekitar 9-12 viewport desktop; portofolio baru muncul setelah pengguna melewati 3-4 viewport pengenalan studio, nilai layanan, ragam solusi, alasan memilih, proses kerja, dan teknologi.
- **Enam Halaman Berbeda Karakter**: `/`, `/layanan/`, `/portfolio/`, `/harga/`, `/tentang/`, `/kontak/`, dan `404.html` dengan tata letak, fungsi, dan kedalaman narasi masing-masing.
- **Provenance 100% Terverifikasi**: Hanya menyajikan informasi yang terbukti dari kode situs asli.

---

## 2. Perbandingan Struktur: Website Asli vs Versi 1 vs Versi 2

| Parameter | Website Asli (Sebelum Redesign) | Versi 1 (Redesign Awal) | Versi 2 (Redesign Total Target) | Rationale / Alasan Perubahan |
| :--- | :--- | :--- | :--- | :--- |
| **Arsitektur Halaman** | Single-page landing page dengan scroll spy (#layanan, #harga, dll.) | Multi-page (6 halaman) tapi hero dan konten masih mirip landing page | Multi-page sejati (6 halaman mandiri) dengan kedalaman editorial unik di setiap halaman | Setiap halaman memiliki tujuan spesifik untuk calon klien (UMKM/perusahaan) dalam mengambil keputusan |
| **Layout & Kanvas** | Full-bleed standar tapi layout kartu generik | Terkurung dalam kotak sempit `max-w-[1440px]` ber-radius 36px di tengah layar | **Full-width edge-to-edge sejati**; latar setiap seksi menembus viewport; kontainer dalam fluid clamp | Menghilangkan kesan website di dalam kotak; memaksimalkan ruang layar 1280-2560px |
| **Hero Visual** | Gambar 3D karakter memegang laptop dengan preview melayang (`hero-illustration.png`) | Mockup browser kecil Danih Konstruksi di dalam kotak hero, tertimpa tombol hover | **Showcase visual tajam, jernih, tanpa overlay**, proporsional dalam layar pertama desktop | Menghilangkan estetika kartun 3D; menampilkan kualitas front-end nyata studio secara profesional |
| **Hero Headline** | *"Punya Usaha, Tapi Belum Punya Website?"* | *"Kami Merancang & Membangun Website Bisnis Berdaya Saing."* (pecah baris buruk) | Headline 2-3 baris seimbang dengan `text-wrap: balance`, tanpa kata yatim, tipografi editorial elegan | Menghilangkan pemecahan baris kaku dan kata yatim; pesan langsung fokus pada solusi bisnis klien |
| **Alur Konten Beranda** | Pendek (Hero &rarr; Keuntungan 4 kartu &rarr; Portofolio 3 kartu &rarr; Layanan &rarr; Alur &rarr; Harga &rarr; FAQ &rarr; Form) | Singkat (Hero &rarr; Trust Bar &rarr; Portofolio langsung muncul di layar ke-2) | **12 Bagian Terencana & Panjang**: Hero &rarr; Nilai &rarr; Studio &rarr; Layanan &rarr; Alasan &rarr; Proses &rarr; Teknologi &rarr; Portofolio &rarr; Harga &rarr; FAQ &rarr; CTA &rarr; Footer | Memberikan perjalanan konten menyeluruh bagi calon klien sebelum melihat portofolio (3-4 viewport awal) |
| **Data Harga & Ketentuan** | 4 Paket: Basic 350k, Starter 500k, Professional 800k, Premium 1.2jt; DP 50%; Domain termasuk | Menambahkan klaim jam operasional 08.00-21.00 dan asumsi garansi | **Murni bersumber dari situs asli**: 4 paket asli, DP 50%, domain termasuk, waktu 3-14 hari; tanpa klaim tambahan | Mematuhi aturan provenance: kejujuran fakta bisnis 100% |
| **Portofolio Showcase** | 3 kartu portofolio statis dengan link Vercel | 4 proyek terverifikasi dengan teks referensi *"Bold Ideas, Stunning Results"* | 4 proyek terverifikasi, teks editorial asli Indonesia, tanpa label fiktif, data terpusat di `portfolio-data.js` | Mengeliminasi teks salinan dari referensi asing; menjamin kredibilitas studio |
| **Formulir Kontak** | Form statis dengan alert javascript fiktif | Form statis yang belum terintegrasi | **WhatsApp Message Builder nyata**: menyusun data nama, bisnis, paket, pesan langsung ke format WhatsApp resmi | Menghilangkan fake alert; memberikan alur konversi nyata tanpa server backend |

---

## 3. Strategi Layout Full-Width yang Benar

1. **Root Elemen (`html`, `body`)**:
   - `margin: 0; padding: 0; width: 100%;`
   - `overflow-x: hidden;`
   - `background-color: #FFFFFF;` (tidak ada latar abu-abu/lavender yang membungkus tepi luar body).
2. **Section Wrappers**:
   - Seluruh `<header>`, `<section>`, dan `<footer>` memiliki lebar 100% (`w-full`), background membentang sampai ke tepi kiri dan kanan monitor (viewport edges).
   - Penggunaan background bervariasi: putih (`bg-white`), off-white / lavender sangat halus (`bg-[#FAF9FD]`), dark slate (`bg-[#0F0C20]`), dan Royal Purple (`bg-[#5300B7]`).
3. **Inner Container**:
   - Kontainer isi konten menggunakan class `w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16`.
   - Menggunakan fluid horizontal padding: `padding-left: clamp(1.25rem, 4vw, 4.5rem); padding-right: clamp(1.25rem, 4vw, 4.5rem);`.
4. **Verifikasi Terukur**:
   - `document.documentElement.scrollWidth === document.documentElement.clientWidth` pada resolusi 360, 390, 768, 1024, 1280, 1440, 1920, dan 2560 px.
   - Gutter kiri dan kanan pada background section = 0px.
   - 0 elemen wrapper terluar yang memiliki `border`, `border-radius`, atau `box-shadow` yang memenjarakan halaman.

---

## 4. Alur 12 Bagian Beranda (`/` — `index.html`)

1. **Bagian 1: Hero Utama**
   - Navbar sticky full-bleed, logo cincin AURA GLOBAL, tombol aksi *"Konsultasi via WhatsApp"*.
   - Headline editorial berbobot elegan, deskripsi manfaat bisnis, dual CTA pill.
   - Showcase visual bersih dari screenshot proyek web nyata tanpa overlay/tombol menutupi.
2. **Bagian 2: Ringkasan Nilai Layanan (Value Pillars)**
   - 4 pilar manfaat nyata: Tampilan Profesional, Responsif Multi-Perangkat, Kinerja Pemuatan Bersih, Jalur Komunikasi Langsung WhatsApp.
3. **Bagian 3: Pengenalan Studio (About / Studio Overview)**
   - Siapa AURA GLOBAL, pendekatan studio sebagai mitra pembuatan website bisnis lokal & UMKM. Tipografi editorial besar asimetris.
4. **Bagian 4: Layanan Unggulan (Core Services)**
   - Layanan web spesifik: Company Profile, Website Usaha Lokal, Katalog Digital, Landing Page, dan Peremajaan Web Lama. Tata letak bersusun/editorial.
5. **Bagian 5: Alasan Memilih AURA GLOBAL (Why Choose Us)**
   - 4 keunggulan berdasarkan data asli: Desain Sesuai Karakter Bisnis, Konsultasi Awal Mendalam, Arah Desain Sampai Disetujui, Fasilitas Domain Termasuk.
6. **Bagian 6: Alur Proses Pengerjaan (Workflow & Payment)**
   - 6 tahap terbukti dari situs asli: Konsultasi Awal &rarr; Diskusi Konsep &rarr; Persetujuan Arah Desain &rarr; Pembayaran DP 50% &rarr; Pengembangan Kode &rarr; Pelunasan 50% & Publikasi Online.
7. **Bagian 7: Teknologi & Pendekatan Pengembangan (Tech Stack)**
   - Tampilan visual arsitektur teknologi dengan 3 status terverifikasi (Digunakan pada website ini, Digunakan pada portofolio, Tersedia dalam layanan).
8. **Bagian 8: Portofolio Pilihan (Selected Case Exhibitions)**
   - Pameran proyek nyata: Danih Konstruksi (`danieh-konstruksi.vercel.app`) dan Noiré Café (`noirecafe.vercel.app`) dengan tata letak editorial besar dan tombol langsung ke halaman portofolio lengkap.
9. **Bagian 9: Ringkasan Paket Investasi (Pricing Overview)**
   - 4 paket harga asli (Basic 350k, Starter 500k, Professional 800k [Populer], Premium 1.2jt) dengan tautan ke halaman perbandingan `/harga/`.
10. **Bagian 10: Tanya Jawab Umum (FAQ Accordion)**
    - 6 pertanyaan paling relevan dari situs asli seputar sistem DP 50%, revisi, domain, mobile friendly, dan waktu pengerjaan 3-14 hari.
11. **Bagian 11: Pita Aksi Pre-Footer (Pre-Footer CTA)**
    - Ajakan konsultasi langsung ke WhatsApp studio dengan tombol aksi jelas.
12. **Bagian 12: Footer Lengkap Studio (Royal Purple Footer)**
    - Latar penuh Royal Purple (`#5300B7`), 4 kolom navigasi, legalitas brand, kontak WhatsApp/email, hak cipta 2026.

---

## 5. Rencana 6 Halaman Mandiri

- **`/` Beranda**: Alur 12 bagian di atas.
- **`/layanan/`**: Penjelasan mendalam tiap layanan: fungsi bisnis, deliverable, spesifikasi teknis, estimasi waktu, tombol konsultasi spesifik paket. Layout dua kolom dengan sticky sidebar index di desktop.
- **`/portfolio/`**: Header editorial asli Indonesia (*"Karya Pilihan & Portofolio Pengembangan Website"*), filter kategori bergaris bawah (*underlined tabs*), grid 2 kolom mockup tajam, lightbox modal interaktif (keyboard Esc/Panah, swipe mobile).
- **`/harga/`**: Penjelasan 4 paket asli, tabel komparasi 10 fasilitas mendalam, penjelasan alur DP 50% dan pelunasan, FAQ khusus biaya.
- **`/tentang/`**: Nilai studio, filosofi desain bersih, 6 prinsip kerja keras (kejujuran data, mobile-first, kode semantik, kepemilikan aset), dan transparansi teknologi.
- **`/kontak/`**: Saluran resmi WhatsApp dan email, serta **WhatsApp Message Builder** interaktif yang menyusun kebutuhan website klien secara rapi ke aplikasi WhatsApp.
- **`/404.html`**: Halaman error branded dengan tombol kembali ke beranda dan direktori tautan cepat.

---

## 6. Tabel Provenance Data Bisnis & Klaim

| Data / Klaim | Status | Sumber Asli | Keputusan di Versi 2 |
| :--- | :---: | :--- | :--- |
| **Nama Brand** | Terbukti | `backup-before-redesign:index.html` | AURA GLOBAL Digital Web Studio |
| **Domain Resmi** | Terbukti | `backup-before-redesign:index.html` | `https://auraglobal.my.id/` |
| **Nomor WhatsApp** | Terbukti | `backup-before-redesign:index.html` (baris 320) | `+62 858-6151-0159` (`6285861510159`) |
| **Alamat Email** | Terbukti | `backup-before-redesign:index.html` (baris 316) | `info@auraglobal.my.id` |
| **Harga Mulai Rp350.000** | Terbukti | `backup-before-redesign:index.html` (meta & pricing) | Dipertahankan sebagai batas bawah paket Basic |
| **Paket Basic (Rp350.000)** | Terbukti | `backup-before-redesign:index.html` (pricing section) | Dipertahankan (1 Halaman, Domain, Hosting, WA) |
| **Paket Starter (Rp500.000)** | Terbukti | `backup-before-redesign:index.html` (pricing section) | Dipertahankan (Multi-halaman Dasar, Domain, Hosting) |
| **Paket Professional (Rp800.000)** | Terbukti | `backup-before-redesign:index.html` (pricing section) | Dipertahankan (Desain Penuh, Hosting Premium, SEO Dasar) |
| **Paket Premium (Rp1.200.000)** | Terbukti | `backup-before-redesign:index.html` (pricing section) | Dipertahankan (Katalog Interaktif, Hosting Prioritas) |
| **Ketentuan DP 50%** | Terbukti | `backup-before-redesign:index.html` (tahap 04 & FAQ) | Dipertahankan sebagai syarat mulai coding |
| **Pelunasan 50% Akhir** | Terbukti | `backup-before-redesign:index.html` (tahap 06 & FAQ) | Dipertahankan sebelum penyerahan final |
| **Waktu Pengerjaan (3-14 Hari)** | Terbukti | `backup-before-redesign:index.html` (FAQ baris 280) | Dipertahankan sebagai rentang estimasi realistis |
| **Domain Termasuk 1 Tahun** | Terbukti | `backup-before-redesign:index.html` (pricing & FAQ) | Dipertahankan sesuai ketersediaan domain klien |
| **Jam Operasional (08.00-21.00)** | **TIDAK TERBUKTI** | Muncul pada v1 tanpa dasar | **DIHAPUS**. Diganti pernyataan netral saluran pesan. |
| **Klaim "super cepat di smartphone"** | **HIPERBOLA** | Teks promosi v1 | **DIHAPUS**. Diganti: "Desain responsif untuk ponsel, tablet, & komputer". |
| **Badge "Studio Aktif • Respon Cepat"** | **TIDAK TERBUKTI** | Ditambahkan di v1 | **DIHAPUS**. Menghilangkan badge klaim tak berdasar. |
| **Emoji Sparkles ✨ / 🚀** | **DILARANG** | Dekorasi v1 | **DIHAPUS TOTAL** di seluruh halaman. |
| **Slogan "Bold Ideas, Stunning Results"**| **SALINAN ASING** | Tersalin dari referensi 2 | **DIHAPUS TOTAL**. Diganti narasi editorial asli Indonesia. |

---

## 7. Status Teknologi Terverifikasi

| Teknologi | Kategori | Status | Keterangan / Dasar Penetapan |
| :--- | :--- | :--- | :--- |
| **HTML5 & CSS3** | Frontend | **Digunakan pada website ini** | Kode struktur semantik dan stylesheet utama proyek |
| **JavaScript (ES6)** | Frontend | **Digunakan pada website ini** | Skrip interaktivitas modal, filter, drawer navigasi |
| **Tailwind CSS** | Styling | **Digunakan pada website ini** | Engine utility CSS via runtime script resmi pada header |
| **Vercel** | Deployment | **Digunakan pada website ini** | Server hosting dan global CDN penyedia situs `auraglobal.my.id` |
| **Git & GitHub** | Workflow | **Digunakan pada website ini** | Kontrol versi dan pelacakan repository proyek |
| **React** | Frontend | **Tersedia dalam layanan** | Dikuasai studio untuk aplikasi web interaktif / dinamis |
| **PHP & Laravel** | Backend | **Tersedia dalam layanan** | Dikuasai studio untuk backend kustom dan integrasi basis data |
| **MySQL** | Database | **Tersedia dalam layanan** | Dikuasai studio untuk struktur data relasional |

---

## 8. Copywriting: Alternatif Headline & CTA

### Alternatif Headline Hero (Pilihan: Alternatif 1 diterapkan):
- **Alternatif 1 (Diterapkan)**:  
  *Baris 1*: Kami Merancang & Membangun  
  *Baris 2*: Website Bisnis yang Kredibel.  
  *(Ringkas 9 kata, 2 baris seimbang, tanpa kata yatim, fokus langsung pada kredibilitas bisnis klien)*
- **Alternatif 2**:  
  *Baris 1*: Hadirkan Bisnis Anda di Internet  
  *Baris 2*: dengan Website Profesional.  
  *(8 kata, fokus pada kehadiran digital)*
- **Alternatif 3**:  
  *Baris 1*: Pembuatan Website Modern  
  *Baris 2*: untuk UMKM & Perusahaan.  
  *(8 kata, penegasan target segmen audiens)*

### Alternatif Tombol CTA Navbar & Hero (Pilihan: Alternatif 1 diterapkan):
- **Alternatif 1 (Diterapkan)**:  
  CTA Navbar: `Konsultasi via WhatsApp`  
  CTA Utama Hero: `Konsultasi via WhatsApp`  
  CTA Kedua Hero: `Lihat Portofolio Proyek`
- **Alternatif 2**:  
  CTA Navbar: `Hubungi Studio`  
  CTA Utama Hero: `Mulai Diskusi Proyek`  
  CTA Kedua Hero: `Jelajahi Karya Kami`
- **Alternatif 3**:  
  CTA Navbar: `Pesan Website`  
  CTA Utama Hero: `Konsultasi Kebutuhan Website`  
  CTA Kedua Hero: `Buka Galeri Portofolio`

---

## 9. Rencana Kerja Implementasi Langkah Demi Langkah
1. Buat stylesheet bersih `style.css` baru dengan token full-bleed dan fluid spacing.
2. Bangun ulang struktur `index.html` dengan alur 12 bagian full-width, headline terencana, showcase visual tajam tanpa overlay, dan tanpa bingkai kotak.
3. Bangun ulang `layanan/index.html` dengan format full-bleed editorial mendalam.
4. Bangun ulang `portfolio/index.html` dengan mockup bersih tanpa teks referensi.
5. Bangun ulang `harga/index.html` berbasis 4 paket asli terverifikasi.
6. Bangun ulang `tentang/index.html` dengan prinsip kerja nyata studio.
7. Bangun ulang `kontak/index.html` dengan WhatsApp message builder nyata.
8. Bangun ulang `404.html` dengan gaya full-bleed branded.
9. Jalankan validasi teknis (JSON-LD, HTML tags, JS check, overflow test).
10. Lakukan 2 putaran kritik visual mandiri via screenshot headless Edge di 390px, 768px, 1280px, 1440px, 1920px.
11. Hasilkan laporan akhir komprehensif di `docs/LAPORAN_REDESIGN_V2.md`.
