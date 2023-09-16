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

//задача
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(console.log);
//решение
  // new Promise(function(resolve, reject) {
  //   setTimeout(() => {
  //     try {
        
       
  // throw new Error("Whoops!");
  //     } catch (error) {
  //       reject(error);
  //     }
  //   }, 1000);
  // }).catch(console.log);

  let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // все промисы успешно завершены
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => console.log(user.name)));