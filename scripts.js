
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


// // section changes the logo and nav links color based on the section index
// const sections = document.querySelectorAll('.full-page');
// let currentSection = 0;
// const logo = document.querySelector('.logo');
// const navLinks = document.querySelectorAll('nav a');

// // Show the first section initially
// sections[currentSection].classList.add('active');

// window.addEventListener('wheel', (event) => {
//     event.preventDefault(); // Prevent default scroll behavior
//     if (event.deltaY > 0 && currentSection < sections.length - 1) {
//         currentSection = currentSection + 1;
//         scrollToSection(currentSection);
//     } else if (event.deltaY < 0 && currentSection > 0) {
//         currentSection = currentSection - 1;
//         scrollToSection(currentSection);
//     }
// }, { passive: false });



// function scrollToSection(sectionIndex) {
//     sections.forEach((section, index) => {
//         section.classList.remove('active');
//         if (index === sectionIndex) {
//             section.classList.add('active');
//             section.scrollIntoView({
//                 behavior: 'smooth'
//             });
//             if (index % 2 === 0) {
//                 document.body.style.backgroundColor = 'black';
//                 logo.style.color = '#b74b4b';
//                 if (index === 0) {
//                     logo.innerHTML = 'Alexandre CARMINOT';
//                 }
//                 else {
//                     logo.innerHTML = 'Alexandre<br>CARMINOT';
//                 }
//                 updateNavLinkHoverColor('#b74b4b');
//             }
//             else {
//                 document.body.style.backgroundColor = '#b74b4b';
//                 logo.style.color = 'black';
//                 logo.innerHTML = 'Alexandre<br>CARMINOT';
//                 updateNavLinkHoverColor('black')
//                 section.style.color = 'black';;

//             }
//         }
//     });
// }


// function updateNavLinkHoverColor(color) {
//     navLinks.forEach(link => {
//         link.style.setProperty('--hover-color', color); // Change the hover color dynamically 
//     });
// }



// // Logo click event
// logo.addEventListener('click', function (event) {
//     event.preventDefault();
//     currentSection = 0;
//     scrollToSection(currentSection);
// });
// function getScrollDownArrow(sectionIndex) {
//     switch (sectionIndex) {
//         case 0:
//             return document.querySelector('#section0 .scroll-down-arrow');
//         case 1:
//             return document.querySelector('#section1 .scroll-down-arrow');
//         case 2:
//             return document.querySelector('#section2 .scroll-down-arrow');
//         case 3:
//             return document.querySelector('#section3 .scroll-down-arrow');
//         case 4:
//             return document.querySelector('#section4 .scroll-down-arrow');
//         // Add more cases for other sections
//         default:
//             return null;
//     }
// }

// function getScrollUpArrow(sectionIndex) {
//     switch (sectionIndex) {
//         case 0:
//             return document.querySelector('#section0 .scroll-up-arrow');
//         case 1:
//             return document.querySelector('#section1 .scroll-up-arrow');
//         case 2:
//             return document.querySelector('#section2 .scroll-up-arrow');
//         case 3:
//             return document.querySelector('#section3 .scroll-up-arrow');
//         case 4:
//             return document.querySelector('#section4 .scroll-up-arrow');
//         // Add more cases for other sections
//         default:
//             return null;
//     }
// }
// document.addEventListener('DOMContentLoaded', function () {
//     const scrollDownArrow = getScrollDownArrow(currentSection);
//     const scrollUpArrow = getScrollUpArrow(currentSection);
//     console.log(currentSection);


//     if (scrollDownArrow) {
//         scrollDownArrow.addEventListener('click', function (event) {
//             console.log('Scroll down arrow clicked');
//             if (currentSection < sections.length - 1) {
//                 currentSection++;
//                 scrollToSection(currentSection);

//             }
//         });
//     }

//     if (scrollUpArrow) {

//         scrollUpArrow.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent default scroll behavior
//             console.log('Scroll up arrow clicked');
//             if (currentSection > 0) {
//                 currentSection--;
//                 scrollToSection(currentSection);
//             }
//         });
//     }

//     // Initial call to set correct styles and arrow visibility
//     scrollToSection(currentSection);
// });


// function scrollToSection(sectionIndex) {
//     sections.forEach((section, index) => {
//         section.classList.remove('active');
//         if (index === sectionIndex) {
//             section.classList.add('active');
//             section.scrollIntoView({
//                 behavior: 'smooth'
//             });
//             // Update background and logo color based on section index
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

//             // Reset the scroll down and up arrows
//             const scrollDownArrow = getScrollDownArrow(sectionIndex);
//             const scrollUpArrow = getScrollUpArrow(sectionIndex);
//             console.log(currentSection);

//             // Set up event listeners for scroll arrows
//             if (scrollDownArrow) {
//                 scrollDownArrow.addEventListener('click', function (event) {
//                     console.log('Scroll down arrow clicked');
//                     event.preventDefault();
//                     if (currentSection < sections.length - 1) {
//                         currentSection++;
//                         scrollToSection(currentSection);
//                     }
//                 });
//             }

//             if (scrollUpArrow) {
//                 scrollUpArrow.addEventListener('click', function (event) {
//                     console.log('Scroll up arrow clicked');
//                     event.preventDefault();
//                     if (currentSection > 0) {
//                         currentSection--;
//                         scrollToSection(currentSection);
//                     }
//                 });
//             }
//         }
//     });
// }

// 
// scrollToSection(currentSection);



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
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}, { passive: false });

// Function to scroll to a specific section
function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.remove('active'); 
        if (index === sectionIndex) {
            section.classList.add('active'); 
            section.scrollIntoView({
                behavior: 'smooth' 
            });

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
    if (currentSection < sections.length - 1) {
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
        link.style.setProperty('--hover-color', color); 
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
