// swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// index swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2.2,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.custom-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
    clickable: true,
  },
});