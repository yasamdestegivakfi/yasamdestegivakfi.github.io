import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<a href="/" className="flex items-center space-x-3 group">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
							<span className="text-white font-bold text-lg">YD</span>
						</div>
						<div>
							<h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Yaşam Desteği Vakfı</h1>
							<p className="text-xs text-gray-500">Umut Taşıyıcıları</p>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Ana Sayfa</a>
						<div className="relative group">
							<button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
								Projelerimiz
								<svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
								<div className="p-4 space-y-3">
									<a href="/projeler/sosyal-yardim" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
										<div className="font-medium text-gray-900">Sosyal Yardım</div>
										<div className="text-sm text-gray-600">Hasta yakınlarına destek</div>
									</a>
									<a href="/projeler/dul-yetim" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
										<div className="font-medium text-gray-900">Dul ve Yetim Desteği</div>
										<div className="text-sm text-gray-600">Ailelere umut oluyoruz</div>
									</a>
									<a href="/projeler/ogrenci-bursu" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
										<div className="font-medium text-gray-900">Öğrenci Bursu</div>
										<div className="text-sm text-gray-600">Eğitimde fırsat eşitliği</div>
									</a>
									<a href="/projeler/arastirma" className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
										<div className="font-medium text-gray-900">Araştırma Desteği</div>
										<div className="text-sm text-gray-600">Bilimsel gelişime katkı</div>
									</a>
								</div>
							</div>
						</div>
						<a href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Hakkımızda</a>
						<a href="/yonetim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Yönetim</a>
						<a href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">İletişim</a>
						<a href="/bagis" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">Bağış Yap</a>
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
							<a href="/projeler" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Projelerimiz</a>
							<a href="/hakkimizda" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</a>
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
		<footer className="bg-gray-900 text-white mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="col-span-2">
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
								<span className="text-white font-bold text-lg">YD</span>
							</div>
							<div>
								<h3 className="text-xl font-bold">Yaşam Desteği Vakfı</h3>
								<p className="text-gray-400 text-sm">Umut Taşıyıcıları</p>
							</div>
						</div>
						<p className="text-gray-300 mb-4">Toplumun ihtiyaç sahiplerine umut olmak, bilimsel gelişime katkıda bulunmak ve sosyal sorumluluk bilinciyle hareket etmek misyonumuzdur.</p>
						<div className="flex space-x-4">
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
						</div>
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
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						Birlikte <span className="text-yellow-300">Minik Kalplere</span> Umut Olalım
					</h1>
					<p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
						Toplumun ihtiyaç sahiplerine destek oluyor, bilimsel gelişime katkıda bulunuyoruz
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="/bagis" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl">
							Hemen Bağış Yap
						</a>
						<a href="/projeler" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
							Projelerimizi Keşfet
						</a>
					</div>
				</div>
				
				{/* Floating elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
							<div className="text-gray-600">Desteklenen Aile</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
							<div className="text-gray-600">Tamamlanan Proje</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
							<div className="text-gray-600">Yardım Edilen Kişi</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">5</div>
							<div className="text-gray-600">Aktif Program</div>
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
					
					<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
						<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic01.jpg" alt="Sosyal Yardım" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
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

						<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic02.jpg" alt="Dul ve Yetim Desteği" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
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

						<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic03.jpg" alt="Öğrenci Bursu" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
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

						<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
							<div className="relative h-64 overflow-hidden">
								<img src="/images/pic04.jpg" alt="Araştırma Desteği" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
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
			<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
						<a href="/bagis" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl inline-block">
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

// Diğer sayfa bileşenleri buraya eklenecek...

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
