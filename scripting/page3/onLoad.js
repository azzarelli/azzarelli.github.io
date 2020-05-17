
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}
$(function (){
  $('.p5Canvas').css({'position':'absolute','left':'50%','margin-left':'-200px'});
  $('button').delay(2000).animate({'opacity':'1'},1000);
  $(".p5Canvas").animate({"top":"0px"}, 2000);
    
});
