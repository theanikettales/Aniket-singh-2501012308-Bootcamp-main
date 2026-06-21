// loops in obj

let obj = {
    name: "aniket",
    age: 20,
    status: true
}

//for __ in loops
for(let key in obj){
    console.log(key, typeof key);
    console.log(obj[key]);
}