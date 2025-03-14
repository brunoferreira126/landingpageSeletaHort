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

 // carrossel de produtos
 document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    let index = 0;
    let interval;

    function startCarousel() {
        interval = setInterval(() => {
            index = (index + 1) % slides.length;
            updateCarousel();
        }, 3000);
    }

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        clearInterval(interval);
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
        startCarousel();
    });

    nextBtn.addEventListener("click", () => {
        clearInterval(interval);
        index = (index + 1) % slides.length;
        updateCarousel();
        startCarousel();
    });

    startCarousel();
});
