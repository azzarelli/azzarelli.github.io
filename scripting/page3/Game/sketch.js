var counter = document.getElementsByClassName("counter");
var count = 0;
var enemyCount = 0; // if the enemy has eaten the fruit you loose
var pressed = 1;
var col = 0;
var row = 0;
var difficulty;
var state = "Pause"; // Game has been paused
var initStart = 0; // Start screen

function setup() {
  let can = createCanvas(400, 400);
  can.position((windowWidth/2)-200, (windowHeight/2)-200);
  can.style("z-index: 10;");
  textFont("Roboto Mono");
  difficulty = 0;
  
  frameRate(100);
  man = new Man();
  enemy = new Enemy();
  fruit = new Fruit();
}

function draw() {
  textSize(20);
  sbackground(255);
  
  if(!enemyCount){
  
    if(!pressed) initStart = 1;
  
    if(initStart == 0){
      fill(0.2);
      text("Game Rules:", 50, 60);
      textSize(13);
      text("You need to get to the 'Objective' before", 30, 96);
      text("the 'Opponent'. If the 'Opponent' gets to", 30, 116);
      text("it first you loose. Good Luck!", 30, 136);
    
      textSize(20);
      text("Player Character", 82, 186);
      text("Opponent Character", 82, 226);
      text("Objective", 82, 266);
      fill("rgba(0,255,0,1)");
      rect(50,210,20,20);
      fill("rgba(100,100,255,1)");
      rect(50,170,20,20);
      fill("rgba(255,0,0,1)");
      rect(52,250,15,15);
    
      fill(0.2);
      text("Press [SPACE] to Start", 60, 330);
    }else{
      fill(0.2);
      text("Easy [E]", 300, 20);
      text("Medium [M]", 276, 45);
      text("Hard [H]", 300, 70);
      fill("rgba(0, 0, 0, 1)");
      text("Press [SPACE] to "+ state, 65, 390);
  
      if(difficulty == 0){
        enemy.speedFactor = 0.2;
        fill("rgba(255, 0, 0, 1)");
        text("Easy [E]", 300, 20);
        fill(0.2);
        text("Medium [M]", 276, 45);
        text("Hard [H]", 300, 70);
      }else if (difficulty == 1){
        enemy.speedFactor = 0.8;
        fill("rgba(255, 0, 0, 1)");
        text("Medium [M]", 276, 45);
        fill(0.2);
        text("Easy [E]", 300, 20);
        text("Hard [H]", 300, 70);
      }else if (difficulty == 2){
        enemy.speedFactor = 1.2;
        fill("rgba(255, 0, 0, 1)");
        text("Hard [H]", 300, 70);
        fill(0.2);
        text("Medium [M]", 276, 45);
        text("Easy [E]", 300, 20);
      }
  
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
        state = "Play";
      }else{
        textSize(20);
        fill("rgba(0, 255, 0, 1)");
        text("Your Points:   "+ count, 2 ,18);
        state = "Pause";
      }
  
    }
  }else{
    textSize(30);
    fill("rgba(255, 0, 0, 1)");
    text("GAME OVER", 110 ,180);    
    fill(0.8);
    textSize(20);
    text("Score: "+ count, 145 ,220); 
    text("Press [R] to Restart", 85 ,360); 
    
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
  if(enemyCount){ // if game over
    if(keyCode == 82) {enemyCount = 0; count =0; difficulty =0;}// "r" pressed for reset
  }
  
  if(keyCode == 69) // "e" pressed
    difficulty = 0;
  else if(keyCode == 77)// "m" pressed
    difficulty = 1;
  else if(keyCode == 72)
    difficulty = 2;
}