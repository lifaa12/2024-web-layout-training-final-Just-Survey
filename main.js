import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/all.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
  breakpoints:{
    992:{
      slidesPerView: 2.2,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});