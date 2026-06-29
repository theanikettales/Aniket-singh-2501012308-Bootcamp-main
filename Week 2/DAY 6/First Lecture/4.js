//array
//its a collection of different data type
//array has dynamic size length
//contiguous memory location/ordered memory location
// indexing
// //mutuable - inbuilt fn that is used to change arr value
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]);
// fruits.push("aniket");
// console.log(fruits);

//1.create
var arr = [];
arr = [1, 2, 3, 4, 5];

//2.read
console.log(arr[0]);

//3.update
arr[0] = 10;
console.log(arr);

//4.delete
arr.splice(1, 1);
console.log(arr);

//rhs pop
arr.pop()
console.log(arr);

//lhs shift
arr.shift()
console.log(arr);
