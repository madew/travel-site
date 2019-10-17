import 'normalize.css'
import './assets/styles/styles.scss'
import MobileMenu from './assets/js/modules/mobile-menu'
import RevealOnScroll from './assets/js/modules/reveal-on-scroll'
import StickyHeader from './assets/js/modules/sticky-header'
import SmoothScroll from 'smooth-scroll'

const mobileMenu = new MobileMenu()

new RevealOnScroll('.features-item', '80%')
new RevealOnScroll('.testimonial', '65%')

const stickyHeader = new StickyHeader();

const smoothScroll = new SmoothScroll('a[href*="#"]')


