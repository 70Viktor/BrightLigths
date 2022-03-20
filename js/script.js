//Slider

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

//Burger-menu

const icon = document.querySelector('.row-header__icon')
if (icon) {
	const menu = document.querySelector('.row-header__nav')

	icon.addEventListener("click", (e) => {
		document.body.classList.toggle('_lock')
		icon.classList.toggle('_active')
		menu.classList.toggle('_active')
	})
}

//player

const player = document.querySelector('.player')
const btn = document.querySelector('.btn-1')
const btnList = document.querySelector('.btn-2')
const audio = document.querySelector('.audio')
const progressContainer = document.querySelector('.player-progress-container')
const progressContainerList = document.querySelector('.player-progress-container-2')
const progress = document.querySelector('.progress')
const progressList = document.querySelector('.progress-2')
const title = document.querySelector('.body-header__title')
const listTracks = document.querySelectorAll('.list-tracks__item')

const songs = ['War For Love','Follow You Down', 'Ghost', 'How You Love Me', 'Never Say Goodbye', 'Where Are You Now']

let songIndex = 0

function loadSong(song) {
	title.innerHTML = song
	audio.src = `audio/${song}.mp3`
}

loadSong(songs[songIndex])

function playSong() {
	audio.play()
}

function pauseSong() {
	audio.pause()
}

//Pause or play
btnList.addEventListener('click', pauseOrPlay)
btn.addEventListener('click', pauseOrPlay)
function pauseOrPlay(){
	btn.classList.toggle('active')
	btnList.classList.toggle('active')

	if (btn.classList.contains('active')) {
		playSong()
	} else {
		pauseSong()
	}
}

audio.addEventListener('timeupdate', (e) => {
	const {duration, currentTime} = e.srcElement
	const progressPercent = currentTime / duration * 100
	progress.style.width = `${progressPercent}%`
	progressList.style.width = `${progressPercent}%`
})

progressContainer.addEventListener('click', (e) => {
	const width = progressContainer.offsetWidth
	const clickX = e.offsetX
	const duration = audio.duration
	audio.currentTime = clickX / width * duration
})
progressContainerList.addEventListener('click', (e) => {
	const width = progressContainerList.offsetWidth
	const clickX = e.offsetX
	const duration = audio.duration
	audio.currentTime = clickX / width * duration
})

audio.addEventListener('ended', () => {
	listTracks[songIndex].classList.remove('active')
	songIndex++
	if (songIndex > songs.length - 1) {
		songIndex = 0
	}
	listTracks[songIndex].classList.add('active')
	loadSong(songs[songIndex])
	playSong()
})


listTracks.forEach((item, index) => {
	item.addEventListener('click', () => {
		listTracks.forEach((item) => item.classList.remove('active'))
		item.classList.add('active')
		songIndex = index
		loadSong(songs[songIndex])
		if (btn.classList.contains('active')) {
			playSong()
		} else {
			pauseOrPlay()
		}
	})
})

