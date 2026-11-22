/* freekit.me anonymous counter: one "view" per page load + one "copy" per copy-button click.
   Sends only: page path, event type, ?src= tag, button id. No cookies, no IP stored, no personal data. */
(function () {
    var EP = 'https://freekit-events.mohomod779.workers.dev/e';
    var src = '';
    try {
        var q = new URLSearchParams(location.search).get('src');
        if (q && /^[a-z0-9_-]{1,24}$/i.test(q)) { src = q.toLowerCase(); sessionStorage.setItem('fk_src', src); }
        else { src = sessionStorage.getItem('fk_src') || ''; }
    } catch (e) {}
    function send(ev, item) {
        var body = JSON.stringify({ p: location.pathname, e: ev, s: src, i: item || '' });
        try {
            if (navigator.sendBeacon && navigator.sendBeacon(EP, body)) return;
            fetch(EP, { method: 'POST', body: body, keepalive: true, mode: 'no-cors' });
        } catch (e) {}
    }
    send('view');
    var SEL = '[data-cmd], .copy-btn, #copybtn, #copyHandle';
    document.addEventListener('click', function (ev) {
        var b = ev.target && ev.target.closest ? ev.target.closest(SEL) : null;
        if (!b) return;
        var id = b.getAttribute('data-target') || b.id || '';
        if (!id) { var all = document.querySelectorAll(SEL); for (var k = 0; k < all.length; k++) { if (all[k] === b) { id = 'b' + (k + 1); break; } } }
        send('copy', id);
    }, true);
})();
