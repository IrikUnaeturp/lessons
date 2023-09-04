// let people  = "pidr";
// if (typeof (people) === 'number'){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// let menu = {
//     weight: 200,
//     house: 300,
// }
// if (typeof menu.weight == "number"){
//     console.log(true)
//}
//else{
//    console.log(false)
//}

// for(i=1; i<5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i)
// }

// let shoko = "шоколадки"
// let banan = 2
// if(banan>0){
//     console.log(4 +" " +shoko)
// }
// else {
//     console.log("шоколадка")
// }


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

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu)
// console.log(menu)

// let x = [1,2,3,4]
// let y = x.splice(",")
// console.log(y)
// console.log(x)

let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, а затем 😂
}