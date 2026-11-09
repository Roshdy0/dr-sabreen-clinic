// @/app/components/Home/TrustBadges/TrustBadges.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, ShieldCheck, MessageSquare } from "lucide-react";
import "./TrustBadges.css";

const toArabicDigits = (num: number) => {
	return num.toLocaleString("ar-EG");
};

export default function TrustBadges() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [counts, setCounts] = useState({
		years: 0,
		deliveries: 0,
		privacy: 0,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			},
			{ threshold: 0.3 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) {
			setCounts({ years: 0, deliveries: 0, privacy: 0 });
			return;
		}

		const duration = 2000;
		const steps = 60;
		const intervalTime = duration / steps;

		let step = 0;
		const timer = setInterval(() => {
			step++;
			const progress = step / steps;

			const easeProgress = 1 - Math.pow(1 - progress, 3);

			setCounts({
				years: Math.floor(easeProgress * 10),
				deliveries: Math.floor(easeProgress * 5000),
				privacy: Math.floor(easeProgress * 100),
			});

			if (step >= steps) {
				clearInterval(timer);
			}
		}, intervalTime);

		return () => clearInterval(timer);
	}, [isVisible]);

	const stats = [
		{
			value: `+${toArabicDigits(counts.years)} سنوات`,
			label: "خبرة طبية متخصصة في النساء والتوليد",
			icon: <Award className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
			colorClass: "pink-accent",
		},
		{
			value: `+${toArabicDigits(counts.deliveries)}`,
			label: "حالة ولادة ومتابعة حمل ناجحة",
			icon: <Users className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
			colorClass: "blue-accent",
		},
		{
			value: `${toArabicDigits(counts.privacy)}٪`,
			label: "خصوصية كاملة ورعاية دافئة",
			icon: <ShieldCheck className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
			colorClass: "pink-accent",
		},
		{
			value: "٢٤/٧",
			label: "استجابة سريعة ودعم للطوارئ",
			icon: <MessageSquare className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
			colorClass: "blue-accent",
		},
	];

	return (
		<section ref={sectionRef} id="trust-badges" className="trust-badges-section py-8" aria-label="Section Trust Badges">
			<div className="trust-badges-container">
				<div className="trust-badges-grid grid grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div key={index} className={`trust-badge-card ${stat.colorClass}`}>
							<div className="badge-icon-wrapper">{stat.icon}</div>
							<div className="badge-content">
								<div className="badge-value">{stat.value}</div>
								<p className="badge-label">{stat.label}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
