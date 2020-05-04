/*
    Event handler for key press
*/
// DIRECTION, 0 = still, 1 up, 2 right, 3 down, 4 left
var DIRECTION = 0;
document.addEventListener('keydown', function(event) { // Left, Up, Right, Down == 37, 38, 39, 40
    if (event.keyCode == 37) {// LEFT
        DIRECTION = 4; 
    }else if (event.keyCode == 38) {// UP
        DIRECTION = 1
    }else if (event.keyCode == 40) {// DOWN
        DIRECTION = 3; 
    }else if (event.keyCode == 39) {// RIGHT
        DIRECTION = 2; 
    }
}, true);


$(document).ready(function (){
    console.log(DIRECTION);
        
    
});
