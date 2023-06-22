let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    console.log('oficiu ii inchis');
}

let currentUser = null;
let defaultUser = 'John';
let vame = (currentUser || defaultUser || 'unnamed');
console.log(vame);

let y;
true || (y = 1);
console.log(y);//undefined, потому что y=1  не вычисляется

let x;
false || (x = 1);
console.log(x);//1 так как  первый операнд false, то вычиление переходит ко второму операнду и выдает ответ 

let our = 12;
let minute = 30
if (our == 12 && minute == 30) {
    console.log("Сейчас 12:30");
}

if (1 && 0) {
    console.log('не сработет, так как один  из операндов ложный');
}

console.log(1 && 0);//0
console.log(1 && 5);//5
console.log(null && 5);//null
console.log(0 && 'no matter  what');//0

console.log(1 && 2 && null && 3);//null
console.log(1 && 2 && 3);//3




//операторы && и||  можно использовать вместо if
let z = 2;
(z > 1) && console.log('Greater than zero');//  console.log выполниться лишь в том случае если z>1 будет истинной

//оператор !не
console.log(!true);//false
console.log(0);//true

//!! - двойной "не" используют для преобразования к логическому типу например:
console.log(!!'notEmptyString');//true
console.log(!!null);//false



//задача 1 
console.log(null || 2 || undefined);//2
//zadacha 2
console.log(console.log(1) || 2 || console.log(3));//2, потому  что console.log(1)=undefined, а undefined||2=2
//zadacha 3
console.log(1 && null && 2);//null
//zadacha4
console.log(console.log(1) && console.log(2));//сначала  выведет  ответ из первого console.log, а потом undefined,т.е. 1 undefined
//zadacha 5
console.log(null || 2 && 3 || 4);//3, потому что сначала 2&&3=3,  потом null||3||4=3, выводит первый истеный операнд
//задача 6
let age = 14
if (age >= 14 && age <= 90) {
    console.log('true');
}
else { console.log('false'); }
//zadacha 7(a)
let old = 91;
if (!(old >= 14 && old <= 90)) {
    console.log('true');
}
else {
    console.log('false');
}
//zadacha 7(b)
let god = 11;
if (god < 14 || god > 90) {
    console.log('true');
}
else {
    console.log('false');
}

//ZADACHA 8
if (-1 || 0) { console.log('first'); }//first
if (-1 && 0) { console.log('second'); }//0=false
if (null || -1 && 1) { console.log('third'); }//third

//zadacha 9
let username = 'Админ';
let password = 'ррп'
if (username === 'Админ' && password === 'Главный') {
    console.log('Здравствуйте!');
}
if (username === 'Отмена' || password === 'Отмена') { 
    console.log('Отмена'); 
}  else if (username !== 'Админ') { 
    console.log('Я вас не знаю:('); 
} else if (password !== 'Главный') { 
    console.log('Не верный пароль!'); 
}