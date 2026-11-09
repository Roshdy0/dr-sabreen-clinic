// @/app/components/Home/Hero/Hero.tsx

import Link from "next/link";
import Image from "next/image";
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
						<div className="hero-image-box">
							<Image src="/images/Profile.webp" alt="د. صبرين بدر الديب" fill priority className="doctor-profile-img" sizes="fill" />
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
