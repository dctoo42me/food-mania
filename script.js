const galleryContainer = document.querySelector('.gallery-container');

let startX = 0;
let scrollLeft = 0;
let isScrolling = false;

galleryContainer.addEventListener('touchstart', (e) => {
    isScrolling = true;
    startX = e.touches[0].clientX - galleryContainer.offsetLeft;
    scrollLeft = galleryContainer.scrollLeft;
});

galleryContainer.addEventListener('touchmove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.touches[0].clientX - galleryContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    galleryContainer.scrollLeft = scrollLeft - walk;
});

galleryContainer.addEventListener('touchend', () => {
    isScrolling = false;
});
