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
let expect = function(val) {
  return{
    toBe: (val2) =>{
        if (val !== val2) console.log ('notEquel')
        else console.log('true')
    },
    notToBe:(val2) =>{
        if(val === val2) console.log('Equal')
        else console.log('true')
    }
  }
};


expect(5).toBe(5); // true
expect(5).notToBe(5); // "Equal"
 