import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Header() {
	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<a href="/" className="text-xl font-semibold tracking-tight">Yaşam Desteği Vakfı</a>
				<nav className="hidden md:flex items-center gap-8 text-sm">
					<a href="/index.html" className="hover:text-brand-primary">Anasayfa</a>
					<a href="/hakkimizda.html" className="hover:text-brand-primary">Hakkımızda</a>
					<a href="/yonetimkurulu.html" className="hover:text-brand-primary">Yönetim Kurulu</a>
					<a href="/iletisim.html" className="hover:text-brand-primary">İletişim</a>
				</nav>
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
				<p>&copy; {new Date().getFullYear()} Yaşam Desteği Vakfı. Tüm hakları saklıdır.</p>
				<ul className="flex items-center gap-4">
					<li><a href="/gizlilik.html" className="hover:text-brand-primary">Gizlilik</a></li>
					<li><a href="/kosullar.html" className="hover:text-brand-primary">Kullanım Şartları</a></li>
					<li>Tasarım: <a href="https://turkalpmd.com" className="hover:text-brand-primary" target="_blank" rel="noopener">TurkalpMD</a></li>
				</ul>
			</div>
		</footer>
	)
}

function Home() {
	return (
		<main className="flex-1 pt-16">
			<section className="relative">
				<div className="aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] bg-black">
					<img src="/images/banner2.png" alt="Banner" className="w-full h-full object-cover opacity-90"/>
				</div>
			</section>

			<section className="py-12 sm:py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-8">
						<a href="/sosyalyardim.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
							<img src="/images/pic01.jpg" alt="Hasta Yakını Sosyal Yardımı" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary">Hasta Yakını Sosyal Yardımı</h3>
								<p className="text-sm text-gray-600">Hasta yakınlarına, zorlu süreçlerinde maddi ve manevi destek sağlayarak, hastalık sürecinde yaşanan yükü hafifletmek amaçlanmıştır.</p>
							</div>
						</a>
						<a href="/dulyetim.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
							<img src="/images/pic02.jpg" alt="Dul ve Yetim Aile Desteği" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary">Dul ve Yetim Aile Desteği</h3>
								<p className="text-sm text-gray-600">Dul ve yetim ailelere ekonomik ve sosyal destek sunarak, yaşam koşullarını iyileştirme hedeflenmektedir.</p>
							</div>
						</a>
						<a href="/ogrencibursu.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
							<img src="/images/pic03.jpg" alt="Öğrenci Bursu" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary">Öğrenci Bursu</h3>
								<p className="text-sm text-gray-600">Eğitim hayatında maddi zorluk yaşayan öğrencilere burs desteği sağlayarak, geleceğin başarılı bireylerini yetiştirmeyi amaçlamaktadır.</p>
							</div>
						</a>
						<a href="/arastirmadestek.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
							<img src="/images/pic04.jpg" alt="Bilimsel Araştırma Proje Desteği" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary">Bilimsel Araştırma Proje Desteği</h3>
								<p className="text-sm text-gray-600">Bilimsel araştırmalara maddi kaynak sağlayarak, yenilikçi projelerin hayata geçirilmesine katkıda bulunma amaçlanmaktadır.</p>
							</div>
						</a>
					</div>
				</div>
			</section>

			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
					<div className="p-6 rounded-xl border bg-gray-50 text-center">
						<div className="text-3xl mb-3">🤝</div>
						<h3 className="font-semibold mb-2">Aktif projelerimiz</h3>
						<p className="text-sm text-gray-600">Devam eden projelerimizle toplumun ihtiyaçlarına çözüm üretmeye odaklanıyoruz.</p>
					</div>
					<div className="p-6 rounded-xl border bg-gray-50 text-center">
						<div className="text-3xl mb-3">🌱</div>
						<h3 className="font-semibold mb-2">Gündemdeki projeler</h3>
						<p className="text-sm text-gray-600">Yaklaşan projelerimizle daha geniş kitlelere ulaşmayı hedefliyoruz.</p>
					</div>
					<div className="p-6 rounded-xl border bg-gray-50 text-center">
						<div className="text-3xl mb-3">🕊️</div>
						<h3 className="font-semibold mb-2">Bizden haberler</h3>
						<p className="text-sm text-gray-600">Vakfımızdan en güncel duyuru ve gelişmeleri takip edebilirsiniz.</p>
					</div>
				</div>
			</section>

			<section className="py-16 bg-brand-primary/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-semibold mb-4">Bağışlarınız için IBAN adresimiz</h2>
					<a href="/bagisbilgileri.html" className="inline-block px-6 py-3 rounded-lg bg-brand-primary text-white font-medium hover:opacity-90">Bağış yap</a>
				</div>
			</section>

			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-semibold text-center mb-8">Destekçilerimiz</h2>
					<div className="flex flex-wrap items-center justify-center gap-6">
						<a href="http://lsc.hacettepe.edu.tr" target="_blank" rel="noopener" className="block w-64 border rounded-xl bg-white p-4 shadow-sm hover:shadow transition">
							<img src="/images/lscsupport1.jpg" alt="Destekçi Logo" className="w-full h-auto object-contain"/>
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}

function Hakkimizda() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<img src="/images/senet.webp" alt="Yaşam Desteği Vakfı" className="w-full rounded-xl shadow mb-8"/>
				<section className="prose max-w-none">
					<h2>Hikayemiz</h2>
					<div className="aspect-video w-full">
						<iframe className="w-full h-full" src="https://www.youtube.com/embed/VRBEARAwn1k?si=DmvYHZJDqwq8tw0P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
					<h2>Vakfın Kuruluşu</h2>
					<p>Hacettepe Üniversitesi Çocuk Yoğun Bakımda yatan hasta ve hasta yakınlarının sosyal ihtiyaçlarını karşılamak için oluşturulmuş olan mütevazı yardım sandığımız vakfımızın kuruluş tohumu olmuştur. 2015 yılında kurulmuş olan Yaşam Desteği Uygulama Araştırma Merkezinin yürüttüğü araştırma projelerinin kaynak ihtiyacıyla birlikte hem bilimsel gelişmeyi hem de insani yardımı aynı çatı altında toplama iradesi ortaya çıkmıştır. Vakfımız Türkiye Cumhuriyeti Kültür ve Turizm Bakanlığı, Vakıflar Genel Müdürlüğü ve Vakıf Hizmetleri Daire Başkanlığı tarafından 12 Şubat 2024 tarihinde tescil edilmiştir. 22 Şubat 2024 tarihinde yayımlanan 32468 sayılı Resmi Gazete'nin 58. sayfasında yer alarak tüzel kişilik kazanmıştır.</p>
					<h2>Vakfın Gayesi</h2>
					<p>Yaşam Desteği Vakfı, temel yaşam desteği, ileri yaşam desteği, ekstrakorporeal yaşam desteği, sosyal yaşam desteği, kültürel yaşam desteği, manevi yaşam desteği ve ekolojik yaşam desteği alanlarında faaliyet göstermeyi amaçlamaktadır.</p>
				</section>
			</div>
		</main>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/index.html" element={<Navigate to="/" replace />} />
					{/* Eşleşen .html yolları */}
					<Route path="/hakkimizda.html" element={<Hakkimizda />} />
					{/* Diğer sayfalar için geçici yönlendirme, içerik taşındıkça gerçek sayfalar eklenecek */}
					<Route path="/:page.html" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
