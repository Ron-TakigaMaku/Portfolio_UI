// ====== works.html ======
const worksContainer = document.querySelector('.works__container')
const navLinks = document.querySelectorAll('.header__link')

let works = [
	{
		id: 1,
		title: 'Trainee frontend',
		date: ' 21 Feb 2026',
		description:
			'A modern dashboard interface designed with a focus on clarity,hierarchy, and responsiveness. The project demonstrates my ability to structure layouts, work with UI components, and adapt designs for different screen sizes.',
		img: '../img/about__img1.png',
	},
	{
		id: 2,
		title: 'Trainee frontend',
		date: ' 26 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building andvisual consistency.special attention to spacing,typography, and resbehavior across devices.',
		img: '../img/about__img2.png',
	},
	{
		id: 3,
		title: 'Trainee frontend',
		date: ' 27 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building andvisual consistency.special attention to spacing,typography, and resbehavior across devices.',
		img: '../img/work__img3.png',
	},
	{
		id: 4,
		title: 'Trainee frontend',
		date: ' 27 Feb 2026',
		description:
			'This project showcases my frontend skills in layout building andvisual consistency.special attention to spacing,typography, and resbehavior across devices.',
		img: '../img/hero__img4.png',
	},
]

// ===== CARD TEMPLATE =====
function createWorkCard(item) {
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
			</div>
		</div>
	`
}

// ===== RENDER CARDS =====
function renderWorks() {
	if (!worksContainer) return

	worksContainer.innerHTML = works.map(createWorkCard).join('')
}

renderWorks()

// ===== EVENT CARDS INFO =====
worksContainer.addEventListener('click', e => {
	const cardBtn = e.target.closest('.card__btn')
	if (!cardBtn) return
	const card = cardBtn.closest('.works__work')
	const title = card.querySelector('.works__title').textContent
	alert(`You clicked on ${title}`)
})
