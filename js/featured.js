// featured.js — полный рабочий вариант

const featuredList = document.querySelector('.featured__list')
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal__title')
const modalText = document.querySelector('.modal__text')
const modalClose = document.querySelector('.modal__close') // ← это и было причиной бага

let featured = [
	{
		id: 1,
		title: 'Trainee frontend',
		date: '21 Feb 2026',
		description:
			'A modern dashboard interface designed with a focus on clarity, hierarchy, and responsiveness...',
		img: 'img/about__img1.png',
	},
	{
		id: 2,
		title: 'Trainee frontend',
		date: '26 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building and visual consistency...',
		img: 'img/about__img2.png',
	},
	{
		id: 3,
		title: 'Trainee frontend',
		date: '27 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building and visual consistency...',
		img: 'img/about_img3.png',
	},
]

function createFeaturedCard(item) {
	return `
    <div class="works__work">
      <div class="works__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <div class="works__content">
        <h2 class="works__title">${item.title}</h2>
        <div class="works__date">${item.date}</div>
        <p class="works__text">${item.description || ''}</p>
        <button class="card__btn" data-id="${item.id}">View project</button>
      </div>
    </div>
  `
}

function renderFeatured() {
	if (!featuredList) return
	featuredList.innerHTML = featured.map(createFeaturedCard).join('')
}
renderFeatured()

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
