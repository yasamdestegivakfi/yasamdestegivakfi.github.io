import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<a href="/" className="flex items-center space-x-3">
						<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-xl">YD</span>
						</div>
						<div>
							<h1 className="text-2xl font-bold text-gray-900">Yaşam Desteği Vakfı</h1>
							<p className="text-sm text-gray-600">Umut Taşıyıcıları</p>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Ana Sayfa</a>
						<a href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Hakkımızda</a>
						<a href="/projeler" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Projelerimiz</a>
						<a href="/yonetim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Yönetim</a>
						<a href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">İletişim</a>
						<a href="/bagis" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg">Bağış Yap</a>
					</nav>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden py-4 border-t border-gray-100">
						<nav className="space-y-3">
							<a href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Ana Sayfa</a>
							<a href="/hakkimizda" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</a>
							<a href="/projeler" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Projelerimiz</a>
							<a href="/yonetim" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Yönetim</a>
							<a href="/iletisim" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">İletişim</a>
							<a href="/bagis" className="block py-2 text-blue-600 font-medium">Bağış Yap</a>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="col-span-2">
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-lg">YD</span>
							</div>
							<div>
								<h3 className="text-xl font-bold">Yaşam Desteği Vakfı</h3>
								<p className="text-gray-400 text-sm">Umut Taşıyıcıları</p>
							</div>
						</div>
						<p className="text-gray-300 mb-4">Toplumun ihtiyaç sahiplerine umut olmak, bilimsel gelişime katkıda bulunmak ve sosyal sorumluluk bilinciyle hareket etmek misyonumuzdur.</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Hızlı Linkler</h4>
						<ul className="space-y-2">
							<li><a href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
							<li><a href="/projeler" className="text-gray-300 hover:text-white transition-colors">Projelerimiz</a></li>
							<li><a href="/yonetim" className="text-gray-300 hover:text-white transition-colors">Yönetim</a></li>
							<li><a href="/iletisim" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">İletişim</h4>
						<ul className="space-y-2 text-gray-300">
							<li>Hacettepe Üniversitesi</li>
							<li>Ankara, Türkiye</li>
							<li>info@yasamdestegivakfi.org</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
					<p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Yaşam Desteği Vakfı. Tüm hakları saklıdır.</p>
					<div className="flex items-center space-x-4 mt-4 md:mt-0">
						<a href="/gizlilik" className="text-gray-400 hover:text-white text-sm transition-colors">Gizlilik</a>
						<a href="/kosullar" className="text-gray-400 hover:text-white text-sm transition-colors">Kullanım Şartları</a>
						<span className="text-gray-400 text-sm">Tasarım: <a href="https://turkalpmd.com" className="hover:text-white transition-colors" target="_blank" rel="noopener">TurkalpMD</a></span>
					</div>
				</div>
			</div>
		</footer>
	)
}

function Home() {
	return (
		<main className="flex-1 pt-20">
			{/* Hero Section */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
				<div className="absolute inset-0 bg-blue-600/5"></div>
				<div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
						<span className="text-gray-900">Birlikte </span>
						<span className="text-blue-600">Minik Kalplere</span>
						<br />
						<span className="text-gray-900">Umut Olalım</span>
					</h1>
					<p className="text-xl sm:text-2xl mb-12 text-gray-600 leading-relaxed max-w-4xl mx-auto">
						Toplumun ihtiyaç sahiplerine destek oluyor, bilimsel gelişime katkıda bulunuyoruz. 
						Her bağışınız, bir ailenin umudu oluyor.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<a href="/bagis" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-xl">
							Hemen Bağış Yap
						</a>
						<a href="/projeler" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
							Projelerimizi Keşfet
						</a>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center p-8 bg-blue-50 rounded-2xl">
							<div className="text-5xl font-bold text-blue-600 mb-3">500+</div>
							<div className="text-gray-700 font-medium">Desteklenen Aile</div>
						</div>
						<div className="text-center p-8 bg-green-50 rounded-2xl">
							<div className="text-5xl font-bold text-green-600 mb-3">50+</div>
							<div className="text-gray-700 font-medium">Tamamlanan Proje</div>
						</div>
						<div className="text-center p-8 bg-purple-50 rounded-2xl">
							<div className="text-5xl font-bold text-purple-600 mb-3">1000+</div>
							<div className="text-gray-700 font-medium">Yardım Edilen Kişi</div>
						</div>
						<div className="text-center p-8 bg-orange-50 rounded-2xl">
							<div className="text-5xl font-bold text-orange-600 mb-3">5</div>
							<div className="text-gray-700 font-medium">Aktif Program</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Toplumun farklı kesimlerine umut olan projelerimizle, her gün daha fazla insana dokunuyoruz
						</p>
					</div>
					
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic01.jpg" alt="Sosyal Yardım" className="w-full h-full object-cover"/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Aktif</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Hasta Yakını Sosyal Yardımı</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									Hastalık süreçlerinde hasta yakınlarının karşılaştığı maddi ve manevi zorlukları hafifletiyoruz. 
									Sağlık hizmetlerine erişim, barınma, gıda ve ulaşım gibi ihtiyaçlar için kapsamlı destek sağlıyoruz.
								</p>
								<a href="/projeler/sosyal-yardim" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
									Detayları Gör
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic02.jpg" alt="Dul ve Yetim Desteği" className="w-full h-full object-cover"/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Aktif</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Dul ve Yetim Aile Desteği</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									Zor yaşam koşulları ile mücadele eden dul ve yetim ailelere ekonomik ve sosyal destek sağlıyoruz. 
									Temel ihtiyaçlardan eğitim ve istihdam desteğine kadar kapsamlı yardım sunuyoruz.
								</p>
								<a href="/projeler/dul-yetim" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
									Detayları Gör
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic03.jpg" alt="Öğrenci Bursu" className="w-full h-full object-cover"/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Aktif</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Öğrenci Bursu</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									Eğitim hayatında maddi zorluk yaşayan öğrencilere burs desteği sağlayarak, 
									geleceğin başarılı bireylerini yetiştirmeyi amaçlıyoruz. Eğitimde fırsat eşitliğini destekliyoruz.
								</p>
								<a href="/projeler/ogrenci-bursu" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
									Detayları Gör
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic04.jpg" alt="Araştırma Desteği" className="w-full h-full object-cover"/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Aktif</span>
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Bilimsel Araştırma Desteği</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									Yenilikçi fikirlerin hayata geçirilmesi ve bilimsel gelişmelerin hız kazanması için 
									araştırma projelerine mali destek sağlıyoruz. Tıp, mühendislik ve sosyal bilimlerde destek veriyoruz.
								</p>
								<a href="/projeler/arastirma" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
									Detayları Gör
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-blue-600 text-white">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold mb-6">Bağışlarınızla Daha Fazla İnsana Ulaşalım</h2>
					<p className="text-xl mb-8 text-blue-100">
						Her bağışınız, ihtiyaç sahiplerine umut oluyor. Birlikte daha güçlüyüz.
					</p>
					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
						<h3 className="text-2xl font-semibold mb-4">Bağış Bilgileri</h3>
						<div className="bg-white/20 rounded-xl p-6 mb-6">
							<div className="grid md:grid-cols-3 gap-4 text-center">
								<div>
									<div className="text-sm text-blue-200 mb-1">IBAN</div>
									<div className="font-mono text-lg font-semibold">TR85 0001 2001 5410 0016 1000 42</div>
								</div>
								<div>
									<div className="text-sm text-blue-200 mb-1">Alıcı</div>
									<div className="font-semibold">Yaşam Desteği Vakfı</div>
								</div>
								<div>
									<div className="text-sm text-blue-200 mb-1">Banka</div>
									<div className="font-semibold">Halkbank</div>
								</div>
							</div>
						</div>
						<a href="/bagis" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl inline-block">
							Bağış Yap
						</a>
					</div>
				</div>
			</section>

			{/* Supporters Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">Destekçilerimiz</h2>
						<p className="text-xl text-gray-600">
							Birlikte daha güçlüyüz. Destekçilerimizle birlikte topluma fayda sağlıyoruz.
						</p>
					</div>
					<div className="flex flex-wrap items-center justify-center gap-12">
						<a href="http://lsc.hacettepe.edu.tr" target="_blank" rel="noopener" className="group">
							<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
								<img src="/images/lscsupport1.jpg" alt="LSC Support" className="w-48 h-auto object-contain"/>
							</div>
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col bg-white">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Yeni route yapısı */}
					<Route path="/projeler" element={<div className="pt-20 text-center">Projeler Sayfası</div>} />
					<Route path="/projeler/sosyal-yardim" element={<div className="pt-20 text-center">Sosyal Yardım Detay</div>} />
					<Route path="/projeler/dul-yetim" element={<div className="pt-20 text-center">Dul ve Yetim Detay</div>} />
					<Route path="/projeler/ogrenci-bursu" element={<div className="pt-20 text-center">Öğrenci Bursu Detay</div>} />
					<Route path="/projeler/arastirma" element={<div className="pt-20 text-center">Araştırma Detay</div>} />
					<Route path="/hakkimizda" element={<div className="pt-20 text-center">Hakkımızda</div>} />
					<Route path="/yonetim" element={<div className="pt-20 text-center">Yönetim</div>} />
					<Route path="/iletisim" element={<div className="pt-20 text-center">İletişim</div>} />
					<Route path="/bagis" element={<div className="pt-20 text-center">Bağış</div>} />
					<Route path="/gizlilik" element={<div className="pt-20 text-center">Gizlilik</div>} />
					<Route path="/kosullar" element={<div className="pt-20 text-center">Kullanım Şartları</div>} />
					{/* Fallback */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
