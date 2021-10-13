(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="sunset-hillclimb" style="background-image: url('/photos/tint/Sunset%20Hillclimb-65ba1d.jpg')" title="Sunset Hillclimb">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Sunset%20Hillclimb-ccf4df.jpg" src="/photos/tint/Sunset%20Hillclimb-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Sunset%20Hillclimb-686656.jpg" src="/photos/tint/Sunset%20Hillclimb-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sunset%20Hillclimb-686656.jpg')"></span>
  </span>
  <a class="open" href="/sunset-hillclimb" data-target="sunset-hillclimb">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/burning-sky" data-target="burning-sky" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="burning-sky" style="background-image: url('/photos/tint/Burning%20Sky-65ba1d.jpg')" title="Burning Sky">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Burning%20Sky-ccf4df.jpg" src="/photos/tint/Burning%20Sky-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Burning%20Sky-686656.jpg" src="/photos/tint/Burning%20Sky-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Burning%20Sky-686656.jpg')"></span>
  </span>
  <a class="open" href="/burning-sky" data-target="burning-sky">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sunset-hillclimb" data-target="sunset-hillclimb" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/the-tree-and-the-view" data-target="the-tree-and-the-view" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="the-tree-and-the-view" style="background-image: url('/photos/tint/The%20Tree%20and%20The%20View-65ba1d.jpg')" title="The Tree and The View">
  <img class="lazyload thumb" data-src="/photos/thumbnail/The%20Tree%20and%20The%20View-ccf4df.jpg" src="/photos/tint/The%20Tree%20and%20The%20View-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/The%20Tree%20and%20The%20View-686656.jpg" src="/photos/tint/The%20Tree%20and%20The%20View-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/The%20Tree%20and%20The%20View-686656.jpg')"></span>
  </span>
  <a class="open" href="/the-tree-and-the-view" data-target="the-tree-and-the-view">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/burning-sky" data-target="burning-sky" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/just-the-view" data-target="just-the-view" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.5</li> -->
  </ul>
</li>
<li class="item " id="just-the-view" style="background-image: url('/photos/tint/Just%20The%20View-65ba1d.jpg')" title="Just The View">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Just%20The%20View-ccf4df.jpg" src="/photos/tint/Just%20The%20View-65ba1d.jpg" height="2048" width="1366" />
  <img class="lazyload fullres" data-src="/photos/large/Just%20The%20View-686656.jpg" src="/photos/tint/Just%20The%20View-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Just%20The%20View-686656.jpg')"></span>
  </span>
  <a class="open" href="/just-the-view" data-target="just-the-view">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/the-tree-and-the-view" data-target="the-tree-and-the-view" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/summer-style-mood" data-target="summer-style-mood" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.5</li> -->
  </ul>
</li>
<li class="item " id="summer-style-mood" style="background-image: url('/photos/tint/Summer%20Style%20Mood-65ba1d.jpg')" title="Summer Style Mood">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Summer%20Style%20Mood-ccf4df.jpg" src="/photos/tint/Summer%20Style%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Summer%20Style%20Mood-686656.jpg" src="/photos/tint/Summer%20Style%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Summer%20Style%20Mood-686656.jpg')"></span>
  </span>
  <a class="open" href="/summer-style-mood" data-target="summer-style-mood">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/just-the-view" data-target="just-the-view" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/powerrrr" data-target="powerrrr" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="powerrrr" style="background-image: url('/photos/tint/Powerrrr-65ba1d.jpg')" title="Powerrrr">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Powerrrr-ccf4df.jpg" src="/photos/tint/Powerrrr-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Powerrrr-686656.jpg" src="/photos/tint/Powerrrr-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Powerrrr-686656.jpg')"></span>
  </span>
  <a class="open" href="/powerrrr" data-target="powerrrr">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/summer-style-mood" data-target="summer-style-mood" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/evening-beach-mood" data-target="evening-beach-mood" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.5</li> -->
  </ul>
</li>
<li class="item " id="evening-beach-mood" style="background-image: url('/photos/tint/Evening%20Beach%20Mood-65ba1d.jpg')" title="Evening Beach Mood">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Evening%20Beach%20Mood-ccf4df.jpg" src="/photos/tint/Evening%20Beach%20Mood-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Evening%20Beach%20Mood-686656.jpg" src="/photos/tint/Evening%20Beach%20Mood-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Evening%20Beach%20Mood-686656.jpg')"></span>
  </span>
  <a class="open" href="/evening-beach-mood" data-target="evening-beach-mood">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/powerrrr" data-target="powerrrr" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/but-first-espressi" data-target="but-first-espressi" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.5</li> -->
  </ul>
</li>
<li class="item " id="but-first-espressi" style="background-image: url('/photos/tint/But%20first,%20Espressi-65ba1d.jpg')" title="But first, Espressi">
  <img class="lazyload thumb" data-src="/photos/thumbnail/But%20first,%20Espressi-ccf4df.jpg" src="/photos/tint/But%20first,%20Espressi-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/But%20first,%20Espressi-686656.jpg" src="/photos/tint/But%20first,%20Espressi-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/But%20first,%20Espressi-686656.jpg')"></span>
  </span>
  <a class="open" href="/but-first-espressi" data-target="but-first-espressi">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/evening-beach-mood" data-target="evening-beach-mood" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/storm-and-rainbow" data-target="storm-and-rainbow" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="storm-and-rainbow" style="background-image: url('/photos/tint/Storm%20and%20Rainbow-65ba1d.jpg')" title="Storm and Rainbow">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Storm%20and%20Rainbow-ccf4df.jpg" src="/photos/tint/Storm%20and%20Rainbow-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Storm%20and%20Rainbow-686656.jpg" src="/photos/tint/Storm%20and%20Rainbow-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Storm%20and%20Rainbow-686656.jpg')"></span>
  </span>
  <a class="open" href="/storm-and-rainbow" data-target="storm-and-rainbow">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/but-first-espressi" data-target="but-first-espressi" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/views" data-target="views" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/250</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="views" style="background-image: url('/photos/tint/Views-65ba1d.jpg')" title="Views">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Views-ccf4df.jpg" src="/photos/tint/Views-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Views-686656.jpg" src="/photos/tint/Views-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Views-686656.jpg')"></span>
  </span>
  <a class="open" href="/views" data-target="views">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/storm-and-rainbow" data-target="storm-and-rainbow" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/looky-look" data-target="looky-look" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="looky-look" style="background-image: url('/photos/tint/Looky%20look-65ba1d.jpg')" title="Looky look">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Looky%20look-ccf4df.jpg" src="/photos/tint/Looky%20look-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Looky%20look-686656.jpg" src="/photos/tint/Looky%20look-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Looky%20look-686656.jpg')"></span>
  </span>
  <a class="open" href="/looky-look" data-target="looky-look">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/views" data-target="views" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/garden-gnome" data-target="garden-gnome" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="garden-gnome" style="background-image: url('/photos/tint/Garden%20Gnome-65ba1d.jpg')" title="Garden Gnome">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Garden%20Gnome-ccf4df.jpg" src="/photos/tint/Garden%20Gnome-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Garden%20Gnome-686656.jpg" src="/photos/tint/Garden%20Gnome-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Garden%20Gnome-686656.jpg')"></span>
  </span>
  <a class="open" href="/garden-gnome" data-target="garden-gnome">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/looky-look" data-target="looky-look" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/empress-elisabeth" data-target="empress-elisabeth" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/250</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="empress-elisabeth" style="background-image: url('/photos/tint/Empress%20Elisabeth-65ba1d.jpg')" title="Empress Elisabeth">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Empress%20Elisabeth-ccf4df.jpg" src="/photos/tint/Empress%20Elisabeth-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Empress%20Elisabeth-686656.jpg" src="/photos/tint/Empress%20Elisabeth-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Empress%20Elisabeth-686656.jpg')"></span>
  </span>
  <a class="open" href="/empress-elisabeth" data-target="empress-elisabeth">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/garden-gnome" data-target="garden-gnome" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/the-house" data-target="the-house" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/50</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="the-house" style="background-image: url('/photos/tint/The%20House-65ba1d.jpg')" title="The House">
  <img class="lazyload thumb" data-src="/photos/thumbnail/The%20House-ccf4df.jpg" src="/photos/tint/The%20House-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/The%20House-686656.jpg" src="/photos/tint/The%20House-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/The%20House-686656.jpg')"></span>
  </span>
  <a class="open" href="/the-house" data-target="the-house">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/empress-elisabeth" data-target="empress-elisabeth" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/balcony" data-target="balcony" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1250</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="balcony" style="background-image: url('/photos/tint/Balcony-65ba1d.jpg')" title="Balcony">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Balcony-ccf4df.jpg" src="/photos/tint/Balcony-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Balcony-686656.jpg" src="/photos/tint/Balcony-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Balcony-686656.jpg')"></span>
  </span>
  <a class="open" href="/balcony" data-target="balcony">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/the-house" data-target="the-house" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/molto-business" data-target="molto-business" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/110</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="molto-business" style="background-image: url('/photos/tint/Molto%20Business-65ba1d.jpg')" title="Molto Business">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Molto%20Business-ccf4df.jpg" src="/photos/tint/Molto%20Business-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Molto%20Business-686656.jpg" src="/photos/tint/Molto%20Business-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Molto%20Business-686656.jpg')"></span>
  </span>
  <a class="open" href="/molto-business" data-target="molto-business">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/balcony" data-target="balcony" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/aperitivo" data-target="aperitivo" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/4000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="aperitivo" style="background-image: url('/photos/tint/Aperitivo-65ba1d.jpg')" title="Aperitivo">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Aperitivo-ccf4df.jpg" src="/photos/tint/Aperitivo-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Aperitivo-686656.jpg" src="/photos/tint/Aperitivo-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Aperitivo-686656.jpg')"></span>
  </span>
  <a class="open" href="/aperitivo" data-target="aperitivo">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/molto-business" data-target="molto-business" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/backyard-views" data-target="backyard-views" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="backyard-views" style="background-image: url('/photos/tint/Backyard%20Views-65ba1d.jpg')" title="Backyard Views">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Backyard%20Views-ccf4df.jpg" src="/photos/tint/Backyard%20Views-65ba1d.jpg" height="2048" width="1366" />
  <img class="lazyload fullres" data-src="/photos/large/Backyard%20Views-686656.jpg" src="/photos/tint/Backyard%20Views-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Backyard%20Views-686656.jpg')"></span>
  </span>
  <a class="open" href="/backyard-views" data-target="backyard-views">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/aperitivo" data-target="aperitivo" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/palazzi-views" data-target="palazzi-views" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/4000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="palazzi-views" style="background-image: url('/photos/tint/Palazzi%20Views-65ba1d.jpg')" title="Palazzi Views">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Palazzi%20Views-ccf4df.jpg" src="/photos/tint/Palazzi%20Views-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Palazzi%20Views-686656.jpg" src="/photos/tint/Palazzi%20Views-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Palazzi%20Views-686656.jpg')"></span>
  </span>
  <a class="open" href="/palazzi-views" data-target="palazzi-views">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/backyard-views" data-target="backyard-views" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/guardian" data-target="guardian" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="guardian" style="background-image: url('/photos/tint/Guardian-65ba1d.jpg')" title="Guardian">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Guardian-ccf4df.jpg" src="/photos/tint/Guardian-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Guardian-686656.jpg" src="/photos/tint/Guardian-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Guardian-686656.jpg')"></span>
  </span>
  <a class="open" href="/guardian" data-target="guardian">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/palazzi-views" data-target="palazzi-views" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/duomo-angle" data-target="duomo-angle" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="duomo-angle" style="background-image: url('/photos/tint/Duomo%20Angle-65ba1d.jpg')" title="Duomo Angle">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Duomo%20Angle-ccf4df.jpg" src="/photos/tint/Duomo%20Angle-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Duomo%20Angle-686656.jpg" src="/photos/tint/Duomo%20Angle-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Duomo%20Angle-686656.jpg')"></span>
  </span>
  <a class="open" href="/duomo-angle" data-target="duomo-angle">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/guardian" data-target="guardian" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/a-bell" data-target="a-bell" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="a-bell" style="background-image: url('/photos/tint/A%20Bell-65ba1d.jpg')" title="A Bell">
  <img class="lazyload thumb" data-src="/photos/thumbnail/A%20Bell-ccf4df.jpg" src="/photos/tint/A%20Bell-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/A%20Bell-686656.jpg" src="/photos/tint/A%20Bell-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/A%20Bell-686656.jpg')"></span>
  </span>
  <a class="open" href="/a-bell" data-target="a-bell">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/duomo-angle" data-target="duomo-angle" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tight-corners" data-target="tight-corners" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="tight-corners" style="background-image: url('/photos/tint/Tight%20Corners-65ba1d.jpg')" title="Tight Corners">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Tight%20Corners-ccf4df.jpg" src="/photos/tint/Tight%20Corners-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Tight%20Corners-686656.jpg" src="/photos/tint/Tight%20Corners-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tight%20Corners-686656.jpg')"></span>
  </span>
  <a class="open" href="/tight-corners" data-target="tight-corners">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/a-bell" data-target="a-bell" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tetris" data-target="tetris" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="tetris" style="background-image: url('/photos/tint/Tetris-65ba1d.jpg')" title="Tetris">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Tetris-ccf4df.jpg" src="/photos/tint/Tetris-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Tetris-686656.jpg" src="/photos/tint/Tetris-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tetris-686656.jpg')"></span>
  </span>
  <a class="open" href="/tetris" data-target="tetris">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tight-corners" data-target="tight-corners" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/duomo" data-target="duomo" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="duomo" style="background-image: url('/photos/tint/Duomo-65ba1d.jpg')" title="Duomo">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Duomo-ccf4df.jpg" src="/photos/tint/Duomo-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Duomo-686656.jpg" src="/photos/tint/Duomo-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Duomo-686656.jpg')"></span>
  </span>
  <a class="open" href="/duomo" data-target="duomo">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tetris" data-target="tetris" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/looking-for-sujets-tm" data-target="looking-for-sujets-tm" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.2</li> -->
  </ul>
</li>
<li class="item " id="looking-for-sujets-tm" style="background-image: url('/photos/tint/Looking%20for%20Sujets%20TM-65ba1d.jpg')" title="Looking for Sujets TM">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Looking%20for%20Sujets%20TM-ccf4df.jpg" src="/photos/tint/Looking%20for%20Sujets%20TM-65ba1d.jpg" height="1366" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Looking%20for%20Sujets%20TM-686656.jpg" src="/photos/tint/Looking%20for%20Sujets%20TM-65ba1d.jpg" height="1366" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Looking%20for%20Sujets%20TM-686656.jpg')"></span>
  </span>
  <a class="open" href="/looking-for-sujets-tm" data-target="looking-for-sujets-tm">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/duomo" data-target="duomo" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/mr-kebab" data-target="mr-kebab" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.5</li> -->
  </ul>
</li>
<li class="item " id="mr-kebab" style="background-image: url('/photos/tint/Mr%20Kebab-65ba1d.jpg')" title="Mr Kebab">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Mr%20Kebab-ccf4df.jpg" src="/photos/tint/Mr%20Kebab-65ba1d.jpg" height="6000" width="4000" />
  <img class="lazyload fullres" data-src="/photos/large/Mr%20Kebab-686656.jpg" src="/photos/tint/Mr%20Kebab-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Mr%20Kebab-686656.jpg')"></span>
  </span>
  <a class="open" href="/mr-kebab" data-target="mr-kebab">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/looking-for-sujets-tm" data-target="looking-for-sujets-tm" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gooooutschas-brrrr" data-target="gooooutschas-brrrr" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/4000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="gooooutschas-brrrr" style="background-image: url('/photos/tint/Gooooutschas%20Brrrr-65ba1d.jpg')" title="Gooooutschas Brrrr">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Gooooutschas%20Brrrr-ccf4df.jpg" src="/photos/tint/Gooooutschas%20Brrrr-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Gooooutschas%20Brrrr-686656.jpg" src="/photos/tint/Gooooutschas%20Brrrr-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Gooooutschas%20Brrrr-686656.jpg')"></span>
  </span>
  <a class="open" href="/gooooutschas-brrrr" data-target="gooooutschas-brrrr">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/mr-kebab" data-target="mr-kebab" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/zwei-negroni-bitte-ja" data-target="zwei-negroni-bitte-ja" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/250</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="zwei-negroni-bitte-ja" style="background-image: url('/photos/tint/Zwei%20Negroni%20Bitte%20Ja-65ba1d.jpg')" title="Zwei Negroni Bitte Ja">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Zwei%20Negroni%20Bitte%20Ja-ccf4df.jpg" src="/photos/tint/Zwei%20Negroni%20Bitte%20Ja-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Zwei%20Negroni%20Bitte%20Ja-686656.jpg" src="/photos/tint/Zwei%20Negroni%20Bitte%20Ja-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Zwei%20Negroni%20Bitte%20Ja-686656.jpg')"></span>
  </span>
  <a class="open" href="/zwei-negroni-bitte-ja" data-target="zwei-negroni-bitte-ja">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gooooutschas-brrrr" data-target="gooooutschas-brrrr" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/crazy-horst" data-target="crazy-horst" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="crazy-horst" style="background-image: url('/photos/tint/Crazy%20Horst-65ba1d.jpg')" title="Crazy Horst">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Crazy%20Horst-ccf4df.jpg" src="/photos/tint/Crazy%20Horst-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Crazy%20Horst-686656.jpg" src="/photos/tint/Crazy%20Horst-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Crazy%20Horst-686656.jpg')"></span>
  </span>
  <a class="open" href="/crazy-horst" data-target="crazy-horst">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/zwei-negroni-bitte-ja" data-target="zwei-negroni-bitte-ja" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/blue-little-mini" data-target="blue-little-mini" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="blue-little-mini" style="background-image: url('/photos/tint/Blue%20Little%20Mini-65ba1d.jpg')" title="Blue Little Mini">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Blue%20Little%20Mini-ccf4df.jpg" src="/photos/tint/Blue%20Little%20Mini-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Blue%20Little%20Mini-686656.jpg" src="/photos/tint/Blue%20Little%20Mini-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Blue%20Little%20Mini-686656.jpg')"></span>
  </span>
  <a class="open" href="/blue-little-mini" data-target="blue-little-mini">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/crazy-horst" data-target="crazy-horst" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/waiting-zone" data-target="waiting-zone" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="waiting-zone" style="background-image: url('/photos/tint/Waiting%20Zone-65ba1d.jpg')" title="Waiting Zone">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Waiting%20Zone-ccf4df.jpg" src="/photos/tint/Waiting%20Zone-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Waiting%20Zone-686656.jpg" src="/photos/tint/Waiting%20Zone-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Waiting%20Zone-686656.jpg')"></span>
  </span>
  <a class="open" href="/waiting-zone" data-target="waiting-zone">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/blue-little-mini" data-target="blue-little-mini" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/alt-n%C3%BCrnberg-hotel" data-target="alt-nürnberg-hotel" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="alt-nürnberg-hotel" style="background-image: url('/photos/tint/Alt%20N%C3%BCrnberg%20Hotel-65ba1d.jpg')" title="Alt Nürnberg Hotel">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Alt%20N%C3%BCrnberg%20Hotel-ccf4df.jpg" src="/photos/tint/Alt%20N%C3%BCrnberg%20Hotel-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Alt%20N%C3%BCrnberg%20Hotel-686656.jpg" src="/photos/tint/Alt%20N%C3%BCrnberg%20Hotel-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Alt%20N%C3%BCrnberg%20Hotel-686656.jpg')"></span>
  </span>
  <a class="open" href="/alt-n%C3%BCrnberg-hotel" data-target="alt-nürnberg-hotel">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/waiting-zone" data-target="waiting-zone" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/f%C3%BCrst-b-von-h" data-target="fürst-b-von-h" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="fürst-b-von-h" style="background-image: url('/photos/tint/F%C3%BCrst%20B%20von%20H-65ba1d.jpg')" title="Fürst B von H">
  <img class="lazyload thumb" data-src="/photos/thumbnail/F%C3%BCrst%20B%20von%20H-ccf4df.jpg" src="/photos/tint/F%C3%BCrst%20B%20von%20H-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/F%C3%BCrst%20B%20von%20H-686656.jpg" src="/photos/tint/F%C3%BCrst%20B%20von%20H-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/F%C3%BCrst%20B%20von%20H-686656.jpg')"></span>
  </span>
  <a class="open" href="/f%C3%BCrst-b-von-h" data-target="fürst-b-von-h">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/alt-n%C3%BCrnberg-hotel" data-target="alt-nürnberg-hotel" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/ham" data-target="ham" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="ham" style="background-image: url('/photos/tint/Ham-65ba1d.jpg')" title="Ham">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Ham-ccf4df.jpg" src="/photos/tint/Ham-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Ham-686656.jpg" src="/photos/tint/Ham-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Ham-686656.jpg')"></span>
  </span>
  <a class="open" href="/ham" data-target="ham">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/f%C3%BCrst-b-von-h" data-target="fürst-b-von-h" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/perspective" data-target="perspective" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/500</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="perspective" style="background-image: url('/photos/tint/Perspective-65ba1d.jpg')" title="Perspective">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Perspective-ccf4df.jpg" src="/photos/tint/Perspective-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Perspective-686656.jpg" src="/photos/tint/Perspective-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Perspective-686656.jpg')"></span>
  </span>
  <a class="open" href="/perspective" data-target="perspective">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/ham" data-target="ham" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/layers-and-lines" data-target="layers-and-lines" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/500</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="layers-and-lines" style="background-image: url('/photos/tint/Layers%20and%20Lines-65ba1d.jpg')" title="Layers and Lines">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Layers%20and%20Lines-ccf4df.jpg" src="/photos/tint/Layers%20and%20Lines-65ba1d.jpg" height="2048" width="1366" />
  <img class="lazyload fullres" data-src="/photos/large/Layers%20and%20Lines-686656.jpg" src="/photos/tint/Layers%20and%20Lines-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Layers%20and%20Lines-686656.jpg')"></span>
  </span>
  <a class="open" href="/layers-and-lines" data-target="layers-and-lines">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/perspective" data-target="perspective" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/e-blaue-gouf" data-target="e-blaue-gouf" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/500</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="e-blaue-gouf" style="background-image: url('/photos/tint/E%20blaue%20Gouf-65ba1d.jpg')" title="E blaue Gouf">
  <img class="lazyload thumb" data-src="/photos/thumbnail/E%20blaue%20Gouf-ccf4df.jpg" src="/photos/tint/E%20blaue%20Gouf-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/E%20blaue%20Gouf-686656.jpg" src="/photos/tint/E%20blaue%20Gouf-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/E%20blaue%20Gouf-686656.jpg')"></span>
  </span>
  <a class="open" href="/e-blaue-gouf" data-target="e-blaue-gouf">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/layers-and-lines" data-target="layers-and-lines" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gardening-is-my-hobby" data-target="gardening-is-my-hobby" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/210</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="gardening-is-my-hobby" style="background-image: url('/photos/tint/Gardening%20is%20my%20hobby-65ba1d.jpg')" title="Gardening is my hobby">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Gardening%20is%20my%20hobby-ccf4df.jpg" src="/photos/tint/Gardening%20is%20my%20hobby-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Gardening%20is%20my%20hobby-686656.jpg" src="/photos/tint/Gardening%20is%20my%20hobby-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Gardening%20is%20my%20hobby-686656.jpg')"></span>
  </span>
  <a class="open" href="/gardening-is-my-hobby" data-target="gardening-is-my-hobby">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/e-blaue-gouf" data-target="e-blaue-gouf" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/pizza-and-pasta" data-target="pizza-and-pasta" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/300</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="pizza-and-pasta" style="background-image: url('/photos/tint/Pizza%20and%20Pasta-65ba1d.jpg')" title="Pizza and Pasta">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Pizza%20and%20Pasta-ccf4df.jpg" src="/photos/tint/Pizza%20and%20Pasta-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Pizza%20and%20Pasta-686656.jpg" src="/photos/tint/Pizza%20and%20Pasta-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Pizza%20and%20Pasta-686656.jpg')"></span>
  </span>
  <a class="open" href="/pizza-and-pasta" data-target="pizza-and-pasta">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gardening-is-my-hobby" data-target="gardening-is-my-hobby" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/monobloc-garden" data-target="monobloc-garden" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/220</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="monobloc-garden" style="background-image: url('/photos/tint/Monobloc%20Garden-65ba1d.jpg')" title="Monobloc Garden">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Monobloc%20Garden-ccf4df.jpg" src="/photos/tint/Monobloc%20Garden-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Monobloc%20Garden-686656.jpg" src="/photos/tint/Monobloc%20Garden-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Monobloc%20Garden-686656.jpg')"></span>
  </span>
  <a class="open" href="/monobloc-garden" data-target="monobloc-garden">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/pizza-and-pasta" data-target="pizza-and-pasta" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/leider-nid-mis-toeffli" data-target="leider-nid-mis-toeffli" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/170</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="leider-nid-mis-toeffli" style="background-image: url('/photos/tint/(Leider%20nid%20mis)%20Toeffli-65ba1d.jpg')" title="(Leider nid mis) Toeffli">
  <img class="lazyload thumb" data-src="/photos/thumbnail/(Leider%20nid%20mis)%20Toeffli-ccf4df.jpg" src="/photos/tint/(Leider%20nid%20mis)%20Toeffli-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/(Leider%20nid%20mis)%20Toeffli-686656.jpg" src="/photos/tint/(Leider%20nid%20mis)%20Toeffli-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/(Leider%20nid%20mis)%20Toeffli-686656.jpg')"></span>
  </span>
  <a class="open" href="/leider-nid-mis-toeffli" data-target="leider-nid-mis-toeffli">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/monobloc-garden" data-target="monobloc-garden" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/goals" data-target="goals" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/800</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="goals" style="background-image: url('/photos/tint/Goals-65ba1d.jpg')" title="Goals">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Goals-ccf4df.jpg" src="/photos/tint/Goals-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Goals-686656.jpg" src="/photos/tint/Goals-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Goals-686656.jpg')"></span>
  </span>
  <a class="open" href="/goals" data-target="goals">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/leider-nid-mis-toeffli" data-target="leider-nid-mis-toeffli" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/they-have-city-view-tm" data-target="they-have-city-view-tm" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/900</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="they-have-city-view-tm" style="background-image: url('/photos/tint/They%20have%20City%20View%20TM-65ba1d.jpg')" title="They have City View TM">
  <img class="lazyload thumb" data-src="/photos/thumbnail/They%20have%20City%20View%20TM-ccf4df.jpg" src="/photos/tint/They%20have%20City%20View%20TM-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/They%20have%20City%20View%20TM-686656.jpg" src="/photos/tint/They%20have%20City%20View%20TM-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/They%20have%20City%20View%20TM-686656.jpg')"></span>
  </span>
  <a class="open" href="/they-have-city-view-tm" data-target="they-have-city-view-tm">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/goals" data-target="goals" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/under-the-bridge" data-target="under-the-bridge" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="under-the-bridge" style="background-image: url('/photos/tint/Under%20the%20Bridge-65ba1d.jpg')" title="Under the Bridge">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Under%20the%20Bridge-ccf4df.jpg" src="/photos/tint/Under%20the%20Bridge-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Under%20the%20Bridge-686656.jpg" src="/photos/tint/Under%20the%20Bridge-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Under%20the%20Bridge-686656.jpg')"></span>
  </span>
  <a class="open" href="/under-the-bridge" data-target="under-the-bridge">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/they-have-city-view-tm" data-target="they-have-city-view-tm" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/1891" data-target="1891" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/500</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="1891" style="background-image: url('/photos/tint/1891-65ba1d.jpg')" title="1891">
  <img class="lazyload thumb" data-src="/photos/thumbnail/1891-ccf4df.jpg" src="/photos/tint/1891-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/1891-686656.jpg" src="/photos/tint/1891-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/1891-686656.jpg')"></span>
  </span>
  <a class="open" href="/1891" data-target="1891">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/under-the-bridge" data-target="under-the-bridge" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/the-backyard" data-target="the-backyard" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/750</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="the-backyard" style="background-image: url('/photos/tint/The%20Backyard-65ba1d.jpg')" title="The Backyard">
  <img class="lazyload thumb" data-src="/photos/thumbnail/The%20Backyard-ccf4df.jpg" src="/photos/tint/The%20Backyard-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/The%20Backyard-686656.jpg" src="/photos/tint/The%20Backyard-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/The%20Backyard-686656.jpg')"></span>
  </span>
  <a class="open" href="/the-backyard" data-target="the-backyard">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/1891" data-target="1891" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/oi" data-target="oi" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/600</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="oi" style="background-image: url('/photos/tint/Oi-65ba1d.jpg')" title="Oi">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Oi-ccf4df.jpg" src="/photos/tint/Oi-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Oi-686656.jpg" src="/photos/tint/Oi-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Oi-686656.jpg')"></span>
  </span>
  <a class="open" href="/oi" data-target="oi">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/the-backyard" data-target="the-backyard" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/remont" data-target="remont" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/450</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="remont" style="background-image: url('/photos/tint/Remont-65ba1d.jpg')" title="Remont">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Remont-ccf4df.jpg" src="/photos/tint/Remont-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Remont-686656.jpg" src="/photos/tint/Remont-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Remont-686656.jpg')"></span>
  </span>
  <a class="open" href="/remont" data-target="remont">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/oi" data-target="oi" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gr%C3%BCier-gramin" data-target="grüier-gramin" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/900</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="grüier-gramin" style="background-image: url('/photos/tint/Gr%C3%BCier%20Gramin-65ba1d.jpg')" title="Grüier Gramin">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Gr%C3%BCier%20Gramin-ccf4df.jpg" src="/photos/tint/Gr%C3%BCier%20Gramin-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Gr%C3%BCier%20Gramin-686656.jpg" src="/photos/tint/Gr%C3%BCier%20Gramin-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Gr%C3%BCier%20Gramin-686656.jpg')"></span>
  </span>
  <a class="open" href="/gr%C3%BCier-gramin" data-target="grüier-gramin">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/remont" data-target="remont" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/at-the-watering-hole" data-target="at-the-watering-hole" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="at-the-watering-hole" style="background-image: url('/photos/tint/At%20the%20Watering%20Hole-65ba1d.jpg')" title="At the Watering Hole">
  <img class="lazyload thumb" data-src="/photos/thumbnail/At%20the%20Watering%20Hole-ccf4df.jpg" src="/photos/tint/At%20the%20Watering%20Hole-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/At%20the%20Watering%20Hole-686656.jpg" src="/photos/tint/At%20the%20Watering%20Hole-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/At%20the%20Watering%20Hole-686656.jpg')"></span>
  </span>
  <a class="open" href="/at-the-watering-hole" data-target="at-the-watering-hole">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gr%C3%BCier-gramin" data-target="grüier-gramin" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/spring-light" data-target="spring-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="spring-light" style="background-image: url('/photos/tint/Spring%20Light-65ba1d.jpg')" title="Spring Light">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Spring%20Light-ccf4df.jpg" src="/photos/tint/Spring%20Light-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Spring%20Light-686656.jpg" src="/photos/tint/Spring%20Light-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Spring%20Light-686656.jpg')"></span>
  </span>
  <a class="open" href="/spring-light" data-target="spring-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/at-the-watering-hole" data-target="at-the-watering-hole" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snowy-red-light" data-target="snowy-red-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/2000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="snowy-red-light" style="background-image: url('/photos/tint/Snowy%20Red%20Light-65ba1d.jpg')" title="Snowy Red Light">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Snowy%20Red%20Light-ccf4df.jpg" src="/photos/tint/Snowy%20Red%20Light-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Snowy%20Red%20Light-686656.jpg" src="/photos/tint/Snowy%20Red%20Light-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snowy%20Red%20Light-686656.jpg')"></span>
  </span>
  <a class="open" href="/snowy-red-light" data-target="snowy-red-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/spring-light" data-target="spring-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lake-geneva" data-target="lake-geneva" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="lake-geneva" style="background-image: url('/photos/tint/Lake%20Geneva-65ba1d.jpg')" title="Lake Geneva">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Lake%20Geneva-ccf4df.jpg" src="/photos/tint/Lake%20Geneva-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Lake%20Geneva-686656.jpg" src="/photos/tint/Lake%20Geneva-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lake%20Geneva-686656.jpg')"></span>
  </span>
  <a class="open" href="/lake-geneva" data-target="lake-geneva">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snowy-red-light" data-target="snowy-red-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/evening-mood" data-target="evening-mood" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/420</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="evening-mood" style="background-image: url('/photos/tint/Evening%20Mood-65ba1d.jpg')" title="Evening Mood">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Evening%20Mood-ccf4df.jpg" src="/photos/tint/Evening%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Evening%20Mood-686656.jpg" src="/photos/tint/Evening%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Evening%20Mood-686656.jpg')"></span>
  </span>
  <a class="open" href="/evening-mood" data-target="evening-mood">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lake-geneva" data-target="lake-geneva" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/windowshopping" data-target="windowshopping" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="windowshopping" style="background-image: url('/photos/tint/Windowshopping-65ba1d.jpg')" title="Windowshopping">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Windowshopping-ccf4df.jpg" src="/photos/tint/Windowshopping-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Windowshopping-686656.jpg" src="/photos/tint/Windowshopping-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Windowshopping-686656.jpg')"></span>
  </span>
  <a class="open" href="/windowshopping" data-target="windowshopping">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/evening-mood" data-target="evening-mood" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/off-season-vibes" data-target="off-season-vibes" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/80</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="off-season-vibes" style="background-image: url('/photos/tint/Off%20Season%20Vibes-65ba1d.jpg')" title="Off Season Vibes">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Off%20Season%20Vibes-ccf4df.jpg" src="/photos/tint/Off%20Season%20Vibes-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Off%20Season%20Vibes-686656.jpg" src="/photos/tint/Off%20Season%20Vibes-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Off%20Season%20Vibes-686656.jpg')"></span>
  </span>
  <a class="open" href="/off-season-vibes" data-target="off-season-vibes">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/windowshopping" data-target="windowshopping" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/who-stole-my-leica" data-target="who-stole-my-leica" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="who-stole-my-leica" style="background-image: url('/photos/tint/Who%20stole%20my%20Leica-65ba1d.jpg')" title="Who stole my Leica">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Who%20stole%20my%20Leica-ccf4df.jpg" src="/photos/tint/Who%20stole%20my%20Leica-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Who%20stole%20my%20Leica-686656.jpg" src="/photos/tint/Who%20stole%20my%20Leica-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Who%20stole%20my%20Leica-686656.jpg')"></span>
  </span>
  <a class="open" href="/who-stole-my-leica" data-target="who-stole-my-leica">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/off-season-vibes" data-target="off-season-vibes" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/montreux-evening" data-target="montreux-evening" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/80</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="montreux-evening" style="background-image: url('/photos/tint/Montreux%20Evening-65ba1d.jpg')" title="Montreux Evening">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Montreux%20Evening-ccf4df.jpg" src="/photos/tint/Montreux%20Evening-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Montreux%20Evening-686656.jpg" src="/photos/tint/Montreux%20Evening-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Montreux%20Evening-686656.jpg')"></span>
  </span>
  <a class="open" href="/montreux-evening" data-target="montreux-evening">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/who-stole-my-leica" data-target="who-stole-my-leica" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/mexican-sweet-potato" data-target="mexican-sweet-potato" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/250</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="mexican-sweet-potato" style="background-image: url('/photos/tint/Mexican%20Sweet%20Potato-65ba1d.jpg')" title="Mexican Sweet Potato">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Mexican%20Sweet%20Potato-ccf4df.jpg" src="/photos/tint/Mexican%20Sweet%20Potato-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Mexican%20Sweet%20Potato-686656.jpg" src="/photos/tint/Mexican%20Sweet%20Potato-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Mexican%20Sweet%20Potato-686656.jpg')"></span>
  </span>
  <a class="open" href="/mexican-sweet-potato" data-target="mexican-sweet-potato">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/montreux-evening" data-target="montreux-evening" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/much-snow-much-wow" data-target="much-snow-much-wow" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.0</li> -->
  </ul>
</li>
<li class="item " id="much-snow-much-wow" style="background-image: url('/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg')" title="Much Snow Much Wow">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Much%20Snow%20Much%20Wow-ccf4df.jpg" src="/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Much%20Snow%20Much%20Wow-686656.jpg" src="/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Much%20Snow%20Much%20Wow-686656.jpg')"></span>
  </span>
  <a class="open" href="/much-snow-much-wow" data-target="much-snow-much-wow">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/mexican-sweet-potato" data-target="mexican-sweet-potato" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/xmas-tree" data-target="xmas-tree" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="xmas-tree" style="background-image: url('/photos/tint/Xmas%20Tree-65ba1d.jpg')" title="Xmas Tree">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Xmas%20Tree-ccf4df.jpg" src="/photos/tint/Xmas%20Tree-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Xmas%20Tree-686656.jpg" src="/photos/tint/Xmas%20Tree-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Xmas%20Tree-686656.jpg')"></span>
  </span>
  <a class="open" href="/xmas-tree" data-target="xmas-tree">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/much-snow-much-wow" data-target="much-snow-much-wow" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="not-your-classic-xmas-shot" style="background-image: url('/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg')" title="Not Your Classic Xmas Shot">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Not%20Your%20Classic%20Xmas%20Shot-ccf4df.jpg" src="/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Not%20Your%20Classic%20Xmas%20Shot-686656.jpg" src="/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Not%20Your%20Classic%20Xmas%20Shot-686656.jpg')"></span>
  </span>
  <a class="open" href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/xmas-tree" data-target="xmas-tree" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="a-boring-photo-of-a-tree" style="background-image: url('/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.jpg')" title="A boring photo of a tree">
  <img class="lazyload thumb" data-src="/photos/thumbnail/A%20boring%20photo%20of%20a%20tree-ccf4df.jpg" src="/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/A%20boring%20photo%20of%20a%20tree-686656.jpg" src="/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/A%20boring%20photo%20of%20a%20tree-686656.jpg')"></span>
  </span>
  <a class="open" href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="checking-out-winterwonderland" style="background-image: url('/photos/tint/Checking%20out%20Winterwonderland-65ba1d.jpg')" title="Checking out Winterwonderland">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Checking%20out%20Winterwonderland-ccf4df.jpg" src="/photos/tint/Checking%20out%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Checking%20out%20Winterwonderland-686656.jpg" src="/photos/tint/Checking%20out%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Checking%20out%20Winterwonderland-686656.jpg')"></span>
  </span>
  <a class="open" href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/640</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="lake-davos-winterwonderland" style="background-image: url('/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.jpg')" title="Lake Davos Winterwonderland">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Lake%20Davos%20Winterwonderland-ccf4df.jpg" src="/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Lake%20Davos%20Winterwonderland-686656.jpg" src="/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lake%20Davos%20Winterwonderland-686656.jpg')"></span>
  </span>
  <a class="open" href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/christina-in-davos" data-target="christina-in-davos" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="christina-in-davos" style="background-image: url('/photos/tint/Christina%20in%20Davos-65ba1d.jpg')" title="Christina in Davos">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Christina%20in%20Davos-ccf4df.jpg" src="/photos/tint/Christina%20in%20Davos-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Christina%20in%20Davos-686656.jpg" src="/photos/tint/Christina%20in%20Davos-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Christina%20in%20Davos-686656.jpg')"></span>
  </span>
  <a class="open" href="/christina-in-davos" data-target="christina-in-davos">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/happy-birthday" data-target="happy-birthday" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="happy-birthday" style="background-image: url('/photos/tint/Happy%20Birthday-65ba1d.jpg')" title="Happy Birthday">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Happy%20Birthday-ccf4df.jpg" src="/photos/tint/Happy%20Birthday-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Happy%20Birthday-686656.jpg" src="/photos/tint/Happy%20Birthday-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Happy%20Birthday-686656.jpg')"></span>
  </span>
  <a class="open" href="/happy-birthday" data-target="happy-birthday">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/christina-in-davos" data-target="christina-in-davos" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/davos" data-target="davos" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/60</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="davos" style="background-image: url('/photos/tint/Davos-65ba1d.jpg')" title="Davos">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Davos-ccf4df.jpg" src="/photos/tint/Davos-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Davos-686656.jpg" src="/photos/tint/Davos-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Davos-686656.jpg')"></span>
  </span>
  <a class="open" href="/davos" data-target="davos">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/happy-birthday" data-target="happy-birthday" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/accidental-wes-anderson" data-target="accidental-wes-anderson" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="accidental-wes-anderson" style="background-image: url('/photos/tint/Accidental%20Wes%20Anderson-65ba1d.jpg')" title="Accidental Wes Anderson">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Accidental%20Wes%20Anderson-ccf4df.jpg" src="/photos/tint/Accidental%20Wes%20Anderson-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Accidental%20Wes%20Anderson-686656.jpg" src="/photos/tint/Accidental%20Wes%20Anderson-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Accidental%20Wes%20Anderson-686656.jpg')"></span>
  </span>
  <a class="open" href="/accidental-wes-anderson" data-target="accidental-wes-anderson">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/davos" data-target="davos" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snowflakes-coming-down" data-target="snowflakes-coming-down" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snowflakes-coming-down" style="background-image: url('/photos/tint/Snowflakes%20coming%20down-65ba1d.jpg')" title="Snowflakes coming down">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Snowflakes%20coming%20down-ccf4df.jpg" src="/photos/tint/Snowflakes%20coming%20down-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Snowflakes%20coming%20down-686656.jpg" src="/photos/tint/Snowflakes%20coming%20down-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snowflakes%20coming%20down-686656.jpg')"></span>
  </span>
  <a class="open" href="/snowflakes-coming-down" data-target="snowflakes-coming-down">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/accidental-wes-anderson" data-target="accidental-wes-anderson" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snowing" data-target="snowing" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snowing" style="background-image: url('/photos/tint/Snowing-65ba1d.jpg')" title="Snowing">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Snowing-ccf4df.jpg" src="/photos/tint/Snowing-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Snowing-686656.jpg" src="/photos/tint/Snowing-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snowing-686656.jpg')"></span>
  </span>
  <a class="open" href="/snowing" data-target="snowing">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snowflakes-coming-down" data-target="snowflakes-coming-down" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snow-in-the-city" data-target="snow-in-the-city" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/600</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snow-in-the-city" style="background-image: url('/photos/tint/Snow%20in%20the%20city-65ba1d.jpg')" title="Snow in the city">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Snow%20in%20the%20city-ccf4df.jpg" src="/photos/tint/Snow%20in%20the%20city-65ba1d.jpg" height="1366" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Snow%20in%20the%20city-686656.jpg" src="/photos/tint/Snow%20in%20the%20city-65ba1d.jpg" height="1366" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snow%20in%20the%20city-686656.jpg')"></span>
  </span>
  <a class="open" href="/snow-in-the-city" data-target="snow-in-the-city">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snowing" data-target="snowing" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017:12:08 22:31:  </li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="best-ramen-in-town-ii" style="background-image: url('/photos/tint/Best%20Ramen%20in%20Town%20II-65ba1d.jpg')" title="Best Ramen in Town II">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Best%20Ramen%20in%20Town%20II-ccf4df.jpg" src="/photos/tint/Best%20Ramen%20in%20Town%20II-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Best%20Ramen%20in%20Town%20II-686656.jpg" src="/photos/tint/Best%20Ramen%20in%20Town%20II-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Best%20Ramen%20in%20Town%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snow-in-the-city" data-target="snow-in-the-city" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/best-ramen-in-town" data-target="best-ramen-in-town" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/200</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="best-ramen-in-town" style="background-image: url('/photos/tint/Best%20Ramen%20in%20Town-65ba1d.jpg')" title="Best Ramen in Town">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Best%20Ramen%20in%20Town-ccf4df.jpg" src="/photos/tint/Best%20Ramen%20in%20Town-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Best%20Ramen%20in%20Town-686656.jpg" src="/photos/tint/Best%20Ramen%20in%20Town-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Best%20Ramen%20in%20Town-686656.jpg')"></span>
  </span>
  <a class="open" href="/best-ramen-in-town" data-target="best-ramen-in-town">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/red-light" data-target="red-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/200</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="red-light" style="background-image: url('/photos/tint/Red%20light-65ba1d.jpg')" title="Red light">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Red%20light-ccf4df.jpg" src="/photos/tint/Red%20light-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Red%20light-686656.jpg" src="/photos/tint/Red%20light-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Red%20light-686656.jpg')"></span>
  </span>
  <a class="open" href="/red-light" data-target="red-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/best-ramen-in-town" data-target="best-ramen-in-town" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/christina-browsing" data-target="christina-browsing" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>3.2</li> -->
  </ul>
</li>
<li class="item " id="christina-browsing" style="background-image: url('/photos/tint/Christina%20browsing-65ba1d.jpg')" title="Christina browsing">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Christina%20browsing-ccf4df.jpg" src="/photos/tint/Christina%20browsing-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Christina%20browsing-686656.jpg" src="/photos/tint/Christina%20browsing-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Christina%20browsing-686656.jpg')"></span>
  </span>
  <a class="open" href="/christina-browsing" data-target="christina-browsing">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/red-light" data-target="red-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/happy-christina" data-target="happy-christina" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="happy-christina" style="background-image: url('/photos/tint/Happy%20Christina-65ba1d.jpg')" title="Happy Christina">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Happy%20Christina-ccf4df.jpg" src="/photos/tint/Happy%20Christina-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Happy%20Christina-686656.jpg" src="/photos/tint/Happy%20Christina-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Happy%20Christina-686656.jpg')"></span>
  </span>
  <a class="open" href="/happy-christina" data-target="happy-christina">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/christina-browsing" data-target="christina-browsing" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/mask-mood" data-target="mask-mood" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="mask-mood" style="background-image: url('/photos/tint/Mask%20Mood-65ba1d.jpg')" title="Mask Mood">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Mask%20Mood-ccf4df.jpg" src="/photos/tint/Mask%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Mask%20Mood-686656.jpg" src="/photos/tint/Mask%20Mood-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Mask%20Mood-686656.jpg')"></span>
  </span>
  <a class="open" href="/mask-mood" data-target="mask-mood">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/happy-christina" data-target="happy-christina" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-military-school" data-target="abandoned-sovjet-military-school" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2017</li>
    <!-- <li>1/125</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-military-school" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Military%20School-65ba1d.jpg')" title="Abandoned Sovjet Military School">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Military%20School-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Military%20School-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-military-school" data-target="abandoned-sovjet-military-school">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/mask-mood" data-target="mask-mood" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-statue" data-target="abandoned-sovjet-statue" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-statue" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Statue-65ba1d.jpg')" title="Abandoned Sovjet Statue">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Statue-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Statue-65ba1d.jpg" height="2048" width="1366" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Statue-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Statue-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Statue-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-statue" data-target="abandoned-sovjet-statue">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-military-school" data-target="abandoned-sovjet-military-school" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-military-city" data-target="abandoned-sovjet-military-city" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-military-city" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Military%20City-65ba1d.jpg')" title="Abandoned Sovjet Military City">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20City-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20City-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Military%20City-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20City-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Military%20City-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-military-city" data-target="abandoned-sovjet-military-city">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-statue" data-target="abandoned-sovjet-statue" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff" data-target="abandoned-sovjet-stuff" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>9.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff-65ba1d.jpg')" title="Abandoned Sovjet Stuff">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Stuff-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff" data-target="abandoned-sovjet-stuff">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-military-city" data-target="abandoned-sovjet-military-city" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-military-school-iii" data-target="abandoned-sovjet-military-school-iii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-military-school-iii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Military%20School%20III-65ba1d.jpg')" title="Abandoned Sovjet Military School III">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School%20III-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20III-65ba1d.jpg" height="2048" width="1366" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Military%20School%20III-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20III-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Military%20School%20III-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-military-school-iii" data-target="abandoned-sovjet-military-school-iii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff" data-target="abandoned-sovjet-stuff" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-military-school-ii" data-target="abandoned-sovjet-military-school-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-military-school-ii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Military%20School%20II-65ba1d.jpg')" title="Abandoned Sovjet Military School II">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School%20II-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20II-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Military%20School%20II-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20II-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Military%20School%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-military-school-ii" data-target="abandoned-sovjet-military-school-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-military-school-iii" data-target="abandoned-sovjet-military-school-iii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-swimming-pool" data-target="abandoned-sovjet-swimming-pool" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-swimming-pool" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Swimming%20Pool-65ba1d.jpg')" title="Abandoned Sovjet Swimming Pool">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Swimming%20Pool-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Swimming%20Pool-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Swimming%20Pool-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Swimming%20Pool-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Swimming%20Pool-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-swimming-pool" data-target="abandoned-sovjet-swimming-pool">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-military-school-ii" data-target="abandoned-sovjet-military-school-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/exploring-annecy-ii" data-target="exploring-annecy-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
<li class="item " id="exploring-annecy-ii" style="background-image: url('/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg')" title="Exploring Annecy II">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Exploring%20Annecy%20II-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Exploring%20Annecy%20II-686656.jpg" src="/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Exploring%20Annecy%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/exploring-annecy-ii" data-target="exploring-annecy-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-swimming-pool" data-target="abandoned-sovjet-swimming-pool" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/epic-flare" data-target="epic-flare" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/200</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="epic-flare" style="background-image: url('/photos/tint/Epic%20Flare-65ba1d.jpg')" title="Epic Flare">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Epic%20Flare-ccf4df.jpg" src="/photos/tint/Epic%20Flare-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Epic%20Flare-686656.jpg" src="/photos/tint/Epic%20Flare-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Epic%20Flare-686656.jpg')"></span>
  </span>
  <a class="open" href="/epic-flare" data-target="epic-flare">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/exploring-annecy-ii" data-target="exploring-annecy-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/annecy-light" data-target="annecy-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/800</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="annecy-light" style="background-image: url('/photos/tint/Annecy%20Light-65ba1d.jpg')" title="Annecy Light">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Annecy%20Light-ccf4df.jpg" src="/photos/tint/Annecy%20Light-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Annecy%20Light-686656.jpg" src="/photos/tint/Annecy%20Light-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Annecy%20Light-686656.jpg')"></span>
  </span>
  <a class="open" href="/annecy-light" data-target="annecy-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/epic-flare" data-target="epic-flare" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/annecy-and-mountains" data-target="annecy-and-mountains" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/640</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="annecy-and-mountains" style="background-image: url('/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg')" title="Annecy and Mountains">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Annecy%20and%20Mountains-ccf4df.jpg" src="/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Annecy%20and%20Mountains-686656.jpg" src="/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Annecy%20and%20Mountains-686656.jpg')"></span>
  </span>
  <a class="open" href="/annecy-and-mountains" data-target="annecy-and-mountains">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/annecy-light" data-target="annecy-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/exploring-annecy" data-target="exploring-annecy" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/1000</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="exploring-annecy" style="background-image: url('/photos/tint/Exploring%20Annecy-65ba1d.jpg')" title="Exploring Annecy">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Exploring%20Annecy-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy-65ba1d.jpg" height="2048" width="1365" />
  <img class="lazyload fullres" data-src="/photos/large/Exploring%20Annecy-686656.jpg" src="/photos/tint/Exploring%20Annecy-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Exploring%20Annecy-686656.jpg')"></span>
  </span>
  <a class="open" href="/exploring-annecy" data-target="exploring-annecy">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/annecy-and-mountains" data-target="annecy-and-mountains" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-ii" data-target="abandoned-sovjet-stuff-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/400</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-ii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg')" title="Abandoned Sovjet Stuff II">
  <img class="lazyload thumb" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20II-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg" height="1365" width="2048" />
  <img class="lazyload fullres" data-src="/photos/large/Abandoned%20Sovjet%20Stuff%20II-686656.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-ii" data-target="abandoned-sovjet-stuff-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/exploring-annecy" data-target="exploring-annecy" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/80</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
`);