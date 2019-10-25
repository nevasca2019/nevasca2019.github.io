//Placar
let placarVaca = 0;
let placarCarneiro = 0;

function mostraPlacar(){
  textSize(32);
  
fill("Purple");
text(placarVaca, 190, 28);
  
fill("Blue");
text(placarCarneiro, 420, 28);
  
  if(yVaca < 15){
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  
  if(yCarneiro < 15){
    placarCarneiro += 1;
    ponto.play();
    yCarneiro = 368;
  }
}



  
