import { createHeroCard } from '../../components/hero-card.js'
import { hero } from '../../data/hero-data.js'

export function initHero() {
	const heroList = document.querySelector('.hero__container')

	if (!heroList) return

	heroList.innerHTML = hero.map(createHeroCard).join('')
}
