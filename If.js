let year= 2016;
if (year < 2015) {
    console.log('Это слищком рано...');}
    else  if (year>2015){
        console.log('Это слишком поздно!');}
        else {
            console.log('Правильный ответ!');}

let AccesAllowed;
let age = ('Сколько вам лет?', '20');
 AccesAllowed = (age>18)? true:false;
        console.log(AccesAllowed);

let old=('Возраст?','100');
let message = (old<10)? 'Здравствуй, малыш!': 
(old<18) ? "Привет!": 
(old<100)? "Здравствуйте!" : 
'Какой необычный возраст';
console.log(message);

let company=('Какая компания создала JavaScript?', 'Netscape');
(company=='Netscape')? //использую оператор '?' вместо  if
console.log('Верно!') : console.log('Неправильно!');
//zadacha nomer1
if ('0');{
    console.log('Hey');}
//zadacha nomer 2
let officialName=("Какое официальное название JavaSctipt?", 'hgfiw');
if (officialName=='EcmaScript'){
    console.log('Верно!');}
    else{
        console.log('Не знаете? ECMAScript!');}
//zadacha nomer  3
let userNumber=('Введите число', '3');
let number=(userNumber<0)? "-1" :
(userNumber>0)? "1":
(userNumber===0)? "0":
"Не существует"
console.log(number);
//задача номер 4
let a =2;
let b =  1;
let result=(a+b<4)?'Мало':'Много';
//zadacha nomer 5
let mesage= (' ');
login= (mesage == 'Сотрудник')? 'Привет!' :
(mesage== 'Директор')? ' Здравствуйте' : 
(mesage == ' ')?'Нет логина':
' ';
console.log(login);