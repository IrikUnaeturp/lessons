let user = {
   name : "John",
   age : 30,
};
console.log(user.name);
console.log(user.age);

let user = {};
user.name = 'John',
user.surname = 'Smith';
user.name= 'Pete';
delete user.name;

let isEmpty = {
   schedule : undefined
};
if(isEmpty.schedule === undefined){
   console.log('true')
}
else{
   console.log("false")
}

const user = {
   name: "John"
 };
 

 user.name = "Pete"; // меняется на Pete

let salaries = {};
 
 let sum = 0;
 for (let key in salaries) {
   sum += salaries[key];
 }
 
 console.log(sum);

let menu = {
   width: 200,
   height: 300,
   title: "My menu"
 };
 let multiplyNumeric = (menu) => {
  for (const key in menu) {
  typeof menu[key] == "number" ? (menu[key] *= 2) : menu[key];
  }
  };
  multiplyNumeric(menu);
  console.log(menu);
  // const schedule = {};
// function isEmpty(obj) { 
//     for(let key in obj){
//         return(false)
//     }
//     return(true)   
// }

// console.log(isEmpty(schedule))
// console.log(schedule)

// let salaries = { 
// }
// let sum = 0
// for (key in salaries){
//   sum+= salaries[key]
// }
// console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu)
  console.log(menu)


  