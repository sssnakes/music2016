# music2016

Music listing site for 2016, mainly to teach myself some PHP and to use Github more.

# CHANGELOG

### 0.01
Strange bug with Dummy text left below?

### 0.02
.list-title not entirely fixed :/

### 0.10
Had a new design idea whilst on holiday, starting fresh with a few retainers.

### 0.12
List Scroll working (mostly). Right side panel still needs absolute position fixing. Left side panel works well. Attempted Info bottom panel but went real bad, try again soon.

### 0.13
Vector Disk added, looks nice.

### 0.14
Horizontal sliders working well. No window-resizing debug in place yet, but works on first load.

### 0.15
Album art appears now on hover. Fixed bug with art clipping under other slides by moving them outside primary divs, maybe a cleaner solution later? Beginning some trial content on the right hand slide too.

### 0.16
Clicking on albums now alters the .info-slide to the corresponding colour. Added jQuery.color.js to allow.

### 0.17
Left side is working now with the text animating in, pleased with the effect. Scrolling to sections has also been implemented, but when duplicates of the first two sections are added, it’s causing a weird effect for the scroll on multiple clicks… Need to look into later. End star also added.

### 0.18 (Dial Save 1)
Scroll-to still not working correctly. Implemented part of the scroll dial, but I think the math was implemented incorrectly. Going to try again, hold on to this as a placeholder save.
EDIT: Note-to-self: Percentage Margin works based on width; no good for height… ┐・_・┌

### 0.19
Progress! The dial now works on scrolling up and down. Good start. However I misplanned for how this dial scroll will work actually function, as each node on the dial track is relative to the top of each space. The line will need to be redrawn and structured with an ‘end point’ at the bottom of it, as well as opening up a few more problems.

#### Notes for later:
* The distance from A to B to C to D to End is relative to the corresponding marks on the dial track. Will likely need to create height() variables for each space so as to allow for the varying height of the spaces to not affect this, rather than as it is now which assumes each space is of the same height.
* A variable is required to fix the offset tracking of the dial’s position due to the TransformY CSS. The variable used now doesn’t compensate for this and tracks position outside of the visible window.
* Not sure yet how to solve the problem of reaching the bottom of the dial track, as it currently is detected based on the *top* of each space. Perhaps this can alter once it reaches the final space?

EDIT: **0.191** Added a hot fix to solve some of the problems I had a few minutes ago in relation to the dial passing out of the window. My brain is fried…

### 0.20
Taking a break from things to work on the PHP/AJAX requests for the site. Semi-working atm, need to add in a few extra .php pages to commence further testing.

### 0.21
Ajax pull in working order now, even if the transitions are still a little buggy. Resuming work on the slider once more, as I feel it’s the last great hurdle to take care of now that everything else is beginning to take shape.

### 0.22
Slider has been reshaped to make sense, and now correctly scrolls to the first ‘notch’ on the slide. First attempt at simply adding the two distance variables together to reach the second notch failed so I’ll need to work out a cleaner solution to adding the distances together…

### 0.23
Got a little carried away since the last push! Things changed:
- Added a new SVG for the Revisits.
- Resizing the page now properly rejigs the sliders.
- Slide goes up and down correctly with the page, have it draggable atm but not functioning as a true scroll bar (so close to being done!)

### 0.24
It is done! The slider now works, draggable and scrolling naturally. It could do with one last finish off of adding the ability to drag to the very end of the page, but I’m too tired from solving basic math all day, so maybe later… Back to fine tuning the design now, at least it’s stuff I can know.

### 0.241
Moving my local directories around to be able to use localhost with MAMP, I nearly deleted everything, twice. Go me…

### 0.25
Just a handful of minor updates. Ajax script seems to have been fixed by just adding a slight .delay() ¯\_(ツ)_/¯.

### 0.26
Mostly refinements in this update for now. Compressed a few of the SVGs into PHP includes and reworked a few of the underlying CSS issues. Still want to refine the flex box issue with SVG images however to better fit into their surrounding divs.

### 0.27
Christ, that took a while. Working out how to learn how it works/ apply it to this project and work with AJAX calls with the KirbyCMS all at once was a bit too much of an undertaking, and I feel as though I’m spending too much time on this as it is. So I instead added each page individually as a PHP page and added the correct content for each. Took some time, but the site is in a 95% working state to the untrained eye. Just some minor bug fixing now before going back and figuring out this CMS deal.