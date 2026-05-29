import { initFeatured } from './modules/featured/render-featured.js'
import { initHero } from './modules/hero/render-hero.js'

document.addEventListener('DOMContentLoaded', () => {
	initFeatured()
	initHero()
})
