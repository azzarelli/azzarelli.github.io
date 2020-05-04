class Man {
  constructor() {
// These are the properties given to the man 
    this.speedFactor = 1.5;
    this.width = 15;
    this.height = 15;
    this.body = [];
    this.body[0] = createVector(50,50);
    this.xdir = 0;
    this.ydir = 0;
    this.colorR = 100;
    this.colorG = 100;
    this.colorB = 255;
    this.color = "rgba("+this.colorR+ ", "+this.colorG+", "+this.colorB+", 1)";
  }
  
  update(row, col) {
    let x = this.body[0].x;
    let y = this.body[0].y;
 
/*Prevent the man from moving on if he hits a boundary*/
    if( x < 0 && row == -1){
      this.body[0].x += 0;
    }
    else if (x > 385 && row == 1){
      this.body[0].x += 0;
    }else {
      this.body[0].x += this.xdir * this.speedFactor;
    }
    
    if(y<0 && col == -1){
      this.body[0].y += 0;
    }
    else if (y > 385 && col == 1){
      this.body[0].y += 0;
    }else {
      this.body[0].y += this.ydir * this.speedFactor;
    }
  }
  
  show(pause) {
    if(!pause){
      this.color = "rgba("+this.colorR+ ", "+this.colorG+", "+this.colorB+", 1)";  
    }else {
      this.color = "rgba(0, 0, 0, 1)";
    }
  fill(this.color);
    rect(this.body[0].x, this.body[0].y, this.height,this.width);
  }
  
  setDir(x, y, pause){
/*If game is paused then block movement*/
    if(!pause){
      this.xdir = x;
      this.ydir = y;
    }else{
      this.xdir = 0;
      this.ydir = 0;
    }
  }
}