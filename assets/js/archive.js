/* archive.js — kolaj galerisini manifest'ten (window.ARCHIVE_IMAGES) üretir
   ve tıklanınca büyüten lightbox'ı çalıştırır. Görsel listesi dile bağlı değildir. */
(function () {
    var mount = document.getElementById('archive-collage');
    var images = window.ARCHIVE_IMAGES || [];

    function altFromPath(src) {
        var name = src.split('/').pop().replace(/\.[a-z0-9]+$/i, '');
        return name.replace(/[-_]+/g, ' ').trim();
    }

    if (mount) {
        if (!images.length) {
            mount.insertAdjacentHTML('beforebegin',
                '<p class="archive-empty">Henüz görsel eklenmedi.</p>');
        }
        var frag = document.createDocumentFragment();
        images.forEach(function (src) {
            var a = document.createElement('a');
            a.className = 'tile';
            a.href = src;
            var img = document.createElement('img');
            img.src = src;
            img.loading = 'lazy';
            img.alt = altFromPath(src);
            a.appendChild(img);
            frag.appendChild(a);
        });
        mount.appendChild(frag);
    }

    // Lightbox
    var lb = document.getElementById('archive-lb');
    if (!lb || !mount) return;
    var lbImg = lb.querySelector('img');

    function openLb(src, alt) {
        lbImg.src = src;
        lbImg.alt = alt || '';
        lb.classList.add('open');
        lb.setAttribute('aria-hidden', 'false');
    }
    function closeLb() {
        lb.classList.remove('open');
        lb.setAttribute('aria-hidden', 'true');
        lbImg.src = '';
    }

    mount.addEventListener('click', function (e) {
        var tile = e.target.closest('a.tile');
        if (!tile) return;
        e.preventDefault();
        openLb(tile.getAttribute('href'), tile.querySelector('img').alt);
    });
    lb.querySelectorAll('[data-close]').forEach(function (el) {
        el.addEventListener('click', closeLb);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLb();
    });
})();
