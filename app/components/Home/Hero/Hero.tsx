// @/app/components/Home/Hero/Hero.tsx

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HeartPulse, Award, Users } from "lucide-react";
import "./Hero.css";

export default function Hero() {
	return (
		<section className="hero-section-wrapper" id="hero" aria-label="Section Hero">
			<div className="hero-container">
				<div className="hero-grid grid grid-cols-1 lg:grid-cols-12">
					<div className="hero-content lg:col-span-7">
						<span className="hero-badge">
							<span className="badge-dot"></span>
							عيادة معتمدة لرعاية الأمومة والطفولة
						</span>

						<h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl">
							رحلة أمومة آمنة <br />
							<span>برعاية طبية متكاملة وحنان دافئ</span>
						</h1>

						<p className="hero-description text-sm sm:text-base">
							نرافقكِ خطوة بخطوة منذ اللحظات الأولى للحمل وحتى الولادة بأمان.
							<br /> نستخدم أحدث التقنيات الطبية المتقدمة لنضمن لكِ ولصغيركِ أفضل رعاية صحية في بيئة هادئة ومطمئنة.
						</p>

						<div className="hero-actions">
							<Link href="booking" className="hero-btn-primary" aria-label="احجزي موعدكِ الآن">
								احجزي موعدكِ الآن
							</Link>

							<Link href="/calculator" className="hero-btn-secondary" aria-label="حاسبة الحمل و التبويض">
								حاسبة الحمل و التبويض 🧮
							</Link>
						</div>
					</div>

					<div className="hero-image-side lg:col-span-5">
						<div className="mobile-hero-badge-card block lg:hidden">
							<div className="trust-card-inner">
								<div className="trust-icon-box">
									<HeartPulse className="w-6 h-6 text-pink-600" />
								</div>
								<div>
									<h3 className="font-bold text-sm">رعاية طبية موثوقة</h3>
									<p className="text-xs opacity-75">أحدث أجهزة السونار ومتابعة دقيقة</p>
								</div>
							</div>
							<div className="trust-stats-grid">
								<div className="stat-item">
									<Award className="w-4 h-4 text-pink-500 mb-1" />
									<span className="font-bold text-xs">خبرة واسعة</span>
								</div>
								<div className="stat-item">
									<Users className="w-4 h-4 text-blue-500 mb-1" />
									<span className="font-bold text-xs">ثقة مريضاتنا</span>
								</div>
								<div className="stat-item">
									<ShieldCheck className="w-4 h-4 text-emerald-500 mb-1" />
									<span className="font-bold text-xs">بيئة آمنة</span>
								</div>
							</div>
						</div>

						<div className="hero-image-box hidden lg:block">
							<Image
								src="/images/Profile.webp"
								alt="د. صبرين بدر الديب"
								fill
								priority={true}
								className="doctor-profile-img"
								sizes="(max-width: 768px) 100vw, 500px"
								fetchPriority="high"
							/>
							<div className="image-overlay">
								<div className="doctor-info-card">
									<p className="doctor-name">د. صبرين بدر الديب</p>
									<p className="doctor-title">إخصائي نساء وتوليد (OBGYN)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
