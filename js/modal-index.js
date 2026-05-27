const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal__title')
const modalText = document.querySelector('.modal__text')
const modalClose = document.querySelector('.modal__close')

// Открытие модалки
featuredList.addEventListener('click', e => {
	const cardBtn = e.target.closest('.card__btn')
	if (!cardBtn) return
	const id = Number(cardBtn.dataset.id)
	const project = featured.find(item => item.id === id)
	if (!project) return
	modalTitle.textContent = project.title
	modalText.textContent = project.description
	modal.style.display = 'flex'
})

// Закрытие модалки по кнопке X
modalClose.addEventListener('click', () => {
	modal.style.display = 'none'
})

// Закрытие модалки по клику вне окна
modal.addEventListener('click', e => {
	if (e.target === modal) {
		modal.style.display = 'none'
	}
})
