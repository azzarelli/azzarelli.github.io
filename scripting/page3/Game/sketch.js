var counter = document.getElementsByClassName("counter");
var count = 0;
var enemyCount = 0;
var pressed = 1;
var stateBinary = 1;
var col = 0;
var row = 0;
var difficulty;
var state = "Pause";

function setup() {
  var canv = createCanvas(400, 400);
  canv.parent('canvHold');
  textFont("Roboto Mono");
  textSize(20);
  difficulty = 0;
  
  frameRate(100);
  man = new Man();
  enemy = new Enemy();
  fruit = new Fruit();
}

function draw() {
  textSize(20);
  background(255);
  fill(0.2);
  text("Easy [E]", 300, 20);
  text("Medium [M]", 276, 45);
  text("Hard [H]", 300, 70);
  fill("rgba(0, 0, 0, 1)");
  text("Press [SPACE] to "+state, 65, 390);
  
  console.log(state)
  
  if(difficulty == 0)
    enemy.speedFactor = 0.2;
  else if (difficulty == 1)
    enemy.speedFactor = 0.8;
  else if (difficulty == 2)
    enemy.speedFactor = 1;
  
  man.update(row, col);
  enemy.update(fruit.Location(), pressed);
  
  man.show(pressed);
  fruit.show(pressed);
  enemy.show(pressed);
  
  man.setDir(row, col, pressed);
  
  let eaten = fruit.new_location(man.body[0], enemy.body, man.width, man.height);
  if(eaten == "enemy"){
    enemyCount++;
  }if(eaten == "man"){
    count++;       
  }
  
  if(pressed){
    fill(0.2);
    rect(30, 400, 100,10);
    textSize(50);
    text("Game Paused",  30,210);
    textSize(20);
    fill(0.2);
    text("Your Points:   "+ count, 2 ,18);
    fill(0.2);
    text("Enemy Points: " + enemyCount, 2, 36);
    state = "Play";
  }else{
    textSize(20);
    fill("rgba(0, 255, 0, 1)");
    text("Your Points:   "+ count, 2 ,18);
    fill("rgba(255, 0, 0, 1)");
    text("Enemy Points: " + enemyCount, 2, 36);
    state = "Pause";
    
  }
  

}

function keyPressed(){
  if(!pressed){
    if(keyCode == LEFT_ARROW){
      row = -1; col =0;
    }else if(keyCode == RIGHT_ARROW){
      row = 1; col = 0;
    }else if(keyCode == UP_ARROW){
      col = -1; row = 0;
    }else if(keyCode == DOWN_ARROW){
      col = 1; row = 0;
    }
  }else {row = 0; col = 0;}
  
  if(keyCode == 32){
    pressed = (pressed + 1) % 2 ;
    clear();
  }
  
  if(keyCode == 69) // "e" pressed
    difficulty = 0;
  else if(keyCode == 77)// "m" pressed
    difficulty = 1;
  else if(keyCode == 72)
    difficulty = 2;
}