
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.hamburger-menu') && !event.target.closest('nav')) {
        nav.classList.remove('show');
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://formspree.io/f/manyyyzw', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {

            document.getElementById('formMessage').innerHTML = '<p style="color: green;">Form submitted successfully!</p>';
            document.getElementById('contactForm').reset();

            document.getElementById('contactFormPopup').style.display = 'none';
        })
        .catch(error => {

            document.getElementById('formMessage').innerHTML = '<p style="color: red;">There was an error submitting the form. Please try again.</p>';
        });
});

function closeContactForm(event) {
    if (event.target === document.getElementById('contactFormPopup') || event.target.classList.contains('close-btn')) {
        document.getElementById('contactFormPopup').style.display = 'none';
    }
}

function showWeChatPopup() {
    document.getElementById("weChatPopup").style.display = "block";
}

function closeWeChatPopup(event) {
    if (event.target === document.getElementById("weChatPopup") || event.target.classList.contains('close-btn')) {
        document.getElementById("weChatPopup").style.display = "none";
    }
}

function showContactForm() {
    document.getElementById("contactFormPopup").style.display = "block";
}




function openModal(imageSrcArray) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = '';

    // Create img elements for each image source
    imageSrcArray.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "50%";
        img.style.margin = "10px";
        modalContent.appendChild(img);
    });

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of the image
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}




// const sections = document.querySelectorAll('.full-page');
// let currentSection = 0;
// const logo = document.querySelector('.logo');
// const navLinks = document.querySelectorAll('nav a');

// // Show the first section initially
// sections[currentSection].classList.add('active');

// let scrollDownArrow;
// let scrollUpArrow;


// window.addEventListener('wheel', (event) => {
//     event.preventDefault(); // Prevent default scroll behavior
//     if (event.deltaY > 0 && currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
//         currentSection++;
//         scrollToSection(currentSection);
//     } else if (event.deltaY < 0 && currentSection > 0) {
//         currentSection--;
//         scrollToSection(currentSection);
//     }
// }, { passive: false });



// function scrollToSection(sectionIndex) {
//     sections.forEach((section, index) => {
//         section.classList.remove('active');
//         if (index === sectionIndex) {
//             section.classList.add('active');

//             // Calculate the offset to center the section in the viewport
//             const sectionRect = section.getBoundingClientRect();
//             const sectionMidpoint = sectionRect.top + sectionRect.height / 2; // Midpoint of the section
//             const windowMidpoint = window.innerHeight / 2; // Midpoint of the window

//             // Calculate the scroll offset
//             const offset = sectionMidpoint - windowMidpoint;

//             // Scroll to the calculated position
//             window.scrollTo({
//                 top: window.scrollY + offset,
//                 behavior: 'smooth'
//             });

//             // Update styles and logo
//             if (index % 2 === 0) {
//                 document.body.style.backgroundColor = 'black';
//                 logo.style.color = '#b74b4b';
//                 logo.innerHTML = index === 0 ? 'Alexandre CARMINOT' : 'Alexandre<br>CARMINOT';
//                 updateNavLinkHoverColor('#b74b4b');
//             } else {
//                 document.body.style.backgroundColor = '#b74b4b';
//                 logo.style.color = 'black';
//                 logo.innerHTML = 'Alexandre<br>CARMINOT';
//                 updateNavLinkHoverColor('black');
//                 section.style.color = 'black';
//             }

//             // Reset and set up the scroll down and up arrows
//             scrollDownArrow = getScrollDownArrow(sectionIndex);
//             scrollUpArrow = getScrollUpArrow(sectionIndex);

//             // Remove any existing event listeners
//             if (scrollDownArrow) {
//                 scrollDownArrow.removeEventListener('click', scrollDownHandler);
//                 scrollDownArrow.addEventListener('click', scrollDownHandler);
//             }

//             if (scrollUpArrow) {
//                 scrollUpArrow.removeEventListener('click', scrollUpHandler);
//                 scrollUpArrow.addEventListener('click', scrollUpHandler);
//             }
//         }
//     });
// }


// // Scroll down handler
// function scrollDownHandler(event) {
//     event.preventDefault();
//     console.log('Scroll down arrow clicked');
//     if (currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
//         currentSection++;
//         scrollToSection(currentSection);
//     }
// }

// // Scroll up handler
// function scrollUpHandler(event) {
//     event.preventDefault();
//     console.log('Scroll up arrow clicked');
//     if (currentSection > 0) {
//         currentSection--;
//         scrollToSection(currentSection);
//     }
// }


// // Function to update navigation link hover color
// function updateNavLinkHoverColor(color) {
//     navLinks.forEach(link => {
//         link.style.setProperty('--hover-color', color);
//     });
// }

// // Logo click event
// logo.addEventListener('click', function (event) {
//     event.preventDefault();
//     currentSection = 0;
//     scrollToSection(currentSection);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     scrollToSection(currentSection);
// });

// function getScrollDownArrow(sectionIndex) {
//     return document.querySelector(`#section${sectionIndex} .scroll-down-arrow`);
// }

// function getScrollUpArrow(sectionIndex) {
//     return document.querySelector(`#section${sectionIndex} .scroll-up-arrow`);
// }


// // Variables to store touch start positions
// let touchStartY = 0;
// let touchEndY = 0;

// // Check if the user is on a mobile device
// const isMobile = window.matchMedia("(max-width: 768px)").matches;

// if (isMobile) {
//     // Add touch event listeners for mobile devices
//     window.addEventListener('touchstart', (event) => {
//         touchStartY = event.changedTouches[0].screenY; // Get the starting Y position
//     });

//     window.addEventListener('touchend', (event) => {
//         touchEndY = event.changedTouches[0].screenY; // Get the ending Y position
//         handleSwipe(); // Call the swipe handler
//     });
// }


// function handleSwipe() {
//     // Set sensitivity
//     const swipeSensitivity = currentSection === 0 ? 300 : 60;

//     if (touchStartY - touchEndY > swipeSensitivity && currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
//         // Swipe up to go to the next section
//         currentSection++;
//         scrollToSection(currentSection);
//     } else if (touchEndY - touchStartY > swipeSensitivity && currentSection > 0) {
//         // Swipe down to go to the previous section
//         currentSection--;
//         scrollToSection(currentSection);
//     }
// }


// // Function to check if the user is in the lower half of the current section
// function isInLowerHalf(sectionIndex) {
//     const section = sections[sectionIndex];
//     const sectionRect = section.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     // Check if the user has scrolled past the lower half of the current section
//     return sectionRect.top <= windowHeight  / 2;
// }

const sections = document.querySelectorAll('.full-page');
let currentSection = 0;
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('nav a');

sections[currentSection].classList.add('active');

let scrollStartY = 0; // Track the initial scroll position

// Check if the user is on a mobile device
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    // Mobile scrolling behavior
    window.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scroll behavior
        if (currentSection === 0) {
            handleSection0Scroll(event);
        } else if (currentSection >= 1 && currentSection <= 4) {
            handleSectionChange(event);
        }
    }, { passive: false });
    
    // Handle scroll for Section 0
    function handleSection0Scroll(event) {
        const scrollLimit = 2200; // Set scroll limit for Section 0

        // Check scroll direction and position
        if (event.deltaY > 0 && window.scrollY < scrollLimit) {
            // Scroll down, within limit
            window.scrollBy({
                top: event.deltaY,
                behavior: 'smooth'
            });
        } else if (event.deltaY < 0 && window.scrollY > 0) {
            // Scroll up, within limit
            window.scrollBy({
                top: event.deltaY,
                behavior: 'smooth'
            });
        } else if (window.scrollY >= scrollLimit) {
            // If limit reached, change to the next section
            changeSection(1);
        }
    }

    // Handle section changes for Sections 1 to 4
    function handleSectionChange(event) {
        if (Math.abs(event.deltaY) > 100) { // Change section if scrolled more than 100px
            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                changeSection(currentSection + 1);
            } else if (event.deltaY < 0 && currentSection > 0) {
                changeSection(currentSection - 1);
            }
        }
    }

} else {
    // Desktop scrolling behavior with arrows
    window.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scroll behavior
        if (currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
            currentSection++;
            scrollToSection(currentSection);
        } else if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }, { passive: false });
}

// Change section function
function changeSection(newSectionIndex) {
    if (newSectionIndex >= 0 && newSectionIndex < sections.length) {
        currentSection = newSectionIndex;
        scrollToSection(currentSection);
    }
}

// Scroll to section function
function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.remove('active');
        if (index === sectionIndex) {
            section.classList.add('active');
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });

            // Update styles and logo for the new section
            updateStylesForSection(sectionIndex);
        }
    });
}

// Update styles for the new section
function updateStylesForSection(index) {
    if (index % 2 === 0) {
        document.body.style.backgroundColor = 'black';
        logo.style.color = '#b74b4b';
        logo.innerHTML = index === 0 ? 'Alexandre CARMINOT' : 'Alexandre<br>CARMINOT';
        updateNavLinkHoverColor('#b74b4b');
    } else {
        document.body.style.backgroundColor = '#b74b4b';
        logo.style.color = 'black';
        logo.innerHTML = 'Alexandre<br>CARMINOT';
        updateNavLinkHoverColor('black');
    }
}

// Initialize first section on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    scrollToSection(currentSection);
});

// Ensure to maintain the rest of your existing code for functionality like logo clicks, touch events, etc.

// Add touch event listeners for mobile devices
window.addEventListener('touchstart', (event) => {
    touchStartY = event.changedTouches[0].screenY; // Get the starting Y position
});

window.addEventListener('touchend', (event) => {
    touchEndY = event.changedTouches[0].screenY; // Get the ending Y position
    handleSwipe(); // Call the swipe handler
});

// Function to check for swipe gestures
function handleSwipe() {
    const swipeSensitivity = currentSection === 0 ? 300 : 60;

    if (touchStartY - touchEndY > swipeSensitivity && currentSection < sections.length - 1) {
        // Swipe up to go to the next section
        currentSection++;
        scrollToSection(currentSection);
    } else if (touchEndY - touchStartY > swipeSensitivity && currentSection > 0) {
        // Swipe down to go to the previous section
        currentSection--;
        scrollToSection(currentSection);
    }
}

// Function to check if the user is in the lower half of the current section
function isInLowerHalf(sectionIndex) {
    const section = sections[sectionIndex];
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the user has scrolled past the lower half of the current section
    return sectionRect.top <= windowHeight / 2;
}
