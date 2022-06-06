const input = document.getElementById("task"); // поле для ввода таска
const addTask = document.getElementById("addTask"); // кнопка добавить

const list = document.querySelector(".list"); // div с листом задач
const getClass = document.querySelectorAll("item"); // div с тасками

function createElement() {
  const task = document.createElement("div");
  task.classList.add("list_item");
  list.prepend(task);

  const task_input = document.createElement("input");
  task_input.classList.add("item");
  task_input.type = "checkbox";
  task.textContent = input.value;
  task.prepend(task_input);

  const button_delete = document.createElement("button");
  button_delete.id = "deleteTask";
  button_delete.textContent = "Delete";
  task.append(button_delete);

  button_delete.addEventListener("click", () => {
    toDelete(button_delete);
  });
}

addTask.addEventListener("click", () => {
  if (input.value !== "") {
    createElement();
    input.value = "";
  }
});

function createElement() {
  const task = document.createElement("div");
  task.classList.add("list_item");
  list.prepend(task);

  const task_input = document.createElement("input");
  task_input.classList.add("item");
  task_input.type = "checkbox";
  task_input.id = "one";
  task.textContent = input.value;
  task.prepend(task_input);

  task_input.addEventListener("change", () => {
    if (task_input.checked) {
      task.style.background = "orange";
    }
    if (!task_input.checked) {
      task.style.background = "inherit";
    }
  });

  const button_delete = document.createElement("button");
  button_delete.id = "deleteTask";
  button_delete.textContent = "Delete";
  task.append(button_delete);

  button_delete.addEventListener("click", (e) => {
    list.removeChild(task);
  });
}
