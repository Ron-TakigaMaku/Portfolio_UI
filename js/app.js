import { initFeaturedModal } from './modules/featured/modal-featured.js'
import { initFeatured } from './modules/featured/render-featured.js'

import { initHeroModal } from './modules/hero/hero-modal.js'
import { initHero } from './modules/hero/render-hero.js'

document.addEventListener('DOMContentLoaded', () => {
	initFeatured()
	initFeaturedModal()

	initHero()
	initHeroModal()
})
