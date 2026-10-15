/**
 * config/pricing.js — AURA GLOBAL Digital Web Studio
 * Konfigurasi acuan harga untuk Kalkulator Estimasi (/estimasi).
 * Didasarkan pada data paket harga asli:
 * - Basic: Rp500.000 (1 Halaman Landing Page)
 * - Starter: Rp800.000 (3-4 Halaman Bisnis / UMKM)
 * - Professional: Rp1.200.000 (5-7 Halaman Terstruktur)
 * - Premium: Rp1.800.000 (Katalog Kompleks / Multi-Halaman)
 * 
 * Nilai fitur tambahan ditandai sebagai estimasi transparan awal
 * dan disepakati final pada sesi konsultasi WhatsApp.
 */

const pricingConfig = {
  types: [
    {
      id: "mini-page",
      name: "Paket Mini / Profil Ringkas",
      desc: "Bio link bisnis, kontak ringkas, atau kartu nama digital satu seksi.",
      basePriceMin: 350000,
      basePriceMax: 450000,
      suggestedPackage: "Paket Mini (Rp350.000)"
    },
    {
      id: "landing-page",
      name: "Landing Page / Satu Halaman",
      desc: "Promosi produk tunggal, event, atau profil ringkas bisnis.",
      basePriceMin: 500000,
      basePriceMax: 650000,
      suggestedPackage: "Paket Basic (Rp500.000)"
    },
    {
      id: "company-profile",
      name: "Company Profile Perusahaan",
      desc: "Profil resmi perusahaan, kantor hukum, atau instansi.",
      basePriceMin: 800000,
      basePriceMax: 1200000,
      suggestedPackage: "Paket Starter atau Professional"
    },
    {
      id: "toko-online",
      name: "Toko Online & Katalog WhatsApp",
      desc: "Etalase produk dengan rincian harga dan alur beli via WhatsApp.",
      basePriceMin: 1000000,
      basePriceMax: 1500000,
      suggestedPackage: "Paket Professional (Rp1.200.000)"
    },
    {
      id: "custom",
      name: "Website Khusus / Kustom",
      desc: "Klinik dengan jadwal dokter, reservasi travel, atau fitur spesifik.",
      basePriceMin: 1200000,
      basePriceMax: 1800000,
      suggestedPackage: "Paket Professional atau Premium"
    },
    {
      id: "aplikasi-web",
      name: "Aplikasi Web & Sistem Informasi (Laravel / PHP)",
      desc: "Sistem inventaris, kasir, keanggotaan, atau portal database internal.",
      basePriceMin: 2500000,
      basePriceMax: 6000000,
      suggestedPackage: "Proyek Custom (Konsultasi Spesifikasi)"
    },
    {
      id: "iot-system",
      name: "Sistem IoT & Monitoring Realtime (Arduino / ESP32)",
      desc: "Integrasi sensor fisik, mikrokontroler, dan dashboard web real-time.",
      basePriceMin: 3000000,
      basePriceMax: 8000000,
      suggestedPackage: "Proyek IoT Khusus (Konsultasi Teknis)"
    },
    {
      id: "undangan-digital",
      name: "Undangan Digital & Website Pernikahan",
      desc: "Undangan mobile-first dengan nama tamu personal, RSVP, dan amplop digital.",
      basePriceMin: 150000,
      basePriceMax: 450000,
      suggestedPackage: "Paket Undangan Digital (Mulai Rp150.000)"
    }
  ],
  pages: [
    {
      id: "1-page",
      name: "1 Halaman (Single Page)",
      desc: "Semua seksi terangkum dalam satu alur scroll.",
      addMin: 0,
      addMax: 0
    },
    {
      id: "2-4-pages",
      name: "2 – 4 Halaman",
      desc: "Beranda, Tentang Kami, Layanan, dan Kontak.",
      addMin: 0,
      addMax: 150000
    },
    {
      id: "5-8-pages",
      name: "5 – 8 Halaman",
      desc: "Struktur multi-seksi lengkap untuk profil mendalam.",
      addMin: 200000,
      addMax: 350000
    },
    {
      id: "9-plus",
      name: "Lebih dari 8 Halaman",
      desc: "Katalog produk luas atau sub-halaman korporat komprehensif.",
      addMin: 400000,
      addMax: 600000
    }
  ],
  features: [
    {
      id: "wa-chat",
      name: "Integrasi Tombol WhatsApp Cepat",
      desc: "Pengunjung langsung diarahkan ke nomor WhatsApp admin bisnis Anda.",
      priceMin: 0,
      priceMax: 0,
      includedText: "Sudah Termasuk di Seluruh Paket"
    },
    {
      id: "seo-dasar",
      name: "Optimasi SEO Teknis & Google Console",
      desc: "Struktur semantik HTML, meta description, dan pendaftaran ke Google.",
      priceMin: 0,
      priceMax: 100000,
      includedText: "Termasuk di Paket Starter & Pro"
    },
    {
      id: "contact-form",
      name: "Formulir Kontak Email / Pesan",
      desc: "Formulir pengiriman pesan langsung dari calon pelanggan.",
      priceMin: 0,
      priceMax: 100000,
      includedText: "Termasuk di Paket Starter & Pro"
    },
    {
      id: "blog-system",
      name: "Modul Blog & Artikel Berita",
      desc: "Halaman daftar tulisan dan artikel tips untuk mendongkrak reputasi.",
      priceMin: 150000,
      priceMax: 250000,
      includedText: "Opsi Tambahan"
    },
    {
      id: "multi-lang",
      name: "Dukungan Multi-Bahasa (Indonesia & Inggris)",
      desc: "Navigasi pilihan bahasa untuk pengunjung mancanegara.",
      priceMin: 250000,
      priceMax: 350000,
      includedText: "Opsi Tambahan"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { pricingConfig };
}

