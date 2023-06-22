let userName= 'Иван';
console.log(userName??'Аноним');

let firstName= null;
let lastName= null;
let nickName='СуперКодер';
console.log(firstName??lastName??nickName??"Аноним");
console.log(firstName||lastName||nickName||"Антоним");//работает так же как и example выше

//различие между || и ??
let height=0;
console.log(height||100);//100, потому что 0  -false
console.log(height??100);//0,  потому что height  не  undefined  и не null

// чтобы перед умножением использовалось ?? нужно поставить скобки
let high=null;
let weight=null;
let aria=(high??100)*(weight??50);
console.log(aria);//5000
//если не поставить скобки то выдаст совсем не тот результат, к примеру:
let h=null;
let w=null;
let  a=h??100*w??50;
console.log(a);//0

//для использования ?? и && и  ||, чтобы не выдоавало ошибки искользовать нужно скобки всегда
let x=(1&&2)??3;
console.log(x);