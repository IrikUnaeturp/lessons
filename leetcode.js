// //counter
// function createCounter(n) {
//     let count = n;
//     return function() {
//       return count++;
//     }
//   }
// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

//toBe or notTobe
// let expect = function(val) {
//   return{
//     toBe: (val2) =>{
//         if (val !== val2) console.log ('notEquel')
//         else console.log('true')
//     },
//     notToBe:(val2) =>{
//         if(val === val2) console.log('Equal')
//         else console.log('true')
//     }
//   }
// };

//Apply Transform Over Each Element in Array
// let arr =[1,2,3,4]
// let fn = (element, index) => {
//    return element * 2; 
//  };
// function map () {
//    let i=0, result = [];
//    for(let num of arr)
//        if(fn(num, i++))
//            result.push(fn(num,  i- 1));
//    return result;
// };
//   console.log(arr)
//   console.log(map(arr,fn))
let arr = [1, 2, 3, 4];

// Define a function that takes two arguments (element and index)
let fn = (element, index) => {
  return element * 2; // Example: double the element
};

function customMap(arr, fn) {
  let i = 0,
    result = [];
  for (let num of arr)
    if (fn(num, i++))
      result.push(fn(num, i - 1)); // Apply the function and push the result
  return result;
}

console.log(arr);
console.log(customMap(arr, fn));






// expect(5).toBe(5); // true
// expect(5).notToBe(5); // "Equal"
 
//counter2
// let createCounter = function(init) {
//    let  counter =  init
//    return{
//     increment:() => ++counter,
//     decrement:() => --counter,
//     reset:() => counter  = init
//    }
// };


// const counter = createCounter(5)
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4
 