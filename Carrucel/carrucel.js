let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    if (items.length === 0) return; // Verifica que haya elementos

    const itemWidth = items[0].offsetWidth + 20; // Considerando padding/margin entre tarjetas
    const visibleItems = Math.floor(carousel.parentElement.offsetWidth / itemWidth);

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > items.length - visibleItems) {
        currentIndex = items.length - visibleItems;
    }

    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    updateIndicators(); // Asegúrate de tener esta función si usas indicadores
}

// Si tienes indicadores, incluye la función para actualizarlos
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}
