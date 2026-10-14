/**
 * data/testimonials.js — AURA GLOBAL Digital Web Studio
 * 
 * CATATAN PENTING:
 * Seluruh data kutipan di bawah ini berstatus 'KONTEN CONTOH' untuk kebutuhan tata letak.
 * Silakan ganti dengan kutipan dan nama klien asli saat data resmi telah dihimpun oleh pemilik studio.
 * Sesuai aturan: tanpa rating bintang fiktif dan tanpa klaim metrik bisnis berlebihan.
 */

const testimonialItems = [
  {
    id: 1,
    initials: "HS",
    name: "Hendra Saputra",
    role: "Pemilik Usaha Retail & Grosir",
    location: "Jawa Barat",
    quote: "Komunikasi dengan tim AURA GLOBAL sangat jelas sejak sesi konsultasi awal. Website toko kami selesai tepat waktu dengan tampilan yang rapi dan mudah diakses oleh pelanggan via handphone."
  },
  {
    id: 2,
    initials: "SM",
    name: "dr. Sarah Meliani",
    role: "Pengelola Klinik Kesehatan Keluarga",
    location: "Jakarta",
    quote: "Proses pengerjaannya transparan dari desain rancangan sampai website online. Informasi jadwal dokter dan alur pendaftaran WhatsApp sekarang jadi jauh lebih teratur untuk para pasien."
  },
  {
    id: 3,
    initials: "AP",
    name: "Aditya Pratama",
    role: "Manajer Operasional Rental & Travel",
    location: "Bandung",
    quote: "Desainnya bersih dan tidak membingungkan. Calon penyewa armada kami bisa langsung cek spesifikasi unit dan bertanya ketersediaan armada lewat WhatsApp dengan sangat praktis."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { testimonialItems };
}

