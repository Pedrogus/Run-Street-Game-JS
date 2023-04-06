// Variaveis das imagens.
let ator;
let estrada;

let ImagemCarro1;
let ImagemCarro2;
let ImagemCarro3;
let ImagemCarro4;
let ImagemCarro5;


// sons
let somTrilha;
let somPontos;
let somColidiu;

// Pre Load
function preload(){
  estrada = loadImage('IMAGEM/estrada.png');
  ator = loadImage('IMAGEM/ator-1.png');
  
  ImagemCarro1 = loadImage('IMAGEM/carro-1.png');
  ImagemCarro2 = loadImage('IMAGEM/carro-2.png');
  ImagemCarro3 = loadImage('IMAGEM/carro-3.png');
  
  
  
   ImagemCarro4 = loadImage('IMAGEM/carro-1.png');
   ImagemCarro5 = loadImage('IMAGEM/carro-2.png');
  
  
  ImagemCarros = 
[ImagemCarro1, ImagemCarro2, ImagemCarro3, ImagemCarro4, ImagemCarro5];
  
//   rodando os Sons
    somTrilha = loadSound('SONS/trilha.mp3');
  somPontos = loadSound('SONS/pontos.wav');
  somColidiu = loadSound('SONS/colidiu.mp3');
  
  
}

// mostrando Imagem
