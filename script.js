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
