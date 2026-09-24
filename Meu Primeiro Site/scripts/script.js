const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu-principal');
const menuLinks = document.querySelectorAll('#menu-principal a');

function toggleMenu(force) {
    const shouldOpen = typeof force === 'boolean' ? force : !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', shouldOpen);
    menuToggle.classList.toggle('is-open', shouldOpen);
    menuToggle.setAttribute('aria-expanded', String(shouldOpen));
    menuToggle.setAttribute('aria-label', shouldOpen ? 'Fechar menu' : 'Abrir menu');
}

menuToggle.addEventListener('click', () => toggleMenu());
menuLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) toggleMenu(false);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 760) toggleMenu(false);
});
