// function Calculator(){

//     this.read = function() {
//          this.a = 2,
//          this.b  = 3
//     }
//     this.sum = function() {
//         return this.a + this.b
//     }
//     this.mul = function(){
//      return this.a * this.b
//     }
// }
// let calculator = new Calculator();
// calculator.read();


// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

// let obj = {}

// function A(){return  obj}
// function B(){return obj}

// console.log(new A()== new B())


function Accumulator(startingValue){
    this.value = startingValue
    this.read = function(){
        this.a = 2
        this.b = 3
        return this.value += this.a + this.b
        
    }
    
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений