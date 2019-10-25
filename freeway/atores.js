//Criação de funções para a organização
//do código

function mostraVaca(){
   image(imgVaca, xVaca,yVaca, 28, 28);
}

//function mostraCarneiro(){
   //image(imgCarneiro, 435, yCarneiro, 40, 28);
//}//


function movimentaVaca(){
   if(keyIsDown(87)){ //W substituido UP_ARROW
   // yVaca = yVaca - 3;
    if(yVaca > 5)
    yVaca -= 5;
  }
  
  if(keyIsDown(83)){ //S substituido DOW_ARROW
    if(yVaca < 366)
    yVaca += 5;
  }
}

function mostraCarneiro(){
  image(imgCarneiro, xCarneiro, yCarneiro, 30, 28);
}


function movimentaCarneiro(){
  
   if(keyIsDown(UP_ARROW)){ 
   //yCarneiro = yCarneiro - 3;
    if(yCarneiro > 5)
    yCarneiro -= 5;
  }
  
  if(keyIsDown(DOWN_ARROW)){ 
    if(yCarneiro < 366)
    yCarneiro += 5;
  }
  
}