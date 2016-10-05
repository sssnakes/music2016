$(document).ready(function() {

  // OLD AND UNUSED NOW
    // Top fold out on mouse over
      // $('.h-banner').mouseenter(function() {
      //   $('.slide-wrap').animate({
      //     top: 0
      //   }, 200, function(){} );
      // }).mouseleave(function() {
      //   $('.slide-wrap').animate({
      //     top: -385
      //   }, 200, function(){} );
      // });


  // HOVER SLIDE, LEFT CONTAINER
  $('.scroll-bar-container').mouseenter(function() {
    console.log('mouseenter');
    $('.right-m-container').animate({
      left: 345
    }, 200, function(){} );
  }).mouseleave(function() {
    console.log('mouseleave');
    $('.right-m-container').animate({
      left: 150
    }, 200, function(){} );
  });

  // HOVER SLIDE, RIGHT CONTAINER
  // $('.info-slide').mouseenter(function() {
  //   console.log('mouseenter');
  //   $('.container').animate({
  //     right: 345
  //   }, 200, function(){} );
  // }).mouseleave(function() {
  //   console.log('mouseleave');
  //   $('.container').animate({
  //     right: 150
  //   }, 200, function(){} );
  // });


});
