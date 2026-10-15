/**
 * portfolio-data.js — AURA GLOBAL Digital Web Studio
 * Sumber kebenaran terpusat untuk portofolio proyek AURA GLOBAL.
 * Digunakan bersama di:
 * 1. Landing Page (/) — 4 Proyek Pilihan
 * 2. Halaman Galeri Portofolio (/portofolio/ & /portfolio/)
 * 3. Halaman Detail Mandiri (/portofolio/[slug]/)
 */

const portfolioItems = [
  {
    id: 1,
    title: "SegarMart (Toko Serba Ada)",
    displayTitle: "SegarMart — Toko Kebutuhan Harian",
    subtitle: "Website Toko Online & Katalog Belanja Kebutuhan Pokok",
    slug: "toko-serba-ada",
    url: "/portofolio/toko-serba-ada/",
    category: "Toko Online & Retail",
    categoryKey: "toko-online",
    isHome: true,
    published: true,
    image: "/assets/portfolio-toko-mockup.webp",
    imageAlt: "Mockup Website Toko Online SegarMart Toko Serba Ada",
    description: "Website e-commerce dan etalase belanja digital untuk bisnis retail kebutuhan harian dengan alur pemesanan langsung terhubung ke WhatsApp.",
    features: [
      "Katalog Produk Berdasarkan Kategori Lengkap",
      "Foto Produk Jelas & Informasi Harga Transparan",
      "Alur Pemesanan Cepat via WhatsApp",
      "Tampilan Responsif Optimal di Smartphone",
      "Banner Promosi Diskon & Produk Unggulan"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Cloud Hosting Cepat"],
    waRef: "Konsultasi Website Toko Online (Referensi SegarMart)"
  },
  {
    id: 2,
    title: "Villa Panorama",
    displayTitle: "Villa Panorama — Resort & Villa Wisata Alam",
    subtitle: "Website Profil Penginapan & Wisata Alam Terbuka",
    slug: "villa-panorama",
    url: "/portofolio/villa-panorama/",
    category: "Wisata & Travel",
    categoryKey: "wisata-travel",
    isHome: true,
    published: true,
    image: "/assets/portfolio-villa-mockup.webp",
    imageAlt: "Mockup Website Wisata & Penginapan Villa Panorama",
    description: "Website profil resort dan villa alam terbuka dengan visualisasi lanskap pemandangan serta reservasi praktis via WhatsApp.",
    features: [
      "Galeri Foto Suasana Kamar & Lanskap Sekitar",
      "Daftar Tipe Kamar & Rincian Fasilitas Menginap",
      "Integrasi Peta Lokasi & Panduan Rute Google Maps",
      "Tombol Cek Ketersediaan Kamar via WhatsApp",
      "Tata Letak Ringan & Cepat Diakses di Jaringan Seluler"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Cloud Hosting Cepat"],
    waRef: "Konsultasi Website Wisata & Villa (Referensi Villa Panorama)"
  },
  {
    id: 3,
    title: "Sinar Jaya Motor",
    displayTitle: "Sinar Jaya Motor — Showroom & Servis Otomotif",
    subtitle: "Website Showroom Otomotif & Layanan Servis Purnajual",
    slug: "sinar-jaya-motor",
    url: "/portofolio/sinar-jaya-motor/",
    category: "Otomotif & Servis",
    categoryKey: "otomotif",
    isHome: true,
    published: true,
    image: "/assets/portfolio-motor-mockup.webp",
    imageAlt: "Mockup Website Otomotif Sinar Jaya Motor",
    description: "Website showroom kendaraan dan layanan purnajual otomotif dengan etalase unit mobil terbaru dan pemesanan jadwal servis.",
    features: [
      "Etalase Unit Kendaraan dengan Spesifikasi Rinci",
      "Informasi Layanan Bengkel Resmi & Suku Cadang",
      "Formulir Permintaan Penawaran & Test Drive",
      "Panggilan Cepat Sales Eksekutif via WhatsApp",
      "Desain Visual Gelap Eksklusif yang Elegan"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Cloud Hosting Cepat"],
    waRef: "Konsultasi Website Showroom Otomotif (Referensi Sinar Jaya Motor)"
  },
  {
    id: 4,
    title: "Rumah Sehat",
    displayTitle: "Rumah Sehat — Klinik & Pelayanan Medis",
    subtitle: "Website Profil Klinik Pratama & Pelayanan Medis Keluarga",
    slug: "rumah-sehat",
    url: "/portofolio/rumah-sehat/",
    category: "Klinik & Kesehatan",
    categoryKey: "klinik-kesehatan",
    isHome: true,
    published: true,
    image: "/assets/portfolio-sehat-mockup.webp",
    imageAlt: "Mockup Website Klinik Rumah Sehat",
    description: "Website profil klinik pratama dan pelayanan medis keluarga dengan informasi jadwal dokter dan reservasi antrean online.",
    features: [
      "Profil Tim Dokter & Jadwal Praktik Mingguan",
      "Daftar Layanan Medis, Rawat Jalan & Poli Klinik",
      "Informasi Alamat Klinik & Kontak Darurat",
      "Pendaftaran Antrean & Janji Temu via WhatsApp",
      "Tata Letak Ergonomis & Aksesibel bagi Seluruh Pasien"
    ],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript Modern (ES6+)", "Cloud Hosting Cepat"],
    waRef: "Konsultasi Website Klinik Kesehatan (Referensi Rumah Sehat)"
  },
  {
    id: 5,
    title: "Danih Konstruksi",
    displayTitle: "Danih Konstruksi — Profil Perusahaan & Rental Alat Berat",
    subtitle: "Website Profil Perusahaan & Sewa Alat Berat",
    slug: "danih-konstruksi",
    url: "/portofolio/danih-konstruksi/",
    category: "Company Profile",
    categoryKey: "company-profile",
    isHome: false,
    published: true,
    image: "/assets/portfolio-company.webp",
    imageAlt: "Website Danih Konstruksi - Profil Perusahaan & Sewa Alat Berat",
    description: "Website profil korporat dan katalog penyewaan alat berat untuk PT/CV konstruksi demi memperkuat tender proyek.",
    features: ["Katalog Sewa Alat Berat", "Profil Legalitas & Keunggulan Korporat", "Integrasi Penawaran WhatsApp"],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6", "Cloud Hosting Cepat"],
    waRef: "Website Company Profile (Referensi Danih Konstruksi)"
  },
  {
    id: 6,
    title: "Noiré Café",
    displayTitle: "Noiré Café — Specialty Coffee & Resto",
    subtitle: "Website Specialty Coffee & Restoran",
    slug: "noire-cafe",
    url: "/portofolio/noire-cafe/",
    category: "Cafe & Resto",
    categoryKey: "cafe-resto",
    isHome: false,
    published: true,
    image: "/assets/portfolio-cafe.webp",
    imageAlt: "Website Noiré Café - Specialty Coffee & Culinary Experience",
    description: "Website bergaya dark luxury modern untuk cafe artisan dan bistro kuliner dengan menu interaktif dan reservasi meja.",
    features: ["Katalog Menu Interaktif", "Galeri Ambience Estetik", "Tombol Reservasi Meja Instan"],
    tech: ["HTML5", "Modern CSS3", "JavaScript Animations", "Cloud Hosting Cepat"],
    waRef: "Website Cafe & Resto (Referensi Noiré Café)"
  },
  {
    id: 7,
    title: "Velora Drive",
    displayTitle: "Velora Drive — Rental Mobil & Travel",
    subtitle: "Website Rental Mobil Eksekutif & Travel",
    slug: "velora-drive",
    url: "/portofolio/velora-drive/",
    category: "Rental & Travel",
    categoryKey: "rental-travel",
    isHome: false,
    published: true,
    image: "/assets/portfolio-rental.webp",
    imageAlt: "Website Velora Drive - Executive Mobility & Rental Mobil",
    description: "Website jasa rental mobil eksekutif dan layanan private chauffeur dengan katalog armada premium dan tarif sewa transparan.",
    features: ["Katalog Armada Mewah", "Daftar Tarif Transparan", "Integrasi Booking WhatsApp"],
    tech: ["HTML5 Semantik", "Tailwind CSS", "JavaScript ES6", "Cloud Hosting Cepat"],
    waRef: "Website Rental Mobil (Referensi Velora Drive)"
  },
  {
    id: 8,
    title: "Citumang Rafting",
    displayTitle: "Citumang Pangandaran — Body Rafting & Wisata Alam",
    subtitle: "Website Wisata Alam & Body Rafting Pangandaran",
    slug: "citumang-rafting",
    url: "/portofolio/citumang-rafting/",
    category: "Wisata & Travel",
    categoryKey: "wisata-travel",
    isHome: false,
    published: true,
    image: "/assets/portfolio-citumang-mockup.webp",
    imageAlt: "Website Citumang Rafting - Wisata Alam & Body Rafting Pangandaran",
    description: "Website paket wisata body rafting di Citumang Pangandaran dengan rincian fasilitas pemandu berlisensi dan reservasi tiket online.",
    features: ["Pilihan Paket Wisata Lengkap", "Standar Keamanan & Pemandu", "Pemesanan Tiket via WhatsApp"],
    tech: ["HTML5", "Tailwind CSS", "Vanilla JavaScript", "Cloud Hosting Cepat"],
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

// Helper untuk mencari berdasarkan slug
function getPortfolioBySlug(slug) {
  return portfolioItems.find(item => item.slug === slug || (item.slug === 'toko-serba-ada' && slug === 'segar-mart'));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { portfolioItems, getHomePortfolioItems, getAllPublishedPortfolioItems, getPortfolioBySlug };
}
