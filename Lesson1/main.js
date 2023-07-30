const log1 = name => {
    console.log(name);
}

const logName = () => ({
    name: "DanG"
})
console.log(logName())

//Spread Operator
const numberList = [1,2,3,4,5,6];
const cloneNumberList = numberList;

console.log(numberList);
console.log(cloneNumberList);

const student1 = {
    name: 'Quang',
    age: '18'
}
const student2 = {...student1};
student2.gender = 'male';

console.log(student1, student2);

//map
const arrMap1 = [1,2,3,4,5];
const arrMap2 = [];

arrMap1.forEach((item) => {
    arrMap2.push(item*2);
});

const arrMap3 = arrMap1.map((item) => item * 2);

const arrMap4 = [
    {firstName: "Mai", lastName: "Dang"},
    {firstName: "Vu", lastName: "Anh"}
]
const arrMap5 = arrMap4.map((item, index) => {
    return `${item.firstName} ${item.lastName}`
});

console.log(arrMap5);