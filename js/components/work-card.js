export function createWorkCard(item) {
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
