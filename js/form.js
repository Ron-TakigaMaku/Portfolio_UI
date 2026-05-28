// ====== contacts.html ======

const contactsList = document.querySelector('.contacts__list')

let contacts = [
	{
		id: 1,
		email: 'lorem@gmail.com',
		github: 'Ron-TakigaMaku',
		location: 'Ukraine',
	},
]

// ===== CARD TEMPLATE =====

function createContactsCard(item) {
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

// ===== RENDER CARDS =====

function renderContacts() {
	if (!contactsList) return

	contactsList.innerHTML = contacts.map(createContactsCard).join('')
}

renderContacts()
