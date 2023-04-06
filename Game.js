
function setup() {
  createCanvas(600, 400);
  somTrilha.setVolume(0.1);
  somTrilha.loop();
}

function draw() {
  
  background(estrada);
  
   moveCarro();
   moveAtor();
  
   ReturnCar();
   colisão();
  
   mostraAtor(xAtor, yAtor);
   mostraCarro();
   mostraPonto();
  
  marcaPonto();
}

