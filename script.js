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

// Add event listener to the document body for touch events
document.body.addEventListener('touchstart', function(event) {
    // Check if the touch event target is outside of the lightbox image
    if (lightbox.contains(event.target)) {
        // If outside, close the lightbox
        lightbox.style.display = 'none';
        lightboxOverlay.classList.remove('lightbox-open');
        document.body.style.overflow = ''; // Restore scrolling
    }
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
// function toggleMenu() {
//     const hamburger = document.querySelector('.hamburger-menu');
//     hamburger.classList.toggle('active');
// }

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

// Toggle mobile menu when hamburger menu is clicked
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
 // Toggle the mobile menu
    mobileMenu.classList.toggle('active');
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

//phone link user confirmation
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('call-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        var userConfirmed = confirm('Do you want to call (956) 226-2146?');
        if (userConfirmed) {
            window.location.href = this.href; // Redirect to the phone link if user confirmed
        }
    });
});

//swipe right to close the menu by certain amt of pixels
document.addEventListener('DOMContentLoaded', function() {
    let startX;
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    mobileMenu.addEventListener('touchmove', function(e) {
        if (!startX) return;

        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        if (diffX > 50) { // Adjust this value to set the swipe threshold
            toggleMenu();
            startX = null;
        }
    });

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }
});

// Reviews Section
// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.carousel-inner');
//     const reviews = document.querySelectorAll('.review');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     let currentIndex = 0;
//     let startX;
//     let endX;

//     function updateCarousel() {
//         const offset = -currentIndex * 100;
//         carousel.style.transform = `translateX(${offset}%)`;
//     }

//     prevButton.addEventListener('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = reviews.length - 1;
//         }
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', function() {
//         if (currentIndex < reviews.length - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     });

//     // Touch event handlers
//     carousel.addEventListener('touchstart', function(event) {
//         startX = event.touches[0].clientX;
//     });

//     carousel.addEventListener('touchmove', function(event) {
//         endX = event.touches[0].clientX;
//     });

//     carousel.addEventListener('touchend', function() {
//         const threshold = 50; // Minimum swipe distance to trigger a slide change
//         if (startX - endX > threshold) {
//             // Swipe left (next)
//             if (currentIndex < reviews.length - 1) {
//                 currentIndex++;
//             } else {
//                 currentIndex = 0;
//             }
//         } else if (endX - startX > threshold) {
//             // Swipe right (prev)
//             if (currentIndex > 0) {
//                 currentIndex--;
//             } else {
//                 currentIndex = reviews.length - 1;
//             }
//         }
//         updateCarousel();
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const reviews = document.querySelectorAll('.review');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    let autoScrollInterval;

    function updateCarousel() {
        const width = reviews[0].offsetWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(function() {
            if (currentIndex < reviews.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 10000); // Change every 10 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    prevButton.addEventListener('click', function() {
        stopAutoScroll();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
        startAutoScroll();
    });

    nextButton.addEventListener('click', function() {
        stopAutoScroll();
        if (currentIndex < reviews.length - 1) {
            currentIndex++;
            updateCarousel();
        }
        startAutoScroll();
    });

    let xDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
    }

    function handleTouchMove(evt) {
        if (!xDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;

        if (Math.abs(xDiff) > 50) { // Minimum threshold to consider it a swipe
            stopAutoScroll();
            if (xDiff > 0) {
                // swiped left
                if (currentIndex < reviews.length - 1) {
                    currentIndex++;
                }
            } else {
                // swiped right
                if (currentIndex > 0) {
                    currentIndex--;
                }
            }
            updateCarousel();
            xDown = null; // Reset swipe tracking
            startAutoScroll();
        }
    }

    carouselInner.addEventListener('touchstart', function(evt) {
        handleTouchStart(evt);
    }, false);

    carouselInner.addEventListener('touchmove', function(evt) {
        evt.preventDefault(); // Prevent default scrolling
        handleTouchMove(evt);
    }, false);

    window.addEventListener('resize', updateCarousel);

    // Start auto-scroll when the page loads
    startAutoScroll();
});

// Share Button

document.getElementById('shareButton').addEventListener('click', function() {
    // Get the current page URL
    var homepageUrl = 'https://dctoo42me.github.io/food-mania';

    // Check if the Web Share API is supported by the browser
    if (navigator.share) {
        navigator.share({
            title: 'Check out this awesome Food Truck!',
            url: homepageUrl
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support Web Share API
        alert('Sharing not supported in this browser.');
    }
});
