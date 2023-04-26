let clicou = function () { console.log('clicou'); }
document.querySelector('#input').addEventListener('click', clicou);


let valor = function () { 
  console.log(this.value)
}
document.querySelector('#input').addEventListener('keyup', valor);

let ul = function () {
  console.log(this)
}
document.querySelector('#events').addEventListener('click', ul);

let li = function (event) {
  event.stopPropagation()
  console.log(this)
}
document.querySelector('.list-item').addEventListener('click',li);

let button = function (event){
  event.preventDefault(this)
}
document.querySelector("button").addEventListener('contextmenu', button);