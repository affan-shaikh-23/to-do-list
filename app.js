const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    return alert("please fill detail");
  }
  list.innerHTML += `
    <li class="main d-flex justify-content-center align-item-center">
    <p id="task" class="p">
    ${input.value}
    </p>
    <button id="complete" value="Add" class="add"> completed</button>
    <button id="remove" class="remve"> remove</button
    </li>
    `;
});
list.addEventListener("click", (e) => {
  const parentEl = e.target.parentElement;
  if (e.target.id === "remove") {
    parentEl.remove();
  } else if (e.target.id === "complete") {
    const mainList = parentEl.firstChild.nextElementSibling;
    if (mainList.id === "task") {
      mainList.classList.toggle("text-line");
      mainList.classList.toggle("text-danger");
    }
  }
});
