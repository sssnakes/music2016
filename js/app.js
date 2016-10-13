$(document).ready(function() {

  var winWid  = $(window).width();
  var set     = (winWid - (900 + (winWid * 0.70)));

  var r1 = $('#row1').height(),
      r2 = $('#row2').height(),
      r3 = $('#row3').height();

  function slidePos() {
    set = (winWid - (900 + (winWid * 0.70)));
    // SET SLIDER POSITION
    $('.inner-container-slider').css('right', set + 'px');
  };

  slidePos();

  window.onresize = function() {
    winWid  = $(window).width();
    slidePos();
    r1 = $('#row1').height(),
    r2 = $('#row2').height(),
    r3 = $('#row3').height();
  };

  // HOVER SLIDE, LEFT CONTAINER
  $('.left-bar-container').mouseenter(function() {
    set  = (winWid - (900 + (winWid * 0.70)));
    $('.inner-container-slider').animate({ right: set - 150 }, 150);
    $('.scroll-text').animate({ left: 130 }, 150);
    $('#intro-button-side').animate({ left: 93 }, 150);
  }).mouseleave(function() {
    $('.inner-container-slider').animate({ right: set }, 150);
    $('.scroll-text').animate({ left: 150 }, 150);
    $('#intro-button-side').animate({ left: 136 }, 150);
  });


  $('.intro-button').mouseenter(function(){
    $('.intro-button').css('text-shadow', '0px 0px 5px #000');
  }).mouseleave(function(){
    $('.intro-button').css('text-shadow', 'none');
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
    start: function(){
      $('.scroll-dial').css('box-shadow', '0px 0px 15px #000')
    },
    // on drag
    drag: function( event, ui ) {
          // distance from top in pixels
      var d = $('.scroll-dial').css('top').replace(/[^-\d\.]/g, ''),
          // container maximum height
          h = $('#dial-container').css('height').replace(/[^-\d\.]/g, ''),
          // percentage of dial distance / 100
          x1  = d / h * 100;
          if (x1 > 30) {x1 = 30};
          x2  = (d / h * 100) - 30;
          if (x1 < 29.999) {x2 = 0} else { x2 = x2 };
          x3  = (d / h * 100) - 60;
          if (x2 < 29.999) {x3 = 0} else { x3 = x3 };

          // height of each row
      // var r1 = $('#row1').height(),
      //     r2 = $('#row2').height(),
      //     r3 = $('#row3').height();

          // distance from top in pixels
      var g1 = -($("#row1").offset().top);
      var g2 = -($("#row2").offset().top);
          // 0 until it hits row top line
          if (g2 < 0){ g2 = 0; };
      var g3 = -($("#row3").offset().top);
          if (g3 < 0){ g3 = 0; };

          // height to row1 out of 30%
      var p1 = r1 * (x1 / 30);
          // if maxed out to row limit, then stop
          if (p1 > r1) {p1 = r1};
      var p2 = r2 * (x2 / 30);
          if (p2 > r2) {p2 = r2};
      var p3 = r3 * (x3 / 30);
          if (p3 > r3) {p3 = r3};

      console.log(x1);
      console.log(x2);

      $('.list-master-container').scrollTop( p1 + p2 + p3 );

    },
    stop: function(){
      $('.scroll-dial').css('box-shadow', 'none')
    },
  });

  // SCROLL DIAL MOVEMENTS
  $('.list-master-container').scroll(function(){

    var t  = -($("#cover1").offset().top);
        l  = $('.list-master-container')[0].scrollHeight;
        w  = $(window).height();
        u  = t - w;

        // r1 = $('#row1').height(),
        // r2 = $('#row2').height(),
        // r3 = $('#row3').height();
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
      $('.list-master-container').animate({ scrollTop: 0 }, 400);
  });
  $("#scroll-t2").click(function() {
      $('.list-master-container').animate({ scrollTop: r1 }, 400);
  });
  $("#scroll-t3").click(function() {
      $('.list-master-container').animate({ scrollTop: r1 + r2 }, 400);
  });
  $("#scroll-t4").click(function() {
      $('.list-master-container').animate({ scrollTop: r1 + r2 + r3 }, 400);
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
  $('#site-intro-close').click(function(){
    $('#site-intro-container').animate({
      bottom: '-200%'
    }, 600);
  });

  // INFORMATION SLIDE OPEN
  $('.intro-button').click(function(){
    $('#site-intro-container').animate({
      bottom: 0
    }, 600);
  });

  $('.info-slide-container').fadeIn();

  // AJAX CALL TO CHANGE INFO SLIDE
  $('.list-link').on('click', function(){

    var bg = $(this).data('bg'),
        $this = $(this);
    $('#info-slide').animate({ backgroundColor: ('#' + bg) }, 400);
    $('.notes-title').animate({ backgroundColor: ('#' + bg) }, 400);

    $('.info-slide-container').fadeOut().delay( 1200, function(){
      $(this).hide();
      var container = $('#info-slide'),
          target = $this.data('target');
          container.load('./music/' + target + '.php', function(){

            $('.notes-title').css('background-color', ('#' + bg));
            $('.info-slide-container').fadeIn();

          });
    });

  });


// END
});
