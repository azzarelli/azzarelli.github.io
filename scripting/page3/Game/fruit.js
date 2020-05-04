class Fruit{
  constructor(){
    this.body = createVector(10,10);
    this.height = floor(random(400-10));
    this.width = floor(random(400-10));
  }
  
  show(pause){
    if(!pause){
      fill("rgba(255, 0, 0, 1)");
    }else {
      fill("rgba(0, 0, 0, 1)");
    }
    
    rect(this.height,this.width,10,10);
  }
  
  Location(){/* Gives the food placement within the canvas */
    this.location = [];
    this.location[0] = floor(this.height);
    this.location[1] = floor(this.width);
    return this.location;
  }
  new_location(man, enemy, manW, manH){ /* Changes the fruits placement within the board */
    let x = this.width;
    let y = this.height;
    
    if(((man.x - 10) < y) && (y < (man.x + 15))){
      if(((man.y - 10) < x) && (x < (man.y + 15))){
        this.height = floor(random(height-10));
        this.width = floor(random(width-10));
        return "man";
      }
    }
    
    if(((enemy.x - 10) < y ) && ( y < (enemy.x + 15))){
      if(((enemy.y - 10) < x) && (x < (enemy.y + 15))){
        this.height = floor(random(height-10));
        this.width = floor(random(width-10));
        return "enemy";
      }
    }
    else return  " ";
  
}
}