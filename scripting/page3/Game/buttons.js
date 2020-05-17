function up(){row = 0; col = -1;};
function down(){row = 0; col =1;};
function left(){row = -1; col =0;};
function right(){row = 1; col =0;};
function space(){pressed = (pressed + 1) % 2 ;clear();};
function easy(){difficulty = 0;};
function medium(){difficulty = 1;};
function hard(){difficulty = 2;};
function reset(){enemyCount = 0; count =0; difficulty =0;};

function buttonCreate(){

  buttonUP = createButton('U');
  buttonUP.size(50,50);
  buttonUP.position((windowWidth/2)-25, 410);
  buttonDOWN = createButton('D');
  buttonDOWN.size(50,50);
  buttonDOWN.position((windowWidth/2)-25, 480);
  buttonLEFT = createButton('L');
  buttonLEFT.size(50,50);
  buttonLEFT.position((windowWidth/2)-85, 450);
  buttonRIGHT = createButton('R');
  buttonRIGHT.size(50,50);
  buttonRIGHT.position((windowWidth/2)+35, 450);
  
  bSpace = createButton('[SPACE]');
  bSpace.size(100,30);
  bSpace.position((windowWidth/2)-50, 550);

  bE = createButton('[E]');
  bE.size(50,50);
  bE.position((windowWidth/2)-180, 420);
  bM = createButton('[M]');
  bM.size(50,50);
  bM.position((windowWidth/2)-180, 480);
  bH = createButton('[H]');
  bH.size(50,50);
  bH.position((windowWidth/2)-180, 540);

  bR = createButton('[R]');
  bR.size(50,50);
  bR.position((windowWidth/2)+140, 540, 'fixed');
  
}

function buttonRun(){
    buttonUP.mouseClicked(up);
    buttonDOWN.mouseClicked(down);
    buttonLEFT.mouseClicked(left);
    buttonRIGHT.mouseClicked(right);
    bSpace.mouseClicked(space);
    bE.mouseClicked(easy);
    bM.mouseClicked(medium);
    bH.mouseClicked(hard);
    bR.mouseClicked(reset);
}