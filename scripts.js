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




const sections = document.querySelectorAll('.full-page');
let currentSection = 0;
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('nav a');

// Show the first section initially
sections[currentSection].classList.add('active');

let scrollDownArrow;
let scrollUpArrow;

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    if (event.deltaY > 0 && currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}, { passive: false });



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
function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.remove('active');
        if (index === sectionIndex) {
            section.classList.add('active');

            // Calculate the offset to center the section in the viewport
            const sectionRect = section.getBoundingClientRect();
            const sectionMidpoint = sectionRect.top + sectionRect.height / 2; // Midpoint of the section
            const windowMidpoint = window.innerHeight / 2; // Midpoint of the window

            // Calculate the scroll offset to align the midpoint of the section with the midpoint of the window
            const offset = sectionMidpoint - windowMidpoint;

            // Scroll to the calculated position
            window.scrollTo({
                top: window.scrollY + offset,
                behavior: 'smooth'
            });

            // Update styles and logo
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
                section.style.color = 'black';
            }

            // Reset and set up the scroll down and up arrows
            scrollDownArrow = getScrollDownArrow(sectionIndex);
            scrollUpArrow = getScrollUpArrow(sectionIndex);

            // Remove any existing event listeners
            if (scrollDownArrow) {
                scrollDownArrow.removeEventListener('click', scrollDownHandler);
                scrollDownArrow.addEventListener('click', scrollDownHandler);
            }

            if (scrollUpArrow) {
                scrollUpArrow.removeEventListener('click', scrollUpHandler);
                scrollUpArrow.addEventListener('click', scrollUpHandler);
            }
        }
    });
}


// Scroll down handler
function scrollDownHandler(event) {
    event.preventDefault();
    console.log('Scroll down arrow clicked');
    if (currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
        currentSection++;
        scrollToSection(currentSection);
    }
}

// Scroll up handler
function scrollUpHandler(event) {
    event.preventDefault();
    console.log('Scroll up arrow clicked');
    if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}


// Function to update navigation link hover color
function updateNavLinkHoverColor(color) {
    navLinks.forEach(link => {
        link.style.setProperty('--hover-color', color)

    });
}

// Logo click event
logo.addEventListener('click', function (event) {
    event.preventDefault();
    currentSection = 0;
    scrollToSection(currentSection);
});

document.addEventListener('DOMContentLoaded', function () {
    scrollToSection(currentSection);
});

function getScrollDownArrow(sectionIndex) {
    return document.querySelector(`#section${sectionIndex} .scroll-down-arrow`);
}

function getScrollUpArrow(sectionIndex) {
    return document.querySelector(`#section${sectionIndex} .scroll-up-arrow`);
}


// Variables to store touch start positions
let touchStartY = 0;
let touchEndY = 0;

// Check if the user is on a mobile device
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    // Add touch event listeners for mobile devices
    window.addEventListener('touchstart', (event) => {
        touchStartY = event.changedTouches[0].screenY; // Get the starting Y position
    });

    window.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].screenY; // Get the ending Y position
        handleSwipe(); // Call the swipe handler
    });
}


function handleSwipe() {
    // Set sensitivity
    const swipeSensitivity = currentSection === 0 ? 200 : 60;

    if (touchStartY - touchEndY > swipeSensitivity && currentSection < sections.length - 1 && isInLowerHalf(currentSection)) {
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


// Add scroll event listener only for mobile
// Track last scroll position for scroll direction detection
let lastScrollY = window.scrollY;

if (isMobile) {
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;

        // Calculate mid-point of the viewport
        const midpoint = windowHeight / 2;

        sections.forEach((section, index) => {
            const sectionRect = section.getBoundingClientRect();

            // Check if we are in the first section
            if (currentSection === 0) {
                // For the first section, check if the user has scrolled past the 2/3 point of this section
                if (sectionRect.bottom < 2 * midpoint) {
                    // Move to the next section if the bottom of the first section is above the 2/3 mark
                    if (index === 0 && currentSection < sections.length - 1) {
                        currentSection++;
                        scrollToSection(currentSection);
                    }
                }
            } else {
                // Scrolling down (keep the current condition)
                if (sectionRect.top < midpoint && sectionRect.bottom > midpoint) {
                    if (index !== currentSection && window.scrollY > lastScrollY) { // Only trigger when scrolling down
                        currentSection = index;
                        scrollToSection(currentSection);
                    }
                }

                // Scrolling up (reduce threshold for faster section change)
                if (sectionRect.top < (midpoint * 1.5) && sectionRect.bottom > (midpoint * 1.5)) {
                    if (index !== currentSection && window.scrollY < lastScrollY) { // Only trigger when scrolling up
                        currentSection = index;
                        scrollToSection(currentSection);
                    }
                }
            }
        });

        // Update last scroll position after handling the scroll event
        lastScrollY = window.scrollY;
    });
}

// Ensure the first section is displayed on load
document.addEventListener('DOMContentLoaded', function () {
    scrollToSection(currentSection);
});
