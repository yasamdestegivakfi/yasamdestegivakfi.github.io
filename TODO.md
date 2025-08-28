# Yaşam Desteği Vakfı — React + Vite Geçişi To‑Do

Bu dosya, Windows ortamından Linux’a geçtiğimizde adım adım uygulanacak işleri içerir. Her adım bittiğinde işaretleyin.

## 1) Proje Dizini Oluştur
- [ ] `yasam-destegi-vakfi` isimli boş dizin oluştur
- [ ] Terminalde bu dizine gir

## 2) Vite ile Proje Başlat (React, JS)
- [ ] `npm create vite@latest . -- --template react`
- [ ] Proje adını: `yasam-destegi-vakfi`
- [ ] TypeScript yerine plain JavaScript seç
- [ ] `npm install` ile bağımlılıkları yükle

## 3) Gerekli Paketleri Kur
- [ ] Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- [ ] Tailwind init: `npx tailwindcss init -p`
- [ ] `tailwind.config.js` içeriğini ayarla: `content: ['./index.html', './src/**/*.{js,jsx}']`
- [ ] React Router: `npm install react-router-dom`
- [ ] Carousel (React Bootstrap): `npm install react-bootstrap bootstrap`
- [ ] Font Awesome: `npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core`

## 4) Klasörler ve Asset’ler
- [ ] `public/assets/images` ve `public/images/icon` klasörlerini oluştur
- [ ] Mevcut resimleri kopyala:
  - [ ] `images/*` → `public/assets/images`
  - [ ] `images/icon/*` → `public/images/icon`
- [ ] Favicon ve meta dosyalarını `public/` altına taşı (örn. `favicon.ico`, `manifest.json`, apple-icon’lar)

## 5) Mevcut HTML’yi Komponentlere Ayır
- [ ] Header: Logo (Yaşam Desteği Vakfı) + nav (Anasayfa, Hakkımızda, Yönetim Kurulu, İletişim)
- [ ] Carousel: react-bootstrap/`Carousel` ile yeniden yaz (banner görselleri, caption, link, kontroller, indikatörler)
- [ ] Posts Section: Grid kartlar (Hasta Yakını Sosyal Yardımı, Dul ve Yetim Aile Desteği, Öğrenci Bursu, Bilimsel Araştırma Proje Desteği, Transplantasyon)
- [ ] Highlights Section: Üç ikonlu kutu (Aktif projelerimiz, Gündemdeki projeler, Bizden haberler)
- [ ] CTA Section: Bağış IBAN + “Bağış yap” butonu
- [ ] Footer: Destekçiler kartı, copyright, footer link’leri (Gizlilik, Kullanım Şartları, Tasarım), sosyal ikonlar

## 6) React Komponentlerini Oluştur (src/components)
- [ ] `Header.jsx`
- [ ] `Carousel.jsx`
- [ ] `Posts.jsx`
- [ ] `Highlights.jsx`
- [ ] `Cta.jsx`
- [ ] `Footer.jsx`

## 7) Sayfalar ve Router (src/pages)
- [ ] `Home.jsx` (Header, Carousel, Posts, Highlights, Cta, Footer birleştir)
- [ ] Statik sayfalar: `/hakkimizda`, `/yonetimkurulu`, `/iletisim`, `/sosyalyardim`, `/dulyetim`, `/ogrencibursu`, `/arastirmadestek`, `/bagisbilgileri`, `/gizlilik`, `/kosullar`
- [ ] `App.jsx` içinde `react-router-dom` ile route’ları tanımla
- [ ] `main.jsx` içinde `BrowserRouter` sarmalayıcıyı ekle

## 8) Tailwind Kurulumu ve Stil Dönüşümü
- [ ] `src/index.css` içine Tailwind base/components/utilities direktifleri ekle
- [ ] Inline `<style>` ve `main.css` yerine Tailwind utility class’ları kullan
- [ ] Carousel: `h-[70vh]`, `shadow-lg`, `rounded-lg`, `hover:opacity-100`
- [ ] Cards: `w-[250px]`, `shadow-md`, `hover:-translate-y-2`, `transition-all`
- [ ] Footer: `flex`, `justify-between`, `py-4`
- [ ] Responsive: `sm:`, `md:`, `lg:` prefix’leri ile media query’leri karşıla

## 9) Modernleştirmeler ve Erişilebilirlik
- [ ] Performans: Resimlere `loading="lazy"`
- [ ] Erişilebilirlik: `aria-label`, alt text’ler, carousel kontrolleri ve sosyal ikonlarda uygun `aria-*`
- [ ] Eski script’leri kaldır: jQuery, dropotron vb. (React ile native çöz)

## 10) index.html Düzenlemeleri
- [ ] Viewport ve `theme-color` meta tag’ları
- [ ] Favicon link’leri (`/images/icon/*` ve/veya `/favicon.ico`)

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
- [ ] `.github/workflows/deploy.yml` oluştur
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
- [ ] Yalnızca aktif içerik kullanılacak (commented-out bölümleri dikkate alma)
- [ ] Tailwind ile modern, temiz görünüm; Bootstrap CSS kaldırılacak (yalnızca react-bootstrap bileşenleri)
- [ ] Deploy sonrası tüm linkler ve favicon/asset yolları (`/assets/images/...`) doğru çalışmalı
- [ ] Hata durumunda console log ve network paneli kontrol edilecek

