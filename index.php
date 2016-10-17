<DOCTYPE html>
<html>
<head>

  <title>Music 2016</title>
  <meta name="application-name"     content="Music 2016">
  <meta name="viewport"             content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="js/jquery.color.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="./js/app.js"></script>

  <!-- Opens all links in new tab -->
  <base target="_blank">

</head>
<body>

<div id="container">

  <div id="site-intro-container">
    <div id="site-intro-real">

      <div id="site-intro-close">
        <svg style="height: 50px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 33.769 33.77" enable-background="new 0 0 33.769 33.77" xml:space="preserve">
          <g>
            <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="2.399" y1="2.825" x2="30.714" y2="31.141"/>
            <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="30.714" y1="2.825" x2="2.399" y2="31.141"/>
          </g>
        </svg>
      </div>

      <a href="http://www.finnanbarry.com" class="site-intro-title-1 sport">finnanbarry.com</a>
      <p class="site-intro-title-2 sport">/music/2016</p>

      <div class="intro-text-container">
        <div class="intro-text">
          <p class="sport">25.11.1991</p>
          <p>What a year! I took a year out to test the waters with freelancing whilst I learnt how to code (tough, but rewarding), travelled to Africa for the first time (Namibia, it was wonderful) and contemplated moving house a few times (didn’t; too stressy). I also made many new friends and tried my best to put myself out there more. It’s been a year of growth, I hope.
          </br></br>
          Last year I commemorated the year’s send-off with a bucketlist of my favourite album releases, whilst trying to flex my coding skills a bit to see how far I’ve come. It was rough...
          </br></br>
          Expect this year’s to be similarly raw and messy, as well as a little OTT as I try things for the sake of trying, but I hope you enjoy. Hit me up on Twitter and let me know some of yours, and thanks for stopping by.
          </br></br>
          - <a href="http://www.twitter.com/finnanbarry">@finnanbarry</a></p>
        </div>

        <div class="intro-colophon">
          <p class="sport">Colophon</p>
          <p>Fonts used:</p>
          <ul>
            <li><a href="http://www.velvetyne.fr/fonts/sporting-grotesque/">Sporting Grotesque</a></li>
            <li><a href="https://fonts.google.com/specimen/Work+Sans/">Work Sans</a></li>
          </ul>
            </br>
          <p>Plugins &amp; Dependancies:</p>
          <ul>
            <li><p><a href="https://jqueryui.com/">jQuery UI</a> - Mainly for .draggable().</p></li>
            <li><p><a href="https://github.com/jquery/jquery-color">jquery.color.js</a> - For colour changes.</p></li>
            <li><p><a href="http://jsfiddle.net/pTt5w/2/">This jsfiddle</a> - For the hover link images.</p></li>
          </ul>
            </br>
          <p>Links:</p>
          <ul>
            <li><a href="https://github.com/sssnakes/music2016">Github Repo</a></li>
            <li><a href="http://www.finnanbarry.com">finnanbarry.com</a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>

    <div class="left-bar-container">

      <div class="scroll-bar">

        <div class="scroll-thread"></div>
        <div id="dial-container">
          <div class="scroll-dial">
            <div class="scroll-bit scroll-bit1"></div>
            <div class="scroll-bit scroll-bit2"></div>
          </div>
        </div>

        <div id="scroll-1" class="scroll-button"></div>
        <div id="scroll-2" class="scroll-button"></div>
        <div id="scroll-3" class="scroll-button"></div>
        <div id="scroll-4" class="scroll-button"></div>

        <div id="dot-1" class="scroll-dot"></div>
        <div id="dot-2" class="scroll-dot"></div>
        <div id="dot-3" class="scroll-dot"></div>
        <div id="dot-4" class="scroll-dot"></div>
        <div id="dot-e"></div>

        <div id="scroll-t1" class="scroll-text sport">Top</br>Albums</div>
        <div id="scroll-t2" class="scroll-text sport">Honorable</br>Mentions</div>
        <div id="scroll-t3" class="scroll-text sport">Tracks, LPs</br>&amp; Singles</div>
        <div id="scroll-t4" class="scroll-text sport">Revisits</div>

      </div>

      <div class="intro-box">
        <div id="intro-button-main" class="intro-button sport sport-small">Info</div>
        <div id="intro-button-side" class="intro-button sport sport-small">rmation</div>
      </div>

    </div>

    <div class="inner-container-slider">

      <div class="list-master-container">

          <!-- BEST ALBUMS -->
          <div id="row1">
            <div id="cover1" class="cover cover-albums">
              <p class="cover-text-top sport">Music 2016</p>

                <div class="cover-img">
                  <?php include('./vect/php/best.php'); ?>
                </div>

              <p class="cover-text-bottom sport">Top Albums</p>
            </div>

            <div class="track-list">
              <?php include('./music/list/best.php'); ?>
            </div>
          </div>

          <!-- HONORABLE MENTIONS -->
          <div id="row2">
            <div id="cover2" class="cover cover-albums">
              <p class="cover-text-top sport">Music 2016</p>

              <div class="cover-img">
                <?php include('./vect/php/honor.php'); ?>
              </div>

              <p class="cover-text-bottom sport">Honorable Mentions</p>
            </div>

            <div class="track-list">
              <?php include('./music/list/honor.php'); ?>
            </div>
          </div>

          <!-- TOP SINGLES -->
          <div id="row3">
            <div id="cover3" class="cover cover-albums">
              <p class="cover-text-top sport">Music 2016</p>

              <div class="cover-img">
                <svg class="svg-fit" x="0px" y="0px" viewBox="0 0 650 650">
                	<circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="325" cy="325" r="157.209"/>
                	<circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="325" cy="325" r="7.5"/>
                </svg>
              </div>

              <p class="cover-text-bottom sport">Singles &amp; LPs</p>
            </div>

            <div class="track-list">
              <?php include('./music/list/singles.php'); ?>
            </div>
          </div>

          <!-- REVISITS -->
          <div id="row4">
            <div id="cover4" class="cover cover-albums">
              <p class="cover-text-top sport">Music 2016</p>

              <div class="cover-img">
                <?php include('./vect/php/revisit.php'); ?>
              </div>

              <p class="cover-text-bottom sport">Revisits</p>
            </div>

            <div class="track-list">
              <?php include('./music/list/revisit.php'); ?>
            </div>
          </div>

          <div class="list-end">
              <svg class="end-star" x="0px" y="0px" viewBox="0 0 33.769 39.917" enable-background="new 0 0 33.769 39.917" xml:space="preserve">
              <g>
              	<g>
              		<defs>
              			<rect x="0.551" y="1.102" width="32.667" height="38.458"/>
              		</defs>
              		<clipPath>
              			<use overflow="visible"/>
              		</clipPath>
              		<path clip-path="url(#SVGID_2_)" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M1.07,29.945
              			l31.627-19.229 M1.07,10.716l31.627,19.229 M16.883,1.102V39.56"/>
              	</g>
              </g>
              </svg>
          </div>

      </div> <!-- END OF CONTAINER -->

      <div id="info-slide">
        <?php include('./music/info/being.php'); ?>
      </div>

    </div>
</div>

<!-- ALBUM ARTS -->

<div id="albums">
  <?php include('./music/albums/albumlist.php'); ?>
</div>

</body>
</html>
</DOCTYPE>
