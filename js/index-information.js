// ====== index.html information(about)
const aboutContainer = document.querySelector('.about__container')

let about = [
	{
		id: 1,
		title: 'Trainee frontend',
		date: '12 Feb 2026',
		description:
			'In this project, I explored how to build a consistent design system from scratch. I focused on typography, spacing, color usage, and reusable components to create a scalable and maintainable UI structure.',
	},
	{
		id: 2,
		title: 'Trainee frontend',
		date: '15 Feb 2026',
		description:
			'This post covers my approach to creating pixel-perfect 	icons in Figma. I worked with grids, alignment, and visual consistency 	to ensure icons look sharp across different sizes and screens.',
	},
]

// ===== CARD TEMPLATE =====
function createAboutCard(item) {
	return `
		<div class="about__block">
			<h2 class= "about__block-info">${item.title}</h2>

			<h3 class="about__block-date">${item.date}</h3>

			<p class="about__text">${item.description || ''}
			</p>
		</div>
	`
}

// ===== RENDER CARDS =====
function renderAbout() {
	if (!aboutContainer) return

	aboutContainer.innerHTML = about.map(createAboutCard).join('')
}

renderAbout()

// ===== EVENT CARDS INFO =====
aboutContainer.addEventListener('click', e => {
	if (aboutContainer) {
		aboutContainer.addEventListener('click', e => {
			const block = e.target.closest('.about__block')

			if (!block) return

			const title = block.querySelector('.about__block-info').textContent

			alert(`You clicked on ${title}`)
		})
	}
})
