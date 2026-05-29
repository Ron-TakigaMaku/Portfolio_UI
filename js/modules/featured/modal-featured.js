import { featured } from '../../data/featured-data.js'

export function initFeaturedModal() {
	const featuredList = document.querySelector('.featured__list')
	const modal = document.querySelector('.modal')
	const modalTitle = document.querySelector('.modal__title')
	const modalText = document.querySelector('.modal__text')
	const modalClose = document.querySelector('.modal__close')

	if (!featuredList) return

	featuredList.addEventListener('click', e => {
		const cardBtn = e.target.closest('.card__btn')

		if (!cardBtn) return

		const id = Number(cardBtn.dataset.id)
		const project = featured.find(item => item.id === id)

		if (!project) return

		modalTitle.textContent = project.title
		modalText.textContent = project.description
		modal.classList.add('active')
	})

	modalClose.addEventListener('click', () => {
		modal.classList.remove('active')
	})
}
