//задача 1 
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
// let sum = 0
//   for (let value of Object.values(salaries)){
//     sum += value
//   }
// console.log(sum)

//задача 2
let user = {
    name: 'John',
    age: 30
  };
  function count(obj){
   return Object.keys(obj).length
  }
  
  console.log( count(user) )