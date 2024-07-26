/*scroll section active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(inks => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };


    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about2-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Java Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
});

function redirectToHomePage() {
    // URL of the home page (adjust if needed)
    const homePageURL = 'index.html';

    // Check if the page is loaded or refreshed
    if (performance.navigation.type === 1) {
        window.location.href = homePageURL;
    }
}

// Execute function on page load
window.onload = redirectToHomePage;
