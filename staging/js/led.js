/* Motion control for the CSS LED strips (Google Home light-system demo).
 *
 * The strips are pure CSS animations, so this is the animation-equivalent of
 * video.js: a single page-level control ([data-video-toggle-all]) plays/pauses
 * every strip at once, satisfying WCAG 2.2.2 (Pause, Stop, Hide).
 *
 * Motion runs only while [data-led-scope] carries data-playing="true"; the CSS
 * binds each family's animation to that state. Autoplay is progressive
 * enhancement: reduced-motion users default to paused (and the global
 * reduced-motion rule freezes the strips to a static frame regardless). The
 * control is [hidden] in markup and revealed only once JS runs, so with JS off
 * nothing animates and no dead control appears.
 */
(function () {
  var mq = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener: null };

  var scopes = [];
  var toggles = [];
  var playing = false;

  function setPlaying(p) {
    playing = p;
    scopes.forEach(function (s) { s.setAttribute('data-playing', String(p)); });
    toggles.forEach(function (b) {
      b.setAttribute('aria-pressed', String(p));
      b.setAttribute('aria-label', (p ? 'Pause' : 'Play') + ' animations');
      var lbl = b.querySelector('.mt-label');
      if (lbl) lbl.textContent = (p ? 'Pause' : 'Play') + ' animations';
    });
  }

  function init() {
    scopes = [].slice.call(document.querySelectorAll('[data-led-scope]'));
    toggles = [].slice.call(document.querySelectorAll('[data-video-toggle-all]'));
    if (!scopes.length || !toggles.length) return;

    toggles.forEach(function (b) {
      b.hidden = false;
      b.addEventListener('click', function () { setPlaying(!playing); });
    });

    setPlaying(!mq.matches);
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);

  // If the user flips reduced-motion mid-session, honor it.
  if (mq.addEventListener) {
    mq.addEventListener('change', function (e) { setPlaying(!e.matches); });
  }
})();
