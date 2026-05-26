// ====== index.html featured ======
const featuredList = document.querySelector('.featured__list')
const resumeBtn = document.querySelector('.hero__btn')
const navLinks = document.querySelectorAll('.header__link')
let featured = [
	{
		id: 1,
		title: 'Trainee frontend',
		date: '21 Feb 2026',
		description:
			'A modern dashboard interface designed with a focus on clarity,hierarchy, and responsiveness. The project demonstrates my ability to structure layouts, work with UI components, and adapt designs for different screen sizes.',
		img: 'img/about__img1.png',
	},
	{
		id: 2,
		title: 'Trainee frontend',
		date: '26 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building and visual consistency. I paid special attention to spacing,typography, and responsive behavior across devices.',
		img: 'img/about__img2.png',
	},
	{
		id: 3,
		title: 'Trainee frontend',
		date: '27 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building and visual consistency. I paid special attention to spacing,typography, and responsive behavior across devices.',
		img: 'img/about_img3.png',
	},
]

// ===== CARD TEMPLATE =====
function createFeaturedCard(item) {
	return `
		<div class="works__work">
			<div class="works__img">
				<img src="${item.img}" alt="${item.title}" />
			</div>

			<div class="works__content">
				<h2 class="works__title">${item.title}</h2>

				<div class="works__date">
					${item.date}
				</div>

				<p class="works__text">
					${item.description || ''}
				</p>

				<button class="card__btn">
					View project
				</button>
			</div>
		</div>
	`
}

// ===== RENDER CARDS =====
function renderFeatured() {
	if (!featuredList) return

	featuredList.innerHTML = featured.map(createFeaturedCard).join('')
}

renderFeatured()

// ===== EVENT CARDS INFO =====
featuredList.addEventListener('click', e => {
	const cardBtn = e.target.closest('.card__btn')
	if (!cardBtn) return
	const card = cardBtn.closest('.works__work')
	const title = card.querySelector('.works__title').textContent
	alert(`You clicked on ${title}`)
})
