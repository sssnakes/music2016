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

  var winWid  = $(window).width();
  var set     = (winWid - (900 + (winWid * 0.70)));
  console.log(set);

  // SET SLIDER POSITION
  $('.inner-container-slider').css('right', set + 'px');

  // HOVER SLIDE, LEFT CONTAINER
  $('.scroll-bar-container').mouseenter(function() {
    console.log('run');
    $('.inner-container-slider').animate({
      right: set - 150
    }, 200, function(){} );
  }).mouseleave(function() {
      console.log('end');
    $('.inner-container-slider').animate({
      right: set
    }, 200, function(){} );
  });

  // HOVER SLIDE, RIGHT CONTAINER
  $('.info-slide').mouseenter(function() {
    console.log('run2');
    $('.inner-container-slider').animate({
      right: 0
    }, 200, function(){} );
  }).mouseleave(function() {
      console.log('end2');
    $('.inner-container-slider').animate({
      right: set
    }, 200, function(){} );
  });


});
