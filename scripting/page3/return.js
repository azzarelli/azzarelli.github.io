  function home (){

  var hex = document.getElementById("Hexaco");
  var cover = document.getElementById("cover");
  var back = document.getElementById("back_space");
  var position = -400; //initial position is -300% as it is above page
  var i = 0; //position changer
  var j = 0.05; //unsure
  var init_op = 0;
  var coin = 0; //TopPage coin

  var top = document.body.scrollTop;
  document.body.style.overflow = "hidden";
  //document.body.style.position = "fixed";

  let loop = setInterval(function(){
    back.style.display = "none";
      coin = 1;
      if(coin == 1){
        if((i > 100)&&(j == 1)){
          window.location.href = "index.html";
          clearInterval(loop);
          return;
        }else{
          i = i + 1;
          cover.style.top = position+i+"%";
          setTimeout(
            function(){if(j < 1){
              j = j + 0.01;
            }else{
              j = 1;
            }}, 500);
          hex.style.opacity = j;
        } }}, 20);}