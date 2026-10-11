/**
 * script.js — AURA GLOBAL Digital Web Studio
 * Progressive enhancement for navigation, portfolio filtering, accessible lightbox modal, and WhatsApp conversion.
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

  const alertBox = document.getElementById("contactAlert");
  if (alertBox) {
    alertBox.classList.remove("hidden");
    alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  window.open(link, "_blank", "noopener,noreferrer");
}

// ----------------------------------------------------
// 3. PORTFOLIO FILTER TABS (Editorial Filter)
// ----------------------------------------------------
let activeCategory = "all";

function filterPortfolio(category, eventTarget) {
  activeCategory = category;
  
  // Update active state tab buttons
  const tabButtons = document.querySelectorAll(".portfolio-tab-btn");
  tabButtons.forEach(btn => {
    btn.classList.remove("text-primary", "border-primary", "font-bold");
    btn.classList.add("text-body", "border-transparent", "font-semibold");
  });

  if (eventTarget) {
    eventTarget.classList.remove("text-body", "border-transparent", "font-semibold");
    eventTarget.classList.add("text-primary", "border-primary", "font-bold");
  }

  // Filter cards
  const cards = document.querySelectorAll(".portfolio-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      card.classList.add("animate-fade-in-up");
    } else {
      card.style.display = "none";
      card.classList.remove("animate-fade-in-up");
    }
  });
}

// ----------------------------------------------------
// 4. ACCESSIBLE PORTFOLIO LIGHTBOX MODAL
// ----------------------------------------------------
let currentPortfolioIndex = 0;
let lastFocusedElement = null;

function getPublishedItems() {
  if (typeof portfolioItems !== "undefined" && Array.isArray(portfolioItems)) {
    return portfolioItems.filter(item => item.published !== false);
  }
  return [];
}

function openPortfolioModal(id, triggerElement) {
  const items = getPublishedItems();
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return;

  currentPortfolioIndex = index;
  lastFocusedElement = triggerElement || document.activeElement;

  populateModalData(items[currentPortfolioIndex]);

  const modal = document.getElementById("portfolioModal");
  const modalContent = document.getElementById("modalContent");

  document.body.classList.add("modal-open");
  if (modal) {
    modal.classList.remove("pointer-events-none", "opacity-0");
  }
  if (modalContent) {
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
  }

  // Focus close button inside modal
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn) closeBtn.focus();
}

function populateModalData(data) {
  if (!data) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDesc = document.getElementById("modalDesc");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalTech = document.getElementById("modalTech");
  const modalImg = document.getElementById("modalImg");
  const modalCTA = document.getElementById("modalCTA");
  const modalExternalLink = document.getElementById("modalExternalLink");
  const modalCounter = document.getElementById("modalCounter");

  if (modalTitle) modalTitle.innerText = data.title;
  if (modalSubtitle) modalSubtitle.innerText = data.subtitle || data.category;
  if (modalCategory) modalCategory.innerText = data.badge || "Proyek Website";
  if (modalDesc) modalDesc.innerText = data.detailDescription || data.description;

  const items = getPublishedItems();
  if (modalCounter) {
    modalCounter.innerText = `${currentPortfolioIndex + 1} / ${items.length}`;
  }

  if (modalFeatures && Array.isArray(data.features)) {
    modalFeatures.innerHTML = data.features
      .map(f => `<li class="flex items-center gap-2 text-xs text-body"><span class="material-symbols-outlined text-[16px] text-primary">check_circle</span> <span>${f}</span></li>`)
      .join("");
  }

  if (modalTech && Array.isArray(data.tech)) {
    modalTech.innerHTML = data.tech
      .map(t => `<span class="bg-primary-light text-primary text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-primary-border">${t}</span>`)
      .join("");
  }

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.imageAlt || `${data.title} - Tampilan Website`;
  }

  // Handle external link button: ONLY show for proyek_asli with valid url
  if (modalExternalLink) {
    if (data.type === "proyek_asli" && data.url && data.url.startsWith("http")) {
      modalExternalLink.href = data.url;
      modalExternalLink.classList.remove("hidden");
      modalExternalLink.classList.add("inline-flex");
    } else {
      modalExternalLink.classList.add("hidden");
      modalExternalLink.classList.remove("inline-flex");
    }
  }

  if (modalCTA) {
    modalCTA.setAttribute("onclick", `openWhatsApp('${data.waRef || data.title}')`);
  }
}

function navigateModal(direction) {
  const items = getPublishedItems();
  if (items.length === 0) return;

  currentPortfolioIndex += direction;
  if (currentPortfolioIndex >= items.length) currentPortfolioIndex = 0;
  if (currentPortfolioIndex < 0) currentPortfolioIndex = items.length - 1;

  populateModalData(items[currentPortfolioIndex]);
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
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }, 250);
}

// ----------------------------------------------------
// 5. KEYBOARD ACCESSIBILITY & SWIPE
// ----------------------------------------------------
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("portfolioModal");
  if (modal && !modal.classList.contains("opacity-0")) {
    if (e.key === "Escape") {
      closePortfolioModal();
    } else if (e.key === "ArrowRight") {
      navigateModal(1);
    } else if (e.key === "ArrowLeft") {
      navigateModal(-1);
    }
  }
});

// Touch swipe logic for modal
let touchStartX = 0;
let touchEndX = 0;
const modalContainer = document.getElementById("portfolioModal");

if (modalContainer) {
  modalContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modalContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      navigateModal(1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      navigateModal(-1);
    }
  }, { passive: true });
}

// ----------------------------------------------------
// 6. MOBILE DRAWER MENU
// ----------------------------------------------------
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const menuIconPath = document.getElementById("menu-icon-path");
  if (!mobileMenu) return;

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    if (menuIcon) menuIcon.innerText = "close";
    if (menuIconPath) menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const menuIconPath = document.getElementById("menu-icon-path");
  if (!mobileMenu) return;

  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  if (menuIcon) menuIcon.innerText = "menu";
  if (menuIconPath) menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
}

