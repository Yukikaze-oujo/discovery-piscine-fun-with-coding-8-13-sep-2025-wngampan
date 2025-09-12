const ftList = document.getElementById("ft_list");
const btnNew = document.getElementById("btn-new");

// Dowload cookie
window.onload = () => {
  const saved = getCookie("todoList");
  if (saved) {
    const todos = JSON.parse(saved);
    todos.forEach(todo => addTodo(todo, false));
  }
};

//  New button
btnNew.addEventListener("click", () => {
  const task = prompt("Enter a new TO DO:");
  if (task && task.trim() !== "") {
    addTodo(task.trim(), true);
  }
});

// todo function
function addTodo(text, save) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      ftList.removeChild(div);
      saveTodos();
    }
  });

  ftList.insertBefore(div, ftList.firstChild);

  if (save) saveTodos();
}

// save cookie
function saveTodos() {
  const todos = [];
  document.querySelectorAll("#ft_list .todo").forEach(el => {
    todos.push(el.textContent);
  });
  setCookie("todoList", JSON.stringify(todos), 7);
}

// manage cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
