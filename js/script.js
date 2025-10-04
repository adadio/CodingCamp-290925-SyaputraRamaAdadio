const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const filterBtn = document.getElementById("filterBtn");
const todoList = document.getElementById("todoList");

let todos = [];

function renderTodos(list = todos) {
  todoList.innerHTML = "";

  if (list.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="empty">No stars (task) found 🌌</td></tr>`;
    return;
  }

  list.forEach((todo, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${todo.task}</td>
      <td>${todo.date}</td>
      <td>${todo.completed ? "🌟 Done" : "⏳ Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})" style="background-color:#c084fc; color:white; padding:6px; border-radius:6px; border:none; cursor:pointer;">✨ Done</button>
        <button onclick="deleteTask(${index})" style="background-color:#c084fc; color:white; padding:6px; border-radius:6px; border:none; cursor:pointer;">💥 Delete</button>
      </td>
    `;
    todoList.appendChild(row);
  });
}

function addTodo() {
  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (!task || !date) {
    alert("Please enter task and date!");
    return;
  }

  todos.push({ task, date, completed: false });
  taskInput.value = "";
  dateInput.value = "";
  renderTodos();

  // 🚀 Rocket launch animation
  let rocket = document.createElement("img");
  rocket.src = "Rocket Lunch.gif";
  rocket.style.width = "80px";  
  rocket.classList.add("fly");
  document.body.appendChild(rocket);

  setTimeout(() => {
    rocket.remove();
  }, 1500);
}

function deleteTask(index) {
  todos.splice(index, 1);
  renderTodos();
}

function deleteAll() {
  todos = [];
  renderTodos();
}

function toggleStatus(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function filterTodos() {
  const pending = todos.filter(todo => !todo.completed);
  renderTodos(pending);
}

addBtn.addEventListener("click", addTodo);
deleteAllBtn.addEventListener("click", deleteAll);
filterBtn.addEventListener("click", filterTodos);

renderTodos();

// ==== Rocket Animation CSS dynamically injected ====
const style = document.createElement("style");
style.innerHTML = `
  .fly {
    position: fixed;
    bottom: 20px;
    left: 50%;
    font-size: 30px;
    animation: launch 1.5s ease-out forwards;
    z-index: 1000;
  }
  @keyframes launch {
    0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -800px) scale(1.5); opacity: 0; }
  }
`;
document.head.appendChild(style);
