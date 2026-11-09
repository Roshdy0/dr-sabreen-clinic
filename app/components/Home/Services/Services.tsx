// @/app/components/Home/Services/Services.tsx
import Link from "next/link";
import { HeartPulse, Baby, Activity, Stethoscope, Heart, ClipboardList } from "lucide-react";
import "./Services.css";

export default function Services() {
	const servicesList = [
		{
			title: "متابعة الحمل العادي وعالي الخطورة",
			description: "رعاية دقيقة وشاملة للأم والجنين منذ اللحظات الأولى وحتى الولادة الآمنة مع أحدث الفحوصات والتقارير الطبية.",
			icon: <HeartPulse className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
			accent: "pink",
			slug: "pregnancy-follow-up",
		},
		{
			title: "علاج تأخر الحمل والحقن المجهري",
			description: "برامج علاجية متقدمة ومخصصة لكل حالة بعناية فائقة لتحقيق حلم الأمومة بأعلى نسب نجاح ممكنة.",
			icon: <Baby className="w-7 h-7 text-sky-600 dark:text-sky-400" />,
			accent: "blue",
			slug: "infertility-treatment",
		},
		{
			title: "جراحات النساء والتجميل النسائي",
			description: "إجراءات جراحية وتجميلية دقيقة بأحدث التقنيات لضمان أعلى مستويات الراحة والثقة والصحة التامة.",
			icon: <Activity className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
			accent: "pink",
			slug: "gynecological-surgeries",
		},
		{
			title: "السونار المتقدم (الرباعي والخماسي)",
			description: "تصوير تلفزيوني عالي الدقة للاطمئنان المبكر على صحة الجنين ومتابعة تفاصيل نموه بوضوح مذهل.",
			icon: <Stethoscope className="w-7 h-7 text-sky-600 dark:text-sky-400" />,
			accent: "blue",
			slug: "advanced-ultrasound",
		},
		{
			title: "رعاية ما بعد الولادة وصحة المرأة",
			description: "متابعة شاملة للصحة الجسدية والنفسية للأم بعد الولادة مع توفير الإرشادات اللازمة لرعاية الصغير.",
			icon: <Heart className="w-7 h-7 text-rose-600 dark:text-rose-400" />,
			accent: "pink",
			slug: "postnatal-care",
		},
		{
			title: "استشارات تنظيم الأسرة والصحة الإنجابية",
			description: "توجيه طبي آمن وموثوق لاختيار الوسيلة الأنسب للحالة الصحية بما يضمن راحة وسلامة السيدة.",
			icon: <ClipboardList className="w-7 h-7 text-sky-600 dark:text-sky-400" />,
			accent: "blue",
			slug: "family-planning",
		},
	];

	return (
		<section className="services-section" id="services" aria-label="Section Services">
			<div className="services-container">
				<div className="services-header">
					<span className="services-badge">خدماتنا الطبية المتخصصة</span>
					<h2 className="services-title">رعاية متكاملة لصحة المرأة والأمومة</h2>
					<p className="services-subtitle">نقدم باقة شاملة من الخدمات الطبية المتطورة بمعايير عالمية تجمع بين الدقة العلمية والرعاية الإنسانية الدافئة.</p>
				</div>

				<div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{servicesList.map((service, index) => (
						<div key={index} className={`service-card ${service.accent === "pink" ? "pink-card" : "blue-card"}`}>
							<div className="service-icon-box">{service.icon}</div>
							<h3 className="service-card-title">{service.title}</h3>
							<p className="service-card-desc">{service.description}</p>
							<Link href={`/services/${service.slug}`} className="service-link" aria-label={`Read more about ${service.title}`}>
								اعرفي المزيد ←
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
