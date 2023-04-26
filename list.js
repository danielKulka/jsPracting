let list = ['banana', 'limão', 'cajú'], listElement = document.querySelector('#list');

function listarFrutas(){
  let frutas = '';
  for(let fruta of list){
    frutas += `<li>${fruta}</li>`;
  }
  listElement.innerHTML = frutas;
}

listarFrutas()