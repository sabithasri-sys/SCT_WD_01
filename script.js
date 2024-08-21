document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // You can adjust this value based on when you want the effect to start
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
