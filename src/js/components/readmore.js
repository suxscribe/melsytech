'use strict';

(function () {
  var e = document.body.querySelectorAll('[data-readmore]'),
    x,
    l,
    t,
    tb,
    te,
    d,
    mt,
    lt,
    ho,
    hc,
    ln,
    sd,
    sr,
    dur,
    fun,
    tm,
    aE = function aE(a, b, c) {
      try {
        a.addEventListener(b, c, !1);
      } catch (d) {
        a.attachEvent('on' + b, c);
      }
    },
    tE = function tE(c, d, b, a) {
      b = document;
      b.createEvent
        ? ((a = new Event(d)), c.dispatchEvent(a))
        : ((a = b.createEventObject()), c.fireEvent('on' + d, a));
    };
  if (e.length == 0) return;

  for (x = 0; x < e.length; x++) {
    d = e[x].dataset.readmoreDots || '...';
    mt = e[x].dataset.readmoreMore || 'Развернуть';
    lt = e[x].dataset.readmoreLess || 'Свернуть';
    dur = parseInt(e[x].dataset.readmoreDuration || 0);
    fun = e[x].dataset.readmoreEasing || 'ease-out';

    //set readmore link
    ln = document.createElement('a');
    ln.textContent = lt;
    ln.dataset.readmoreLink = mt;
    ln.href = '#';
    aE(ln, 'click', function (e) {
      var t = ln.dataset.readmoreLink,
        p = ln.parentNode,
        h = p.dataset.readmoreHeight,
        d = p.querySelector('[data-readmore-dots]'),
        r = p.querySelector('[data-readmore-rest]'),
        l = p.querySelector('[data-readmore-link]'),
        dur = parseInt(p.dataset.readmoreDuration),
        tm,
        hc;

      e.preventDefault();
      //e[x].style.height =

      //toggle heights
      p.dataset.readmoreHeight = p.style.height;
      p.style.height = h;
      tm = setTimeout(
        function () {
          //swap link text
          l.dataset.readmoreLink = l.textContent;
          l.textContent = t;

          //toggle dots
          sd.dataset.readmoreDots = parseInt(sd.dataset.readmoreDots) ? 0 : 1;

          //toggle rest
          sr.dataset.readmoreRest = parseInt(sr.dataset.readmoreRest) ? 0 : 1;
        },
        parseInt(sd.dataset.readmoreDots) ? 0 : dur - dur * 0.5
      );
    });

    l = parseInt(e[x].dataset.readmore);
    t = e[x].textContent;

    //don't break words
    while (/\s/.test(t.substr(l - 1, 1)) === false && l < t.length && ++l) {}
    --l;

    e[x].dataset.readmore = l; //update length without breaking words
    e[x].style.transitionDuration = dur / 1000 + 's';
    e[x].style.transitionTimingFunction = fun;
    e[x].dataset.readmoreDuration = dur; //make sure it exists when clicked

    if (t.length > l) {
      //append link
      tb = t.substr(0, l);
      te = t.substr(l);

      //set initial content
      e[x].textContent = tb;

      //append dots
      sd = document.createElement('span');
      sd.dataset.readmoreDots = 0; //hidden when expanded
      sd.textContent = d + ' '; //include space at the end
      e[x].appendChild(sd);

      //append rest of content
      sr = document.createElement('span');
      sr.dataset.readmoreRest = 1; //visible when expanded
      sr.textContent = te + ' '; //include space at the end
      e[x].appendChild(sr);

      //append readmore link
      e[x].appendChild(ln);

      //calculate expanded height
      ho = e[x].offsetHeight;

      //show dots
      sd.dataset.readmoreDots = 1;

      //hide rest
      sr.dataset.readmoreRest = 0;

      //swap link text
      ln.textContent = mt;
      ln.dataset.readmoreLink = lt;

      //set/store heights for animations
      e[x].dataset.readmoreHeight = ho + 'px';

      tm = setTimeout(
        function (p) {
          //now calculate collapsed height
          var hc = p.offsetHeight;
          p.style.height = hc + 'px';
        }.bind(undefined, e[x]),
        dur
      );
    }
  }
})();
