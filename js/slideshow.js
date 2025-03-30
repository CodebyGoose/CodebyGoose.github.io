document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    slides.style.width = `${images.length * 100}%`;
    images.forEach(img => {
        img.style.width = `${100 / images.length}%`;
    });

    function updateSlide() {
        slides.style.transform = `translateX(-${currentSlide * (100 / images.length)}%)`;
    }

    prevBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateSlide();
    });

    nextBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlide();
    });

    updateSlide();
});
