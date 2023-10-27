const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


/* это FUNCTION для добавления { add } */
function addTask() {
  if (inputBox.value === "") {
    alert("Вы должны написать что-нибудь!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}


/* function delete */
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);


/* Выделенный список обновления кылганда очпош учун FUNCTION */
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();