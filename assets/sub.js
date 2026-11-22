/* freekit.me — "30 paid tools + their free alternative" box.
   Shows the first 5; the rest unlocks on the page after the visitor gives an email (explicit consent line, unsubscribe in every mail).
   Shown inline at the page end and once per session as a bottom sheet after the first copy click. Arabic + English pages (follows <html lang>, rebuilds when the page language toggles). */
(function () {
    if (window.__fkSub) return; window.__fkSub = 1;
    var page = location.pathname.replace(/\.html$/, '');
    if (/\/(privacy|terms)$/.test(page)) return;
    function LG() { return (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0 ? 'en' : 'ar'; }
    var T = {
      ar: { h: '٣٠ أداة مدفوعة… وبديلها المجاني', open: 'القائمة كاملة مفتوحة إلك.', s3: 'هاي أول ٣. اكتب إيميلك وتنفتح الـ٣٠ كاملة هسه.', s5: 'أول ٥ هنا. اكتب إيميلك وتنفتح الـ٣٠ كاملة هسه.',
            ph: 'إيميلك', btn: 'افتح القائمة كاملة', c: 'بإيميلك تنفتح القائمة هسه، وتوصلك أداة مجانية كل أسبوع. تكدر تلغي بضغطة.', priv: 'الخصوصية', pl: '/privacy.html#ar',
            bad: 'تأكد من الإيميل.', fail: 'صار خطأ، جرّب مرة ثانية.', dlg: 'قائمة ٣٠ أداة', x: 'سكّر', arr: ' ← ' },
      en: { h: '30 paid tools… and their free alternative', open: 'The full list is unlocked for you.', s3: 'Here are the first 3. Enter your email to unlock all 30 now.', s5: 'First 5 below. Enter your email to unlock all 30 now.',
            ph: 'Your email', btn: 'Unlock the full list', c: 'Your email unlocks the list now, plus one free tool every week. Unsubscribe in one click.', priv: 'Privacy', pl: '/privacy.html#en',
            bad: 'Check your email address.', fail: 'Something went wrong, try again.', dlg: '30 tools list', x: 'Close', arr: ' → ' } };
    var EP = 'https://freekit-events.mohomod779.workers.dev/sub';
    var T0 = Date.now();
    var L = [{"paid": "Photoshop", "free": "Photopea", "what": "فوتوشوب كامل من المتصفح، يفتح PSD", "paid_en": "Photoshop", "what_en": "Full Photoshop in the browser, opens PSD"}, {"paid": "ChatGPT Plus", "free": "Google AI Studio", "what": "نماذج جمناي بحصة يومية مجانية", "paid_en": "ChatGPT Plus", "what_en": "Gemini models with a free daily quota"}, {"paid": "نماذج التفكير المدفوعة", "free": "DeepSeek R1", "what": "نموذج تفكير مفتوح يوازي المدفوع بالمنطق والبرمجة", "paid_en": "Paid reasoning models", "what_en": "Open reasoning model on par with paid ones for logic and code"}, {"paid": "ملخصات الكتب والـPDF المدفوعة", "free": "NotebookLM", "what": "يحوّل ملفاتك لبودكاست ونقاش يلخصها", "paid_en": "Paid book & PDF summarizers", "what_en": "Turns your files into a podcast-style discussion"}, {"paid": "Zapier", "free": "n8n", "what": "أتمتة على سيرفرك بدون قيود الخطط", "paid_en": "Zapier", "what_en": "Automation on your own server, no plan limits"}, {"paid": "Make", "free": "Activepieces", "what": "أتمتة مفتوحة المصدر بعمليات غير محدودة", "paid_en": "Make", "what_en": "Open-source automation with unlimited runs"}, {"paid": "Bubble (لتطبيقات AI)", "free": "Google Opal", "what": "توصف التطبيق بالكلام ويبنيه", "paid_en": "Bubble (for AI apps)", "what_en": "Describe the app in plain words and it builds it"}, {"paid": "Otter.ai", "free": "Faster-Whisper", "what": "تفريغ الصوت والفيديو لنص محلياً", "paid_en": "Otter.ai", "what_en": "Transcribe audio and video locally"}, {"paid": "برامج المونتاج المدفوعة (للقص والتحويل)", "free": "FFmpeg", "what": "قص وتحويل وضغط الفيديو بسطر واحد", "paid_en": "Paid video editors (cut & convert)", "what_en": "Cut, convert and compress video in one line"}, {"paid": "واجهة ChatGPT المدفوعة", "free": "Open WebUI", "what": "واجهة خاصة لكل النماذج على جهازك", "paid_en": "ChatGPT's paid interface", "what_en": "Private interface for every model, on your machine"}, {"paid": "Vercel Pro", "free": "Coolify", "what": "استضافة تطبيقاتك وقواعدك على سيرفرك", "paid_en": "Vercel Pro", "what_en": "Host your apps and databases on your own server"}, {"paid": "Heroku", "free": "Dokploy", "what": "نشر مشاريع Docker بضغطة زر", "paid_en": "Heroku", "what_en": "Deploy Docker projects in one click"}, {"paid": "Ngrok المدفوع", "free": "LocalTunnel", "what": "رابط عام لمشروعك الشغال على لابتوبك", "paid_en": "Paid Ngrok", "what_en": "Public link to a project running on your laptop"}, {"paid": "Google Drive / Dropbox", "free": "Syncthing", "what": "مزامنة ملفاتك بين أجهزتك بدون سحابة", "paid_en": "Google Drive / Dropbox", "what_en": "Sync files between your devices, no cloud"}, {"paid": "Instapaper Premium", "free": "Wallabag", "what": "احفظ المقالات بنص نظيف واقرأها لاحقاً", "paid_en": "Instapaper Premium", "what_en": "Save articles as clean text, read later"}, {"paid": "VPN التجاري", "free": "WireGuard", "what": "VPN خاص بيك أسرع وأخف", "paid_en": "Commercial VPNs", "what_en": "Your own faster, lighter VPN"}, {"paid": "LogMeIn Hamachi", "free": "Tailscale", "what": "شبكة خاصة لأجهزتك بدون فتح بورتات", "paid_en": "LogMeIn Hamachi", "what_en": "Private network for your devices, no open ports"}, {"paid": "AdGuard Premium", "free": "NextDNS", "what": "حجب الإعلانات والتتبع على كل الشبكة", "paid_en": "AdGuard Premium", "what_en": "Block ads and trackers on your whole network"}, {"paid": "Kagi", "free": "SearXNG", "what": "بحث بدون إعلانات وبدون تتبع", "paid_en": "Kagi", "what_en": "Search with no ads and no tracking"}, {"paid": "UptimeRobot Pro", "free": "Uptime Kuma", "what": "تنبيه تيليغرام إذا وقع موقعك", "paid_en": "UptimeRobot Pro", "what_en": "Telegram alert when your site goes down"}, {"paid": "BlazeMeter", "free": "Grafana k6", "what": "اختبار موقعك تحت ضغط آلاف المستخدمين", "paid_en": "BlazeMeter", "what_en": "Load-test your site with thousands of users"}, {"paid": "GitKraken Pro", "free": "Lazygit", "what": "واجهة Git سريعة من التيرمنال", "paid_en": "GitKraken Pro", "what_en": "Fast Git UI in the terminal"}, {"paid": "Firecrawl المدفوع", "free": "Crawl4AI", "what": "تحويل أي موقع لنص نظيف للذكاء الاصطناعي", "paid_en": "Paid Firecrawl", "what_en": "Turn any site into clean text for AI"}, {"paid": "Pinecone", "free": "Qdrant", "what": "ذاكرة دائمة للذكاء الاصطناعي (قاعدة متجهات)", "paid_en": "Pinecone", "what_en": "Long-term memory for AI (vector database)"}, {"paid": "Snowflake / BigQuery (للتحليل المحلي)", "free": "DuckDB", "what": "استعلام ملايين الأسطر بثانية بدون سيرفر", "paid_en": "Snowflake / BigQuery (local analytics)", "what_en": "Query millions of rows in a second, no server"}, {"paid": "Portkey", "free": "LiteLLM", "what": "بوابة وحدة لكل نماذج AI مع كاش وتبديل", "paid_en": "Portkey", "what_en": "One gateway for all AI models, with cache and fallback"}, {"paid": "Voiceflow", "free": "Dify", "what": "ابنِ وكلاء AI وسير عمل RAG بدون كود", "paid_en": "Voiceflow", "what_en": "Build AI agents and RAG flows without code"}, {"paid": "Tailwind Plus", "free": "MagicUI", "what": "مكونات React بحركات جاهزة", "paid_en": "Tailwind Plus", "what_en": "Animated React components, ready to use"}, {"paid": "قوالب الواجهات المدفوعة", "free": "21st.dev", "what": "أكواد وتصاميم واجهات جاهزة للنسخ", "paid_en": "Paid UI templates", "what_en": "Copy-ready modern UI code and designs"}, {"paid": "شهادات SSL المدفوعة", "free": "Caddy", "what": "سيرفر ويب يصدر SSL تلقائياً", "paid_en": "Paid SSL certificates", "what_en": "Web server that issues SSL automatically"}];
    var done = false;
    try { done = localStorage.getItem('fk_sub') === '1'; } catch (e) {}
    var css = '.fks{margin:48px auto;max-width:var(--max-w,1100px);padding:0 16px;box-sizing:border-box}'
      + '.fks .card{background:var(--bg-soft,#0A1120);border:1px solid rgba(53,214,232,.35);border-radius:var(--radius,10px);padding:22px 18px}'
      + '.fks h2{margin:0 0 6px;font-size:22px;color:var(--text,#E7EEF8)}.fks .s{margin:0 0 14px;color:var(--muted,#8494AC);font-size:15px}'
      + '.fks ol{margin:0;padding:0;list-style:none;counter-reset:n}.fks li{counter-increment:n;display:flex;gap:10px;padding:9px 0;border-top:1px solid rgba(255,255,255,.06);font-size:15px;color:var(--text,#E7EEF8)}'
      + '.fks li:before{content:counter(n);min-width:22px;color:var(--accent,#35D6E8);font-family:var(--font-mono,monospace)}'
      + '.fks .p{color:var(--muted,#8494AC);text-decoration:line-through}.fksh .fks .card{border:0;padding-top:10px}.fks .f{color:var(--accent,#35D6E8);font-weight:600}.fks .w{display:block;color:var(--muted,#8494AC);font-size:13px}'
      + '.fks .lk{position:relative;max-height:150px;overflow:hidden;filter:blur(4px);opacity:.55;user-select:none;pointer-events:none}'
      + '.fks form{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.fks input[type=email]{flex:1 1 220px;min-width:0;font-size:16px;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,.18);background:var(--bg,#060A14);color:var(--text,#E7EEF8)}'
      + '.fks button{font-size:16px;padding:12px 18px;border:0;border-radius:8px;background:var(--accent,#35D6E8);color:var(--accent-ink,#04121A);font-weight:700;cursor:pointer}.fks button[disabled]{opacity:.6}'
      + '.fks .c{margin:10px 0 0;font-size:13px;color:var(--muted,#8494AC)}.fks .c a{color:var(--accent,#35D6E8)}.fks .e{color:#F87171;font-size:14px;margin:8px 0 0}'
      + '.fks form{position:relative}.fks .hp{position:absolute;top:0;right:0;width:1px;height:1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);opacity:0}'
      + '.fksh{font-family:var(--font-ar,system-ui,sans-serif);line-height:1.6;color:var(--text,#E7EEF8);position:fixed;inset:auto 0 0 0;z-index:9999;max-height:78vh;overflow:auto;background:var(--bg,#060A14);border-top:1px solid rgba(53,214,232,.5);box-shadow:0 -12px 40px rgba(0,0,0,.6);padding:8px 0 16px;transform:translateY(100%);transition:transform .35s var(--ease,ease)}'
      + '[dir=ltr].fks .x{}.fksh.on{transform:none}.fksh .fks{margin:0 auto}.fksh .x{position:sticky;top:0;float:left;z-index:2;margin:0 8px -40px 0;background:none;border:0;color:var(--muted,#8494AC);font-size:26px;padding:4px 10px;cursor:pointer}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
    function rows(a, b) { var en = LG() === 'en', t = T[LG()], h = ''; for (var i = a; i < b; i++) h += '<li><span><bdi class="p">' + esc(en ? L[i].paid_en : L[i].paid) + '</bdi>' + t.arr + '<bdi class="f">' + esc(L[i].free) + '</bdi><span class="w">' + esc(en ? L[i].what_en : L[i].what) + '</span></span></li>'; return h; }
    function build(compact) {
        var t = T[LG()];
        var w = document.createElement('section'); w.className = 'fks'; w.dir = LG() === 'en' ? 'ltr' : 'rtl'; if (compact) w.setAttribute('data-c', '1');
        w.innerHTML = '<div class="card"><h2>' + t.h + '</h2>'
          + '<p class="s">' + (done ? t.open : (compact ? t.s3 : t.s5)) + '</p>'
          + '<ol>' + rows(0, compact ? 3 : 5) + '</ol>'
          + (done ? '<ol start="6" style="counter-reset:n 5">' + rows(5, L.length) + '</ol>'
            : (compact ? '' : '<ol class="lk" aria-hidden="true" style="counter-reset:n 5">' + rows(5, 9) + '</ol>')
            + '<form novalidate><input type="email" name="m" autocomplete="email" inputmode="email" required placeholder="' + t.ph + '" aria-label="' + t.ph + '">'
            + '<input class="hp" type="text" name="hp" tabindex="-1" autocomplete="off" aria-hidden="true">'
            + '<button type="submit">' + t.btn + '</button></form>'
            + '<p class="c">' + t.c + ' <a href="' + t.pl + '">' + t.priv + '</a></p><p class="e" hidden></p>')
          + '</div>';
        var f = w.querySelector('form'); if (f) f.addEventListener('submit', submit);
        return w;
    }
    function unlockAll() {
        done = true; try { localStorage.setItem('fk_sub', '1'); } catch (e) {}
        var all = document.querySelectorAll('section.fks');
        for (var i = 0; i < all.length; i++) { var n = build(); all[i].parentNode.replaceChild(n, all[i]); }
    }
    function rebuild() {
        var all = document.querySelectorAll('section.fks');
        for (var i = 0; i < all.length; i++) { var n = build(all[i].getAttribute('data-c') === '1'); all[i].parentNode.replaceChild(n, all[i]); }
    }
    function submit(ev) {
        ev.preventDefault();
        var f = ev.target, m = f.m.value.trim(), err = f.parentNode.querySelector('.e'), b = f.querySelector('button');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) { err.textContent = T[LG()].bad; err.hidden = false; return; }
        var src = ''; try { src = sessionStorage.getItem('fk_src') || ''; } catch (e) {}
        b.disabled = true; err.hidden = true;
        fetch(EP, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ m: m, t: Date.now() - T0, p: location.pathname, s: src, g: LG(), hp: f.hp.value }) })
          .then(function (r) { return r.json(); })
          .then(function (j) { if (j && j.ok) { try { if (window.fkLead) window.fkLead(m, location.pathname); } catch (e) {} unlockAll(); } else { throw 0; } })
          .catch(function () { b.disabled = false; err.textContent = T[LG()].fail; err.hidden = false; });
    }
    var foot = document.querySelector('footer');
    var inline = build();
    if (foot && foot.parentNode) foot.parentNode.insertBefore(inline, foot); else document.body.appendChild(inline);
    window.fkSubSheet = function () {
        if (done) return;
        try { if (sessionStorage.getItem('fk_sheet')) return; sessionStorage.setItem('fk_sheet', '1'); } catch (e) {}
        var sh = document.createElement('div'); sh.className = 'fksh'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-label', T[LG()].dlg);
        var x = document.createElement('button'); x.className = 'x'; x.type = 'button'; x.setAttribute('aria-label', T[LG()].x); x.textContent = '×';
        x.onclick = function () { sh.classList.remove('on'); setTimeout(function () { sh.remove(); }, 400); };
        sh.appendChild(x); sh.appendChild(build(true)); document.documentElement.appendChild(sh);
        setTimeout(function () { sh.classList.add('on'); }, 900);
    };
    try { var lastL = LG(); new MutationObserver(function () { if (LG() !== lastL) { lastL = LG(); rebuild(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
})();
