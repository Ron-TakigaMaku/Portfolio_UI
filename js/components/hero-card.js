export function createHeroCard(item) {
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
