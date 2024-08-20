// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background on scroll
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)'; // Add shadow effect
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
        navbar.style.boxShadow = 'none'; // Remove shadow
    }
});
