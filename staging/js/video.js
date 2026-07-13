/* Looping-video helper for former GIFs.
 *
 * WCAG 2.2.2 (Pause, Stop, Hide): moving content that starts automatically and
 * lasts > 5s must be pausable. A single page-level control ([data-video-toggle-all])
 * pauses/plays every looping video on the page at once.
 *
 * Autoplay is a progressive enhancement only:
 *   - prefers-reduced-motion: reduce  -> stay paused, show the poster frame.
 *   - otherwise                        -> autoplay muted+looping; the control pauses it.
 * The control is [hidden] in markup and only revealed once JS runs, so with JS off
 * nothing autoplays and no dead control is shown — the poster frames stand in.
 */
(function () {
  var mq = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener: null };

  var videos = [];
  var toggles = [];

  function playAll() {
    videos.forEach(function (v) {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
  }
  function pauseAll() { videos.forEach(function (v) { v.pause(); }); }
  function anyPlaying() { return videos.some(function (v) { return !v.paused; }); }

  function reflect() {
    var playing = anyPlaying();
    toggles.forEach(function (b) {
      b.setAttribute('aria-pressed', String(playing));
      b.setAttribute('aria-label', (playing ? 'Pause' : 'Play') + ' animations');
      var lbl = b.querySelector('.mt-label');
      if (lbl) lbl.textContent = playing ? 'Pause animations' : 'Play animations';
    });
  }

  function init() {
    videos = [].slice.call(document.querySelectorAll('[data-video] video'));
    toggles = [].slice.call(document.querySelectorAll('[data-video-toggle-all]'));
    if (!videos.length || !toggles.length) return;

    toggles.forEach(function (b) {
      b.hidden = false;
      b.addEventListener('click', function () {
        if (anyPlaying()) pauseAll(); else playAll();
        reflect();
      });
    });
    videos.forEach(function (v) {
      v.addEventListener('play', reflect);
      v.addEventListener('pause', reflect);
    });

    if (mq.matches) pauseAll(); else playAll();
    reflect();
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);

  // If the user flips reduced-motion mid-session, honor it.
  if (mq.addEventListener) {
    mq.addEventListener('change', function (e) {
      if (e.matches) pauseAll(); else playAll();
      reflect();
    });
  }
})();
