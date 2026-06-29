let count = 0;

const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {

    count++;

    counter.innerText = count;

});