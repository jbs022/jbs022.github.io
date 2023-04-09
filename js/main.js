// Hamburger menu functionality
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") 
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
});

// Scroll padding for nav links on click
const headerHeight = document.querySelector('.primary-header').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', headerHeight - 1 + 'px');

// Highlight nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.primary-nav .primary-nav__nav-list li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach( a => {
        a.classList.remove('primary-nav__nav-list__active');

        if (a.classList.contains(current)) {
            a.classList.add('primary-nav__nav-list__active');
        }
    })
});

// Form validation -- Currently using Netlify, need to find a way to get form validation and Netlify to work together
// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = message;
//     errorDisplay.style.display = "block";
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error-message');

//     errorDisplay.innerText = '';
//     errorDisplay.style.display = "none";
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if (nameValue === '') {
//         setError(name, "Please enter your name");
//     } else {
//         setSuccess(name);
//     }
    
//     if (emailValue === '') {
//         setError(email, "Please enter your email");
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, "Please provide a valid email. Example: john.smith@gmail.com");
//     } else {
//         setSuccess(email);
//     }

//     if (messageValue === '') {
//         setError(message, "Please enter your message");
//     } else {
//         setSuccess(message);
//     }
// }

// Get the copyright year for the footer
document.getElementById('currentYear').innerHTML = new Date().getFullYear();