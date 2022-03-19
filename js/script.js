new Swiper('.swiper', {
	navigation: {
		nextEl: '.events-button-next',
		prevEl: '.events-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	breakpoints: {
		941: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1201: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})

const icon = document.querySelector('.row-header__icon')
if (icon) {
	const menu = document.querySelector('.row-header__nav')

	icon.addEventListener("click", (e) => {
		document.body.classList.toggle('_lock')
		icon.classList.toggle('_active')
		menu.classList.toggle('_active')
	})
}