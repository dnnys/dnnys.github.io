(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="20161120-mg-4255" style="background-image: url('/photos/tint/20161120-_MG_4255-65ba1d.jpg')" title="20161120-_MG_4255">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4255-ccf4df.jpg" src="/photos/tint/20161120-_MG_4255-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4255-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4255" data-target="20161120-mg-4255">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4254" data-target="20161120-mg-4254" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161120-mg-4254" style="background-image: url('/photos/tint/20161120-_MG_4254-65ba1d.jpg')" title="20161120-_MG_4254">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4254-ccf4df.jpg" src="/photos/tint/20161120-_MG_4254-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4254-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4254" data-target="20161120-mg-4254">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4255" data-target="20161120-mg-4255" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161120-mg-4240" data-target="20161120-mg-4240" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161120-mg-4240" style="background-image: url('/photos/tint/20161120-_MG_4240-65ba1d.jpg')" title="20161120-_MG_4240">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4240-ccf4df.jpg" src="/photos/tint/20161120-_MG_4240-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4240-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4240" data-target="20161120-mg-4240">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4254" data-target="20161120-mg-4254" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161120-mg-4239" data-target="20161120-mg-4239" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161120-mg-4239" style="background-image: url('/photos/tint/20161120-_MG_4239-65ba1d.jpg')" title="20161120-_MG_4239">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4239-ccf4df.jpg" src="/photos/tint/20161120-_MG_4239-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4239-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4239" data-target="20161120-mg-4239">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4240" data-target="20161120-mg-4240" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161120-mg-4238" data-target="20161120-mg-4238" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161120-mg-4238" style="background-image: url('/photos/tint/20161120-_MG_4238-65ba1d.jpg')" title="20161120-_MG_4238">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4238-ccf4df.jpg" src="/photos/tint/20161120-_MG_4238-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4238-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4238" data-target="20161120-mg-4238">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4239" data-target="20161120-mg-4239" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161120-mg-4237" data-target="20161120-mg-4237" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161120-mg-4237" style="background-image: url('/photos/tint/20161120-_MG_4237-65ba1d.jpg')" title="20161120-_MG_4237">
  <img class="lazyload" data-src="/photos/thumbnail/20161120-_MG_4237-ccf4df.jpg" src="/photos/tint/20161120-_MG_4237-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161120-_MG_4237-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161120-mg-4237" data-target="20161120-mg-4237">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4238" data-target="20161120-mg-4238" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0278" data-target="20161206-dsc0278" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 6D</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0278" style="background-image: url('/photos/tint/20161206-_DSC0278-65ba1d.jpg')" title="20161206-_DSC0278">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0278-ccf4df.jpg" src="/photos/tint/20161206-_DSC0278-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0278-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0278" data-target="20161206-dsc0278">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161120-mg-4237" data-target="20161120-mg-4237" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0274" data-target="20161206-dsc0274" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0274" style="background-image: url('/photos/tint/20161206-_DSC0274-65ba1d.jpg')" title="20161206-_DSC0274">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0274-ccf4df.jpg" src="/photos/tint/20161206-_DSC0274-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0274-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0274" data-target="20161206-dsc0274">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0278" data-target="20161206-dsc0278" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0269" data-target="20161206-dsc0269" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0269" style="background-image: url('/photos/tint/20161206-_DSC0269-65ba1d.jpg')" title="20161206-_DSC0269">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0269-ccf4df.jpg" src="/photos/tint/20161206-_DSC0269-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0269-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0269" data-target="20161206-dsc0269">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0274" data-target="20161206-dsc0274" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0264" data-target="20161206-dsc0264" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>9.0</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0264" style="background-image: url('/photos/tint/20161206-_DSC0264-65ba1d.jpg')" title="20161206-_DSC0264">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0264-ccf4df.jpg" src="/photos/tint/20161206-_DSC0264-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0264-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0264" data-target="20161206-dsc0264">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0269" data-target="20161206-dsc0269" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0255" data-target="20161206-dsc0255" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0255" style="background-image: url('/photos/tint/20161206-_DSC0255-65ba1d.jpg')" title="20161206-_DSC0255">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0255-ccf4df.jpg" src="/photos/tint/20161206-_DSC0255-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0255-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0255" data-target="20161206-dsc0255">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0264" data-target="20161206-dsc0264" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0251" data-target="20161206-dsc0251" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0251" style="background-image: url('/photos/tint/20161206-_DSC0251-65ba1d.jpg')" title="20161206-_DSC0251">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0251-ccf4df.jpg" src="/photos/tint/20161206-_DSC0251-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0251-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0251" data-target="20161206-dsc0251">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0255" data-target="20161206-dsc0255" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0216" data-target="20161206-dsc0216" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0216" style="background-image: url('/photos/tint/20161206-_DSC0216-65ba1d.jpg')" title="20161206-_DSC0216">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0216-ccf4df.jpg" src="/photos/tint/20161206-_DSC0216-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0216-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0216" data-target="20161206-dsc0216">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0251" data-target="20161206-dsc0251" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20161206-dsc0192" data-target="20161206-dsc0192" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="20161206-dsc0192" style="background-image: url('/photos/tint/20161206-_DSC0192-65ba1d.jpg')" title="20161206-_DSC0192">
  <img class="lazyload" data-src="/photos/thumbnail/20161206-_DSC0192-ccf4df.jpg" src="/photos/tint/20161206-_DSC0192-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/20161206-_DSC0192-686656.jpg')"></span>
  </span>
  <a class="open" href="/20161206-dsc0192" data-target="20161206-dsc0192">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20161206-dsc0216" data-target="20161206-dsc0216" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>NIKON D5300</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
`);