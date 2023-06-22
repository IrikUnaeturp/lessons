//  let i=0;
// while(i<3){
// console.log(i);
// i++;
//  }
//  while(i){
// console.log(i);
//  i--;
// }
//  //если тело цикла состоит только из одной строки, то мы можем опустить фигурные скобки
// let v=3;
//  while(v) console.log(v--);
// console.log(4);
// let f=0;
// do {
//   console.log(f);
//    f++
// } while(f<3);

// for (j=0;j<5;j++){
//     console.log(j);
// }
// //начавло j=0 выполняется один раз во входе в цикл; условие j<5  проверяется каждый раз перед итерацией цикла, если он будет false,то цикл остановится;
// //тело console.log выполняется до того момента пока условие true; шаг j++ выполняется после тела на каждой итерации перед проверкой условия
// //Выполнить начало=>(Если условие True->Выполнить тело,Выполнить шаг)


// let sum = 5;
// let value = 1;

// while (true) {


//   if (!!value) break; // (*)

//   sum -= value;
//   console.log(sum)
//   console.log(value)

// }
// console.log("Сумма: "+sum);


// let x= 4;
// let a=1;
// while(true){
//     console.log(x);
//     console.log(a);
//     if (x===0)break;
//     x-=a;
 
// }
// console.log('Вы зарабатываете миллионов '+ x);

// for  (let i =0;i<10;i++){
// if (i%2==0) continue;
//     console.log(i);

// } 

//задача1
// let i=3;
// while(i){
//     console.log(i--);
//}
//последним будет 1, потому что 0 это  false

//задача 2
// let i = 0;
// while(++i<5) console.log(i);//будет 1 2 3 4

// let j = 0;
// while(j++<5) console.log(j);// 1 2 3 4 5

//for(let i = 0; i<5; i++) console.log(i);//0 1 2 3 4
//for(let j=0;j<5;++j) console.log(j);//0 1 2 3 4 нет никакой разницы где ставить  ++, увеличение происходит  отдельно от проверки условия

//for(i=2; i<=10; i++){
//    if  (i%2==0) {console.log(i);}
//}

// let i=0;
// while(i<3) {
//     console.log(`number ${i}!`);
//     i++
// }

const numberToVerify = 14;
if (numberToVerify===2 || numberToVerify===3 || numberToVerify===5 || numberToVerify===7){
    console.log('это простое число');}
    else if (numberToVerify%2==0 || numberToVerify%3==0  || numberToVerify%4==0  || numberToVerify%5==0 ||
        numberToVerify%6==0 ||  numberToVerify%7==0 || numberToVerify%8==0 || numberToVerify%9==0){
             console.log('это НЕ простое число');
                 }
        else{
            console.log('это простое число');
        }
    