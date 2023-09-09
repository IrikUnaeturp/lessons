//задача 1 
// let Feb20_2021 =new Date(2021, 1,  20, 5, 12 )
// console.log(Feb20_2021)
//задача 2
// let date = new Date(2012, 0, 2)
// function getWeekDay(){
//     let days = [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
//    return days[date.getDate()]
// }
// console.log(getWeekDay(date))
//задача 3
let date  = new Date(2012, 0, 4)
function getLocalDay(){
    let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ","ВС"]
    return days[date.getDate()- 2] + ", " + date.getDate()
}

console.log(getLocalDay(date))