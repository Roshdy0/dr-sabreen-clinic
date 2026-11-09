// @/app/components/FAQ/FAQ.tsx
"use client";

import { useState } from "react";
import { HelpCircle, Sparkles, ChevronDown, ChevronUp, Stethoscope } from "lucide-react";
import "./FAQ.css";

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const faqs = [
		{
			question: "متى يجب أن أبدأ أول زيارة لمتابعة الحمل؟",
			answer: "يُفضل بدء أول زيارة بمجرد تأكيد الحمل (عادة بين الأسبوع السادس والثامن من آخر دورة شهرية)، للاطمئنان على نبض الجنين والتأكد من استقرار الحمل في الرحم ووصف الفيتامينات الأساسية.",
		},
		{
			question: "كيف يمكنني حساب موعد الولادة المتوقع بدقة؟",
			answer: "يتم حساب موعد الولادة بإضافة 280 يوماً (أو 40 أسبوعاً) من تاريخ أول يوم لأخر دورة شهرية، ويمكنك استخدام حاسبة الحمل التفاعلية المتاحة في موقعنا لمعرفة التاريخ بالتفصيل وعمر الجنين الحالي.",
		},
		{
			question: "ما هي الفروق الأساسية وكيف يتم اختيار طريقة الولادة (طبيعية أم قيصرية)؟",
			answer: "يعتمد القرار كلياً على الحالة الصحية للأم والجنين، وضعية الجنين في الرحم، وتطورات الحمل. د. صبرين تحرص دائماً على ترشيح الخيار الأبسط والأكثر أماناً لصحة الأم والجنين معاً.",
		},
		{
			question: "ما هي الخدمات المتاحة لعلاج تأخر الحمل والحقن المجهري؟",
			answer: "توفر العيادة برامج تشخيصية متقدمة لتحديد أسباب تأخر الحمل، ومتابعة التبويض بدقة، وتوجيه الحالات لبروتوكولات الحقن المجهري وعلاج تكيسات المبايض بأعلى معايير الرعاية.",
		},
		{
			question: "كم مرة يجب إجراء الفحص الدوري للنساء (حتى غير الحوامل)؟",
			answer: "يُنصح بإجراء فحص نسائي دوري ومسحة عنق الرحم (Pap Smear) وسونار للاطمئنان مرة واحدة كل عام على الأقل للوقاية المبكرة من أي مشاكل صحية.",
		},
	];

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="faq-section" id="faq" aria-label="Section FAQ">
			<div className="faq-container">
				<div className="faq-header">
					<span className="faq-badge">
						<HelpCircle className="w-3.5 h-3.5 ml-1.5 text-rose-600" />
						الأسئلة الشائعة والاستفسارات
					</span>
					<h2 className="faq-title">إجابات واضحة لكل ما يهم صحتك وصحة جنينك</h2>
					<p className="faq-subtitle">الوضوح والمعرفة هما أساس الأمان الطبي؛ جمعنا لكِ أبرز الأسئلة المتكررة لنجيب عليها بكل شفافية واهتمام.</p>
				</div>

				<div className="faq-grid grid grid-cols-1 md:grid-cols-2">
					{faqs.map((faq, index) => (
						<div key={index} className={`faq-card ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
							<div className="faq-question-row">
								<h3 className="faq-question">{faq.question}</h3>
								<span className="faq-icon">{activeIndex === index ? <ChevronUp className="w-4 h-4 text-rose-600" /> : <ChevronDown className="w-4 h-4 text-rose-600" />}</span>
							</div>
							{activeIndex === index && (
								<div className="faq-answer-box">
									<p className="faq-answer">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>

				{/* بطاقة الدعم الإضافي */}
				<div className="faq-cta-box">
					<p className="flex items-center gap-2">
						<Sparkles className="w-4 h-4 text-rose-600" />
						لديكِ استفسار خاص لم تجديه هنا؟
					</p>
					<a href="/booking" className="faq-cta-button flex items-center justify-center gap-2" aria-label="احجزي استشارتك المباشرة مع د. صبرين الآن">
						<Stethoscope className="w-4 h-4" />
						<span>احجزي استشارتك المباشرة مع د. صبرين الآن</span>
					</a>
				</div>
			</div>
		</section>
	);
}
