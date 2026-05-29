import { createBlogCard } from '../../components/blog-card.js'
import { blog } from '../../data/blog-data.js'

export function initBlog() {
	const blogContainer = document.querySelector('.blog__container')
	if (!blogContainer) return

	blogContainer.innerHTML = blog.map(createBlogCard).join('')
}
