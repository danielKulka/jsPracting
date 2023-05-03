const animals = [
  'lion',
  'dog',
  "cat"
]

console.log(animals)
console.log(animals[1])
console.log(animals.length)

// array com constructor
let myArray = new Array('a','b','c','d');

//contar elementos do array

console.log(myArray.length);

//transformando strings em array

let word = "programação";
console.log(Array.from(word));

//manipulando arrays
let techs = ["html", "css", "js"];

//adicionar item no fim
techs.push("nodeJs");

//adicionar item no inicio
techs.unshift("sql");

//remover do fim
techs.pop();

//remover do inicio
techs.shift();

//pegar apenas alguns elementos do array
console.log(techs.slice(1,3));

//remover 1 ou mais itens de qualquer posição do array
techs.splice(1,1);

//encontrar a posição de um elemento no array
let index = techs.indexOf("html");
console.log(index);

console.log(techs);