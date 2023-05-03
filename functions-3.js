// parâmetros (parameters)
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 5;
let number2 = 6;


console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1,number2)}`);

//arrow function

const sayMyName = () =>{
  console.log('daniel')
}
sayMyName()

//callback function

function myName(name){
  console.log("Antes da callback");
  name();
  console.log('depois da callback');
}

myName(
  ()=>{
    console.log("Estou na callback")
  }
)

//function constructor

function Person(name){
  this.name = name;
  this.walk = ()=>{
    return this.name+" está andando"
  }
}

const daniel = new Person ("Daniel");
const maria = new Person ("Maria");
console.log(daniel.walk());
console.log(maria.walk());