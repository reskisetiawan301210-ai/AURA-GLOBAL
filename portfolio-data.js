/**
 * portfolio-data.js — AURA GLOBAL Digital Web Studio
 * Data terpusat untuk portofolio proyek dan manajemen showcase.
 * 
 * Aturan Pengelolaan:
 * - 'proyek_asli': Proyek nyata terverifikasi. Tombol "Kunjungi Website" otomatis muncul jika url valid.
 * - 'konsep': Desain konsep/inspirasi visual. Tidak menampilkan tautan eksternal atau klaim klien.
 * - 'draft': Tidak ditampilkan di halaman publik secara default.
 */

const portfolioItems = [
  {
    id: 1,
    title: "Danih Konstruksi",
    subtitle: "Website Profil Perusahaan & Sewa Alat Berat",
    slug: "danih-konstruksi",
    category: "Company Profile",
    categoryKey: "company-profile",
    type: "proyek_asli",
    badge: "Studi Kasus & Demo Live",
    client: "Danih Konstruksi",
    year: "2026",
    description: "Website profil korporat dan katalog penyewaan alat berat untuk PT/CV konstruksi. Didesain untuk memperkuat penawaran tender proyek serta mempermudah komunikasi instan calon klien via WhatsApp.",
    detailDescription: "Platform web perusahaan yang menyajikan armada alat berat seperti excavator, bulldozer, dan dump truck beserta spesifikasi teknisnya. Memiliki navigasi terstruktur, profil legalitas perusahaan, integrasi lokasi kantor, dan alur permintaan penawaran harga cepat.",
    features: [
      "Katalog Sewa Alat Berat & Spesifikasi Lengkap",
      "Profil Legalitas & Keunggulan Korporat",
      "Panggilan Cepat Penawaran via WhatsApp",
      "Desain Responsif Mobile & Desktop",
      "Formulir Permintaan Penawaran Tender"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6", "Hosting Cloud Cepat"],
    url: "https://danieh-konstruksi.vercel.app",
    image: "/assets/portfolio-company.jpg",
    imageAlt: "Website Danih Konstruksi - Profil Perusahaan & Sewa Alat Berat",
    featured: true,
    published: true,
    waRef: "Website Company Profile (Referensi Danih Konstruksi)"
  },
  {
    id: 2,
    title: "Noiré Café",
    subtitle: "Website Specialty Coffee & Restoran",
    slug: "noire-cafe",
    category: "Cafe & Resto",
    categoryKey: "cafe-resto",
    type: "proyek_asli",
    badge: "Studi Kasus & Demo Live",
    client: "Noiré Café & Bistro",
    year: "2026",
    description: "Website bergaya dark luxury modern untuk cafe artisan dan bistro culinary. Menampilkan menu interaktif, atmosfer tempat, petunjuk arah maps, serta tombol reservasi meja instan.",
    detailDescription: "Dirancang dengan estetika visual eksklusif bertema hitam elegan dan tipografi kontemporer. Dilengkapi animasi pembuka logo yang halus, etalase menu makanan & kopi artisan, petunjuk jam operasional, galeri ambience, serta tombol reservasi meja langsung ke WhatsApp.",
    features: [
      "Katalog Menu Makanan & Minuman Interaktif",
      "Galeri Suasana & Ambience Cafe Estetik",
      "Animasi Pembuka Logo Eksklusif",
      "Tombol Reservasi Meja Instan",
      "Petunjuk Jam Buka & Navigasi Lokasi Maps"
    ],
    tech: ["HTML5", "Modern CSS3", "JavaScript Animations", "Hosting Cloud Cepat"],
    url: "https://noirecafe.vercel.app",
    image: "/assets/portfolio-cafe.jpg",
    imageAlt: "Website Noiré Café - Specialty Coffee & Culinary Experience",
    featured: true,
    published: true,
    waRef: "Website Cafe & Resto (Referensi Noiré Café)"
  },
  {
    id: 3,
    title: "Velora Drive",
    subtitle: "Website Rental Mobil Eksekutif & Travel",
    slug: "velora-drive",
    category: "Rental & Travel",
    categoryKey: "rental-travel",
    type: "proyek_asli",
    badge: "Studi Kasus & Demo Live",
    client: "Velora Drive Mobility",
    year: "2026",
    description: "Website jasa rental mobil eksekutif dan layanan private chauffeur. Dilengkapi katalog kendaraan armada premium, rincian tarif sewa transparan, dan reservasi cepat via WhatsApp.",
    detailDescription: "Antarmuka digital yang memadukan kesan mewah dan kemudahan pemesanan kendaraan. Menampilkan jajaran armada mobil premium (sedan, SUV, MPV mewah), daftar paket sewa harian/mingguan, layanan supir pribadi profesional, dan konfirmasi ketersediaan armada instan.",
    features: [
      "Katalog Armada Kendaraan Mewah",
      "Daftar Tarif Sewa Harian & Mingguan Transparan",
      "Layanan Private Chauffeur & Drop-off Bandara",
      "Integrasi Booking Langsung ke WhatsApp",
      "Jaminan Standar Keamanan & Kebersihan Unit"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6", "Hosting Cloud Cepat"],
    url: "https://veloradrive.vercel.app",
    image: "/assets/portfolio-rental.jpg",
    imageAlt: "Website Velora Drive - Executive Mobility & Rental Mobil",
    featured: true,
    published: true,
    waRef: "Website Rental Mobil (Referensi Velora Drive)"
  },
  {
    id: 4,
    title: "Citumang Rafting",
    subtitle: "Website Wisata Alam & Body Rafting Pangandaran",
    slug: "citumang-rafting",
    category: "Wisata Alam",
    categoryKey: "wisata-alam",
    type: "proyek_asli",
    badge: "Studi Kasus & Demo Live",
    client: "Citumang Rafting Pangandaran",
    year: "2026",
    description: "Website paket wisata body rafting di Citumang Pangandaran. Menyajikan rincian fasilitas pemandu berlisensi, standar keamanan, galeri aktivitas, serta pemesanan tiket rombongan.",
    detailDescription: "Website petualangan alam yang dirancang untuk mempermudah calon wisatawan dan rombongan keluarga/komunitas memesan tiket body rafting. Memuat rincian paket wisata, perlengkapan keamanan lengkap (life jacket & helmet), dokumentasi foto, dan panduan rute menuju lokasi.",
    features: [
      "Pilihan Paket Wisata & Rincian Fasilitas Lengkap",
      "Informasi Pemandu Bersertifikat & Standar Keamanan",
      "Galeri Foto Aktivitas Air & Sungai Citumang",
      "Pemesanan Tiket Rombongan via WhatsApp",
      "Petunjuk Rute & Tanya Jawab Pengunjung"
    ],
    tech: ["HTML5", "Tailwind CSS", "Vanilla JavaScript", "Hosting Cloud Cepat"],
    url: "https://citumangrafting.vercel.app",
    image: "/assets/portfolio-citumang.jpg",
    imageAlt: "Website Citumang Rafting - Wisata Alam & Body Rafting Pangandaran",
    featured: true,
    published: true,
    waRef: "Website Pariwisata (Referensi Citumang Rafting)"
  }
];

/**
 * Brand Logos Data (Section 7.4)
 * Sesuai aturan: jika belum ada logo klien terverifikasi dari kerja sama resmi,
 * daftar ini tetap kosong / nonaktif untuk mencegah klaim fiktif.
 */
const brandLogos = [
  // Contoh format saat logo riil tersedia:
  // { id: 1, name: "Nama Klien", logoUrl: "assets/logos/client1.svg", active: true }
];

// Validasi ringan data saat dijalankan
function validatePortfolioData() {
  const errors = [];
  portfolioItems.forEach((item, index) => {
    if (!item.title) errors.push(`Item #${index}: title wajib diisi.`);
    if (!item.image) errors.push(`Item #${index}: image path wajib diisi.`);
    if (!item.imageAlt) errors.push(`Item #${index}: imageAlt wajib diisi demi SEO & Aksesibilitas.`);
    if (item.type === 'proyek_asli' && (!item.url || !item.url.startsWith('http'))) {
      errors.push(`Item #${index} (${item.title}): Proyek asli wajib memiliki URL valid.`);
    }
  });
  if (errors.length > 0) {
    console.warn("Validasi Portfolio Data menemukan catatan:", errors);
  }
  return errors.length === 0;
}

// Jalankan validasi
validatePortfolioData();

