
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

    // Clear previous images
    modalContent.innerHTML = '';

    // Create img elements for each image source
    imageSrcArray.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "50%"; // Set width
        img.style.margin = "10px"; // Space between images
        modalContent.appendChild(img);
    });

    modal.style.display = "block"; // Display the modal
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

function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.remove('active');
        if (index === sectionIndex) {
            section.classList.add('active');
            section.scrollIntoView({
                behavior: 'smooth' // Ensure smooth behavior is specified here
            });
        }
    });
}

// section changes the logo and nav links color based on the section index
const sections = document.querySelectorAll('.full-page');
let currentSection = 0;
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('nav a');

// Show the first section initially
sections[currentSection].classList.add('active');

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}, { passive: false });

function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.remove('active');
        if (index === sectionIndex) {
            section.classList.add('active');
            section.scrollIntoView({
                behavior: 'smooth'
            });

            // Change styles based on the section
            if (index === 1) {
                document.body.style.backgroundColor = '#b74b4b';
                logo.style.color = 'black';
                logo.innerHTML = 'Alexandre<br>CARMINOT';
                updateNavLinkHoverColor('black');

            } else {
                document.body.style.backgroundColor = 'black';
                logo.style.color = '#b74b4b';
                logo.innerHTML = 'Alexandre CARMINOT';
                updateNavLinkHoverColor('#b74b4b')
            }

            // Update arrow visibility
            updateArrowVisibility();
        }
    });
}


function updateNavLinkHoverColor(color) {
    navLinks.forEach(link => {
        link.style.setProperty('--hover-color', color); // Change the hover color dynamically 
    });
}


// Existing wheel event listener
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}, { passive: false });

// Logo click event
logo.addEventListener('click', function (event) {
    event.preventDefault();
    currentSection = 0;
    scrollToSection(currentSection);
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');

    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function () {
            console.log('Down arrow clicked');
            currentSection = 1;
            scrollToSection(currentSection);
        });
    } else {
        console.error('Down arrow not found');
    }

    if (scrollUpArrow) {
        scrollUpArrow.addEventListener('click', function () {
            console.log('Up arrow clicked');
            currentSection = 0;
            scrollToSection(currentSection);
        });
    } else {
        console.error('Up arrow not found');
    }

    // Initial call to set correct styles
    scrollToSection(currentSection);

    // Ensure arrows are properly displayed based on the initial section
    updateArrowVisibility();
});

function updateArrowVisibility() {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');

    if (currentSection === 0) {
        if (scrollDownArrow) {
            scrollDownArrow.style.display = 'block';
            console.log('Down arrow shown');
        }
        if (scrollUpArrow) {
            scrollUpArrow.style.display = 'none';
            console.log('Up arrow hidden');
        }
    } else {
        if (scrollDownArrow) {
            scrollDownArrow.style.display = 'none';
            console.log('Down arrow hidden');
        }
        if (scrollUpArrow) {
            scrollUpArrow.style.display = 'block';
            console.log('Up arrow shown');
        }
    }
}