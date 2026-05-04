const root = document.documentElement;
const heroVisual = document.querySelector('.hero-visual');
const cardStack = document.querySelector('.card-stack');

window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    const rotateX = y * 12;
    const rotateY = x * 18;

    if (cardStack) {
        cardStack.style.transform = `rotateX(${15 - rotateX}deg) rotateY(${ -18 + rotateY}deg)`;
    }

    root.style.setProperty('--mouse-x', `${x}`);
    root.style.setProperty('--mouse-y', `${y}`);
});

window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    const limit = Math.min(offset / 2, 80);
    heroVisual.style.transform = `translateZ(0) translateY(${limit * -0.15}px)`;
});

const links = document.querySelectorAll('nav a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
