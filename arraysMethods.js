//задача 1
// function camelize(){
//     let str  = '---background-color'
//     // return str.split("-").map(function(word,index){
//     //     index == 0 ? word : word[0].toUpperCase + word.slice(1)
//     // }).join() //моя не рабочая хуйня
//     return str.split("-").filter(v => !!v).map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("")
   
// }
// console.log(camelize())

//задача 2
// function filterRange(arr, a, b){
// return arr.filter(value => (a <= value && value <= b))
// }
// let arr =[5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// console.log(filtered)

//задача  3
// let arr = [5, 3, 8, 1]
// function filterRangeInPlace(arr, a, b){
//     const filtered = arr.filter((e) => e >= a && e <= b)
//     while (arr.length !== 0) {
//     arr.pop()
//     }
//     for (let i = 0; i < filtered.length; i++) {
//     arr.push(filtered[i])
//     }
//     }
// console.log(filterRangeInPlace(arr,1,3))
// console.log(arr)

//задача 4

// let arr = [5, 2, 1, -10, 8];
// function sortDecreasing(a, b){
//  if (a>b) return 1
//  if (b>a) return -1
// }
// let acc = arr.sort(sortDecreasing)
// let answer = arr.reverse(acc)
// console.log(answer) //это моя наркомания, но работает

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// console.log(arr)//как рекомендует автор


//задача 5
// let arr = ["HTML", "JavaScript", "CSS"];
// let copy =  []
// function copySorted(){
//     return copy.concat(arr).sort()
    
// }

// let sorted = copySorted(arr);

// console.log(sorted)
// console.log(arr)


//задача 6

// function Calculator(){
//     this.methods ={
//         "-":(a,b) => a - b,
//         "+":(a,b) =>a + b
//     }
//     this.calculate=function(str){
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//           }

//     return this.methods[op](a, b);
//     }
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }
// let calc = new Calculator
// console.log( calc.calculate("3 + 7") )

//задача  7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((item)=>item.name)

// console.log( names ); // Вася, Петя, Маша

//задача 8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }))
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

//задача 9
// let arr = [1, 2, 3];
// function shuffle(){
//     return arr.sort(()=>Math.random()-0.5)
// }

// console.log(shuffle(arr))
// console.log(shuffle(arr))
// console.log(shuffle(arr))

// задача 10
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(){
    
//     return arr.reduce ((sum, current) => (sum + current.age), 0)/arr.length 

// }
// console.log( getAverageAge(arr) )

//задача 11

// let arr = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   function unique() {
//     let result = [];

//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }
  
//   console.log(unique( arr )); // кришна, харе, :-O

//задача 12
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
//   function groupById(){
//     return  users.reduce((obj,value)=>{
//         obj[value.id] = value
//         return obj
//     }, {})
//   }
//   let usersById = groupById(users);
  
//   console.log(usersById)

//задача 13
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
function sortByAge(){
    return arr.sort((a,b)=> a.age>b.age?1:-1,0)
}
sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя