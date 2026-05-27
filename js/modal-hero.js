// Открытие модалки
heroList.addEventListener('click', e => {
	const heroBtn = e.target.closest('.hero__btn')
	if (!heroBtn) return
	const id = Number(heroBtn.dataset.id)
	const project = hero.find(item => item.id === id) // ← ищем в hero
	if (!project) return
	modalTitle.textContent = project.title
	modalText.textContent = project.description
	modalText.textContent = project.modal
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
