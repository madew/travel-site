class MobileMenu {
    constructor() {
        this.header = document.querySelector('.header');
        this.menuIcon = document.querySelector('.header__menu-icon');
        this.menu = document.querySelector('.header__wrapper');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menu.classList.toggle('header__wrapper--is-visible')
        this.header.classList.toggle('header--is-expanded')
        this.menuIcon.classList.toggle('header__menu-icon--close-x')
    }




}

export default MobileMenu