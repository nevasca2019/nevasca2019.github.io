//Pega o Elemento pelo Id - getElementByID
var mostraLargura = document.getElementById("lg");

var mostraAltura = document.getElementById("at");

var medidas = function() {
     //Largura Interna da Janela
     largura = window.innerWidth;
     //Altura Interna da Janela
     altura = window.innerHeight;

     mostraLargura.innerText = largura + 'px';
     mostraAltura.innerText = altura + 'px';
}

//Eventos
//Ao carregar a página
window.onload = medidas;

//Ao redimencionar a página
window.onresize = medidas;