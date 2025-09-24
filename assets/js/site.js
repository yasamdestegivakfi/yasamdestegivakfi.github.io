document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('primary-nav');

    if (!navToggle || !navLinks) {
        return;
    }

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.innerHTML = navLinks.classList.contains('open')
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // Language persistence across pages
    const switchers = document.querySelectorAll('.lang-switch');
    const mains = document.querySelectorAll('main[data-lang]');
    const i18nNodes = document.querySelectorAll('[data-i18n][data-lang]');
    const brandLogos = document.querySelectorAll('.brand img');

    function applyLang(lang) {
        // toggle mains
        mains.forEach((m) => {
            m.style.display = (m.getAttribute('data-lang') === lang) ? '' : 'none';
        });
        // toggle footer/links texts
        i18nNodes.forEach((el) => {
            el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
        });
        // toggle common TR/EN content blocks used on some pages (e.g., #text-tr / #text-en)
        var textTR = document.getElementById('text-tr');
        var textEN = document.getElementById('text-en');
        if (textTR && textEN) {
            if (lang === 'en') { textTR.style.display = 'none'; textEN.style.display = ''; }
            else { textEN.style.display = 'none'; textTR.style.display = ''; }
        }
        // navbar labels (robust by current text)
        const navTextMap = {
            'Anasayfa': { tr: 'Anasayfa', en: 'Home' },
            'Hakkımızda': { tr: 'Hakkımızda', en: 'About' },
            'Yönetim Kurulu': { tr: 'Yönetim Kurulu', en: 'Board' },
            'İletişim': { tr: 'İletişim', en: 'Contact' },
            'Bağış Yap': { tr: 'Bağış Yap', en: 'Donate' }
        };
        document.querySelectorAll('#primary-nav a').forEach((a) => {
            const current = (a.textContent || '').trim();
            const key = navTextMap[current] ? current : Object.keys(navTextMap).find(k => current.toLowerCase() === navTextMap[k].en.toLowerCase());
            if (key) {
                a.textContent = navTextMap[key][lang];
            }
        });
        // set html lang
        document.documentElement.setAttribute('lang', lang);
        // sync lang param on links that require it
        document.querySelectorAll('a[data-sync-lang]')?.forEach((a)=>{
            try {
                const url = new URL(a.getAttribute('href'), window.location.origin);
                url.searchParams.set('lang', lang);
                a.setAttribute('href', url.pathname + '?' + url.searchParams.toString());
            } catch(e) {
                // fallback for relative href without base
                const href = (a.getAttribute('href')||'').split('?')[0];
                a.setAttribute('href', href + '?lang=' + lang);
            }
        });
        // active state on all switchers
        switchers.forEach((sw) => {
            sw.querySelectorAll('a').forEach((a) => {
                a.classList.toggle('active', a.getAttribute('data-lang') === lang);
            });
        });

        // swap navbar logo by language
        const logoSrc = (lang === 'tr') ? 'images/trnavbarlogo.png' : 'images/engnavbarlogo.png';
        brandLogos.forEach((img) => {
            if (img && img.getAttribute('src') !== logoSrc) {
                img.setAttribute('src', logoSrc);
                img.setAttribute('alt', lang === 'tr' ? 'Yaşam Desteği Vakfı' : 'Life Support Foundation Trust');
            }
        });
    }

    // Prefer URL ?lang=.. over stored, then geolocate (TR -> tr, else en)
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang) localStorage.setItem('lang', urlLang);
    const storedLang = localStorage.getItem('lang');

    if (urlLang || storedLang) {
        applyLang(urlLang || storedLang);
    } else {
        // Assume EN by default, then correct to TR if IP is from Turkey
        applyLang('en');
        // Try a lightweight IP geolocation service; fail-safe to EN
        fetch('https://ipapi.co/json/')
            .then((res) => res.ok ? res.json() : Promise.reject())
            .then((data) => {
                const countryCode = (data && data.country) || (data && data.country_code);
                const detectedLang = countryCode === 'TR' ? 'tr' : 'en';
                localStorage.setItem('lang', detectedLang);
                applyLang(detectedLang);
            })
            .catch(() => {
                // keep EN on failure
                localStorage.setItem('lang', 'en');
            });
    }

    switchers.forEach((sw) => {
        sw.addEventListener('click', (e) => {
            const t = e.target;
            if (t.tagName !== 'A') return;
            e.preventDefault();
            const lang = t.getAttribute('data-lang');
            localStorage.setItem('lang', lang);
            applyLang(lang);
        });
    });
});
