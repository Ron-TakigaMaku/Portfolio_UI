import { createContactsCard } from '../../components/form-card.js'
import { contacts } from '../../data/form-data.js'

export function initForm() {
	const contactsList = document.querySelector('.contacts__list')
	if (!contactsList) return

	contactsList.innerHTML = contacts.map(createContactsCard).join('')
}
