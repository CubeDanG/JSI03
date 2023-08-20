// const h1 = document.querySelector(".htmlcss");
// const btn = document.querySelectorAll("button");

// console.log(h1.textContent);
// h1.textContent = "Học về DOM";
// console.log(btn);

// const button1 = document.querySelector("#btn1");
// button1.textContent = "Đăng ký";

//textContent có thể sử dụng để sửa nội dung bên trong một element hoặc sử dụng với console.log để in ra nội dung của một element
const button = document.querySelector("#btn1");
button.classList.add("button1");
button.classList.remove("button1");
function sum(a,b) {
    console.log(a+b);
}

// function student (name,age,school) {

// }

function triple(x) {
    console.log(x*3);
}

triple(3);

var animals = ['Monkey', 'Tiger', 'Elephant'];
function lastElement(x) {
    let a = x[x.length -1];
    console.log("Phần tử đầu tiên của " + x + " là " + a);
};

function firstElement(x) {
    let a = x[0];
    console.log(a);
};
lastElement(animals);
firstElement(animals);

const buttonRegister = document.querySelector(".dangky");
button.classList.add("dangky");
function aler() {
    alert("Xin chào các bạn!")
}
button.addEventListener("click", aler);