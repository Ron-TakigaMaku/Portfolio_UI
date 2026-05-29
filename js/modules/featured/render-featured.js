import { createFeaturedCard } from '../../components/featured-card.js'
import { featured } from '../../data/featured-data.js'

export function initFeatured() {
	const featuredList = document.querySelector('.featured__list')

	if (!featuredList) return

	featuredList.innerHTML = featured.map(createFeaturedCard).join('')
}
