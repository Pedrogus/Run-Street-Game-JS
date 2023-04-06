// variaveis x do carro [carro1, carro2, carro3, Carro4, carro5]
let xCarro = [600 ,600, 600, 600, 600];
// variaveis y do carro [carro1, carro2, carro3, Carro4, carro5]
let yCarro = [35, 90, 140, 205, 260];
// velocidades do carro.
let velocidadeC = [2.2, 3.2, 3.5, 4.6, 5.5];

// comprimento e altura.
  let comprimento = 50;
  let altura = 40;

// Movimento do carro
function moveCarro(){
  
  for(let i = 0; i < ImagemCarros.length; i = i + 1){
  xCarro[i] -= velocidadeC[i];
  }
}

// Mostrando o Carro
function mostraCarro(){
  
for(let i = 0; i < ImagemCarros.length; i = i + 1){
  image(ImagemCarros[i], xCarro[i], yCarro[i], comprimento, altura);
}
}

// loop do carro
function ReturnCar() {
  
 for(let i = 0; i < ImagemCarros.length; i = i + 1){
  if(xCarro[i] < -50){
    xCarro[i] = 600;
    velocidadeC[i] = random(2, 6);
  }
 }
}