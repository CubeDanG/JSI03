//BTVN 1

const arr1 = [1,2,4,5,6];
const arr2 = [1,6,8,9,0];
const arr3 = [];
const duplicateElements = []

arr3.push(...arr1, ...arr2);
function duplicates(arr3) {
    return arr3.filter((item, index) => arr3.indexOf(item) !== index);
}
duplicateElements.push(duplicates(arr3));
console.log(duplicates(arr3));

//BTVN 2

const arr = [1,54,6,7]

//bài này con không biết làm

//BTVN 3
m = [1,2,3,4,5,6,7];
n = [3,5,675,8,96];
p = [];
// o = [1,8,10,96,7];
z = [];

p.push(...m, ...n);
function r(p) {
    return p.filter((item, index) => p.indexOf(item) === index);
}
z.push(...r(p));
console.log(z);
// function remove(z) {
//     return z != [1,8,10,96,7];
// }
// console.log(z.filter(remove));

// function remove(z) {
//     return z != o;
//   };
// function remove(z) {
//     o = [1,8,10,96,7];
//     return z.filter((item, o) => z.indexOf(item) !== o);
// }

var result = z.filter(function(number) {
    o = [1,8,10,96,7];
    return number !== o;
  });

console.log(result);