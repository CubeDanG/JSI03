const p = document.querySelector("p");
const addbtn = document.querySelector(".add");
const myDiv = document.querySelector("#myDiv")
const removebtn = document.querySelector(".remove")

function add() {
    myDiv.classList.add("myDivClass");
}
addbtn.addEventListener("click", add);

function remove() {
    myDiv.classList.remove("myDivClass");
}
removebtn.addEventListener("click", remove);