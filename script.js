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


// Nav hamburger menu interaction
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('active');
}


// Close the lightbox when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

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
