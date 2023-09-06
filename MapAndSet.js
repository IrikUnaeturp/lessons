//задача 1
// function unique() {
//    let arr = new Set(values)
//    for (let value of arr) console.log(value);
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//  console.log( unique(values) ); // Hare,Krishna,:-O

//задача 2
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){
// let map = new Map()
// for (let word of arr){
//     let  sorted = word.toLowerCase().split("").sort().join('')
//     map.set(sorted, word)
// }
// return Array.from(map.values())
// }
// console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

//задача 3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());//добавилаArray.from, потому что  keys не был массивом

keys.push("more");
console.log(keys)

  