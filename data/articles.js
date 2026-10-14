/**
 * data/articles.js — AURA GLOBAL Digital Web Studio
 * Dataset artikel blog resmi AURA GLOBAL.
 * Digunakan bersama di:
 * 1. Halaman Daftar Blog (/blog/)
 * 2. Halaman Detail Artikel (/blog/[slug]/)
 * 3. Seksi Artikel Terbaru di Beranda (/)
 */

const articles = [
  {
    id: 1,
    slug: "mengapa-bisnis-perlu-website",
    title: "Mengapa Bisnis dan UMKM Perlu Memiliki Website Sendiri?",
    category: "Strategi Bisnis",
    date: "14 Oktober 2026",
    dateIso: "2026-10-14",
    author: "Tim AURA GLOBAL",
    authorRole: "Web Strategist",
    readTime: "4 menit baca",
    coverImage: "/assets/blog-cover-1.svg",
    excerpt: "Memiliki media sosial saja seringkali belum cukup untuk membangun reputasi profesional. Pelajari mengapa website resmi menjadi aset digital paling mendasar bagi bisnis Anda.",
    lead: "Di tengah persaingan bisnis yang semakin ketat, calon pelanggan cenderung mencari bukti kredibilitas sebelum memutuskan untuk bertransaksi. Memiliki website resmi memberikan kepastian bahwa bisnis Anda beroperasi secara profesional dan dapat dipercaya.",
    content: `
      <h2>1. Membangun Kredibilitas dan Kesan Profesional</h2>
      <p>Ketika seseorang mendengar nama bisnis atau produk Anda, langkah pertama yang sering mereka lakukan adalah mencarinya di mesin pencari Google. Bisnis yang memiliki website resmi dengan domain sendiri (seperti .com atau .id) langsung memancarkan impresi keseriusan dan legalitas yang jelas dibandingkan bisnis yang hanya mengandalkan profil media sosial.</p>
      <p>Website memberikan ruang tanpa distraksi bagi calon klien untuk membaca profil perusahaan, portfolio proyek terdahulu, serta testimoni pelanggan tanpa terganggu oleh iklan kompetitor atau konten video acak.</p>

      <h2>2. Kendali Penuh atas Aset dan Informasi Bisnis</h2>
      <p>Akun media sosial tunduk pada algoritma, kebijakan, dan risiko perubahan platform pihak ketiga. Berbeda halnya dengan website sendiri, di mana Anda memiliki kendali penuh atas susunan halaman, kombinasi warna, pesan komunikasi, hingga tombol aksi pelanggan.</p>
      <p>Anda dapat menata struktur informasi sesuai kebutuhan audiens: menampilkan daftar harga secara transparan, mencantumkan kontak darurat, atau memandu calon pembeli langsung ke chat WhatsApp tanpa perantara yang rumit.</p>

      <h2>3. Mempermudah Calon Pelanggan Lokal Menemukan Bisnis Anda</h2>
      <p>Dengan optimasi SEO lokal dasar dan pendaftaran profil usaha, website membantu bisnis Anda muncul saat warga sekitar mencari kata kunci layanan di wilayah Anda (misalnya: jasa servis, klinik kesehatan, toko retail, atau sewa armada).</p>
      <p>Pelanggan lokal dapat langsung melihat rute lokasi via peta digital, memeriksa jam operasional, serta menghubungi layanan pelanggan dalam sekali ketukan tombol.</p>

      <h2>4. Saluran Penjualan dan Konsultasi Aktif 24 Jam</h2>
      <p>Meskipun jam kerja operasional kantor Anda telah usai, website bisnis tetap bekerja memperkenalkan produk dan portofolio Anda kepada pengunjung kapan pun mereka mengaksesnya. Informasi yang jelas mempermudah calon pembeli memahami penawaran sehingga saat mereka menghubungi WhatsApp, mereka sudah berada pada tahap siap bertransaksi.</p>
    `
  },
  {
    id: 2,
    slug: "cara-mempercepat-website-di-smartphone",
    title: "Panduan Mempercepat Akses Website agar Nyaman Dibuka di HP",
    category: "Tips Teknis",
    date: "14 Oktober 2026",
    dateIso: "2026-10-14",
    author: "Tim AURA GLOBAL",
    authorRole: "Front-End Engineer",
    readTime: "5 menit baca",
    coverImage: "/assets/blog-cover-2.svg",
    excerpt: "Sebagian besar pengunjung internet di Indonesia mengakses website melalui smartphone. Simak teknik praktis optimasi aset dan struktur kode agar halaman terbuka ringan tanpa jeda.",
    lead: "Kecepatan akses di layar ponsel merupakan salah satu faktor utama yang menentukan apakah pengunjung akan bertahan membaca penawaran Anda atau langsung menutup halaman karena merasa waktu tunggu terlalu lama.",
    content: `
      <h2>1. Konversi Format Gambar ke WebP atau AVIF</h2>
      <p>Aset visual foto produk atau banner seringkali menjadi penyebab utama halaman terasa lambat jika masih berformat PNG atau JPG tanpa kompresi yang tepat. Format modern seperti WebP mampu mengurangi ukuran byte file secara signifikan tanpa menurunkan kejernihan visual secara kasat mata.</p>
      <p>Pastikan juga untuk menyertakan atribut width dan height eksplisit pada tag gambar agar browser dapat mengalokasikan ruang tampilan sejak awal dan mencegah pergeseran tata letak (layout shift) saat gambar sedang dimuat.</p>

      <h2>2. Hindari Tumpukan Plugin Pihak Ketiga yang Berlebihan</h2>
      <p>Setiap script atau widget pihak ketiga yang disematkan ke dalam website menambah jumlah permintaan jaringan (HTTP request) dan beban eksekusi CPU ponsel. Pilihlah solusi kode bersih (vanilla HTML/CSS/JS) untuk kebutuhan dasar seperti menu drawer, akordeon, dan modal interaktif.</p>
      <p>Pendekatan penulisan kode semantik terstruktur memastikan performa browser ponsel tetap ringan, baterai pengguna lebih hemat, dan navigasi terasa instan.</p>

      <h2>3. Terapkan Font Display Swap dan Preload Aset Kunci</h2>
      <p>Saat menggunakan font tipografi kustom, gunakan konfigurasi font-display: swap agar teks tetap dapat dibaca seketika menggunakan font sistem cadangan selagi file font utama diunduh di latar belakang.</p>
      <p>Selain itu, gunakan tag link rel="preconnect" ke penyedia font untuk memangkas waktu jabat tangan koneksi (connection handshake) di awal pemuatan halaman.</p>

      <h2>4. Uji Berkala Menggunakan Alat Pengukur Performa</h2>
      <p>Lakukan pemeriksaan berkala performa website menggunakan alat standar pengembang seperti Google PageSpeed Insights atau Lighthouse. Perhatikan metrik Core Web Vitals seperti Largest Contentful Paint (LCP) dan Cumulative Layout Shift (CLS) agar pengalaman pengunjung tetap terjaga prima.</p>
    `
  },
  {
    id: 3,
    slug: "persiapan-sebelum-membuat-website-bisnis",
    title: "Hal Penting yang Perlu Disiapkan Sebelum Memesan Jasa Website",
    category: "Panduan Klien",
    date: "14 Oktober 2026",
    dateIso: "2026-10-14",
    author: "Tim AURA GLOBAL",
    authorRole: "Creative Director",
    readTime: "4 menit baca",
    coverImage: "/assets/blog-cover-3.svg",
    excerpt: "Mempersiapkan materi bisnis sejak awal membuat proses pembuatan website berjalan jauh lebih cepat, hemat waktu revisi, dan menghasilkan tampilan yang tepat sasaran.",
    lead: "Memesan jasa pembuatan website profesional akan terasa jauh lebih mudah dan memuaskan jika Anda telah memiliki gambaran materi serta tujuan bisnis yang ingin dicapai sejak tahap konsultasi awal.",
    content: `
      <h2>1. Tentukan Tujuan Utama dan Profil Calon Pembeli</h2>
      <p>Langkah pertama adalah menetapkan apa peran utama website bagi bisnis Anda saat ini: apakah sebagai company profile untuk memperkuat proposal tender, katalog produk dengan alur pemesanan WhatsApp, atau landing page fokus konversi untuk iklan berbayar.</p>
      <p>Memahami siapa target pengunjung yang ingin disasar akan membantu tim pengembang menyusun nada tulisan, tata letak seksi, dan penempatan tombol ajakan bertindak yang paling relevan.</p>

      <h2>2. Kumpulkan Materi Teks Ringkas dan Foto Asli</h2>
      <p>Website yang menampilkan foto asli produk, suasana tempat usaha, atau dokumentasi tim kerja selalu terlihat jauh lebih terpercaya dibanding website yang dipenuhi gambar stok umum (stock photo). Siapkan file logo beresolusi tajam, deskripsi singkat keunggulan usaha, dan rincian kontak resmi.</p>
      <p>Jika teks belum tersusun rapi, tim studio web profesional biasanya siap membantu menyunting dan menyusunnya menjadi kalimat yang nyaman dibaca oleh audiens.</p>

      <h2>3. Siapkan Referensi Desain yang Anda Sukai</h2>
      <p>Menyertakan 1 atau 2 contoh website yang Anda sukai dari segi kerapian, susunan warna, atau gaya tata letaknya akan mempermudah desainer menangkap selera estetika Anda secara akurat.</p>
      <p>Hal ini akan meminimalisir revisi berulang dan mempercepat waktu perancangan dari sketsa menuju versi website yang siap diuji coba.</p>

      <h2>4. Ketahui Nomor dan Alur Pelayanan Pelanggan</h2>
      <p>Pastikan nomor WhatsApp dan alamat email yang akan dihubungkan ke website adalah nomor aktif yang dipantau oleh admin atau staf layanan pelanggan. Respons cepat terhadap calon pembeli yang masuk dari website adalah kunci utama keberhasilan konversi penjualan bisnis Anda.</p>
    `
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { articles };
}

