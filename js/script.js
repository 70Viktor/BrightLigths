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
