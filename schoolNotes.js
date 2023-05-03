function school(note){
  if (note >= 90){
    console.log("A");
  }
  else if(note <= 89 && note >= 80){
    console.log("B");
  }
  else if(note <= 79 && note >= 70){
    console.log("C");
  }
  else if(note <= 69 && note >= 60){
    console.log("D");
  }
  else{
    console.log("F");
  }
}

//other resolution

function getscore(score){
  let scoreA = score >= 90 && score <= 100;
let scoreB = score >= 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score < 60 && score >= 0;
let scoreFinal;

if(scoreA){
  scoreFinal = "A"
}
else if(scoreB){
  scoreFinal = "B"
}
else if(scoreC){
  scoreFinal = "C"
}
else if(scoreD){
  scoreFinal = "D"
}
else if(scoreF){
  scoreFinal = "F"
}
else{
  scoreFinal = "Nota Inválida"
}

return scoreFinal;
}
