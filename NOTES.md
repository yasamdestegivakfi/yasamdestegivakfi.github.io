# Proje Yapısı ve Mevcut HTML Özeti

Bu doküman, mevcut statik HTML tabanlı sitenin mimarisini, sayfa bölümlerini ve işlevselliklerini özetler. Amaç, Vite + React + Tailwind dönüşümünde içerik ve düzeni 1:1 korumayı kolaylaştırmaktır.

## Genel
- Şablon: HTML5 UP Arcana temeli + Bootstrap 5 carousel (yalnızca `index.html` içinde).
- Ana stylesheet: `assets/css/main.css` (Arcana). Ek inline stiller bazı sayfalarda mevcut.
- JS: jQuery tabanlı davranışlar (`assets/js/*.js`), mobil nav paneli ve dropdown menü.
- Fontlar/ikonlar: Google Fonts (Source Sans Pro), Font Awesome 6.
- Favicon/manifest: `images/icon/*` altında.

## Ortak Layout
- `#page-wrapper`: Tüm içerik kapsayıcı.
- Header (`#header`):
  - Logo: `#logo` → "Yaşam Desteği Vakfı" linki.
  - Navigasyon: `#nav > ul > li > a` (Anasayfa, Hakkımızda, Yönetim Kurulu, İletişim).
  - Davranış: jQuery Dropotron ile dropdown desteği; mobilde `#titleBar` ve `#navPanel` yaratılıyor.
- Footer (`#footer`):
  - İçerik çoğunlukla sade; `index.html` sonunda "Destekçilerimiz" kart alanı mevcut.
  - Copyright alanı: linkler (Gizlilik, Kullanım Şartları, Tasarım linki) ve sosyal ikonlar.

## Index (Ana Sayfa)
- Carousel (`#banner-wrapper > #banner.carousel`): Bootstrap 5 ile 1 aktif slide.
  - Indicators, prev/next kontrolleri aktif. Yükseklik ve responsive için inline CSS.
- Posts (kartlar/grit): `section.wrapper.style1 > .container > .row > section.col-6`
  - 4 ana kutu: Sosyal Yardım, Dul ve Yetim, Öğrenci Bursu, Araştırma Desteği; görsel + başlık + kısa açıklama.
  - Ek bir kutu: Transplantasyon bannerı.
- Highlights: 3 sütunlu simgeli özellik kutuları (fa-hand-holding-heart, fa-seedling, fa-dove).
- CTA (`#cta.wrapper.style3`): IBAN başlığı ve "Bağış yap" butonu (`bagisbilgileri.html`).
- Destekçiler: `#footer` içinde kart grid, dış link örneği (LSC).
- Scriptler: Bootstrap bundle (CDN), ardından jQuery ve Arcana JS dosyaları.

## Hakkımızda
- Header ve nav aynı yapı.
- İçerik:
  - Hero görsel (`images/senet.webp`).
  - YouTube embed (hikaye).
  - Metin bölümleri: Kuruluş, Gaye, Faaliyet Alanları, Faaliyet Araçları, İş ve İşlemler, Değerler.
- Footer: Basit copyright.

## Diğer Sayfalar (özet)
- `yonetimkurulu.html`, `iletisim.html`, `sosyalyardim.html`, `dulyetim.html`, `ogrencibursu.html`, `arastirmadestek.html`, `bagisbilgileri.html`, `gizlilik.html`, `kosullar.html`, `guncelleme.html`, `old_vakifsenedi.html`:
  - Arcana layout (header/nav/footer) + içerik bölümü.
  - Görsel, başlık ve metin ağırlıklı içerik.

## Stil ve Grid
- Arcana CSS kendi grid sistemini (`.row`, `.col-*`, `.wrapper`, `.container`) sağlıyor.
- Renk ve tipografi Arcana üzerinden tanımlı; linkler mavi (`#37c0fb`).
- Arka plan deseni: `assets/css/images/bg01.png`.

## JS Davranışları
- `util.js`:
  - `$.fn.navList()`: Nav'dan link listesi üretir (mobil panel için).
  - `$.fn.panel()`: Yan panel (mobil nav) davranışları.
  - `$.fn.placeholder()`: Placeholder polyfill (eski tarayıcılar için).
- `main.js`:
  - Breakpoint tanımları.
  - Sayfa yüklenince `is-preload` kaldırma.
  - Dropotron init (desktop menü dropdown).
  - Mobil `#titleBar` ve `#navPanel` oluşturma ve panel davranışları.

## Assetler
- Görseller: `images/` altında bannerlar, ikonlar, içerik görselleri.
- Manifest ve faviconlar: `images/icon/*`.

## Dönüşüm Notları (React/Tailwind)
- Header, Nav, Footer, Carousel, PostsGrid, Highlights, CTA, Supporters ayrı React bileşenlerine ayrılacak.
- Arcana grid ve utility'leri Tailwind sınıfları ile yeniden ifade edilecek.
- Bootstrap carousel ya React mantığı ile veya uygun bir lightweight slider ile yeniden üretilecek; görünüm korunacak.
- Statik sayfalar, React Router ile route'lara taşınacak; GitHub Pages için `index.html` ve `404.html` fallback sağlanacak.
- Var olan içerik (metin ve linkler) birebir korunacak, görsel iyileştirmeler Tailwind ile yapılacak.
