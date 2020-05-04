class Enemy{
  constructor(){
    this.speedFactor = 0.3;
    this.width = 15;
    this.height = 15;
    this.body = createVector(300,300);
    this.xdir = 0;
    this.ydir = 0;
    this.colorR = 0;
    this.colorG = 255;
    this.colorB = 0;
    this.color = "rgba("+this.colorR+ ", "+this.colorG+", "+this.colorB+", 1)";
  }

  show(pause){
    if(!pause){
      this.color = "rgba("+this.colorR+ ", "+this.colorG+", "+this.colorB+", 1)";  
    }else {
      this.color = "rgba(0, 0, 0, 1)";
    }
    fill(this.color);
    rect(this.body.x, this.body.y, this.height,this.width);     
  }
  
  update(fruitLoc, pause){
    let fruitX = fruitLoc[0];
    let fruitY = fruitLoc[1];
    var dirX = (fruitX - this.body.x)/(Math.abs((fruitX - this.body.x)));
    var dirY = (fruitY - this.body.y)/(Math.abs((fruitY - this.body.y)));
    
    if(!pause){ 
      if((fruitX - this.body.x) != 0){
         dirX = dirX;
      }else dirX =0;
      
      if((fruitY - this.body.y) != 0){
         dirY = dirY;
      }else dirY =0;
    }else{
      dirX = 0;
      dirY = 0;
    }
    
    this.body.x += (dirX * this.speedFactor);
    this.body.y += (dirY * this.speedFactor);
  }
}