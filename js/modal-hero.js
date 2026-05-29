import { hero } from './data/hero-data.js'

const heroList = document.querySelector('.hero__container')
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal__title')
const modalText = document.querySelector('.modal__text')
const modalClose = document.querySelector('.modal__close')

// Открытие модалки
if (heroList) {
	heroList.addEventListener('click', e => {
		const heroBtn = e.target.closest('.hero__btn')
		if (!heroBtn) return
		const id = Number(heroBtn.dataset.id)
		const project = hero.find(item => item.id === id)
		if (!project) return
		modalTitle.textContent = project.title
		modalText.textContent = project.modal || project.description || ''
		modal.style.display = 'flex'
	})
}

// Закрытие модалки по кнопке X
if (modalClose) {
	modalClose.addEventListener('click', () => {
		modal.style.display = 'none'
	})
}

// Закрытие модалки по клику вне окна
if (modal) {
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.style.display = 'none'
		}
	})
}
