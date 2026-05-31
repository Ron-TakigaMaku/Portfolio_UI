import { createWorkCard } from '../../components/work-card.js'
import { works } from '../../data/work-data.js'

export function initWorks() {
	const worksContainer = document.querySelector('.works__container')
	const categoryButtons = document.querySelectorAll('.recent__btn')

	if (!worksContainer) return

	renderWorks(works)

	categoryButtons.forEach(button => {
		button.addEventListener('click', () => {
			const category = button.dataset.category
			const filtered =
				category === 'all'
					? works
					: works.filter(work => work.category === category)

			renderWorks(filtered)

			categoryButtons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')
		})
	})

	function renderWorks(data) {
		worksContainer.innerHTML = data.map(createWorkCard).join('')
	}
}
