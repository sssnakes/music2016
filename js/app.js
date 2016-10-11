$(document).ready(function() {

  var winWid  = $(window).width();
  var set     = (winWid - (900 + (winWid * 0.70)));

  function slidePos() {
    set = (winWid - (900 + (winWid * 0.70)));
    // SET SLIDER POSITION
    $('.inner-container-slider').css('right', set + 'px');
  };

  slidePos();

  window.onresize = function() {
    winWid  = $(window).width();
    slidePos();
  };

  // HOVER SLIDE, LEFT CONTAINER
  $('.left-bar-container').mouseenter(function() {
      set  = (winWid - (900 + (winWid * 0.70)));
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
      set = (winWid - (900 + (winWid * 0.70)));
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



  $('.scroll-dial').draggable({
    axis: "y",
    containment: "parent",
    drag: function( event, ui ) {


    }
  });

  // SCROLL DIAL MOVEMENTS
  $('.list-master-container').scroll(function(){
    // var t = -($("#cover1").offset().top);
    //     l = $('.list-master-container')[0].scrollHeight;
    //     w = $(window).height();
    //     h = l - w;
    //     f = h / 100;
    //     c = (t / f) * .80;

    var t  = -($("#cover1").offset().top);
        l  = $('.list-master-container')[0].scrollHeight;
        w  = $(window).height();
        u  = t - w;

        r1 = $('#row1').height(),
        r2 = $('#row2').height(),
        r3 = $('#row3').height(),
        r4 = $('#row4').height();
        // END DIS
        y  = t - (r1 + r2 + r3);
        if (y < 0){ y = 0; };
        a  = (l - (r1 + r2 + r3)) - w;
        h  = y / (a * .1);
        // 1
        d1 = (r1 / 100);
        c1 = r1 + (t - r1);
        p1 = 100 * (c1 / r1);
        if (p1 > 100){ p1 = 100; };
        x1 = p1 * .3;
        // 2
        d2 = (r2 / 100);
        k  = t - r1;
        if (k < 0){ k = 0; };
        c2 = r2 + (k - r2);
        p2 = 100 * (c2 / r2);
        if (p2 > 100){ p2 = 100; };
        x2 = p2 * .3;
        // 3
        d3 = (r3 / 100);
        k2 = t - r1 - r2;
        if (k2 < 0){ k2 = 0; };
        c3 = r3 + (k2 - r3);
        p3 = 100 * (c3 / r3);
        if (p3 > 100){ p3 = 100; };
        x3 = p3 * .3;
        // POSITON
        pos = x1 + x2 + x3;
        if (pos == 90){
          pos = pos + h;
        };

    $('.scroll-dial').css('top', pos + '%');

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
