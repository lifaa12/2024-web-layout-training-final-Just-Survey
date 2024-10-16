document.addEventListener('DOMContentLoaded', function () {
  // 初始化 Popover
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

  // 宣告變數
  const surveyList = document.querySelector(".survey-create-area");
  const surveyCreateCollapse = document.getElementById('surveyCreateCollapse');

  // 初始化 Collapse
  const collapse = new bootstrap.Collapse(surveyCreateCollapse, {
    toggle: false
  });

  const data = [
    {
      type: "單行文字",
      input: "<input type='text' class='form-control mb-4' placeholder='單行文字'>"
    }
  ];
  let showData = [];

  // 新增問卷
  function addSurvey() {
    const surveyAdd = document.querySelectorAll(".survey-add li a");
    surveyAdd.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.textContent !== "單行文字") {
          return;
        }
        let obj = {};
        obj.type = data[0].type;
        obj.input = data[0].input;
        obj.id = Date.now();
        obj.titleValue = "";
        showData.push(obj);
        renderData();
        collapse.hide();
      });
    });
  }

  // 刪除
  surveyList.addEventListener("click", (e) => {
    if (e.target.classList.contains("bi-x-circle")) {
      let num = e.target.dataset.id;
      let idx = showData.findIndex((item) => item.id == num);
      showData.splice(idx, 1);
      renderData();
    };
  });

  // 保留已輸入內容
  function saveValues() {
    let inputCard = document.querySelectorAll(".survey-create-area .card");
    inputCard.forEach((item) => {
      let id = item.closest('li').getAttribute('data-id');
      let itemIdx = showData.findIndex(item => item.id == id);
      if (itemIdx !== -1) {
        let title = item.querySelector(".card-body input.border-primary-400");
        showData[itemIdx].titleValue = title.value;
      };
    });
  }

  // 渲染
  function renderData() {
    saveValues();
    let str = "";
    showData.forEach((item) => {
      str += `
        <li data-id="${item.id}">
          <div class="card">
            <div class="card-header">
              <p>${item.type}</p>
              <a href="#" class="surveycard-delete">
                <i class="bi bi-x-circle fs-5" data-id="${item.id}"></i>
              </a>
            </div>
            <div class="card-body">
              <input class="form-control border-primary-400 mb-4" type="text" placeholder="標題" value="${item.titleValue || ""}">
              ${item.input}
            </div>
          </div>
        </li>`;
    });
    surveyList.innerHTML = str;
  }
  addSurvey();
});