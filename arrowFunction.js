let ask = "no";

let question= (ask == "yes" ) ?
  () => console.log('Вы согласились!') :
  () => console.log("Вы не согласились");

question();