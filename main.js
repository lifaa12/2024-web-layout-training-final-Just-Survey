import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/all.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// swiper
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

// surveyCreate
const surveyList = document.querySelector(".survey-create-area");
const surveyCreateCollapse = document.getElementById('surveyCreateCollapse');
const collapse = new bootstrap.Collapse(surveyCreateCollapse, {
  toggle: false
});
const data = [
  {
    type: "單行文字",
    input: "<input type='text' class='w-100' placeholder='單行文字'>"
  }
];
let showData = [];

// 新增問卷按鈕監聽
document.addEventListener("DOMContentLoaded", () => {
  addSurvey();
});

// 新增問卷
const addSurvey = () => {
  const surveyAdd = document.querySelectorAll(".survey-add li a");
  surveyAdd.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.text !== "單行文字") {
        return;
      };
      let obj = {};
      obj.type = data[index].type;
      obj.input = data[index].input;
      showData.push(obj);
      renderData();
      collapse.hide();
    });
  });
};

// 渲染
const renderData = () => {
  let str = "";
  showData.forEach((item) => {
    str += `<li><div class="card"><div class="card-header"><p>${item.type}</p><a href="#" class="surveycard-delete"><i class="bi bi-x-circle fs-5"></i></a></div><div class="card-body"><input type="text" placeholder="標題" class="w-100 mb-4 py-1">${item.input}</div></div></li>`;
  });
  surveyList.innerHTML = str;
};

// bootstrap popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});
