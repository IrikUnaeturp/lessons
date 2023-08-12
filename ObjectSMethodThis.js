// function makeUser() {
//     return {
//       name: "John",
//       ref(){ 
//         return this;
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref().name ); // Каким будет результат?
// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     console.log("Привет!");
//   };
  
//   user.sayHi(); // Привет!

// let calculator = {
//     a : 30,
//     b : 40,
//     read(){
//         console.log(this.a);
//         console.log(this.b);
//     },
//     sum(){
//         return this.a+this.b
//     },
//     mul(){
//         return this.a*this.b
//     }

// }
// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this
    }
  };

ladder.up().up().down().showStep().down().showStep();

