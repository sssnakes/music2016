$(document).ready(function() {


  // Top fold out on mouse over
  $('.h-banner').mouseenter(function() {
    $('.slide-wrap').animate({
      top: 0
    }, 200, function(){} );
  }).mouseleave(function() {
    $('.slide-wrap').animate({
      top: -385
    }, 200, function(){} );
  });


});
