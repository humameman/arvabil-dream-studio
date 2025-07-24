const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('mobile-active');
    mobileMenuToggle.classList.toggle('active');
});