$(document).ready(function() {

  // FIXES THE RIGHT WINDOW PLACEMENT ON LOAD
  var winWid  = $(window).width();
  var set     = (winWid - (900 + (winWid * 0.70)));

  // SET SLIDER POSITION
  $('.inner-container-slider').css('right', set + 'px');

  // HOVER SLIDE, LEFT CONTAINER
  $('.left-bar-container').mouseenter(function() {

    // CONTAINER
    $('.inner-container-slider').animate({
      right: set - 150
    }, 150, function(){} );
    // TEXT
    $('.scroll-text').animate({
      left: 130
    }, 150, function(){} );
  }).mouseleave(function() {
    // CONTAINER
    $('.inner-container-slider').animate({
      right: set
    }, 150, function(){} );
    // TEXT
    $('.scroll-text').animate({
      left: 150
    }, 150, function(){} );

  });

  // HOVER SLIDE, RIGHT CONTAINER
  $('#info-slide').mouseenter(function() {
    $('.inner-container-slider').animate({
      right: 0
    }, 200, function(){} );
  }).mouseleave(function() {
    $('.inner-container-slider').animate({
      right: set
    }, 200, function(){} );
  });

  // DISPLAY ALBUM ART
  // http://jsfiddle.net/elclanrs/jF27b/
  $('.list-link').mousemove(function(e) {
      $art = $("#" + $(this).data('target'));
      $art.stop(1, 1).show();
      $art.offset({
          top: e.pageY + 20,
          left: e.pageX + 10
      });
  }).mouseleave(function() {
      $art = $("#" + $(this).data('target'));
      $art.hide();
  });

  // SCROLL DIAL MOVEMENTS
  $('.list-master-container').scroll(function(){
    // var t = -($("#cover1").offset().top);
    //     l = $('.list-master-container')[0].scrollHeight;
    //     w = $(window).height();
    //     h = l - w;
    //     f = h / 100;
    //     c = (t / f) * .80;
    //
    //     d = $('.scroll-dial').offset().top;
    //     b = $('.scroll-bar').height();
    //     k = $('.scroll-dial').height();
    //     p = (d / b);
    //     y = ((k / 2) / p);
    //     j = (p * 100) + ((k / 2) / p);
    //
    // $('.scroll-dial').css('top', 10 + c + '%');

    var t  = -($("#cover1").offset().top);
        l  = $('.list-master-container')[0].scrollHeight;

        r1 = $('#row1').height(),
        r2 = $('#row2').height(),
        r3 = $('#row3').height(),
        r4 = $('#row4').height();

        d1 = (r1 / 100);
        c1 = r1 + (t - r1);
        p1 = 100 * (c1 / r1);
        if (p1 > 100){ p1 = 100; };
        x1 = p1 * .24;

    console.log(p1);

    $('.scroll-dial').css('top', 10 + x1 + '%');

  });

  // SCROLL BUTTONS
  $("#scroll-t1").click(function() {
      $('.list-master-container').animate({ scrollTop: $("#cover1").offset().top }, 400);
  });
  $("#scroll-t2").click(function() {
      $('.list-master-container').animate({ scrollTop: $("#cover2").offset().top }, 400);
  });
  $("#scroll-t3").click(function() {
      var s = $("#cover3").offset().top;
      $('.list-master-container').animate({ scrollTop: s }, 400);
  });
  $("#scroll-t4").click(function() {
      $('.list-master-container').animate({ scrollTop: $("#cover4").offset().top }, 400);
  });

  // BUTTON HIGHLIGHT
  $('.scroll-button').mouseenter(function() {
    $(this).find('.scroll-dot').css('background-color', '#000');
  }).mouseleave(function(){
    $(this).find('.scroll-dot').css('background-color', '#D1E0E2');
  });

  // $('#site-info-container').animate({
  //   bottom: '-100%'
  // }, 600, function(){
  //
  // });


  // INFORMATION SLIDE CLOSE
  $('#site-info-close').click(function(){
    $('#site-info-container').animate({
      bottom: '-100%'
    }, 600, function(){} );
  });

  // INFORMATION SLIDE OPEN
  $('.info-button').click(function(){
    $('#site-info-container').animate({
      bottom: 0
    }, 300, function(){} );
  });


  // AJAX CALL TO CHANGE INFO SLIDE
  $('.list-link').on('click', function(){

    var $this = $(this);

    $('.info-slide-container').fadeOut(function(){
      $(this).hide();
      var container = $('#info-slide'),
          target = $this.data('target');
          console.log(('./music/' + target + '.php'));
          container.load('./music/' + target + '.php', function(){

            $('.info-slide-container').fadeIn();

          });
    });

      // var $this = $(this),
      //     container = $('#info-slide'),
      //     target = $this.data('target');
      //     console.log(('./music/' + target + '.php'));
      //     container.load('./music/' + target + '.php');

    $('.info-slide-container').fadeIn();

  });


  // CHANGE INFO BG COLOUR
  $('.list-link').on('click', function(e) {
    var bg = $(this).data('bg');
    $('#info-slide').animate({ backgroundColor: ('#' + bg) }, 400);
    $('.notes-title').animate({ backgroundColor: ('#' + bg) }, 400);
  });




// END
});
