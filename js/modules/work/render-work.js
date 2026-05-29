import { createWorkCard } from '../../components/work-card.js'
import { works } from '../../data/work-data.js'

export function initWorks() {
	const worksContainer = document.querySelector('.works__container')
	const navLinks = document.querySelectorAll('.header__link')

	if (!worksContainer) return

	worksContainer.innerHTML = works.map(createWorkCard).join('')
}
