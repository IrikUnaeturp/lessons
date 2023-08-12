// let a = 0.1
// let b  = 0.2
// console.log(a+b)

//console.log(Math.round(6.35*10)/10)

// let a = 2
// let readNumber = function(){
//     if (typeof a === "number"){
//         console.log("Число: " + a)
//     }
//     else {
//         console.log("Введите число")
//     }
// }
// readNumber()

// function readNumber() {
//     let num;
  
//     do {
//       num = 0;
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
// console.log(`Число: ${readNumber()}`);

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) console.log( i );
// }

// let random = function(){
//     let min = 2;
//     let max = 3;
//     return Math.random() * (max - min) + min

// }
// console.log(random())

function randomInteger(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min

}
console.log(randomInteger(1,10))