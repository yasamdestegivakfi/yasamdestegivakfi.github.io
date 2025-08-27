import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Header() {
	return (
		<header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<a href="/" className="text-xl font-semibold tracking-tight text-gray-900">Yaşam Desteği Vakfı</a>
				<nav className="hidden md:flex items-center gap-8 text-sm">
					<a href="/" className="hover:text-brand-primary transition-colors">Anasayfa</a>
					<a href="/hakkimizda.html" className="hover:text-brand-primary transition-colors">Hakkımızda</a>
					<a href="/yonetimkurulu.html" className="hover:text-brand-primary transition-colors">Yönetim Kurulu</a>
					<a href="/iletisim.html" className="hover:text-brand-primary transition-colors">İletişim</a>
				</nav>
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="border-t bg-white mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
				<p>&copy; {new Date().getFullYear()} Yaşam Desteği Vakfı. Tüm hakları saklıdır.</p>
				<ul className="flex items-center gap-4">
					<li><a href="/gizlilik.html" className="hover:text-brand-primary transition-colors">Gizlilik</a></li>
					<li><a href="/kosullar.html" className="hover:text-brand-primary transition-colors">Kullanım Şartları</a></li>
					<li>Tasarım: <a href="https://turkalpmd.com" className="hover:text-brand-primary transition-colors" target="_blank" rel="noopener">TurkalpMD</a></li>
				</ul>
			</div>
		</footer>
	)
}

function Home() {
	return (
		<main className="flex-1 pt-16">
			<section className="relative">
				<div className="aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] bg-gradient-to-br from-sky-100 to-sky-200">
					<img src="/images/banner2.png" alt="Banner" className="w-full h-full object-cover opacity-90 mix-blend-multiply"/>
					<div className="absolute inset-0 flex items-end justify-center pb-8">
						<div className="bg-black/40 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-white/20 shadow-md">
							<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">Birlikte minik kalplere umut olalım</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 sm:py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-8">
						<a href="/sosyalyardim.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-primary/30">
							<img src="/images/pic01.jpg" alt="Hasta Yakını Sosyal Yardımı" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">Hasta Yakını Sosyal Yardımı</h3>
								<p className="text-sm text-gray-600">Hasta yakınlarına, zorlu süreçlerinde maddi ve manevi destek sağlayarak, hastalık sürecinde yaşanan yükü hafifletmek amaçlanmıştır.</p>
							</div>
						</a>
						<a href="/dulyetim.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-primary/30">
							<img src="/images/pic02.jpg" alt="Dul ve Yetim Aile Desteği" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">Dul ve Yetim Aile Desteği</h3>
								<p className="text-sm text-gray-600">Dul ve yetim ailelere ekonomik ve sosyal destek sunarak, yaşam koşullarını iyileştirme hedeflenmektedir.</p>
							</div>
						</a>
						<a href="/ogrencibursu.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-primary/30">
							<img src="/images/pic03.jpg" alt="Öğrenci Bursu" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">Öğrenci Bursu</h3>
								<p className="text-sm text-gray-600">Eğitim hayatında maddi zorluk yaşayan öğrencilere burs desteği sağlayarak, geleceğin başarılı bireylerini yetiştirmeyi amaçlamaktadır.</p>
							</div>
						</a>
						<a href="/arastirmadestek.html" className="group grid grid-cols-[140px,1fr] gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-primary/30">
							<img src="/images/pic04.jpg" alt="Bilimsel Araştırma Proje Desteği" className="w-full h-full object-cover"/>
							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">Bilimsel Araştırma Proje Desteği</h3>
								<p className="text-sm text-gray-600">Bilimsel araştırmalara maddi kaynak sağlayarak, yenilikçi projelerin hayata geçirilmesine katkıda bulunma amaçlanmaktadır.</p>
							</div>
						</a>
					</div>
				</div>
			</section>

			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 text-center hover:shadow-md transition-shadow">
						<div className="text-3xl mb-3">🤝</div>
						<h3 className="font-semibold mb-2 text-gray-900">Aktif projelerimiz</h3>
						<p className="text-sm text-gray-600">Devam eden projelerimizle toplumun ihtiyaçlarına çözüm üretmeye odaklanıyoruz.</p>
					</div>
					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 text-center hover:shadow-md transition-shadow">
						<div className="text-3xl mb-3">🌱</div>
						<h3 className="font-semibold mb-2 text-gray-900">Gündemdeki projeler</h3>
						<p className="text-sm text-gray-600">Yaklaşan projelerimizle daha geniş kitlelere ulaşmayı hedefliyoruz.</p>
					</div>
					<div className="p-6 rounded-xl border border-gray-200 bg-gray-50 text-center hover:shadow-md transition-shadow">
						<div className="text-3xl mb-3">🕊️</div>
						<h3 className="font-semibold mb-2 text-gray-900">Bizden haberler</h3>
						<p className="text-sm text-gray-600">Vakfımızdan en güncel duyuru ve gelişmeleri takip edebilirsiniz.</p>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-br from-sky-50 to-sky-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900">Bağışlarınız için IBAN adresimiz</h2>
					<a href="/bagisbilgileri.html" className="inline-block px-6 py-3 rounded-lg bg-brand-primary text-white font-medium shadow hover:shadow-md hover:opacity-95 transition-all">Bağış yap</a>
				</div>
			</section>

			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Destekçilerimiz</h2>
					<div className="flex flex-wrap items-center justify-center gap-6">
						<a href="http://lsc.hacettepe.edu.tr" target="_blank" rel="noopener" className="block w-64 border rounded-xl bg-white p-4 shadow-sm hover:shadow transition-all">
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
				<img src="/images/senet.webp" alt="Yaşam Desteği Vakfı" className="w-full rounded-xl shadow-lg mb-8"/>
				<section className="prose prose-lg max-w-none">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
					<div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
						<iframe className="w-full h-full" src="https://www.youtube.com/embed/VRBEARAwn1k?si=DmvYHZJDqwq8tw0P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
					<h2 className="text-3xl font-bold text-gray-900 mb-6">Vakfın Kuruluşu</h2>
					<p className="text-gray-700 leading-relaxed mb-6">Hacettepe Üniversitesi Çocuk Yoğun Bakımda yatan hasta ve hasta yakınlarının sosyal ihtiyaçlarını karşılamak için oluşturulmuş olan mütevazı yardım sandığımız vakfımızın kuruluş tohumu olmuştur. 2015 yılında kurulmuş olan Yaşam Desteği Uygulama Araştırma Merkezinin yürüttüğü araştırma projelerinin kaynak ihtiyacıyla birlikte hem bilimsel gelişmeyi hem de insani yardımı aynı çatı altında toplama iradesi ortaya çıkmıştır. Vakfımız Türkiye Cumhuriyeti Kültür ve Turizm Bakanlığı, Vakıflar Genel Müdürlüğü ve Vakıf Hizmetleri Daire Başkanlığı tarafından 12 Şubat 2024 tarihinde tescil edilmiştir. 22 Şubat 2024 tarihinde yayımlanan 32468 sayılı Resmi Gazete'nin 58. sayfasında yer alarak tüzel kişilik kazanmıştır.</p>
					<h2 className="text-3xl font-bold text-gray-900 mb-6">Vakfın Gayesi</h2>
					<p className="text-gray-700 leading-relaxed mb-6">Yaşam Desteği Vakfı, temel yaşam desteği, ileri yaşam desteği, ekstrakorporeal yaşam desteği, sosyal yaşam desteği, kültürel yaşam desteği, manevi yaşam desteği ve ekolojik yaşam desteği alanlarında faaliyet göstermeyi amaçlamaktadır.</p>
				</section>
			</div>
		</main>
	)
}

function ArastirmaDestek() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Bilimsel Araştırma Proje Desteği</h1>
				</header>
				<img src="/images/research.jpg" alt="Bilimsel Araştırma" className="w-full rounded-xl shadow-lg mb-8"/>
				<article className="prose prose-lg max-w-none">
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Bilim ve Yenilik İçin Araştırma Projelerine Destek</h2>
					<p className="text-gray-700 leading-relaxed">Vakfımız, yenilikçi fikirlerin hayata geçirilmesi ve bilimsel gelişmelerin hız kazanması amacıyla araştırma projelerine mali destek sağlamaktadır. Bilim insanlarının ve araştırmacıların ihtiyaç duyduğu kaynakları temin ederek, topluma fayda sağlayacak projelerin hayata geçmesine olanak tanıyoruz. Tıp, mühendislik, sosyal bilimler ve diğer disiplinlerdeki yenilikçi çalışmaları destekleyen bu programımızla, bilimin geleceğine katkıda bulunmayı misyon edindik.</p>
				</article>
			</div>
		</main>
	)
}

function BagisBilgileri() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Bağış Yaparak Destek Olun</h1>
				</header>
				<img src="/images/donation.jpg" alt="Bağış" className="w-full rounded-xl shadow-lg mb-8"/>
				<article className="prose prose-lg max-w-none">
					<p className="text-gray-700 leading-relaxed mb-6">Siz de bağış yaparak ihtiyaç sahiplerine umut olabilir ve destek sağlayabilirsiniz. Maddi yardımlarınız, ailelerin temel ihtiyaçlarının karşılanmasından çocukların eğitimine kadar birçok alanda kullanılmaktadır.</p>
					<h3 className="text-xl font-semibold text-gray-900 mb-4">Bağış Bilgileri:</h3>
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
						<ul className="space-y-2 text-gray-700">
							<li><strong>IBAN:</strong> TR85 0001 2001 5410 0016 1000 42</li>
							<li><strong>Alıcı İsmi:</strong> Yaşam Desteği Vakfı</li>
							<li><strong>Banka Adı:</strong> Halkbank</li>
						</ul>
					</div>
					<p className="text-gray-700 leading-relaxed">Bağış yaparken açıklama kısmına desteklemek istediğiniz projeyi (örneğin: "<strong>Sosyal Yardım Projesi</strong>") belirtmeyi unutmayınız. Yardımlarınız, ihtiyaç sahiplerine güvenle ulaştırılacaktır.</p>
				</article>
			</div>
		</main>
	)
}

function DulYetim() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Dul ve Yetim Aile Desteği</h1>
				</header>
				<img src="/images/orphan.webp" alt="Dul ve Yetim Desteği" className="w-full rounded-xl shadow-lg mb-8"/>
				<article className="prose prose-lg max-w-none">
					<blockquote className="text-xl italic text-gray-700 bg-blue-50 p-6 rounded-lg border-l-4 border-brand-primary mb-6">
						"Kendi yetimini veya başkasına ait bir yetimi gözetip kollayan kimseyle ben cennette şöyle yanyana bulunacağım." (Müslüm, Zühd 42)
					</blockquote>
					<p className="text-gray-700 leading-relaxed">Zor yaşam koşulları ile mücadele eden dul ve yetim ailelere ekonomik ve sosyal destek sağlayarak, onların yaşam standartlarını yükseltmeyi ve toplumsal eşitliği artırmayı amaçlıyoruz. Vakfımız, temel ihtiyaçların karşılanmasından eğitim ve istihdam desteğine kadar birçok alanda ailelerin yanında yer almakta, çocukların geleceklerini güvence altına almayı hedeflemektedir. Dayanışma bilincine dayanan bu projelerle, topluma umut aşılayan bir misyon üstleniyoruz.</p>
				</article>
			</div>
		</main>
	)
}

function SosyalYardim() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Hasta Yakını Sosyal Yardım</h1>
				</header>
				<img src="/images/hastayadestek.png" alt="Hasta Yakını Desteği" className="w-full rounded-xl shadow-lg mb-8"/>
				<article className="prose prose-lg max-w-none">
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Hastalarımızın yakınlarına maddi ve manevi destek sağlıyoruz</h2>
					<p className="text-gray-700 leading-relaxed">Vakfımız, hastalık süreçlerinde hasta yakınlarının karşılaştığı maddi ve manevi zorlukları hafifletmek amacıyla kapsamlı sosyal yardım programları sunmaktadır. Sağlık hizmetlerine erişim, barınma, gıda ve ulaşım gibi ihtiyaçlar için destek sağlayarak, ailelerin daha iyi koşullarda sevdiklerine odaklanmalarını mümkün kılmayı hedefliyoruz. Toplumdaki dayanışma kültürünü güçlendiren bu yardım modeli, özellikle uzun süreli tedavi süreçlerinde ailelere nefes aldırmaktadır.</p>
				</article>
			</div>
		</main>
	)
}

function OgrenciBursu() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Öğrenci Bursu</h1>
				</header>
				<img src="/images/ogrencidestek.webp" alt="Öğrenci Bursu" className="w-full rounded-xl shadow-lg mb-8"/>
				<article className="prose prose-lg max-w-none">
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Eğitimde Fırsat Eşitliği</h2>
					<p className="text-gray-700 leading-relaxed">Eğitim hayatında maddi zorluk yaşayan öğrencilere burs desteği sağlayarak, geleceğin başarılı bireylerini yetiştirmeyi amaçlamaktadır. Vakfımız, eğitimde fırsat eşitliğini destekleyerek, her öğrencinin potansiyelini gerçekleştirebilmesi için gerekli kaynakları sağlamaktadır.</p>
				</article>
			</div>
		</main>
	)
}

function YonetimKurulu() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Yönetim Kurulu</h1>
				</header>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white rounded-xl shadow-lg p-6 text-center">
						<img src="/images/ahmetozer.png" alt="Ahmet Özer" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmet Özer</h3>
						<p className="text-gray-600">Başkan</p>
					</div>
					<div className="bg-white rounded-xl shadow-lg p-6 text-center">
						<img src="/images/bekir.jpeg" alt="Bekir" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Bekir</h3>
						<p className="text-gray-600">Üye</p>
					</div>
					<div className="bg-white rounded-xl shadow-lg p-6 text-center">
						<img src="/images/birbilen.jpeg" alt="Birbilen" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Birbilen</h3>
						<p className="text-gray-600">Üye</p>
					</div>
				</div>
			</div>
		</main>
	)
}

function Iletisim() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
				</header>
				<div className="bg-white rounded-xl shadow-lg p-8">
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim Bilgileri</h2>
							<div className="space-y-4">
								<div>
									<h3 className="font-semibold text-gray-900">Adres:</h3>
									<p className="text-gray-700">Hacettepe Üniversitesi, Ankara</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">E-posta:</h3>
									<p className="text-gray-700">info@yasamdestegivakfi.org</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Telefon:</h3>
									<p className="text-gray-700">+90 (312) XXX XX XX</p>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">Bize Ulaşın</h2>
							<form className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
									<input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
									<input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent" />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
									<textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"></textarea>
								</div>
								<button type="submit" className="w-full bg-brand-primary text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">Gönder</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

function Gizlilik() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Gizlilik Politikası</h1>
				</header>
				<article className="prose prose-lg max-w-none">
					<p className="text-gray-700 leading-relaxed mb-6">Yaşam Desteği Vakfı olarak kişisel verilerinizin güvenliği bizim için önemlidir. Bu politika, hangi bilgileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklar.</p>
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Toplanan Bilgiler</h2>
					<p className="text-gray-700 leading-relaxed mb-6">Vakfımız, hizmet kalitesini artırmak amacıyla sadece gerekli bilgileri toplar ve bu bilgileri üçüncü taraflarla paylaşmaz.</p>
				</article>
			</div>
		</main>
	)
}

function Kosullar() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Kullanım Şartları</h1>
				</header>
				<article className="prose prose-lg max-w-none">
					<p className="text-gray-700 leading-relaxed mb-6">Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. Vakfımız, bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar.</p>
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Genel Kurallar</h2>
					<p className="text-gray-700 leading-relaxed mb-6">Site içeriğini ticari amaçla kullanmak yasaktır. Tüm içerik telif hakları ile korunmaktadır.</p>
				</article>
			</div>
		</main>
	)
}

function Guncelleme() {
	return (
		<main className="flex-1 pt-20 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Güncelleme</h1>
				</header>
				<article className="prose prose-lg max-w-none">
					<p className="text-gray-700 leading-relaxed mb-6">Site içeriği düzenli olarak güncellenmektedir. En son güncellemeler için bizi takip edin.</p>
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">Son Güncellemeler</h2>
					<p className="text-gray-700 leading-relaxed mb-6">Vakfımızın faaliyetleri ve projeleri hakkında güncel bilgiler için sosyal medya hesaplarımızı takip edebilirsiniz.</p>
				</article>
			</div>
		</main>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col bg-gray-50">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/index.html" element={<Navigate to="/" replace />} />
					{/* Tüm sayfa route'ları */}
					<Route path="/hakkimizda.html" element={<Hakkimizda />} />
					<Route path="/arastirmadestek.html" element={<ArastirmaDestek />} />
					<Route path="/bagisbilgileri.html" element={<BagisBilgileri />} />
					<Route path="/dulyetim.html" element={<DulYetim />} />
					<Route path="/sosyalyardim.html" element={<SosyalYardim />} />
					<Route path="/ogrencibursu.html" element={<OgrenciBursu />} />
					<Route path="/yonetimkurulu.html" element={<YonetimKurulu />} />
					<Route path="/iletisim.html" element={<Iletisim />} />
					<Route path="/gizlilik.html" element={<Gizlilik />} />
					<Route path="/kosullar.html" element={<Kosullar />} />
					<Route path="/guncelleme.html" element={<Guncelleme />} />
					{/* Fallback */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
