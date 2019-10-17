import 'normalize.css'
import './assets/styles/styles.scss'
import MobileMenu from './assets/js/modules/mobile-menu'
import RevealOnScroll from './assets/js/modules/reveal-on-scroll'

const mobileMenu = new MobileMenu()

new RevealOnScroll('.features-item', '80%')
new RevealOnScroll('.testimonial', '65%')



