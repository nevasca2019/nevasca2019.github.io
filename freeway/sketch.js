function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(placarVaca <5 && placarCarneiro <5){
  jogar();
    console.log("Vaca:" + placarVaca + "Carneiro:" + placarCarneiro);
  }else
   verificaVencedor();
  }else{
    telaInicial();
  }
}


function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); // Tela final
  else
    carneiroVencedor(); //Tela final
}

function carneiroVencedor(){
  background("Orange");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Crimson");
  textSize(24);
  text("Carneiro Venceu", 300, 190);
  image(imgCarneiro, 300, 200, 200, 200);
}

function vacaVencedora(){
  background("Crimson");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chartreuse");
  textSize(48);
  text("Vaca Venceu", 200, 190);
  image(imgVaca, 200, 200, 150, 150);
}

function telaInicial(){
  background("Chartreuse");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Brown");
  textSize(48);
  text("Jogo da Av. 1º de Maio", 300, 200);
  textSize(24);
   text("Desenvolvido por Wanessa D.C de Lima", 300, 230);
}

function jogar(){
 background(imgEstrada);
   mostraCarros();
   mostraVaca();
   mostraCarneiro();
   movimentaCarros();
   movimentaVaca();
   movimentaCarneiro();
   mostraPlacar(); 
   atropelamento();
}

 