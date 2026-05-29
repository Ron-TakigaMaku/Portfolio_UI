import { hero } from '../../data/hero-data.js'

export function initHeroModal() {
	const heroList = document.querySelector('.hero__container')
	const modal = document.querySelector('.modal')
	const modalTitle = document.querySelector('.modal__title')
	const modalText = document.querySelector('.modal__text')
	const modalClose = document.querySelector('.modal__close')

	if (!heroList) return

	heroList.addEventListener('click', e => {
		const heroBtn = e.target.closest('.hero__btn')

		if (!heroBtn) return

		const id = Number(heroBtn.dataset.id)
		const currentHero = hero.find(item => item.id === id)

		if (!currentHero) return

		modalTitle.textContent = currentHero.title
		modalText.textContent = currentHero.modal
		modal.classList.add('active')
	})

	modalClose.addEventListener('click', () => {
		modal.classList.remove('active')
	})
}
