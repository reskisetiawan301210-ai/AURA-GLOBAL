# DOKUMENTASI MANAJEMEN PORTOFOLIO & LOGO AURA GLOBAL

Dokumen ini memandu pemilik website AURA GLOBAL untuk menambah, mengubah, atau menyembunyikan item portofolio dan logo klien tanpa harus mengubah struktur HTML utama.

---

## 1. Lokasi File Data
- **File Data Portofolio**: [`portfolio-data.js`](file:///c:/Users/ACER/OneDrive/AURA%20GLOBAL%20WEBSITE/portfolio-data.js)
- **Folder Aset Gambar**: [`assets/`](file:///c:/Users/ACER/OneDrive/AURA%20GLOBAL%20WEBSITE/assets/)

---

## 2. Cara Menambah Gambar & Proyek Baru

### Langkah 1: Siapkan File Gambar
1. Simpan screenshot website pada rasio **16:10** (rekomendasi resolusi: `1280x800` piksel) dalam format `.jpg` atau `.png`.
2. Letakkan file di dalam folder `assets/`, misalnya:
   `assets/portfolio-nama-proyek.jpg`

### Langkah 2: Buka `portfolio-data.js` & Tambahkan Item
Buka file `portfolio-data.js`, lalu tambahkan objek baru ke dalam array `portfolioItems`:

```javascript
{
  id: 5, // ID unik bertahap
  title: "Nama Brand / Proyek",
  subtitle: "Subjudul Jenis Website",
  slug: "nama-brand-proyek",
  category: "Nama Kategori (contoh: Fashion & Retail)",
  categoryKey: "fashion-retail", // format slug huruf kecil tanpa spasi
  type: "proyek_asli", // 'proyek_asli' | 'konsep' | 'draft'
  badge: "Proyek Website", // atau "Konsep Desain" jika bukan proyek nyata
  client: "Nama Klien / Pemilik",
  year: "2026",
  description: "Deskripsi singkat yang tampil pada kartu portofolio...",
  detailDescription: "Deskripsi lengkap mendalam yang tampil di dalam modal popup...",
  features: [
    "Fitur Unggulan 1",
    "Fitur Unggulan 2",
    "Fitur Unggulan 3"
  ],
  tech: ["HTML5", "Tailwind CSS", "JavaScript", "Vercel"],
  url: "https://url-website-klien.com", // HANYA jika type: 'proyek_asli'
  image: "assets/portfolio-nama-proyek.jpg",
  imageAlt: "Website Nama Proyek - Deskripsi Singkat untuk Pembaca Layar",
  featured: true,
  published: true, // Ubah ke false jika ingin menyembunyikan sementara
  waRef: "Website Nama Proyek"
}
```

---

## 3. Arti Field Status (`type`)
- **`proyek_asli`**:
  - Digunakan untuk website yang benar-benar dikerjakan oleh AURA GLOBAL dan memiliki URL publik aktif.
  - Tombol **"Kunjungi Website ↗"** akan **otomatis muncul**.
- **`konsep`**:
  - Digunakan untuk studi desain, eksplorasi gaya visual, atau mockup inspirasi bisnis.
  - Tombol kunjungi website eksternal **tidak akan muncul** untuk mencegah klaim keliru.
- **`draft`**:
  - Digunakan untuk proyek yang masih dalam pengerjaan atau belum siap dirilis ke publik.
  - Secara otomatis **tidak ditampilkan** pada galeri utama.

---

## 4. Cara Menambah Logo Brand Klien (Section 7.4)
Jika Anda memiliki kerja sama resmi dengan klien baru:
1. Simpan file logo (format SVG atau PNG transparan) ke dalam folder `assets/`.
2. Buka `portfolio-data.js` pada bagian `brandLogos`:
   ```javascript
   const brandLogos = [
     { id: 1, name: "PT Contoh Sukses", logoUrl: "assets/logo-contoh.png", active: true }
   ];
   ```
3. Begitu array `brandLogos` berisi item aktif, bagian logo showcase di halaman dapat diaktifkan.

---

## 5. Validasi & Pengujian
Setelah menambah data baru:
1. Jalankan pengujian sintaks di terminal:
   ```bash
   node --check portfolio-data.js
   node --check script.js
   ```
2. Buka `index.html` di browser Anda untuk memastikan kartu dan modal tampil dengan rapi.
