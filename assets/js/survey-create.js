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
  addSurvey();

  // 新增問卷
  function addSurvey() {
    const surveyAdd = document.querySelectorAll(".survey-add li a");
    surveyAdd.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.text !== "單行文字") {
          return;
        }
        let obj = {};
        obj.type = data[index].type;
        obj.input = data[index].input;
        showData.push(obj);
        renderData();
        collapse.hide();
      });
    });
  }

  // 渲染
  function renderData() {
    let str = "";
    showData.forEach((item) => {
      str += `
        <li>
          <div class="card">
            <div class="card-header">
              <p>${item.type}</p>
              <a href="#" class="surveycard-delete">
                <i class="bi bi-x-circle fs-5"></i>
              </a>
            </div>
            <div class="card-body">
              <input class="form-control border-primary-400 mb-4" type="text" placeholder="標題">
              ${item.input}
            </div>
          </div>
        </li>`;
    });
    surveyList.innerHTML = str;
  }
});
