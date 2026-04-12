
// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
        }
    });
}, { threshold: 0.3 });
skillBars.forEach(bar => observer.observe(bar));


// Smooth scroll ONLY for internal anchor links (href starts with #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Ensure ALL external links (http, https, mailto) work properly
// This prevents any parent event handlers from interfering
document.querySelectorAll('a[href^="http"], a[href^="mailto"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevents parent handlers from blocking
        // Let the browser open the link normally
        return true;
    });
});

// Resume download function
function downloadResume() {
    alert('📄 Resume ready!\n\nTo complete setup:\n1. Replace placeholder photo with your image\n2. Upload your resume PDF and update the link in the code');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Ensure external links work properly
document.querySelectorAll('a[href^="http"], a[href^="mailto"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation();
        return true;
    });
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

function closeMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    if (mobileMenuBtn && window.innerWidth <= 768) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    // Re-enable body scroll
    document.body.style.overflow = '';
}

function openMenu() {
    if (navLinks) navLinks.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
    if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
    // Disable body scroll when menu is open
    if (window.innerWidth <= 768) {
        document.body.style.overflow = 'hidden';
    }
}

// Toggle menu when clicking hamburger button
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (navLinks && navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Close menu when clicking overlay
if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}

// Close menu when clicking ANY link inside nav-links
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            setTimeout(closeMenu, 300);
        });
    });
}

// Close menu on window resize if open
window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

// Resume download function
function downloadResume() {
    alert('📄 Resume ready!\n\nTo complete setup:\n1. Replace placeholder photo with your image\n2. Upload your resume PDF and update the link in the code');
}

// Attach to all resume buttons
const resumeNav = document.getElementById('resumeNavBtn');
const resumeHero = document.getElementById('resumeBtnHero');
if (resumeNav) resumeNav.addEventListener('click', downloadResume);
if (resumeHero) resumeHero.addEventListener('click', downloadResume);

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}