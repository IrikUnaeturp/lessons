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
let arr = [5, 3, 8, 1]
function filterRangeInPlace(arr, a, b){
    const filtered = arr.filter((e) => e >= a && e <= b)
    while (arr.length !== 0) {
    arr.pop()
    }
    for (let i = 0; i < filtered.length; i++) {
    arr.push(filtered[i])
    }
    }
console.log(filterRangeInPlace(arr,1,3))
console.log(arr)