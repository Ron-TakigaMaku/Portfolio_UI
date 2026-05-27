const heroList = document.querySelector('.hero__container')

let hero = [
	{
		id: 1,
		title: 'Hi, I am Ron, Creative Technologist',
		description: `I’m a frontend developer passionate about building modern...`,
		modal:
			'I’m a frontend developer passionate about building modern,responsive website clean code and thouUI. I enjoy turning design functional interfacesHTML, CSS, andJavaScript, always foon usability and balance.',
		img: 'img/hero__img.png',
	},
]

// ===== CARD TEMPLATE =====
function createHeroCard(item) {
	return `
    <div class="hero__content">
        <h1 class="hero__title">${item.title}</h1>
        <p class="hero__subtitle">${item.description || ''}</p>
        <button class="hero__btn" data-id="${item.id}">View all</button>
    </div>
		<div class="hero__image">
      <img src="${item.img}" alt="${item.title}" />
    </div>
  `
}

// ===== RENDER CARDS =====
function renderHero() {
	if (!heroList) return
	heroList.innerHTML = hero.map(createHeroCard).join('')
}

renderHero()
