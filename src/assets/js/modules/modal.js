class Modal {
    constructor() {
        this.openModalButtons = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events();
    }


    events() {

        this.openModalButtons.forEach((modalBtn) => {
            modalBtn.addEventListener('click', this.openModal.bind(this))
        })

        this.closeModalButton.addEventListener('click', this.closeModal.bind(this))

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.closeModal()
            }
        })
    }
    openModal(e) {
        this.modal.classList.add('modal--is-visible');
        document.body.classList.add('prevent-scroll');
        e.preventDefault()

    }
    closeModal() {
        this.modal.classList.remove('modal--is-visible');
        document.body.classList.remove('prevent-scroll')
    }

}

export default Modal