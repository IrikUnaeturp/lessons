// задача 2
// let styles = ["Джаз","Блюз"]
// styles.push('Рок-н-Ролл')
// styles[1] = "Классика"
// styles.shift()
// styles.unshift("Рэп","Регги")
// console.log(styles)

// //задача 3
// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );//он получает в качестве this объект arr и выводит массив,y массива в итоге 3 
//   //элемента: сначала их было 2, плюс функция.
// });

// arr[2](); //[ 'a', 'b', [Function (anonymous)] ]

//задача 4

// let sumInput = function(){
//     return someNumbers = [ 0,1,7]
// }
// sumInput()

// let sum = someNumbers.map(i=>x+=i, x=0).reverse()[0]
// console.log(sum)

//задача 5
function getMaxSubSum(arr) {
    let sum = 0;
    let sums = []
    for (let num of arr) {
      if (num > 0 || (num < 0 && Math.abs(num) < sum)) {
        sum += num;
      } else {
        sum = 0;
      };
      sums.push(sum);
    };
    sums.push(sum)
    return Math.max(...sums);
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]))