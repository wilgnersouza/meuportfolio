import ScrollReveal from 'scrollreveal';

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        const navMenuItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navMenuItem.classList.add('active');
        } else {
            navMenuItem.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
