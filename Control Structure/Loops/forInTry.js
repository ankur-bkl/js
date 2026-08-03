// What is logged when an array has an extra custom property?

let arr = [1, 2, 3];
arr.custom = "hello";
console.log(arr)
for (let key in arr) {
  console.log(key);
}