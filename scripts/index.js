document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    const mobileNavbar = document.querySelector('.navbar__mobile');
    const button = document.querySelector('#menu__icon');
    const navlinks = document.querySelector('.mobile__links');

    // Menu click
button.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active'); // Alterna a classe active
});

navlinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        mobileNavbar.classList.remove('active'); // Remove a classe active ao clicar em um link
    }
});

//efeito de box-shadow quando a window (janela) tiver um valor de scrollY > 0
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) return navbar.classList.add('active');
        return navbar.classList.remove('active');
    });
});

