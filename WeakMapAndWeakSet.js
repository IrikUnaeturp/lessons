//задача 1
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
//   let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// console.log("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();

//задача 2
let dateRead = new WeakMap();
let time = new Date()

let messages = [
{ text: "Hello", from: "John" },
{ text: "How goes?", from: "John" },
{ text: "See you soon", from: "Alice" }
];

dateRead.set(messages[0], time);
dateRead.set(messages[1], time);
dateRead.set(messages[1], time);

console.log(dateRead.get(messages[1]))