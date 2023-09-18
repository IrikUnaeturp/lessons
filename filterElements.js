// Filter Elements from Array
let arr = [0,10,20,30]
let fn = function moreThan10(n) { return n > 10; }

let filter = function (){
    return arr.filter(fn)
}
console.log(filter(arr,fn))