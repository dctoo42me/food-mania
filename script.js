// Get the gallery element
const gallery = document.getElementById('gallery');
let isShiftPressed = false;

// Add event listener for mouseover
gallery.addEventListener('mouseover', function() {
  // Set flag to indicate Shift key is pressed
    isShiftPressed = true;
});

// Add event listener for mouseout
gallery.addEventListener('mouseout', function() {
  // Reset flag when mouse leaves the gallery
    isShiftPressed = false;
});

// Add event listener for mouse wheel
gallery.addEventListener('wheel', function(event) {
  // Check if the Shift key is pressed
    if (isShiftPressed) {
    // Prevent default scrolling behavior
    event.preventDefault();

    // Scroll the gallery horizontally based on the mouse wheel delta
    gallery.scrollLeft += event.deltaY;
}   
});

// Get gallery elements
// const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Attach event listener to each media element
const mediaElements = gallery.querySelectorAll('.media-element');
mediaElements.forEach(mediaElement => {
    mediaElement.addEventListener('click', function() {
        // Get the clicked image source
        const imgSrc = this.querySelector('img').src;
        
        // Display the lightbox with the clicked image
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

