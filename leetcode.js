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
let arr =[1,2,3,4]
let fn = function moreThan10(n) { return n > 10; }
let filter = function(arr, fn) {
   let newArr = []
   for(let i = 0;i<arr.length;i++) {
    if(fn(arr[i],i)) {
        newArr.push(arr[i]);
   }
   }
   return newArr;
};
  console.log(arr)
  console.log(filter())


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
 