
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

