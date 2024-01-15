let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider img').length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic slideshow every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);
