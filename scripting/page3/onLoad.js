
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#reloaded';
      window.location.reload();
  }
}
$(function (){
  $('.p5Canvas').css({'position':'absolute','left':'50%'});
  $('button').delay(2000).animate({'opacity':'1'},1000);
  $(".p5Canvas").animate({"top":"0px"}, 2000);
    
});
