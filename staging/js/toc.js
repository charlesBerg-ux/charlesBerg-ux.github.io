// Scroll-spy for the sticky Services switcher.
// Progressive enhancement only: the links are real anchors and work with JS off.
// This script does nothing but set aria-current="true" on the link for the
// section currently in view. It never intercepts navigation, so nav survives
// its own absence. Guards for IntersectionObserver so old browsers just skip it.
(function () {
    'use strict';

    if (!('IntersectionObserver' in window)) return;

    var nav = document.querySelector('[data-svc-switch]');
    if (!nav) return;

    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    // Map each observed section back to its link, in document order.
    var sections = [];
    links.forEach(function (link) {
        var id = link.getAttribute('href').slice(1);
        var section = document.getElementById(id);
        if (section) {
            sections.push(section);
            section._tocLink = link;
        }
    });
    if (!sections.length) return;

    var visible = [];

    function setCurrent(link) {
        links.forEach(function (a) {
            if (a === link) {
                a.setAttribute('aria-current', 'true');
            } else {
                a.removeAttribute('aria-current');
            }
        });
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var idx = visible.indexOf(entry.target);
            if (entry.isIntersecting) {
                if (idx === -1) visible.push(entry.target);
            } else if (idx !== -1) {
                visible.splice(idx, 1);
            }
        });

        if (!visible.length) return; // between sections: keep the last active state

        // Activate the topmost section currently crossing the band.
        var top = visible.reduce(function (best, node) {
            return node.getBoundingClientRect().top < best.getBoundingClientRect().top ? node : best;
        });
        if (top && top._tocLink) setCurrent(top._tocLink);
    }, {
        // A thin band across the middle of the viewport; whichever section
        // occupies it is the active one.
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0
    });

    sections.forEach(function (section) { observer.observe(section); });
})();
