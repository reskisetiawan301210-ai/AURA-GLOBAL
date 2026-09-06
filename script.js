// script.js

// ----------------------------------------------------
// 1. FUNGSI SCROLL & NAVBAR
// ----------------------------------------------------
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = (elementRect - bodyRect) - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

// ----------------------------------------------------
// 2. FUNGSI WHATSAPP
// ----------------------------------------------------
function openWhatsApp(jenisPesanan) {
    const nomorWA = "6285861510159"; 
    let pesan = `Halo AURA GLOBAL, saya tertarik dengan ${jenisPesanan}. Saya ingin konsultasi mengenai website untuk bisnis saya.`;
    const urlEncoded = encodeURIComponent(pesan);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${urlEncoded}`;
    window.open(linkWhatsApp, '_blank');
}


// ----------------------------------------------------
// 3. INTERACTIVE PORTFOLIO GALLERY (MODAL)
// ----------------------------------------------------

// Data individual untuk masing-masing portfolio
const portfolioData = {
    1: {
        title: "Website Company Profile",
        category: "Company Profile",
        description: "Website profesional untuk memperkenalkan bisnis, layanan, dan informasi perusahaan.",
        url: "https://danieh-konstruksi.vercel.app",
        concept: ["Professional", "Corporate", "Trustworthy"],
        features: ["Company Overview", "Services & Heavy Equipment Catalog", "Responsive Design", "WhatsApp Quick Contact", "Location & Inquiry"],
        platform: "Responsive Web (Desktop, Tablet, Mobile)",
        images: [
            "assets/portfolio-company.jpg"
        ],
        waRef: "Website Company Profile"
    },
    2: {
        title: "Website Cafe & Resto",
        category: "Cafe & Resto",
        description: "Website elegan untuk menampilkan menu, informasi cafe, dan memudahkan pelanggan melakukan pemesanan.",
        url: "https://noirecafe.vercel.app",
        concept: ["Minimalist", "Modern", "Warm"],
        features: ["Interactive Food & Drink Menu", "Atmosphere Gallery", "Table Reservation", "WhatsApp Order", "Location Maps"],
        platform: "Responsive Web (Desktop, Tablet, Mobile)",
        images: [
            "assets/portfolio-cafe.jpg"
        ],
        waRef: "Website Cafe & Resto"
    },
    3: {
        title: "Website Rental Mobil",
        category: "Car Rental & Travel",
        description: "Website modern untuk menampilkan kendaraan, layanan rental, dan memudahkan pelanggan melakukan booking.",
        url: "https://veloradrive.vercel.app",
        concept: ["Modern", "Dynamic", "Premium"],
        features: ["Vehicle Fleet Catalog", "Booking & Reservation System", "Transparent Pricing", "WhatsApp Fast Response", "Customer Reviews"],
        platform: "Responsive Web (Desktop, Tablet, Mobile)",
        images: [
            "assets/portfolio-rental.jpg"
        ],
        waRef: "Website Rental Mobil"
    }
};

let currentPortfolioId = null;
let currentImageIndex = 0;

const modal = document.getElementById('portfolioModal');
const modalContent = document.getElementById('modalContent');
const modalImg = document.getElementById('modalImg');
const modalCounter = document.getElementById('modalCounter');

function openPortfolioModal(id) {
    const data = portfolioData[id];
    if (!data) return;

    currentPortfolioId = id;
    currentImageIndex = 0;

    // Populate Texts
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCategory').innerText = data.category;
    document.getElementById('modalDesc').innerText = data.description;
    document.getElementById('modalPlatform').innerText = data.platform;
    
    // Inject Concept Tags
    const conceptContainer = document.getElementById('modalConcept');
    conceptContainer.innerHTML = data.concept.map(c => 
        `<span class="bg-secondary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full">${c}</span>`
    ).join('');

    // Inject Features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = data.features.map(f => 
        `<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> ${f}</li>`
    ).join('');

    // Setup CTA Button
    document.getElementById('modalCTA').setAttribute('onclick', `openWhatsApp('${data.waRef}')`);

    // Load First Image
    updateImageDisplay();

    // Show Modal
    document.body.classList.add('modal-open'); // Prevent body scroll
    modal.classList.remove('pointer-events-none');
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
}

function closePortfolioModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        document.body.classList.remove('modal-open');
    }, 300); // Matches CSS transition duration
}

function changeModalImage(direction) {
    if (!currentPortfolioId) return;
    const images = portfolioData[currentPortfolioId].images;
    
    currentImageIndex += direction;
    
    // Circular navigation
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    
    updateImageDisplay();
}

function updateImageDisplay() {
    const images = portfolioData[currentPortfolioId].images;
    
    // Smooth crossfade effect
    modalImg.style.opacity = '0';
    setTimeout(() => {
        modalImg.src = images[currentImageIndex];
        modalCounter.innerText = `${currentImageIndex + 1} / ${images.length}`;
        modalImg.style.opacity = '1';
    }, 150);
}

// ----------------------------------------------------
// 4. MODAL SWIPE & KEYBOARD ACCESSIBILITY
// ----------------------------------------------------

// Swipe Mobile Logic
let touchstartX = 0;
let touchendX = 0;
const galleryContainer = document.getElementById('galleryContainer');

galleryContainer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
}, {passive: true});

galleryContainer.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const swipeThreshold = 40; // minimum pixels to trigger swipe
    if (touchendX < touchstartX - swipeThreshold) {
        changeModalImage(1); // Swipe Left -> Next
    }
    if (touchendX > touchstartX + swipeThreshold) {
        changeModalImage(-1); // Swipe Right -> Prev
    }
}

// Keyboard Navigation (ESC to close, Arrows to slide)
document.addEventListener('keydown', (e) => {
    // Check if modal is currently open
    if (!modal.classList.contains('opacity-0')) {
        if (e.key === 'Escape') {
            closePortfolioModal();
        } else if (e.key === 'ArrowRight') {
            changeModalImage(1);
        } else if (e.key === 'ArrowLeft') {
            changeModalImage(-1);
        }
    }
});

// ----------------------------------------------------
// 5. MOBILE MENU FUNCTIONS
// ----------------------------------------------------
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        menuIcon.innerText = 'close';
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuIcon.innerText = 'menu';
}
