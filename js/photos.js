(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="they-have-city-view-tm" style="background-image: url('/photos/tint/They%20have%20City%20View%20TM-65ba1d.jpg')" title="They have City View TM">
  <img class="lazyload" data-src="/photos/thumbnail/They%20have%20City%20View%20TM-ccf4df.jpg" src="/photos/tint/They%20have%20City%20View%20TM-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/They%20have%20City%20View%20TM-686656.jpg')"></span>
  </span>
  <a class="open" href="/they-have-city-view-tm" data-target="they-have-city-view-tm">Open</a>
  <a class="close" href="/">Close</a>
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
  <img class="lazyload" data-src="/photos/thumbnail/Under%20the%20Bridge-ccf4df.jpg" src="/photos/tint/Under%20the%20Bridge-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/1891-ccf4df.jpg" src="/photos/tint/1891-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/1891-686656.jpg')"></span>
  </span>
  <a class="open" href="/1891" data-target="1891">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/under-the-bridge" data-target="under-the-bridge" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/remont" data-target="remont" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>FUJIFILM</li>
    <li>2018</li>
    <!-- <li>1/750</li> -->
    <!-- <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="remont" style="background-image: url('/photos/tint/Remont-65ba1d.jpg')" title="Remont">
  <img class="lazyload" data-src="/photos/thumbnail/Remont-ccf4df.jpg" src="/photos/tint/Remont-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Remont-686656.jpg')"></span>
  </span>
  <a class="open" href="/remont" data-target="remont">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/1891" data-target="1891" class="previous" title="Go to previous photo">
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
  <img class="lazyload" data-src="/photos/thumbnail/Gr%C3%BCier%20Gramin-ccf4df.jpg" src="/photos/tint/Gr%C3%BCier%20Gramin-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/At%20the%20Watering%20Hole-ccf4df.jpg" src="/photos/tint/At%20the%20Watering%20Hole-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Spring%20Light-ccf4df.jpg" src="/photos/tint/Spring%20Light-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Snowy%20Red%20Light-ccf4df.jpg" src="/photos/tint/Snowy%20Red%20Light-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Lake%20Geneva-ccf4df.jpg" src="/photos/tint/Lake%20Geneva-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Evening%20Mood-ccf4df.jpg" src="/photos/tint/Evening%20Mood-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Windowshopping-ccf4df.jpg" src="/photos/tint/Windowshopping-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Off%20Season%20Vibes-ccf4df.jpg" src="/photos/tint/Off%20Season%20Vibes-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Who%20stole%20my%20Leica-ccf4df.jpg" src="/photos/tint/Who%20stole%20my%20Leica-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Montreux%20Evening-ccf4df.jpg" src="/photos/tint/Montreux%20Evening-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Mexican%20Sweet%20Potato-ccf4df.jpg" src="/photos/tint/Mexican%20Sweet%20Potato-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Much%20Snow%20Much%20Wow-ccf4df.jpg" src="/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Xmas%20Tree-ccf4df.jpg" src="/photos/tint/Xmas%20Tree-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Not%20Your%20Classic%20Xmas%20Shot-ccf4df.jpg" src="/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/A%20boring%20photo%20of%20a%20tree-ccf4df.jpg" src="/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Checking%20out%20Winterwonderland-ccf4df.jpg" src="/photos/tint/Checking%20out%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Lake%20Davos%20Winterwonderland-ccf4df.jpg" src="/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Christina%20in%20Davos-ccf4df.jpg" src="/photos/tint/Christina%20in%20Davos-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Happy%20Birthday-ccf4df.jpg" src="/photos/tint/Happy%20Birthday-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Davos-ccf4df.jpg" src="/photos/tint/Davos-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Accidental%20Wes%20Anderson-ccf4df.jpg" src="/photos/tint/Accidental%20Wes%20Anderson-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Snowflakes%20coming%20down-ccf4df.jpg" src="/photos/tint/Snowflakes%20coming%20down-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Snowing-ccf4df.jpg" src="/photos/tint/Snowing-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Snow%20in%20the%20city-ccf4df.jpg" src="/photos/tint/Snow%20in%20the%20city-65ba1d.jpg" height="1366" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Best%20Ramen%20in%20Town%20II-ccf4df.jpg" src="/photos/tint/Best%20Ramen%20in%20Town%20II-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Best%20Ramen%20in%20Town-ccf4df.jpg" src="/photos/tint/Best%20Ramen%20in%20Town-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Red%20light-ccf4df.jpg" src="/photos/tint/Red%20light-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Christina%20browsing-ccf4df.jpg" src="/photos/tint/Christina%20browsing-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Happy%20Christina-ccf4df.jpg" src="/photos/tint/Happy%20Christina-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Mask%20Mood-ccf4df.jpg" src="/photos/tint/Mask%20Mood-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Statue-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Statue-65ba1d.jpg" height="2048" width="1366" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20City-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20City-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School%20III-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20III-65ba1d.jpg" height="2048" width="1366" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Military%20School%20II-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Military%20School%20II-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Swimming%20Pool-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Swimming%20Pool-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Exploring%20Annecy%20II-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Epic%20Flare-ccf4df.jpg" src="/photos/tint/Epic%20Flare-65ba1d.jpg" height="1365" width="2048" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Annecy%20Light-ccf4df.jpg" src="/photos/tint/Annecy%20Light-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Annecy%20and%20Mountains-ccf4df.jpg" src="/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Exploring%20Annecy-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy-65ba1d.jpg" height="2048" width="1365" />
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
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20II-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg" height="1365" width="2048" />
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