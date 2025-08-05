const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle main mobile menu
mobileMenuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('mobile-active');
    mobileMenuToggle.classList.toggle('active');
});

// ===== Social Media Toggle =====
const socialToggle = document.getElementById('socialToggle'); // The clickable "Social Media" button
const socialLinks = document.getElementById('socialLinks');   // The hidden social media list

socialToggle.addEventListener('click', function () {
    socialLinks.classList.toggle('open');
    // Optional: change arrow direction
    socialToggle.classList.toggle('active');
});