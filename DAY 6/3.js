let str = "hello world";
let o1 = "world hello";
let o2 = "dlrow olleh";
let o3 = "olleh dlrow";

let ans = str
  .split(" ")
  .reverse()
  .map((el) => {
    return el.split("").reverse().join("");
  }).join(" ");

console.log(ans);