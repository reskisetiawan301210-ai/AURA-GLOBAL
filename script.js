/**
 * script.js — AURA GLOBAL Digital Web Studio
 * Interactive behaviors, accessible modal, navigation, and conversion handlers.
 */

// ----------------------------------------------------
// 1. SCROLL & NAVBAR DYNAMICS
// ----------------------------------------------------
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled-nav");
    } else {
      navbar.classList.remove("scrolled-nav");
    }
  }
}, { passive: true });

// ----------------------------------------------------
// 2. WHATSAPP CONVERSION HANDLERS
// ----------------------------------------------------
const AURA_WA_NUMBER = "6285861510159";

function openWhatsApp(topic) {
  let pesan = `Halo AURA GLOBAL, saya ingin konsultasi mengenai pembuatan website untuk bisnis saya (${topic}).`;
  if (!topic || topic === "konsultasi umum") {
    pesan = "Halo AURA GLOBAL, saya ingin konsultasi gratis mengenai pembuatan website untuk bisnis saya.";
  }
  const urlEncoded = encodeURIComponent(pesan);
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${AURA_WA_NUMBER}&text=${urlEncoded}`;
  window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
}

function handleContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "";
  const email = document.getElementById("contactEmail") ? document.getElementById("contactEmail").value.trim() : "";
  const service = document.getElementById("contactService") ? document.getElementById("contactService").value : "";
  const message = document.getElementById("contactMessage") ? document.getElementById("contactMessage").value.trim() : "";

  let waText = `Halo AURA GLOBAL, saya ${name} (${email}).`;
  if (service) waText += ` Saya tertarik dengan layanan ${service}.`;
  if (message) waText += ` Rencana proyek: "${message}".`;

  const urlEncoded = encodeURIComponent(waText);
  const link = `https://api.whatsapp.com/send?phone=${AURA_WA_NUMBER}&text=${urlEncoded}`;

  // Tampilkan notifikasi konfirmasi di form
  const alertBox = document.getElementById("contactAlert");
  if (alertBox) {
    alertBox.classList.remove("hidden");
    alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Buka WhatsApp di tab baru
  window.open(link, "_blank", "noopener,noreferrer");
}

// ----------------------------------------------------
// 3. VERIFIED PORTFOLIO DATA & MODAL
// ----------------------------------------------------
const portfolioData = {
  1: {
    title: "Danih Konstruksi",
    subtitle: "Website Profil Perusahaan & Sewa Alat Berat",
    category: "Company Profile",
    description: "Website profil perusahaan dan katalog alat berat profesional untuk PT/CV konstruksi. Dirancang untuk meningkatkan kredibilitas penawaran proyek, memamerkan armada alat berat, dan mempermudah calon klien menghubungi via WhatsApp.",
    url: "https://danieh-konstruksi.vercel.app",
    concept: ["Kredibel & Korporat", "Katalog Terstruktur", "Fokus Konversi WA"],
    features: [
      "Katalog Sewa Alat Berat Lengkap",
      "Profil Perusahaan & Keunggulan Layanan",
      "Panggilan Cepat via WhatsApp",
      "Desain Responsif Mobile & Desktop",
      "Formulir Permintaan Penawaran"
    ],
    platform: "Responsive Web (Vercel Live)",
    image: "assets/portfolio-company.jpg",
    waRef: "Website Company Profile (Referensi Danih Konstruksi)"
  },
  2: {
    title: "Noiré Café",
    subtitle: "Website Specialty Coffee & Restoran",
    category: "Cafe & Dining",
    description: "Website elegan bertema dark luxury untuk cafe & bistro artisan. Menampilkan pengalaman visual menu kopi dan hidangan, atmosfer tempat, jam operasional, serta integrasi tombol reservasi meja.",
    url: "https://noirecafe.vercel.app",
    concept: ["Dark Luxury Minimalist", "Interaktif", "Estetik Eksklusif"],
    features: [
      "Katalog Menu Makanan & Minuman Interaktif",
      "Galeri Suasana & Ambience Cafe",
      "Animasi Pembuka Logo Eksklusif",
      "Tombol Reservasi Meja Cepat",
      "Petunjuk Lokasi & Jam Buka Terang"
    ],
    platform: "Responsive Web (Vercel Live)",
    image: "assets/portfolio-cafe.jpg",
    waRef: "Website Cafe & Resto (Referensi Noiré Café)"
  },
  3: {
    title: "Velora Drive",
    subtitle: "Website Rental Mobil Eksekutif & Travel",
    category: "Rental & Mobility",
    description: "Website premium untuk jasa rental mobil eksekutif dan layanan private chauffeur. Menampilkan jajaran armada mobil berkelas, transparansi paket sewa, dan sistem reservasi instan.",
    url: "https://veloradrive.vercel.app",
    concept: ["Premium Mobility", "Transparan", "Modern & Cepat"],
    features: [
      "Katalog Armada Kendaraan Mewah",
      "Daftar Tarif Sewa Harian & Mingguan",
      "Layanan Private Chauffeur & Drop-off",
      "Integrasi Booking Langsung ke WhatsApp",
      "Jaminan Keamanan & Testimoni Pelanggan"
    ],
    platform: "Responsive Web (Vercel Live)",
    image: "assets/portfolio-rental.jpg",
    waRef: "Website Rental Mobil (Referensi Velora Drive)"
  },
  4: {
    title: "Citumang Rafting",
    subtitle: "Website Wisata Alam & Body Rafting Pangandaran",
    category: "Pariwisata & Outdoor",
    description: "Website paket wisata alam dan body rafting di Citumang Pangandaran. Menyajikan detail paket petualangan, jaminan keamanan pemandu berlisensi, galeri kegiatan, serta pemesanan tiket grup secara praktis.",
    url: "https://citumangrafting.vercel.app",
    concept: ["Segar & Menarik", "Transparansi Paket", "Booking Rombongan Cepat"],
    features: [
      "Pilihan Paket Wisata & Rincian Fasilitas",
      "Informasi Pemandu & Standar Keamanan",
      "Galeri Petualangan Body Rafting",
      "Pemesanan Tiket Langsung via WhatsApp",
      "Petunjuk Rute & Tanya-Jawab Wisatawan"
    ],
    platform: "Responsive Web (Vercel Live)",
    image: "assets/portfolio-citumang.jpg",
    waRef: "Website Pariwisata (Referensi Citumang Rafting)"
  }
};

let currentPortfolioId = null;

function openPortfolioModal(id) {
  const data = portfolioData[id];
  if (!data) return;

  currentPortfolioId = id;

  const modal = document.getElementById("portfolioModal");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDesc = document.getElementById("modalDesc");
  const modalPlatform = document.getElementById("modalPlatform");
  const modalLiveLink = document.getElementById("modalLiveLink");
  const modalConcept = document.getElementById("modalConcept");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalImg = document.getElementById("modalImg");
  const modalCTA = document.getElementById("modalCTA");

  if (modalTitle) modalTitle.innerText = data.title;
  if (modalSubtitle) modalSubtitle.innerText = data.subtitle;
  if (modalCategory) modalCategory.innerText = data.category;
  if (modalDesc) modalDesc.innerText = data.description;
  if (modalPlatform) modalPlatform.innerText = data.platform;

  if (modalLiveLink) {
    modalLiveLink.href = data.url;
    modalLiveLink.innerText = data.url.replace("https://", "");
  }

  if (modalConcept) {
    modalConcept.innerHTML = data.concept
      .map(c => `<span class="bg-[#F3EEFC] text-[#5300B7] text-xs font-bold px-3 py-1 rounded-full border border-purple-100">${c}</span>`)
      .join("");
  }

  if (modalFeatures) {
    modalFeatures.innerHTML = data.features
      .map(f => `<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check_circle</span> <span>${f}</span></li>`)
      .join("");
  }

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = `${data.title} - Tampilan Website`;
  }

  if (modalCTA) {
    modalCTA.setAttribute("onclick", `openWhatsApp('${data.waRef}')`);
  }

  document.body.classList.add("modal-open");
  if (modal) {
    modal.classList.remove("pointer-events-none", "opacity-0");
  }
  if (modalContent) {
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
  }
}

function closePortfolioModal() {
  const modal = document.getElementById("portfolioModal");
  const modalContent = document.getElementById("modalContent");

  if (modal) modal.classList.add("opacity-0");
  if (modalContent) {
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");
  }

  setTimeout(() => {
    if (modal) modal.classList.add("pointer-events-none");
    document.body.classList.remove("modal-open");
  }, 250);
}

// ----------------------------------------------------
// 4. KEYBOARD & ACCESSIBILITY
// ----------------------------------------------------
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("portfolioModal");
  if (modal && !modal.classList.contains("opacity-0")) {
    if (e.key === "Escape") {
      closePortfolioModal();
    }
  }
});

// ----------------------------------------------------
// 5. MOBILE DRAWER MENU
// ----------------------------------------------------
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  if (!mobileMenu) return;

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    if (menuIcon) menuIcon.innerText = "close";
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  if (!mobileMenu) return;

  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  if (menuIcon) menuIcon.innerText = "menu";
}
