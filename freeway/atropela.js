let atropelaVaca = false;
let atropelaCarneiro = false;

function atropelamento(){
//Teste carro a carro
  for(let i=0; i<imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50,30);
      if(atropelaVaca){
      //Vaca atropelada
        yVaca = 367;
        if(placarVaca > 0) //Evita placar negativo
          placarVaca -= 1;
          atropelou.play();
    }
    
    atropelaCarneiro = collideRectRect(xCarneiro, yCarneiro, 28, 28, xCarro[i], yCarro[i], 50,30);
      
      if(atropelaCarneiro){
      //Carneiro atropelado
        yCarneiro = 367;
        if(placarCarneiro > 0)
          placarCarneiro -= 1;
         atropelou.play();
      
    }//If
  }//For
}//Atropelamento