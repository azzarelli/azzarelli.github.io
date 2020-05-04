$(document).ready(function (){
  $("#D5Container,#WebContainer").animate({ scrollTop: 0 }, 1);
/* Click on R2 and all the pannels slide up and the progress bar (side pannel) appears 
      as well as main bar moving to left */
      $(document).on('click', '.bar_R2', function () {
        $(".bar_R1, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_R2").delay(1000).animate({'margin-right':"375px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        //Do again so all the bars are fully out the picture(sometimes this bugs out)
        $(".bar_R1, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
       
        $("#D5Container").delay(1000).animate({'left':"52%"}, 2000);
      });
      /* Doing the same for the Right side */
      $(document).on('click', '.bar_R1', function () {
        $(".bar_R2, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_R1").delay(1000).animate({'margin-right':"375px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        $(".bar_R2, .bar_L1, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
      });$(document).on('click', '.bar_MR', function () {
        $(".bar_R1, .bar_L1, .bar_R2, .bar_L2, .bar_ML, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_MR").delay(1000).animate({'margin-right':"375px", 'top':"75px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        $(".bar_R1, .bar_L1, .bar_R2, .bar_ML, .bar_L2, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
      
        $("#SpeakContainer").delay(1000).animate({'left':"52%"}, 2000);
      });
      
      //Left Side
      $(document).on('click', '.bar_L1', function () {
        $(".bar_R1, .bar_R2, .bar_L2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_L1").delay(1000).animate({'margin-left':"-580px", 'top':"12px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        $(".bar_R1, .bar_R2, .bar_L2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);
      });$(document).on('click', '.bar_L2', function () {
        $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_ML, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_L2").delay(1000).animate({'margin-left':"-580px", 'top':"12px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_ML, .title_Box").delay(1000).animate({'top':"-=2000px"}, 1000);
        
        $("#WebContainer").delay(800).animate({'left':"52%"}, 2000);
      });$(document).on('click', '.bar_ML', function () {
        $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_L2, .title_Box").animate({'top':"-2000px"}, 1000);
        $(".bar_ML").delay(1000).animate({'margin-left':"-580px",'top':"75px"}, 1200);
        $("#bar_Progress").delay(1800).animate({'left':"-10px"}, 500);
        $(".bar_R1, .bar_L1, .bar_R2, .bar_MR, .bar_L2, .title_Box").delay(1000).animate({'top':"-=600px"}, 1000);

        $("#WriteContainer").delay(1000).animate({'left':"52%"}, 2000);
      });
      
      $(document).on('click', '#color_Progress', function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
      });
      
      $(document).on('click', '#return_Progress', function () {
        $('#bar_Progress').delay(1800).animate({'left':"-80px"}, 500);
      
        $(".bar_L2").delay(800).animate({'margin-left':"-442.58px", 'top':"12px"}, 1200);
        $(".bar_L1").delay(800).animate({'margin-left':"-669.34px", 'top':"12px"}, 1200);
      
        $(".bar_R2").delay(800).animate({'margin-right':"-442.58px", 'top':"12px"}, 1200);
        $(".bar_R1").delay(800).animate({'margin-right':"-669.34px", 'top':"12px"}, 1200);
      
        $(".bar_ML").delay(800).animate({'margin-left':"-215.145px", 'top':"148px"}, 1200);
        $(".bar_MR").delay(800).animate({'margin-right':"-215.145px", 'top':"148px"}, 1200);
      
        $(".title_Box").delay(800).animate({'margin-left':"-215px", 'top':"0px"}, 2000);
      
        $("body").css('overflow', 'hidden');
        $("#D5Container").animate({'left':"200%"}, 1200);
        $("#WebContainer, #WriteContainer, #SpeakContainer").animate({'left':"200%"}, 1200);
        $("#D5Container,#WebContainer, #WriteContainer, #SpeakContainer").delay(2000).animate({ scrollTop: 0 }, 1500);
      });
      
      $(document).on('click', '#to_Title', function () {
        $("#D5Container,#WebContainer, #WriteContainer, #SpeakContainer").animate({ scrollTop: 0 }, 1500);
      });
      
      $(document).on('click', '#to_Bottom', function () {
        $("#D5Container,#WebContainer, #WriteContainer, #SpeakContainer").animate({ scrollTop: $(document).height()}, 1500);
      });

});

