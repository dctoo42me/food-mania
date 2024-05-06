const galleryContainer = document.querySelector('.gallery-container');

// Function to handle mouse wheel scrolling
function handleMouseWheel(event) {
    // Adjust the scrollLeft property based on the mouse wheel delta
    galleryContainer.scrollLeft += event.deltaY;
    
    // Prevent the default scrolling behavior of the page
    event.preventDefault();
}

// Add event listener for mouse wheel scrolling when hovering over the gallery container
galleryContainer.addEventListener('wheel', handleMouseWheel);

// Remove event listener for mouse wheel scrolling when not hovering over the gallery container
galleryContainer.addEventListener('mouseleave', function() {
    galleryContainer.removeEventListener('wheel', handleMouseWheel);
});
