$(document).ready(function() {


  // Top fold out on mouse over
  $('.h-banner').mouseenter(function() {
    $('.h-banner').animate({
      top: 0
    }, 200, function(){});
  }).mouseleave(function() {
    $('.h-banner').animate({
      top: -365
    }, 200, function(){});
  });


});
