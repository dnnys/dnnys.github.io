(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="2016-abandoned-sovjet-stuff-viii" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VIII-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff VIII">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20VIII-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VIII-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20VIII-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-viii" data-target="2016-abandoned-sovjet-stuff-viii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-vii" data-target="2016-abandoned-sovjet-stuff-vii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-vii" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VII-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff VII">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20VII-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VII-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20VII-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-vii" data-target="2016-abandoned-sovjet-stuff-vii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-viii" data-target="2016-abandoned-sovjet-stuff-viii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-vi" data-target="2016-abandoned-sovjet-stuff-vi" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-vi" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VI-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff VI">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20VI-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20VI-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20VI-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-vi" data-target="2016-abandoned-sovjet-stuff-vi">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-vii" data-target="2016-abandoned-sovjet-stuff-vii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-v" data-target="2016-abandoned-sovjet-stuff-v" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>9.0</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-v" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20V-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff V">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20V-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20V-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20V-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-v" data-target="2016-abandoned-sovjet-stuff-v">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-vi" data-target="2016-abandoned-sovjet-stuff-vi" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-iv" data-target="2016-abandoned-sovjet-stuff-iv" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-iv" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20IV-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff IV">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20IV-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20IV-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20IV-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-iv" data-target="2016-abandoned-sovjet-stuff-iv">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-v" data-target="2016-abandoned-sovjet-stuff-v" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-iii" data-target="2016-abandoned-sovjet-stuff-iii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-iii" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20III-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff III">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20III-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20III-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20III-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-iii" data-target="2016-abandoned-sovjet-stuff-iii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-iv" data-target="2016-abandoned-sovjet-stuff-iv" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-i" data-target="2016-abandoned-sovjet-stuff-i" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-i" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20I-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff I">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20I-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20I-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20I-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-i" data-target="2016-abandoned-sovjet-stuff-i">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-iii" data-target="2016-abandoned-sovjet-stuff-iii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-exploring-annecy-ii" data-target="2016-exploring-annecy-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
<li class="item " id="2016-exploring-annecy-ii" style="background-image: url('/photos/tint/2016%20Exploring%20Annecy%20II-65ba1d.jpg')" title="2016 Exploring Annecy II">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Exploring%20Annecy%20II-ccf4df.jpg" src="/photos/tint/2016%20Exploring%20Annecy%20II-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Exploring%20Annecy%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-exploring-annecy-ii" data-target="2016-exploring-annecy-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-abandoned-sovjet-stuff-i" data-target="2016-abandoned-sovjet-stuff-i" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-epic-flare" data-target="2016-epic-flare" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2021</li>
    <!-- <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-epic-flare" style="background-image: url('/photos/tint/2016%20Epic%20Flare-65ba1d.jpg')" title="2016 Epic Flare">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Epic%20Flare-ccf4df.jpg" src="/photos/tint/2016%20Epic%20Flare-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Epic%20Flare-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-epic-flare" data-target="2016-epic-flare">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-exploring-annecy-ii" data-target="2016-exploring-annecy-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-annecy-light" data-target="2016-annecy-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2021</li>
    <!-- <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-annecy-light" style="background-image: url('/photos/tint/2016%20Annecy%20Light-65ba1d.jpg')" title="2016 Annecy Light">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Annecy%20Light-ccf4df.jpg" src="/photos/tint/2016%20Annecy%20Light-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Annecy%20Light-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-annecy-light" data-target="2016-annecy-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-epic-flare" data-target="2016-epic-flare" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-annecy-and-mountains" data-target="2016-annecy-and-mountains" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2021</li>
    <!-- <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-annecy-and-mountains" style="background-image: url('/photos/tint/2016%20Annecy%20and%20Mountains-65ba1d.jpg')" title="2016 Annecy and Mountains">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Annecy%20and%20Mountains-ccf4df.jpg" src="/photos/tint/2016%20Annecy%20and%20Mountains-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Annecy%20and%20Mountains-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-annecy-and-mountains" data-target="2016-annecy-and-mountains">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-annecy-light" data-target="2016-annecy-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-exploring-annecy" data-target="2016-exploring-annecy" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2021</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-exploring-annecy" style="background-image: url('/photos/tint/2016%20Exploring%20Annecy-65ba1d.jpg')" title="2016 Exploring Annecy">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Exploring%20Annecy-ccf4df.jpg" src="/photos/tint/2016%20Exploring%20Annecy-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Exploring%20Annecy-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-exploring-annecy" data-target="2016-exploring-annecy">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-annecy-and-mountains" data-target="2016-annecy-and-mountains" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/2016-abandoned-sovjet-stuff-ii" data-target="2016-abandoned-sovjet-stuff-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2021</li>
    <!-- <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="2016-abandoned-sovjet-stuff-ii" style="background-image: url('/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg')" title="2016 Abandoned Sovjet Stuff II">
  <img class="lazyload" data-src="/photos/thumbnail/2016%20Abandoned%20Sovjet%20Stuff%20II-ccf4df.jpg" src="/photos/tint/2016%20Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/2016%20Abandoned%20Sovjet%20Stuff%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/2016-abandoned-sovjet-stuff-ii" data-target="2016-abandoned-sovjet-stuff-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/2016-exploring-annecy" data-target="2016-exploring-annecy" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2021</li>
    <!-- <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
`);