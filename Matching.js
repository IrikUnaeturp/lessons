//урок номер 5, операторы сравнения
console.log(2>=1);
console.log(2!=1);
console.log(2<1);
let result = 3>4;
console.log(result);
console.log('Коты'>'Коды');

console.log('2'>1);//сравнение разных типов, строка и число
console.log(true==1);//true всегда равен 1, а false -0
console.log(false==0);

let a=0;
console.log(Boolean(a));
let b='0';
console.log(Boolean(b));
console.log(a==b);

console.log(false===0);

console.log(null===undefined);//false, при строгом сравнении они не равны потому  что разный тип данных
console.log(null==undefined);//true, они равны только друг другу и не более
