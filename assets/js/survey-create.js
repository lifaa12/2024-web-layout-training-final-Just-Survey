import Collapse from 'bootstrap/js/dist/collapse';
import Popover from 'bootstrap/js/dist/popover';

// surveyCreate
const surveyList = document.querySelector(".survey-create-area");
const surveyCreateCollapse = document.getElementById('surveyCreateCollapse');
const collapse = new Collapse(surveyCreateCollapse, {
  toggle: false
});
const data = [
  {
    type: "單行文字",
    input: "<input type='text' class='form-control mb-4' placeholder='單行文字'>"
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
    str += `<li><div class="card"><div class="card-header"><p>${item.type}</p><a href="#" class="surveycard-delete"><i class="bi bi-x-circle fs-5"></i></a></div><div class="card-body"><input class="form-control border-primary-400 mb-4" type="text" placeholder="標題">${item.input}</div></div></li>`;
  });
  surveyList.innerHTML = str;
};

// bootstrap popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl)
});