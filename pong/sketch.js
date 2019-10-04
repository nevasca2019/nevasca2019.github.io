let tocouMihaRaquete = false;
let tocouMinhaRaqueteOponente = false;

//Dimensões da Tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2;

//Variáveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 13;
let velocidadeY = 13;
let aumentoDeVelocidade = 1.5;
let raio = diametro / 2;

//Variáveis das raquetes

let velocidadeRaquete = 20;
let alturaRaquete = 110;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;

let xRaqueteOponente = 0;
let yRaqueteOponente = 145;

//Placar
let meuPlacar = 0;
let placarOponente = 0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um loopin sempre, desenha o que tem dentro
function draw() {
  //Bolinha no centro
  background("deepSkyBlue");
  stroke(255);
  strokeWeight(5);
  line( metadeTela, 0, metadeTela, alturaTela);
  if(frameCount < 400) // 10 segundos
      telaInicial();
  else
    jogar();
  
  function telaInicial(){
    fill("Lime");
    rect(larguraTela/4, 0, metadeTela, alturaTela);
    textAlign(CENTER);
    textSize(24);
    fill("Purple");
    text("Ping Pong do Programador", metadeTela, alturaTela/2);
    }
  }
  
  function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
    mostraBolinha();
    movimentoBolinha();
    detectaColisao();
    mostraRaquetes();
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    mostraPlacar();
    
}else{
    //Verifica e mostra campeão
    if(meuPlacar == 5)
      setasVenceu();
      else
        letrasVenceu();
  }  

    function letrasVenceu(){
        fill("Orange");
        rect(0,0, metadeTela, alturaTela);
        fill("Purple");
        textAlign(CENTER);
        text("Letras venceu", metadeTela/2, metadeTela/2);
    }
    
    function setasVenceu(){
        fill("Purple");
        rect(metadeTela, 0, larguraTela, alturaTela);
        textSize(40);
        fill("Orange");
        textAlign(CENTER); // 3/4*larguraTela
        text("Setas venceu", metadeTela + metadeTela/2, alturaTela/2);
    } 
  }//Fim da função Draw

function mostraPlacar(){
    textSize(30);
  
    fill("Purple");
    text(meuPlacar, 3/4 * larguraTela, 30);
  
    fill("Orange");
    text(placarOponente, larguraTela/4, 30);
   
}

function detectaColisaoBolinhaRaquetes(){
  
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0)
    velocidadeX *= -1;
    somRaquetada.play();
  
  }
  //Colisão com a Raquete do Oponente
  
  tocouMinhaRaqueteOponente =  collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
  if(tocouMinhaRaqueteOponente){
    //Impede gol contra
   if(xBolinha < metadeTela && velocidadeX < 0){
    velocidadeX *= -1;
     somRaquetada.play();
   }
  }
}


function movimentaRaqueteOponente(){
 
if (keyIsDown(87)){//Para cima
  if(yRaqueteOponente > 0)//Teto
    yRaqueteOponente -= velocidadeRaquete;
}
  
  if (keyIsDown(83)){//Para baixo
    if(yRaqueteOponente < (alturaTela - alturaRaquete))//Chão
      yRaqueteOponente += velocidadeRaquete;
  }
  
   if (keyIsDown(65)){//Para esquerda
     if(xRaqueteOponente > 0)//Parede esquerda
xRaqueteOponente -=  velocidadeRaquete;
  }
  
   if (keyIsDown(68)){//Para direita
     if(xRaqueteOponente < (metadeTela - larguraRaquete - 2))//Parede direita
xRaqueteOponente +=  velocidadeRaquete;
  }
}

function movimentaMinhaRaquete(){
 
if (keyIsDown(UP_ARROW)){//Para cima
  if(yMinhaRaquete > 0)//Teto
yMinhaRaquete -=  velocidadeRaquete;
}
  
  if (keyIsDown(DOWN_ARROW)){//Para baixo
    if(yMinhaRaquete < (alturaTela - alturaRaquete))//Chão
yMinhaRaquete +=  velocidadeRaquete;
  }
  
   if (keyIsDown(LEFT_ARROW)){//Para esquerda
     if(xMinhaRaquete > metadeTela)//Parede esquerda
xMinhaRaquete -=  velocidadeRaquete;
  }
  
   if (keyIsDown(RIGHT_ARROW)){//Para direita
     if(xMinhaRaquete <  (larguraTela - larguraRaquete))//Parede direita
xMinhaRaquete +=  velocidadeRaquete;
  }
}


function mostraRaquetes(){
fill("Purple");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
  fill("Orange");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
  
}


function mostraBolinha(){
 fill("deepPink");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
    
}//Fim mostra Bolinha

function movimentoBolinha(){
 xBolinha += velocidadeX;
  yBolinha += velocidadeY;
  }//Fim do movimento da bolinha

function detectaColisao(){

//Colisão com as Bordas Laterais
  
  //Lado direito - Meu Lado
if(xBolinha + raio >= largura){
  velocidadeX *= -1; //velocidade *(-1)
  placarOponente += 1;
  somPonto.play();
  velocidadeX -= aumentoDeVelocidade;
  velocidadeY -= aumentoDeVelocidade;
  //console.log("Velocidade X:" + velocidadeX);
  //console.log("Velocidade Y:" + velocidadeY);
   }
  
  //Lado esquerdo- Lado do Oponente
  if(xBolinha - raio <= 0){
    velocidadeX *= -1; //velocidade * (-1)
    meuPlacar += 1;
    somPonto.play();
    velocidadeX += aumentoDeVelocidade;
    velocidadeY += aumentoDeVelocidade;
  }
  
  
  //Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura ||
     yBolinha - raio <= 0){
        velocidadeY *= -1;
    }//Fim detecta colisão
  
  
}

