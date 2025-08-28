# Yaşam Desteği Vakfı — React + Vite Geçişi To‑Do

Bu dosya, Windows ortamından Linux’a geçtiğimizde adım adım uygulanacak işleri içerir. Her adım bittiğinde işaretleyin.

## 1) Proje Dizini Oluştur
- [x] `yasam-destegi-vakfi` isimli boş dizin oluştur
- [x] Terminalde bu dizine gir

## 2) Vite ile Proje Başlat (React, JS)
- [x] `npm create vite@latest . -- --template react` (manuel olarak oluşturuldu)
- [x] Proje adını: `yasam-destegi-vakfi`
- [x] TypeScript yerine plain JavaScript seç
- [x] `npm install` ile bağımlılıkları yükle

## 3) Gerekli Paketleri Kur
- [x] Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- [x] Tailwind init: `npx tailwindcss init -p` (yapılandırmalar eklendi)
- [x] `tailwind.config.js` içeriğini ayarla: `content: ['./index.html', './src/**/*.{js,jsx}']`
- [x] React Router: `npm install react-router-dom`
- [x] Carousel (React Bootstrap): `npm install react-bootstrap bootstrap`
- [x] Font Awesome: `npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core`

## 4) Klasörler ve Asset’ler
- [x] `public/assets/images` ve `public/images/icon` klasörlerini oluştur
- [x] Mevcut resimleri kopyala:
  - [x] `images/*` → `public/assets/images`
  - [x] `images/icon/*` → `public/images/icon`
- [x] Favicon ve meta dosyalarını `public/` altına taşı (örn. `favicon.ico`, `manifest.json`, apple-icon’lar)

## 5) Mevcut HTML’yi Komponentlere Ayır
- [x] Header: Logo (Yaşam Desteği Vakfı) + nav (Anasayfa, Hakkımızda, Yönetim Kurulu, İletişim)
- [x] Carousel: react-bootstrap/`Carousel` ile yeniden yaz (banner görselleri, caption, link, kontroller, indikatörler)
- [x] Posts Section: Grid kartlar (Hasta Yakını Sosyal Yardımı, Dul ve Yetim Aile Desteği, Öğrenci Bursu, Bilimsel Araştırma Proje Desteği, Transplantasyon)
- [x] Highlights Section: Üç ikonlu kutu (Aktif projelerimiz, Gündemdeki projeler, Bizden haberler)
- [x] CTA Section: Bağış IBAN + “Bağış yap” butonu
- [x] Footer: Destekçiler kartı, copyright, footer link’leri (Gizlilik, Kullanım Şartları, Tasarım), sosyal ikonlar

## 6) React Komponentlerini Oluştur (src/components)
- [x] `Header.jsx`
- [x] `Carousel.jsx`
- [x] `Posts.jsx`
- [x] `Highlights.jsx`
- [x] `Cta.jsx`
- [x] `Footer.jsx`

## 7) Sayfalar ve Router (src/pages)
- [x] `Home.jsx` (Header, Carousel, Posts, Highlights, Cta, Footer birleştir)
- [x] Statik sayfalar: `/hakkimizda`, `/yonetimkurulu`, `/iletisim`, `/sosyalyardim`, `/dulyetim`, `/ogrencibursu`, `/arastirmadestek`, `/bagisbilgileri`, `/gizlilik`, `/kosullar`
- [x] `App.jsx` içinde `react-router-dom` ile route’ları tanımla
- [x] `main.jsx` içinde `BrowserRouter` sarmalayıcıyı ekle

## 8) Tailwind Kurulumu ve Stil Dönüşümü
- [x] `src/index.css` içine Tailwind base/components/utilities direktifleri ekle
- [x] Inline `<style>` ve `main.css` yerine Tailwind utility class’ları kullan
- [x] Carousel: `h-[70vh]`, `shadow-lg`, `rounded-lg`, `hover:opacity-100`
- [x] Cards: `w-[250px]`, `shadow-md`, `hover:-translate-y-2`, `transition-all`
- [x] Footer: `flex`, `justify-between`, `py-4`
- [x] Responsive: `sm:`, `md:`, `lg:` prefix’leri ile media query’leri karşıla

## 9) Modernleştirmeler ve Erişilebilirlik
- [x] Performans: Resimlere `loading="lazy"`
- [x] Erişilebilirlik: `aria-label`, alt text’ler, carousel kontrolleri ve sosyal ikonlarda uygun `aria-*`
- [x] Eski script’leri kaldır: jQuery, dropotron vb. (React ile native çöz)

## 10) index.html Düzenlemeleri
- [x] Viewport ve `theme-color` meta tag’ları
- [x] Favicon link’leri (`/images/icon/*` ve/veya `/favicon.ico`)

## 11) Test
- [ ] `npm run dev` ile yerel sunucuyu çalıştır
- [ ] Carousel kaydırma, linkler, hover efektleri, responsive davranışı kontrol et
- [ ] Tüm sayfaların çalıştığını doğrula (`/hakkimizda`, `/iletisim`, vb.)

## 12) Git ve GitHub
- [ ] `git init`, `.gitignore` ekle (örn. `node_modules`, `dist`)
- [ ] GitHub’da repo oluştur: `yasam-destegi-vakfi`
- [ ] `git add . && git commit -m "Initial Vite + React site"`
- [ ] `git remote add origin <repo-url>`
- [ ] `git push -u origin main`

## 13) GitHub Actions ile Deploy (Pages)
- [x] `.github/workflows/deploy.yml` oluştur
- [ ] Workflow içeriği:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist
      - uses: actions/deploy-pages@v1
```

- [ ] Repo Settings > Pages > Source: `gh-pages` branch olarak ayarla
- [ ] Push edip Actions tab’inde deploy’ı kontrol et
- [ ] Site: `[username].github.io/yasam-destegi-vakfi`

## Notlar
- [x] Yalnızca aktif içerik kullanılacak (commented-out bölümleri dikkate alma)
- [x] Tailwind ile modern, temiz görünüm; Bootstrap CSS kaldırılacak (yalnızca react-bootstrap bileşenleri)
- [ ] Deploy sonrası tüm linkler ve favicon/asset yolları (`/assets/images/...`) doğru çalışmalı
- [ ] Hata durumunda console log ve network paneli kontrol edilecek
