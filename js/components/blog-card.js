export function createBlogCard(item) {
	return `
		<div class="blog__post">

			<div class="blog__content">
				<h2 class="blog__title">${item.title}</h2>

				<div class="blog__date">
					${item.date}
				</div>

				<p class="blog__text">
					${item.description || ''}
				</p>
			</div>
		</div>
	`
}
