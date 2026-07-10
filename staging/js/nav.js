// Minimal accessible mobile nav toggle. No framework, no tracking.
(function () {
    'use strict';

    var toggle = document.querySelector('[data-nav-toggle]');
    var menu = document.querySelector('[data-nav-mobile]');
    if (!toggle || !menu) return;

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        if (open) {
            menu.setAttribute('data-open', 'true');
        } else {
            menu.removeAttribute('data-open');
        }
    }

    toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        setOpen(!isOpen);
    });

    // Close on Escape.
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });

    // Close when a link inside the drawer is followed (so a same-page anchor doesn't leave the menu hanging open).
    menu.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.closest && t.closest('a')) {
            setOpen(false);
        }
    });

    // Reset on resize back to desktop so menu doesn't get stuck open on rotate.
    var mql = window.matchMedia('(min-width: 900px)');
    function handleMql() {
        if (mql.matches) {
            setOpen(false);
        }
    }
    if (mql.addEventListener) {
        mql.addEventListener('change', handleMql);
    } else if (mql.addListener) {
        mql.addListener(handleMql);
    }
})();
