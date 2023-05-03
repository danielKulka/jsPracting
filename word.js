let word = "paralelepipedo";
console.log(word.length);

let number = 1234;
console.log(String(number).length);


//trocando pontos por vírgulas e deixando apenas 2 casas decimais

let decimalNumber = 333.53434;
console.log(decimalNumber.toFixed(2).replace(".",","));

//transformando letras maiúsculas em minúsculas e vice-versa

let wordTwo = "Programar é Muito Bom";
console.log(wordTwo.toUpperCase());
console.log(wordTwo.toLocaleLowerCase());


//separando um texto onde tem espaço se torna uam posição do array. E depois onde eram espaços coloque_

let myArray = wordTwo.split(" ").join("_");
console.log(myArray);

//verificar se o texto contém determinada palavra

console.log(wordTwo.includes("Muito"));