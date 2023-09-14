// let f1 = 1
// let f2 = 2
// let promise = new Promise(function(resolve, reject) {
//     resolve(f1);
//     });
    
//     promise.then(
//     result => console.log(f2),
//     reject => console.log("error")
//     );
    
//     promise.then(console.log)
//     .catch(console.log)//первый вариант

//     promise.then(console.log)//второй вариант


// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(console.log);

  new Promise(function(resolve, reject) {
    setTimeout(() => {
      try {
        
       
  throw new Error("Whoops!");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  }).catch(console.log);