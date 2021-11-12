// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================
// MOBILE =============================================================
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

// 	alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
// /MOBILE =============================================================

const burger = document.querySelector('.menu_burger');
const menuHeader = document.querySelector('.header_menu');
burger.addEventListener('click', function () {
	this.classList.toggle('active');
	menuHeader.classList.toggle('active');
});


// accordion =============================================================

// const footerTitle = document.querySelectorAll('.footer_title-accordion');
// document.documentElement.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	for (var a = 0; a < footerTitle.length; a++) {
// 		footerTitle[a].classList.remove('active');
// 		footerTitle[a].nextElementSibling.style.height = 0;
// 	}
// 	if (targetElement.classList.contains('footer_title-accordion') && targetElement.classList.contains('active')) {
// 		targetElement.classList.remove('active');
// 		targetElement.nextElementSibling.style.height = 0;

// 	} else if (targetElement.classList.contains('footer_title-accordion')) {
// 		targetElement.classList.add('active');
// 		targetElement.nextElementSibling.style.height = targetElement.nextElementSibling.scrollHeight + 'px';
// 	}
// 	if (!targetElement.classList.contains('footer_title-accordion')) {
// 		for (var a = 0; a < footerTitle.length; a++) {
// 			footerTitle[a].classList.remove('active');
// 			footerTitle[a].nextElementSibling.style.height = 0;
// 		}
// 	}

// });
// /accordion =============================================================

const container = document.querySelector('.container')

const flowersType = document.querySelectorAll('.flowers_type');
const flowersSlide = document.querySelector('.flowers_slide');
let flowersSlider = new Swiper('.flowers_slider', {
	navigation: {
		nextEl: '.swiper_button-next',
		prevEl: '.swiper_button-prev'
	},
	speed: 1000,
	spaceBetween: 100,
})
flowersSlider.on('slideChange', function () {
	let flowersIndex = flowersSlider.activeIndex;
	let x = flowersType[flowersIndex].getBoundingClientRect().left - container.getBoundingClientRect().left - 35;
	if (window.innerWidth <= 1000) {
		x = flowersType[flowersIndex].getBoundingClientRect().left - container.getBoundingClientRect().left - 15;
	}
	flowersSlide.style.left = x + 'px';
	for (elem of flowersType) {
		elem.classList.remove('active');
	}
	flowersType[flowersIndex].classList.add('active')
		;
})
for (elem of flowersType) {
	elem.addEventListener('click', function () {
		flowersSlider.slideTo(Array.prototype.indexOf.call(this.parentElement.children, this));
		let x = this.getBoundingClientRect().left - container.getBoundingClientRect().left - 35;
		if (window.innerWidth <= 1000) {
			x = this.getBoundingClientRect().left - container.getBoundingClientRect().left - 15;
		}
		flowersSlide.style.left = x + 'px';
		for (elem of flowersType) {
			elem.classList.remove('active');
		}
		this.classList.add('active')
	})
}