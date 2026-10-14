/**
 * portfolio-data.js — AURA GLOBAL Digital Web Studio
 * Sumber kebenaran terpusat untuk portofolio proyek AURA GLOBAL.
 * Digunakan bersama di Landing Page (Tahap 1) dan Halaman Semua Portofolio (Tahap 2).
 * 
 * Aturan Khusus Tahap 1:
 * - 4 item pertama adalah portofolio landing page resmi sesuai referensi desain.
 * - Detail ditampilkan di dalam modal/bottom-sheet internal (tanpa link keluar).
 */

const portfolioItems = [
  {
    id: 1,
    title: "Toko Serba Ada",
    subtitle: "Website Toko Online & Katalog Kebutuhan Harian",
    slug: "toko-serba-ada",
    category: "Toko Online",
    categoryKey: "toko-online",
    badge: "Contoh Desain",
    isHome: true,
    published: true,
    image: "/assets/portfolio-toko-mockup.webp",
    imageAlt: "Mockup Website Toko Online Toko Serba Ada",
    description: "Website e-commerce dan etalase belanja digital untuk bisnis retail kebutuhan harian. Didesain dengan tata letak kategori produk yang rapi, pencarian cepat, serta alur pemesanan langsung yang terhubung ke WhatsApp pelanggan.",
    detailDescription: "Platform belanja online modern dengan nuansa hijau segar yang mengedepankan kemudahan navigasi bagi pengunjung segala usia. Menyajikan etalase kategori sembako dan kebutuhan harian, kartu produk dengan foto tajam dan harga transparan, banner promosi berkala, serta tombol checkout instan yang langsung meneruskan daftar belanjaan ke chat WhatsApp admin toko.",
    features: [
      "Katalog Produk Berdasarkan Kategori Lengkap",
      "Foto Produk Jelas & Informasi Harga Transparan",
      "Alur Pemesanan Cepat via WhatsApp",
      "Tampilan Responsif Optimal di Smartphone",
      "Banner Promosi Diskon & Produk Unggulan"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Hosting Cloud Cepat"],
    waRef: "Konsultasi Website Toko Online (Referensi Toko Serba Ada)"
  },
  {
    id: 2,
    title: "Villa Panorama",
    subtitle: "Website Profil Penginapan & Wisata Alam",
    slug: "villa-panorama",
    category: "Wisata & Travel",
    categoryKey: "wisata-travel",
    badge: "Contoh Desain",
    isHome: true,
    published: true,
    image: "/assets/portfolio-villa-mockup.webp",
    imageAlt: "Mockup Website Wisata & Penginapan Villa Panorama",
    description: "Website profil resort dan villa alam terbuka dengan visualisasi lanskap yang menawan. Memudahkan calon tamu melihat tipe kamar, fasilitas pendukung, rute lokasi, serta melakukan reservasi secara langsung.",
    detailDescription: "Website perhotelan dan destinasi liburan yang dirancang dengan estetika visual elegan berlatar pemandangan danau dan pegunungan. Dilengkapi galeri foto atmosfer tempat beresolusi tinggi, daftar tipe kamar beserta kapasitas dan fasilitas, petunjuk arah Google Maps, serta tombol reservasi yang terhubung langsung ke layanan pelanggan.",
    features: [
      "Galeri Foto Suasana Kamar & Lanskap Sekitar",
      "Daftar Tipe Kamar & Rincian Fasilitas Menginap",
      "Integrasi Peta Lokasi & Panduan Rute Google Maps",
      "Tombol Cek Ketersediaan Kamar via WhatsApp",
      "Tata Letak Ringan & Cepat Diakses di Jaringan Seluler"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Hosting Cloud Cepat"],
    waRef: "Konsultasi Website Wisata & Villa (Referensi Villa Panorama)"
  },
  {
    id: 3,
    title: "Sinar Jaya Motor",
    subtitle: "Website Showroom Otomotif & Layanan Servis",
    slug: "sinar-jaya-motor",
    category: "Otomotif",
    categoryKey: "otomotif",
    badge: "Contoh Desain",
    isHome: true,
    published: true,
    image: "/assets/portfolio-motor-mockup.webp",
    imageAlt: "Mockup Website Otomotif Sinar Jaya Motor",
    description: "Website showroom kendaraan dan layanan purnajual otomotif. Menampilkan jajaran unit mobil terbaru, spesifikasi mesin lengkap, estimasi simulasi pembiayaan, serta booking jadwal servis bengkel.",
    detailDescription: "Dirancang dengan konsep visual dark modern yang maskulin dan berkelas untuk membangun impresi profesional bagi calon pembeli kendaraan. Memuat katalog unit mobil dengan filter tipe bodi (SUV, Sedan, MPV), rincian spesifikasi teknis mendalam, informasi paket promo kredit, serta form kontak cepat via WhatsApp untuk konsultasi unit atau booking test drive.",
    features: [
      "Etalase Unit Kendaraan dengan Spesifikasi Rinci",
      "Informasi Layanan Bengkel Resmi & Suku Cadang",
      "Formulir Permintaan Penawaran & Test Drive",
      "Panggilan Cepat Sales Eksekutif via WhatsApp",
      "Desain Visual Gelap Eksklusif yang Elegan"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Hosting Cloud Cepat"],
    waRef: "Konsultasi Website Showroom Otomotif (Referensi Sinar Jaya Motor)"
  },
  {
    id: 4,
    title: "Rumah Sehat",
    subtitle: "Website Profil Klinik & Layanan Medis Keluarga",
    slug: "rumah-sehat",
    category: "Klinik & Kesehatan",
    categoryKey: "klinik-kesehatan",
    badge: "Contoh Desain",
    isHome: true,
    published: true,
    image: "/assets/portfolio-sehat-mockup.webp",
    imageAlt: "Mockup Website Klinik Rumah Sehat",
    description: "Website profil klinik pratama dan pelayanan kesehatan keluarga. Menyajikan jadwal praktik dokter, jenis poli perawatan medis, prosedur pendaftaran pasien, serta konsultasi janji temu online.",
    detailDescription: "Antarmuka digital bernuansa putih-biru medis yang bersih, menenangkan, dan ramah pengguna. Dirancang untuk memudahkan pasien menemukan informasi dokter spesialis, jadwal operasional poli klinik, panduan layanan BPJS/asuransi, serta tombol pendaftaran antrean dan reservasi pemeriksaan langsung melalui WhatsApp.",
    features: [
      "Profil Tim Dokter & Jadwal Praktik Mingguan",
      "Daftar Layanan Medis, Rawat Jalan & Poli Klinik",
      "Informasi Alamat Klinik & Kontak Darurat 24 Jam",
      "Pendaftaran Antrean & Janji Temu via WhatsApp",
      "Tata Letak Ergonomis & Aksesibel bagi Seluruh Pasien"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Hosting Cloud Cepat"],
    waRef: "Konsultasi Website Klinik Kesehatan (Referensi Rumah Sehat)"
  },
  // Proyek nyata tambahan untuk arsip Tahap 2 (/portofolio)
  {
    id: 5,
    title: "Danih Konstruksi",
    subtitle: "Website Profil Perusahaan & Sewa Alat Berat",
    slug: "danih-konstruksi",
    category: "Company Profile",
    categoryKey: "company-profile",
    badge: "Proyek Klien",
    isHome: false,
    published: true,
    image: "/assets/portfolio-company.jpg",
    imageAlt: "Website Danih Konstruksi - Profil Perusahaan & Sewa Alat Berat",
    description: "Website profil korporat dan katalog penyewaan alat berat untuk PT/CV konstruksi demi memperkuat tender proyek.",
    detailDescription: "Platform web perusahaan yang menyajikan armada alat berat seperti excavator, bulldozer, dan dump truck beserta spesifikasi teknisnya. Memiliki navigasi terstruktur, profil legalitas perusahaan, dan integrasi WhatsApp penawaran cepat.",
    features: ["Katalog Sewa Alat Berat", "Profil Legalitas & Keunggulan Korporat", "Integrasi Penawaran WhatsApp"],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6"],
    waRef: "Website Company Profile (Referensi Danih Konstruksi)"
  },
  {
    id: 6,
    title: "Noiré Café",
    subtitle: "Website Specialty Coffee & Restoran",
    slug: "noire-cafe",
    category: "Cafe & Resto",
    categoryKey: "cafe-resto",
    badge: "Proyek Klien",
    isHome: false,
    published: true,
    image: "/assets/portfolio-cafe.jpg",
    imageAlt: "Website Noiré Café - Specialty Coffee & Culinary Experience",
    description: "Website bergaya dark luxury modern untuk cafe artisan dan bistro culinary dengan menu interaktif dan reservasi meja.",
    detailDescription: "Dirancang dengan estetika visual eksklusif bertema hitam elegan dan tipografi kontemporer. Dilengkapi etalase menu makanan & kopi artisan, petunjuk jam operasional, galeri ambience, serta tombol reservasi WhatsApp.",
    features: ["Katalog Menu Interaktif", "Galeri Ambience Estetik", "Tombol Reservasi Meja Instan"],
    tech: ["HTML5", "Modern CSS3", "JavaScript Animations"],
    waRef: "Website Cafe & Resto (Referensi Noiré Café)"
  },
  {
    id: 7,
    title: "Velora Drive",
    subtitle: "Website Rental Mobil Eksekutif & Travel",
    slug: "velora-drive",
    category: "Rental & Travel",
    categoryKey: "rental-travel",
    badge: "Proyek Klien",
    isHome: false,
    published: true,
    image: "/assets/portfolio-rental.jpg",
    imageAlt: "Website Velora Drive - Executive Mobility & Rental Mobil",
    description: "Website jasa rental mobil eksekutif dan layanan private chauffeur dengan katalog armada premium dan tarif sewa.",
    detailDescription: "Antarmuka digital yang memadukan kesan mewah dan kemudahan pemesanan armada kendaraan. Menampilkan jajaran armada mobil premium, daftar tarif sewa harian/mingguan, dan konfirmasi ketersediaan armada instan.",
    features: ["Katalog Armada Mewah", "Daftar Tarif Transparan", "Integrasi Booking WhatsApp"],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6"],
    waRef: "Website Rental Mobil (Referensi Velora Drive)"
  },
  {
    id: 8,
    title: "Citumang Rafting",
    subtitle: "Website Wisata Alam & Body Rafting Pangandaran",
    slug: "citumang-rafting",
    category: "Wisata Alam",
    categoryKey: "wisata-travel",
    badge: "Proyek Klien",
    isHome: false,
    published: true,
    image: "/assets/portfolio-citumang.jpg",
    imageAlt: "Website Citumang Rafting - Wisata Alam & Body Rafting Pangandaran",
    description: "Website paket wisata body rafting di Citumang Pangandaran dengan rincian fasilitas pemandu berlisensi dan reservasi tiket.",
    detailDescription: "Website petualangan alam yang dirancang untuk mempermudah calon wisatawan memesan tiket body rafting. Memuat rincian paket wisata, perlengkapan keamanan lengkap, dokumentasi foto, dan panduan rute.",
    features: ["Pilihan Paket Wisata Lengkap", "Standar Keamanan & Pemandu", "Pemesanan Tiket via WhatsApp"],
    tech: ["HTML5", "Tailwind CSS", "Vanilla JavaScript"],
    waRef: "Website Pariwisata (Referensi Citumang Rafting)"
  }
];

// Helper untuk mengambil 4 portofolio khusus Landing Page
function getHomePortfolioItems() {
  return portfolioItems.filter(item => item.isHome === true && item.published !== false);
}

// Helper untuk mengambil seluruh portofolio publik
function getAllPublishedPortfolioItems() {
  return portfolioItems.filter(item => item.published !== false);
}

// Validasi ringan data
function validatePortfolioData() {
  const homeItems = getHomePortfolioItems();
  if (homeItems.length !== 4) {
    console.warn(`Peringatan: Landing page membutuhkan tepat 4 portofolio, ditemukan ${homeItems.length}.`);
  }
}
validatePortfolioData();
