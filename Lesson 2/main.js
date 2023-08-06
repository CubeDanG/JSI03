//Cách 1
const arrNum = [5, 3, 0, -1, 2, -5];
const positiveNum = [];

arrNum.forEach((item) => {
    if (item >= 0) {
        positiveNum.push(item);
    }
});

console.log(positiveNum);
//Cách 2
const positiveNum2 = arrNum.filter((item) => {
    if (item > 0) {
        return true;
    }
    return false;
});

const products = [
	{id: 1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{id: 2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{id: 3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{id: 4, name: 'Airpod 2', price: 100, quantity: 20 },
]

const product1 = products.filter((item) => item.quantity >= 10);

const sp2 = products.filter((product) => item.id !== 3).map((item) => item.name);

const checkProduct3 = (productName) => {
    const productIndex = products.findIndex((product) => product.name === productName);
    if (productIndex > -1) {
        console.log('tontai')
    }else{
        console.log('khongtontai')
    }
}