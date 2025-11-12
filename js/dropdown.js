$(document).ready(function() {
  $('.project-header').on('click', function() {
    const parent = $(this).closest('.project');
    const body = parent.find('.project-body')[0];
    const currentHeight = window.getComputedStyle(body).height;

    if (currentHeight === "0px") {
      body.style.height = "max-content";
    } else {
      body.style.height = "0px";
    }
  });

});
