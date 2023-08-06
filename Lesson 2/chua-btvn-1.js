//Chữa bài 1

//Cách 1
const arr1 = [1, 'a', 5, '2', true];

const onlyNumbers = arr1.filter(
    element => typeof element === 'number'
  );

  console.log("Cách 1: " + onlyNumbers);

//Cách 2
const onlyNumbers2 = []
arr1.forEach((item) => {
    if (typeof item === 'number') {
        onlyNumbers2.push(item);
    }
});

console.log("Cách 2: " + onlyNumbers2);

//Chữa bài 2
let bill = 0;
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]

products.forEach((product) => {
    console.log(`${product.quantity} chiếc ${product.name} giá ${product.price}$`);
    bill += `${product.quantity}`*`${product.price}`
})
console.log("Tổng giá tiền là: " + bill + "$");

//Chữa bài 3
let students = [
    {name: 'Alex', score: 6},
    {name: 'John', score: 8},
    {name: 'Peter', score: 4},
];

let highestScore = 0;
let highestName = '';
students.forEach((student) => {
    if (student.score > highestScore) {
        highestScore = student.score;
        highestName = student.name;
    }
})

console.log("Học sinh có số điểm cao nhất là: " + highestName);