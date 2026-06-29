const add = document.getElementById("add");

const list = document.getElementById("list");

const input = document.getElementById("task");

add.addEventListener("click", () => {

    const li = document.createElement("li");

    li.innerText = input.value;

    list.appendChild(li);

    input.value = "";

});