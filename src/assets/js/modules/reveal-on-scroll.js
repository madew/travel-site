import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
    constructor(element, offset) {
        this.itemsToReveal = document.querySelectorAll(element);
        this.offsetPercentage = offset;
        this.hideInitialy();
        this.createReveal();
    }


    hideInitialy() {

        this.itemsToReveal.forEach(item => {
            item.classList.add('reveal-item');
        })
    }

    createReveal() {
        this.itemsToReveal.forEach(item => {
            new Waypoint({
                element: item,
                handler: () => {
                    item.classList.add('reveal-item--is-visited')
                },
                offset: this.offsetPercentage
            })
        })
    }
}

export default RevealOnScroll;