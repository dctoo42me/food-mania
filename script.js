const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const gallery = document.getElementById('gallery');
const mediaElements = gallery.querySelectorAll('.media-element');
const closeButton = document.querySelector('.close');
const lightboxOverlay = document.querySelector('.lightbox-overlay');


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

// Get the lightbox and lightbox image elements
// Attach event listener to each media element
mediaElements.forEach(mediaElement => {
    mediaElement.addEventListener('click', function() {
        // Get the clicked image source
        const imgSrc = this.querySelector('img').src;
        lightboxImg.src = imgSrc;
        // Display the lightbox with the clicked image
        lightbox.style.display = 'flex';
        lightboxOverlay.classList.add('lightbox-open');
        // Prevent scrolling
        document.body.style.overflow = 'hidden'; 
    });
});

// Close the lightbox when the close button is clicked
closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none';
    lightboxOverlay.classList.remove('lightbox-open');
    // Restore scrolling
    document.body.style.overflow = ''; 
});



// Close the lightbox when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxOverlay.classList.remove('lightbox-open');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Nav hamburger menu interaction
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('active');
}

// Function to toggle the display of hamburger menu and navigation menu
function toggleMenuDisplay() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainMenu = document.querySelector('.main-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Check the window width and toggle the display accordingly
    if (window.innerWidth <= 605) {
        hamburgerMenu.style.display = 'flex';
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
        mobileMenu.style.display = 'none';
        hamburgerMenu.style.display = 'none';
        hamburgerMenu.classList.remove('active');
         // Ensure navigation menu is hidden on resize
    }
}

// Call the function initially to set the initial display state
toggleMenuDisplay();

// Add event listener for window resize events
window.addEventListener('resize', toggleMenuDisplay);

// Toggle menu on window resize
window.addEventListener('resize', function() {
    const menu = document.getElementById('main-menu');
    if (window.innerWidth > 605) {
        menu.classList.remove('active');
    }
});

// Toggle mobile menu when hamburger menu is clicked
function toggleMenu() {
    const menu = document.querySelector('.main-menu');
    menu.classList.toggle('active');
    
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Toggle the mobile menu
}

//Scrolls to top of page
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-link');

    logo.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});