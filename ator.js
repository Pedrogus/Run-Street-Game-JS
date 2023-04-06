// variaveis do Ator
let xAtor = 100;
let yAtor = 370;

// pontos
let Point = 0;

let hit = false;

function moveAtor(){
//   Movimento Vertical.
  if(keyIsDown(UP_ARROW)) {
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(Borda()){
        yAtor +=3;
    }
  }
// Movimento Horizontal
  if(keyIsDown(RIGHT_ARROW)){
    xAtor +=3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -=3;
  }
}

// verifica Colisão
function colisão() {
  
  for(let i = 0; i < ImagemCarros.length; i = i + 1){
 hit = 
  collideRectCircle(xCarro[i], yCarro[i], comprimento, altura, xAtor, yAtor, 10);
      if(hit) {
        somColidiu.setVolume(0.3);
        somColidiu.play();
        gameOver();
        if(Point != 0){
          Point --;
        }
      }
  }
}

// Mostrando Ator
function mostraAtor(x,y){ 
image(ator, x, y, 20, 20);
}

function gameOver(){
  yAtor = 370;
}

function mostraPonto(){
  textAlign(CENTER)
  textSize(25);
  fill(color(255, 240, 0));
  text(Point, width / 5, 25);
}

function marcaPonto(){
  if(yAtor < 15){
    somPontos.setVolume(0.3)
    somPontos.play();
    Point++;
    
    for(let i = 0; i < velocidadeC; i++){
      velocidadeC[i] += velocidadeIncremento;
    }
  gameOver();
}
}

function Borda() {
  return yAtor < 370;
}
