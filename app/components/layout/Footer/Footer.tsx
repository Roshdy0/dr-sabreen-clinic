// @/app/components/Footer/Footer.tsx
"use client";

import { MapPin, Phone, MessageSquare, Compass, Heart, Share2, Camera, Video, MessageCircle } from "lucide-react";
import "./Footer.css";
import { useState } from "react";

export default function Footer() {
	const footerLinks = [
		{ name: "الرئيسية", href: "/#hero" },
		{ name: "الخدمات", href: "/#services" },
		{ name: "آراء المرضى", href: "/#testimonials" },
		{ name: "مكتبة النصائح الطبية", href: "/#videoReels" },
		{ name: "الأسئلة الشائعة والاستفسارات", href: "/#faq" },
	];

	const socialMediaLinks = [
		{ name: "فيسبوك", className: "facebook", href: "https://facebook.com", icon: <Share2 className="w-4 h-4" /> },
		{ name: "انستغرام", className: "instagram", href: "https://instagram.com", icon: <Camera className="w-4 h-4" /> },
		{ name: "تيك توك", className: "tiktok", href: "https://tiktok.com", icon: <Video className="w-4 h-4" /> },
		{ name: "واتساب", className: "whatsapp", href: "https://wa.me/201117651690", icon: <MessageCircle className="w-4 h-4" /> },
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith("/#") && window.location.pathname !== "/") {
			setIsMobileMenuOpen(false);
			return;
		}

		if (href.includes("#")) {
			const targetId = href.split("#")[1];
			const element = document.getElementById(targetId);

			if (element) {
				e.preventDefault();
				const navHeight = 80;
				const elementPosition = element.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = elementPosition - navHeight;

				const startPosition = window.scrollY;
				const distance = offsetPosition - startPosition;
				const duration = 700;
				let startTime: number | null = null;

				const animation = (currentTime: number) => {
					if (startTime === null) startTime = currentTime;
					const timeElapsed = currentTime - startTime;
					const progress = Math.min(timeElapsed / duration, 1);
					const ease = progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

					window.scrollTo(0, startPosition + distance * ease);

					if (timeElapsed < duration) {
						requestAnimationFrame(animation);
					}
				};

				requestAnimationFrame(animation);
				window.history.pushState(null, "", href);
			}
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<footer className="footer-section">
			<div className="footer-container">
				<div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className="footer-col">
						<h3 className="footer-brand">د. صبرين بدر الديب</h3>
						<p className="footer-brand-desc">استشاري طب وتأخر الحمل والحقن المجهري. نعتني بصحتك وصحة جنينك بأحدث التقنيات وأعلى معايير الرعاية الطبية والإنسانية.</p>

						<div className="footer-socials">
							{socialMediaLinks.map((item, index) => (
								<a key={index} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className={`social-btn ${item.className} flex items-center gap-2`}>
									<span className="social-icon-wrapper">{item.icon}</span>
									<span>{item.name}</span>
								</a>
							))}
						</div>
					</div>

					<div className="footer-col">
						<h4 className="footer-heading">روابط سريعة</h4>
						<ul className="footer-links">
							{footerLinks.map((item, index) => (
								<li key={index}>
									<a href={item.href} onClick={(e) => handleScroll(e, item.href)} aria-label={item.name}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-col">
						<h4 className="footer-heading">أوقات العمل</h4>
						<ul className="footer-hours">
							<li>
								<span>السبت - الخميس:</span> 2:00 ظهراً - 9:00 مساءً
							</li>
							<li>
								<span>الجمعة:</span> إجازة أسبوعية
							</li>
							<li className="footer-emergency">
								<span>طوارئ الولادة:</span> متاحة على مدار الساعة
							</li>
						</ul>
					</div>

					<div className="footer-col">
						<h4 className="footer-heading">العنوان والتواصل</h4>
						<p className="footer-contact-text flex items-start gap-2">
							<MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-1" />
							برج الأطباء، الدور الثالث، العيادة المركزية لنساء والتوليد.
						</p>
						<p className="footer-contact-text flex items-center gap-2">
							<Phone className="w-4 h-4 text-rose-600 shrink-0" />
							هاتف العيادة: +201117651690
						</p>
						<p className="footer-contact-text flex items-center gap-2">
							<MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
							واتساب مباشر: +201117651690
						</p>
						<a
							href="https://maps.google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-map-link flex items-center justify-center gap-2"
							aria-label="خريطة العيادة التفاعلية"
						>
							<Compass className="w-4 h-4 text-sky-600" />
							<span>خريطة العيادة التفاعلية</span>
						</a>
					</div>
				</div>

				<div className="footer-bottom">
					<p>© {new Date().getFullYear()} د. صبرين بدر الديب. جميع الحقوق محفوظة.</p>
					<p className="developer-tag flex items-center justify-center gap-1">
						<span>تم التطوير بأعلى معايير الأداء والاحترافية</span>
						<Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
					</p>
				</div>
			</div>
		</footer>
	);
}
