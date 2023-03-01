//ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(naBorda()){
       yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      meusPontos = 0;
      somDaColisao.play();
      voltaAtor();
    }
  }
}

function voltaAtor(){
  yAtor = 380;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255,250,60))
  text(meusPontos, width / 2, 27)
}

function marcaPonto(){
  if (yAtor <= 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtor();
  }
}

function naBorda(){
  return yAtor < 385;
}