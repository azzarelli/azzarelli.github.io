var centerPressed = 0;
var elm = ["B1",          "B3",     "B4",  "B5",    "B6",   "B7",   "B8",  "E1",  "E2",   "E3",     "E4",   "E5",   "E6",   "E7",   "E8",    "E9", "E10",   "E11", "E12",  "E13",   "E14", "E15",  "E16",  "E17",  "E18",  "E19",  "E20"];
var delayInit = ["0.5s", "0.65s", "0.5s", "0.6s", "0.4s", "0.5s", "0.6s", "0.75s","0.85s", "0.75s","0.65s","1.25s","1.15s","1.5s","0.75s","1.05s","1.15s","0.75s","0.85s","1.15s","1.25s","0.65s","0.75s","1.15s","1.15s","1.5s","0.65s",]

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});

$(document).ready(function (){
  $("#A1").mouseover(function(){
    if(window.centerPressed == 1){$("#A1").css({"background-color":"#ff9eb5"});}
    else{$("#A1").css({"background-color":"white"});}
  });
  $("#A1").mouseout(function(){
    if(window.centerPressed == 1){$("#A1").css({"background-color":"#f2f2f2"});}
    else{$("#A1").css({"background-color":"white"});}
  });
  $("#A2").mouseover(function(){
    if(window.centerPressed == 1){$("#A2").css({"background-color":"#aadd77"});}
    else{$("#A2").css({"background-color":"white"});}
  });
  $("#A2").mouseout(function(){
    if(window.centerPressed == 1){$("#A2").css({"background-color":"#f2f2f2"});}
    else{$("#A2").css({"background-color":"white"});}
  });
  $("#A3").mouseover(function(){
    if(window.centerPressed == 1){$("#A3").css({"background-color":"#aec6cf"});}
    else{$("#A3").css({"background-color":"white"});}
  });
  $("#A3").mouseout(function(){
    if(window.centerPressed == 1){$("#A3").css({"background-color":"#f2f2f2"});}
    else{$("#A3").css({"background-color":"white"});}
  });
  $("#A4").mouseover(function(){
    if(window.centerPressed == 1){$("#A4").css({"background-color":"#fdfd96"});}
    else{$("#A4").css({"background-color":"white"});}
  });
  $("#A4").mouseout(function(){
    if(window.centerPressed == 1){$("#A4").css({"background-color":"#f2f2f2"});}
    else{$("#A4").css({"background-color":"white"});}
  });

  for(i=0;i<27;i++){
    document.getElementById(elm[i]).style.transitionDelay='0s';

    var d = new Date();
    var n = d.getTime();

    let colorR = (Math.floor(Math.random() * n *(230 - 70)) + 70)%256; // generate random numbers 
    let colorG = (Math.floor(Math.random() * n *(230 - 70)) + 70)%256;
    let colorB = (Math.floor(Math.random() * n *(230 - 70)) + 70)%256;
    
    let str = "#"+elm[i];

    $(str).mouseover(function(){
      if(window.centerPressed == 1){$(str).css({"background-color":"rgba(" + colorR + "," + colorG + "," + colorB + ", 0.5)"});}
      else{$(str).css({"background-color":"white"});}
    });
    $(str).mouseout(function(){
      if(window.centerPressed == 1){$(str).css({"background-color":"#f2f2f2"});}
      else{$(str).css({"background-color":"white"});}
    });

  }

});

/* Holding Id properties as variables */
function hold(){
  window.centerPressed = 1;
  
  var A1 = document.getElementById("A1");
  var A2 = document.getElementById("A2");
  var A3 = document.getElementById("A3");
  var A4 = document.getElementById("A4");

  var B1 = document.getElementById("B1");
  var B3 = document.getElementById("B3");
  var B4 = document.getElementById("B4");
  var B5 = document.getElementById("B5");
  var B6 = document.getElementById("B6");
  var B7 = document.getElementById("B7");
  var B8 = document.getElementById("B8");
  var E1 = document.getElementById("E1");
  var E2 = document.getElementById("E2");
  var E3 = document.getElementById("E3");
  var E4 = document.getElementById("E4");
  var E5 = document.getElementById("E5");
  var E6 = document.getElementById("E6");
  var E7 = document.getElementById("E7");
  var E8 = document.getElementById("E8");
  var E9 = document.getElementById("E9");
  var E10 = document.getElementById("E10");
  var E11 = document.getElementById("E11");
  var E12 = document.getElementById("E12");
  var E13 = document.getElementById("E13");
  var E14 = document.getElementById("E14");
  var E15 = document.getElementById("E15");
  var E16 = document.getElementById("E16");
  var E17 = document.getElementById("E17");
  var E18 = document.getElementById("E18");
  var E19 = document.getElementById("E19");
  var E20 = document.getElementById("E20");

}
 
function resetDelay(){
  for(j=0;j<27;j++){
    document.getElementById(elm[j]).style.transitionDelay= delayInit[j];
  }
}

function stick(){
  hold();

  document.getElementById("center_hex").style.backgroundColor = "#d7d7d7";

  // set every element to grey (unless hovered over)
  loadPage("#F2F2F2")

  // I used LoadPage for most of the elements but didnt want page background and text color to change so have to re-set them
  document.body.style.background = "white";
  document.getElementById("center_hex").style.backgroundColor = "#d7d7d7";
  document.getElementById("A1Text").style.color = "white";
  document.getElementById("A2Text").style.color = "white";
  document.getElementById("A3Text").style.color = "white";
}

function hexA1(){ // Top right centre hexagon clicked "CV" 
  document.getElementById("center_hex").style.visibility = "hidden";
  resetDelay();
  loadPage("#ff9eb5");

  setTimeout(function(){A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";}, 1800); // this function prvents a "hover-glitch" where if you are still hovering over the clicked hex it will flicker
  setTimeout(function(){window.location.href="pageA1.html"}, 2300);
}

function hexA2(){ // Bottom right hexagon clicked "Projects"
  document.getElementById("center_hex").style.visibility = "hidden";

  resetDelay();
  loadPage("#aadd77");

    setTimeout(function(){A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";}, 1800);
    setTimeout(function(){window.location.href="pageA2.html"}, 2300);
}

function hexA3(){ // Bottom Left hexagon clicked "Mini-Games"
document.body.style.background = "#aec6cf";
  document.getElementById("center_hex").style.visibility = "hidden";

  resetDelay();
  loadPage("#aec6cf");

    setTimeout(function(){A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";}, 1800);
    setTimeout(function(){window.location.href="pageA3.html"}, 2300);

}

function hexA4(){
  document.getElementById("center_hex").style.visibility = "hidden";

  resetDelay();
  loadPage("#fdfd96");

    setTimeout(function(){A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";}, 1800);
}

function loadPage(COL){
/*This fucntion loads in the colour of the selected page onto each element
  this creates the wave effect across all hexagon elements (aswell as the disapearing of words)
*/
  document.body.style.background = COL;

  document.getElementById("A1Text").style.color = COL;
  document.getElementById("A2Text").style.color = COL;
  document.getElementById("A3Text").style.color = COL;
  // document.getElementById("A4Text").style.color = COL;

  A1.style.backgroundColor = COL;
  A2.style.backgroundColor = COL;
  A3.style.backgroundColor = COL;
  A4.style.backgroundColor = COL;

  B1.style.backgroundColor = COL;
  B3.style.backgroundColor = COL;
  B4.style.backgroundColor = COL;
  B5.style.backgroundColor = COL;
  B6.style.backgroundColor = COL;
  B7.style.backgroundColor = COL;
  B8.style.backgroundColor = COL;

  E1.style.backgroundColor = COL;
  E2.style.backgroundColor = COL;
  E3.style.backgroundColor = COL;
  E4.style.backgroundColor = COL;
  E5.style.backgroundColor = COL;
  E6.style.backgroundColor = COL;
  E7.style.backgroundColor = COL;
  E8.style.backgroundColor = COL;
  E9.style.backgroundColor = COL;
  E10.style.backgroundColor = COL;
  E11.style.backgroundColor = COL;
  E12.style.backgroundColor = COL;
  E13.style.backgroundColor = COL;
  E14.style.backgroundColor = COL;
  E15.style.backgroundColor = COL;
  E16.style.backgroundColor = COL;
  E17.style.backgroundColor = COL;
  E18.style.backgroundColor = COL;
  E19.style.backgroundColor = COL;
  E20.style.backgroundColor = COL;
}
