export function createAboutCard(item) {
	return `
		<div class="about__block">
			<h2 class= "about__block-info">${item.title}</h2>
			<h3 class="about__block-date">${item.date}</h3>
			<p class="about__text">${item.description || ''}
			</p>
		</div>
	`
}
