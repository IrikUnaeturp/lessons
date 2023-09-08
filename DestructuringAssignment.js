//задача 1
// let user = {
//     name: "John",
//     years: 30
//   };
// let {name, years,isAdmin = false } = user
// console.log(name)
// console.log(years)
// console.log(isAdmin)

// задача 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(){
    return typeof(Object.values(salaries)[0]) == "undefined" ? null : Object.entries(salaries).sort(([a, a1], [b, b1]) => a1 - b1).at(-1)[0]
}

console.log(topSalary(salaries))