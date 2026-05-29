export function createContactsCard(item) {
	return `
		<div class="contact-info__list">

			<div class="contact-info__item">
				<h3>Email</h3>
				<p>${item.email}</p>
			</div>

			<div class="contact-info__item">
				<h3>GitHub</h3>
				<p>${item.github}</p>
			</div>

			<div class="contact-info__item">
				<h3>Location</h3>
				<p>${item.location}</p>
			</div>

		</div>
	`
}
