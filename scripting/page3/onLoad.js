
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#reloaded';
      window.location.reload();
  }
}
$(function (){
  $('button').delay(2000).animate({'opacity':'1'},1000);
  $(".p5Canvas").animate({"top":"0px"}, 2000);
    
});
