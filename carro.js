
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.1, 3.2, 2.4, 3.8]
let xCarros = [600, 600, 600, 600, 600, 600]
let comprimentoCarro = 60;
let alturaCarro = 35;

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoIncialDoCarro(){
  for (let i = 0; i < xCarros.length; i++){
    if (passouATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function passouATela(xCarro){
  return xCarro < - 50;
}