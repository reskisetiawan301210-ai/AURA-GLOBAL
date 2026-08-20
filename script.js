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
    let pesan = `Halo AURA GLOBAL, saya tertarik untuk konsultasi mengenai pembuatan website.\n\nKetertarikan/Paket: ${jenisPesanan}`;
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
        title: "Brew & Bloom Cafe",
        category: "Cafe & Restaurant",
        description: "Website modern untuk bisnis cafe yang menampilkan visual produk secara estetis, informasi lokasi, galeri suasana, dan tombol pemesanan reservasi melalui WhatsApp.",
        concept: ["Minimalist", "Modern", "Warm"],
        features: ["Responsive Design", "Menu / Catalog", "Gallery", "WhatsApp Integration", "Location Maps"],
        platform: "Responsive Web (Desktop, Tablet, Mobile)",
        images: [
            "https://cdn.phototourl.com/free/2026-08-20-fa385ce3-95a1-492a-a1d8-4859817c10e6.png",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+2+-+Mobile+Homepage",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+3+-+Menu+Section",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+4+-+Contact+Section"
        ],
        waRef: "Desain Brew & Bloom Cafe"
    },
    2: {
        title: "Gentleman's Cut",
        category: "Barbershop",
        description: "Website clean dan maskulin untuk barbershop. Dirancang untuk memudahkan pelanggan melihat layanan, daftar harga, galeri gaya rambut, dan fitur booking janji temu langsung.",
        concept: ["Masculine", "Clean", "Premium"],
        features: ["Services & Pricing", "Stylist Profiles", "Booking / Contact", "Testimonials"],
        platform: "Responsive Web",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCQQO0tB_cRLPA8rIBUDWS4opmdNU5Cyn0qmZIJmkWrXComVBYUF-B2VRYbmCbaSfZdtXVJ3o0h0bF0D1_xOeJCAo2WTjSUiPXnMN9ACxm3lVIni9nMDaEe75TW5UHQXvqtggmWr4g5lvr7OrMZ1vH75ck4zZg0sQBC7CmWGaWHfFQVU-O4tUWatG65kCN5UqWBJGtNS8S8IZswYTPMipcNRQSUEbKWYuTpSLrgThHv_ni_ds5cal2f",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+2+-+Mobile+Homepage",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+3+-+Services"
        ],
        waRef: "Desain Gentleman's Cut Barbershop"
    },
    3: {
        title: "Klin Wash Laundry",
        category: "Laundry Service",
        description: "Website sederhana dan profesional untuk layanan laundry harian dan premium. Fokus pada penyampaian informasi yang jelas terkait harga, layanan antar-jemput, dan kontak.",
        concept: ["Fresh", "Clean", "Trustworthy"],
        features: ["Responsive Design", "Pricing Table", "Pickup Service Info", "WhatsApp Contact"],
        platform: "Responsive Web",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBmY87LmpdSWmfYn6HijrfKcQia_4Zvrr1pjzk7xeyTKD4TAtj_B9z3Zd5tfKp3oN4sgVZezMEiuUqRq4_yyRxGs3TX9txyI7wu9ZYpbPu7xMTwF4QTUGy7wmv6nGpIU9grk0ubGbOa08aC6W2rhC5CyYgLJ_YQW18wXQ7MGHuHma4Zg6JzEFTtUJgSqhHgA1uCtLTmWbQQ4QoiUDKZ4qnPjWTPbE4l-5GewQFtutZxiEDkKftR3m5s",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+2+-+Pricing+Table",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+3+-+Mobile+View"
        ],
        waRef: "Desain Klin Wash Laundry"
    },
    4: {
        title: "Rasa Nusantara",
        category: "Restoran / Catering",
        description: "Katalog menu digital interaktif untuk restoran berkelas. Menampilkan visual makanan beresolusi tinggi, informasi outlet cabang, jam operasional, dan pemesanan layanan katering.",
        concept: ["Elegant", "Cultural", "Appetizing"],
        features: ["Interactive Menu", "High-res Gallery", "Catering Contact", "Maps Integration"],
        platform: "Responsive Web",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC3vvj4j5vsUBeFiUEaTQ6V23oOLA7ttIkRS-V4qcrBnyx111uWvFj3pYYq0Z3pKCiYjcMDOIGH270-8PwP3tNxztg2v3Tq7nUF03ymrDEzADutE4pioWIA_l9iQY357yIsezzk2uMndxcU3Sfq7IGEgm6XLD_cyXwpqeG1or9zuJkPqExVrs4MkaOyZcLSfxqETCxJM6ETzQlcV3z38QG9Oy_PNzjPox4v0nJfEyB4L0mbCWLF2RJM",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+2+-+Menu+Details",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+3+-+Mobile+View",
            "https://dummyimage.com/1200x800/e4e0f5/5300b7&text=Image+4+-+Reservation"
        ],
        waRef: "Desain Rasa Nusantara"
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
