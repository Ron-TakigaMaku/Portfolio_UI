import { createAboutCard } from '../../components/information-card.js'
import { about } from '../../data/information-data.js'

export function initAbout() {
	const aboutContainer = document.querySelector('.about__container')

	if (!aboutContainer) return

	aboutContainer.innerHTML = about.map(createAboutCard).join('')
}
