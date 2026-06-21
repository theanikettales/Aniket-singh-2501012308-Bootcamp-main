// Rest and spread operator

// Spread operator : merge/copy/join [...]
let a1 = [1,2,3];
let a2 = [4,5,6];

let a3 = [...a1, ...a2];

console.log(a3, typeof a3);

// Rest operator : return an array [...]
function add(x,...y){
    console.log(x);
    console.log(y);
}

add(1,2)
add(1)
add(1,2,3)


