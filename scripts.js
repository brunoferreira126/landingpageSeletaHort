document.addEventListener("DOMContentLoaded", () => {
    // Ativações do AOS
    AOS.init({
        duration: 800,
        once: true,
    });

    // Menu Hamburguer
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Fecha menu ao clicar em um link
    navLinks.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });

    // Navbar dinâmica com scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800, // Duração da animação
        once: true, // Executa apenas uma vez
    });
});
