import "./Testimonials.css";

export default function Testimonials() {
	const testimonials = [
		{
			name: "أحمد م. (زوج إحدى المريضات)",
			comment: "تجربة رائعة بكل المقاييس. د. صبرين تتميز بالدقة الشديدة، الإنسانية، والصبر في الإجابة على كل الأسئلة أثناء متابعة الحمل. أنصح بها بشدة لكل عائلة تبحث عن الأمان والاطمئنان.",
			rating: 5,
			tag: "متابعة حمل وولادة",
			accent: "pink",
		},
		{
			name: "سارة هـ.",
			comment: "الدكتورة صبرين إنسانة راقية جداً وفاهمة شغلها كويس. بفضل الله ثم متابعتها المستمرة، ربنا رزقنا بطفلنا الأول بعد فترة انتظار. شكراً لكل فريق العيادة على الرعاية الدافئة.",
			rating: 5,
			tag: "علاج تأخر الحمل",
			accent: "blue",
		},
		{
			name: "مريم ك.",
			comment: "العيادة منظمة ونظيفة جداً، والاهتمام بالتفاصيل والخصوصية يخلي الواحد مرتاح نفسياً. السونار المتقدم والدقة في التشخيص حاجه تانية خالص. ربنا يبارك في علمها.",
			rating: 5,
			tag: "متابعة دورية وسونار",
			accent: "pink",
		},
	];

	return (
		<section className="testimonials-section" id="testimonials" aria-label="Section Testimonials">
			<div className="testimonials-container">
				<div className="testimonials-header">
					<span className="testimonials-badge">قصص نجاح وثقة 💖</span>
					<h2 className="testimonials-title">كلمات نابعة من القلب من مريضاتنا</h2>
					<p className="testimonials-subtitle">نفتخر بثقتكم الغالية، ونضع راحة وصحة عائلاتكم دائماً في قمة أولوياتنا بكل حب واهتمام.</p>
				</div>

				<div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((item, index) => (
						<div key={index} className={`testimonial-card ${item.accent === "pink" ? "pink-card" : "blue-card"}`}>
							<div className="card-top-row">
								<div className="stars">{"⭐".repeat(item.rating)}</div>
								<span className="verified-tag">{item.tag}</span>
							</div>

							<p className="testimonial-comment">&quot;{item.comment}&quot;</p>

							<div className="patient-info">
								<div className="patient-avatar">
									<span>{item.name.charAt(0)}</span>
								</div>
								<div>
									<div className="patient-name">{item.name}</div>
									<span className="patient-status">حالة موثقة بالعيادة ✓</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
