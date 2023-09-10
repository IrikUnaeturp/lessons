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
// let date  = new Date(2012, 0, 4)
// function getLocalDay(){
//     let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ","ВС"]
//     return days[date.getDate()- 2] + ", " + date.getDate()
// }

// console.log(getLocalDay(date))

//задача 4
// let date = new Date(2015, 0, 2)
// let days = 365
// let clonDate = new Date (date)
// function getDateAgo(){
//  (clonDate.setDate(clonDate.getDate() - days))
//  return clonDate
// }
// console.log(getDateAgo(clonDate, days))
// console.log(date)

//задача 5
// let year = 2012
// let month = 0
// let date = new Date(year, month+1,0 )
// function getLastDayOfMonth(){
//     return date.getDate()

// }
// console.log(getLastDayOfMonth())

//задача 6
// let  date = Date.now()
// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   }
// console.log(getSecondsToday(date))
//другое решение задачи 6
// function getSecondsToday() {
//     let now = new Date();
  
//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//     let diff = now - today; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
//   }
  
//   console.log( getSecondsToday() );
//задача 7
//   function getSecondsToTomorrow() {
//     let now = new Date();

//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
//     let diff = tomorrow - now; 
//     return Math.round(diff / 1000); 
//   }
// console.log(getSecondsToTomorrow())
//задача 7
let date = new Date()
function formatDate(date){
let diff = new Date() - date
    if (diff < 1000){
        console.log("прямо сейчас")
    }
    let sec = Math.floor(diff / 1000); 

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000); 
  if (min < 60) {
    return min + ' мин. назад';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); 

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}
console.log( formatDate(new Date(new Date - 1)) ); 

console.log( formatDate(new Date(new Date - 30 * 1000)) ); 

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 

console.log( formatDate(new Date(new Date - 86400 * 1000)) );