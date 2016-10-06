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

  // SET SLIDER POSITION
  $('.inner-container-slider').css('right', set + 'px');

  // HOVER SLIDE, LEFT CONTAINER
  $('.scroll-bar-container').mouseenter(function() {
    $('.inner-container-slider').animate({
      right: set - 150
    }, 200, function(){} );
  }).mouseleave(function() {
    $('.inner-container-slider').animate({
      right: set
    }, 200, function(){} );
  });

  // HOVER SLIDE, RIGHT CONTAINER
  $('.info-slide').mouseenter(function() {
    $('.inner-container-slider').animate({
      right: 0
    }, 200, function(){} );
  }).mouseleave(function() {
    $('.inner-container-slider').animate({
      right: set
    }, 200, function(){} );
  });

  // DISPLAY ALBUM ART
  $('.list-link').mousemove(function(e) {
      $art = $("#" + $(this).data('image-id'));
      $art.stop(1, 1).show();
      $art.offset({
          top: e.pageY + 20,
          left: e.pageX + 10
      });
  }).mouseleave(function() {
      $art = $("#" + $(this).data('image-id'));
      $art.hide();
  });

  // CHANGE INFO BG COLOUR
  $('.list-link').on('click', function(e) {
    var bg = $(this).data('bg');
    $('.info-slide').animate({ backgroundColor: ('#' + bg) }, 400);
    $('.finn-notes').animate({ backgroundColor: ('#' + bg) }, 400);
    $('.notes-title').animate({ backgroundColor: ('#' + bg) }, 400);
  });

// END
});
