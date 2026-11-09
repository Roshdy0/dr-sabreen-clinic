// @/app/components/Home/VideoReels/VideoReels.tsx

import "./VideoReels.css";

export default function VideoReels() {
	const reels = [
		{
			title: "متى تقلق الحامل؟ علامات تستدعي زيارة الطبيبة فوراً",
			category: "متابعة الحمل",
			duration: "1:15 دقيقة",
			thumbnailGradient: "from-pink-500 to-rose-400",
			views: "12.4 ألف مشاهدة",
		},
		{
			title: "الخرافات الشائعة حول تغذية الحامل.. ما الحقيقة؟",
			category: "تغذية وصحة",
			duration: "0:55 ثانية",
			thumbnailGradient: "from-sky-500 to-blue-600",
			views: "8.9 ألف مشاهدة",
		},
		{
			title: "كيف تجهزين نفسياً وجسدياً للولادة الطبيعية؟",
			category: "نصائح الولادة",
			duration: "1:30 دقيقة",
			thumbnailGradient: "from-purple-500 to-pink-500",
			views: "15.2 ألف مشاهدة",
		},
		{
			title: "أسباب تأخر الحمل الثانوية وطرق التعامل الحديثة معها",
			category: "تأخر الحمل",
			duration: "2:00 دقيقة",
			thumbnailGradient: "from-blue-400 to-teal-500",
			views: "20.1 ألف مشاهدة",
		},
	];

	return (
		<section className="VideoReels" id="videoReels" aria-label="Section Video Reels">
			<div className="reels-container">
				<div className="reels-header">
					<span className="reels-badge">مكتبة النصائح الطبية 🎥</span>
					<h2 className="reels-title">إجابات مرئية ومبسطة لكل ما يهم عائلتك</h2>
					<p className="reels-subtitle">شاهدي أحدث الفيديوهات القصيرة والنصائح الطبية المباشرة من د. صبرين بدر الديب لتكوني على دراية كاملة بمختلف مراحل رحلتك.</p>
				</div>

				<div className="reels-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{reels.map((reel, index) => (
						<div key={index} className="reel-card">
							<div className={`reel-thumbnail bg-linear-to-br ${reel.thumbnailGradient}`}>
								<div className="play-button-overlay">
									<span className="play-icon">▶</span>
								</div>
								<div className="reel-duration">{reel.duration}</div>
								<span className="reel-category-tag">{reel.category}</span>
							</div>

							<div className="reel-content">
								<h3 className="reel-card-title">{reel.title}</h3>
								<div className="reel-meta">
									<span className="reel-views">👁️ {reel.views}</span>
									<span className="reel-platform">اسنتيغرام / تيك توك</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="reels-cta-banner">
					<p>تابعينا للمزيد من النصائح اليومية والأسئلة المباشرة</p>
					<div className="social-buttons">
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn ig" aria-label="Instagram">
							اسنتيغرام 📸
						</a>
						<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-btn tt" aria-label="TikTok">
							تيك توك 🎵
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
