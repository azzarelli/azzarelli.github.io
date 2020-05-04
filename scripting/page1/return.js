
function returnHome(){

  //These are the things that need to disapear:
  // partI
  // white_hex , concatinate , subtitle , behind (includes giffer ) , back_w (includes inner_g and inner_butt),
  // back_space , slash
  //
  // also remeber to change page address slowly (window.location.href = "hello.html")


  var cover = document.getElementById("cover");
  var hex = document.getElementById("Hexaco");
  var bck = document.getElementById("back_space");
  var position = -400; //initial position is -300% as it is above page
  var i = 0; //position changer
  var j = 0.05; //unsure
  var init_op = 0;
  var coin = 0; //TopPage coin

  var top = document.body.scrollTop;
  document.body.style.overflow = "hidden";
  //document.body.style.position = "fixed";

  let loop = setInterval(function(){
    bck.style.display = "none";

//If you're at the top of the page ... OR ...
      if(top == 0){
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
            }}, 50);
          hex.style.opacity = j;

        }
      }else{

// This scrolling back to the top was taken from https://stackoverflow.com/questions/15935318/smooth-scroll-to-top   //

// click return and it will slowly scroll up. Modifying "window.scrollTo(0, c - c / 400);"
// the "500" is a hardcoded value and if you increse it it will slow down, visa-versa
        const scrollToTop = () => {
          const c = document.documentElement.scrollTop || document.body.scrollTop;
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 500);
          }
        };
        scrollToTop();
//here I added a timeout so that it can get to the top, momentarily rest then exit
// "1500" is ms time for rest
        setTimeout(function(){coin = 1;}, 1500)

      }

//If coin is given 1 - due to you being at the top of the page, you can then
// start scrolling to 'blank' the page
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
            }}, 50);
          hex.style.opacity = j;

        }
      }

  }, 20);



  }
