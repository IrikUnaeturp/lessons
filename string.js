// let str = 'Widget with id';

// console.log( str.indexOf('Widget') ); 
// console.log( str.indexOf('with') );
// console.log( str.indexOf("id") );

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

//Тот же алгоритм можно записать и короче:

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log( pos );
// }

// let ucFirst = function(){
//     let str = 'function'
//     let str2 = str.charAt(0).toUpperCase() + str.slice(1)
//     console.log(str2)
// }
// ucFirst()

// function checkSpam(){
//     let str = "viaga"
//     let lowerStr = str.toLowerCase()
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx')
// }
// console.log(checkSpam())

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }
// console.log(truncate("Сегодня всё отлично", 10))

function extractCurrencyValue(str){
    return +str.slice(1)

}
console.log(extractCurrencyValue("$120"))