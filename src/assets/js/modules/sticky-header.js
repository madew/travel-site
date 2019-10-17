import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.header');
        this.headerTriggerEl = document.querySelector('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a')
        this.createPageSectionWaypoints();
    }

    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerEl,
            handler: (direction) => {
                if (direction === 'down') {
                    this.siteHeader.classList.add('header--dark')
                } else {
                    this.siteHeader.classList.remove('header--dark')
                }
            }
        })
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach(pageSection => {
            new Waypoint({
                element: pageSection,
                handler: (direction) => {
                    if (direction === 'down') {

                        let matchingHeaderLink = pageSection.getAttribute('data-matching-link')
                        this.headerLinks.forEach(headerLink => {
                            headerLink.classList.remove('is-current-link')
                        })

                        document.getElementById(matchingHeaderLink).classList.add('is-current-link');
                    }
                },
                offset: '20%'
            })

            new Waypoint({
                element: pageSection,
                handler: (direction) => {
                    if (direction === 'up') {

                        let matchingHeaderLink = pageSection.getAttribute('data-matching-link')
                        this.headerLinks.forEach(headerLink => {
                            headerLink.classList.remove('is-current-link')
                        })

                        document.getElementById(matchingHeaderLink).classList.add('is-current-link');
                    }
                },
                offset: '-40%'
            })
        })
    }
}

export default StickyHeader;