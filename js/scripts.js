

window.addEventListener('DOMContentLoaded', event => {

   
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameField = document.getElementById('name');
    if (nameField.value.trim() === '') {
        nameField.classList.add('is-invalid');
    } else {
        nameField.classList.remove('is-invalid');
    }

    const emailField = document.getElementById('email');
    if (!validateEmail(emailField.value)) {
        emailField.classList.add('is-invalid');
    } else {
        emailField.classList.remove('is-invalid');
    }

    const messageField = document.getElementById('message');
    if (messageField.value.trim() === '') {
        messageField.classList.add('is-invalid');
    } else {
        messageField.classList.remove('is-invalid');
    }

    
    if (
        nameField.value.trim() !== '' &&
        validateEmail(emailField.value) &&
        messageField.value.trim() !== ''
    ) {
       
        alert('Form submitted successfully!');
        form.reset();
    }
});

});
