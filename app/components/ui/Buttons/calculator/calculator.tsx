// @/app/calculator/page.tsx
"use client";

import { useState } from "react";
import "./calculator.css";
import Link from "next/link";
import { Calculator, Baby, Sparkles, Calendar, HeartPulse, Activity, ArrowLeft } from "lucide-react";

export default function PregnancyCalculator() {
	const [activeTab, setActiveTab] = useState<"pregnancy" | "ovulation">("pregnancy");
	const [lmpDate, setLmpDate] = useState<string>("");
	const [result, setResult] = useState<any>(null);

	// دالة حساب الحمل وموعد الولادة
	const handleCalculatePregnancy = (e: React.FormEvent) => {
		e.preventDefault();
		if (!lmpDate) return;

		const lmp = new Date(lmpDate);
		const today = new Date();

		const dueDate = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);

		const diffTime = today.getTime() - lmp.getTime();
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const currentWeek = Math.floor(diffDays / 7);
		const currentDay = diffDays % 7;

		if (currentWeek < 0 || currentWeek > 43) {
			alert("الرجاء التأكد من تاريخ آخر دورة شهرية مدخل بشكل صحيح.");
			return;
		}

		let trimester = "الثلث الأول من الحمل";
		if (currentWeek >= 14 && currentWeek < 28) {
			trimester = "الثلث الثاني من الحمل (فترة الاستقرار)";
		} else if (currentWeek >= 28) {
			trimester = "الثلث الثالث (التحضير للولادة)";
		}

		let babySize = "حجم الجنين يتطور بسرعة";
		if (currentWeek <= 5) babySize = "بحجم حبة خشخاش صغيرة 🌱";
		else if (currentWeek <= 8) babySize = "بحجم حبة توت بري 🍇";
		else if (currentWeek <= 12) babySize = "بحجم ثمرة ليمون صغيرة 🍋";
		else if (currentWeek <= 16) babySize = "بحجم ثمرة أفوكادو 🥑";
		else if (currentWeek <= 20) babySize = "بحجم ثمرة موز متوسطة 🍌";
		else if (currentWeek <= 24) babySize = "بحجم كيس ذرة 🌽";
		else if (currentWeek <= 28) babySize = "بحجم ثمرة باذنجان 🍆";
		else if (currentWeek <= 32) babySize = "بحجم جوز الهند 🥥";
		else if (currentWeek <= 36) babySize = "بحجم بطيخة صغيرة (كانتالوب) 🍈";
		else babySize = "بحجم بطيخة ناضجة وجاهزة للقاء! 🍉👶";

		const progress = Math.min(Math.max((currentWeek / 40) * 100, 0), 100);

		setResult({
			type: "pregnancy",
			dueDate: dueDate.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" }),
			currentWeek: `${currentWeek} أسبوع و ${currentDay} أيام`,
			trimester,
			babySize,
			progress: progress.toFixed(0),
		});
	};

	const handleCalculateOvulation = (e: React.FormEvent) => {
		e.preventDefault();
		if (!lmpDate) return;

		const lmp = new Date(lmpDate);
		const ovulationDate = new Date(lmp.getTime() + 14 * 24 * 60 * 60 * 1000);
		const fertileStart = new Date(ovulationDate.getTime() - 4 * 24 * 60 * 60 * 1000);
		const fertileEnd = new Date(ovulationDate.getTime() + 1 * 24 * 60 * 60 * 1000);

		setResult({
			type: "ovulation",
			ovulationDate: ovulationDate.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" }),
			fertileWindow: `${fertileStart.toLocaleDateString("ar-EG", { month: "short", day: "numeric" })} إلى ${fertileEnd.toLocaleDateString("ar-EG", { month: "short", day: "numeric" })}`,
		});
	};

	return (
		<section className="calculator-wrapper" id="PregnancyCalculator">
			<div className="calculator-container">
				<div className="calculator-header">
					<span className="calc-badge">
						<Calculator className="w-3.5 h-3.5 ml-1.5 text-sky-600" />
						أدوات طبية تفاعلية
					</span>
					<h1 className="calc-title">حاسبة الحمل و التبويض الدقيقة</h1>
					<p className="calc-desc">أدوات مصممة بعناية لمساعدتك في تتبع تفاصيل رحلة أمومتك ومعرفة مواعيدك الطبية بكل سهولة.</p>
				</div>

				<div className="calculator-card">
					<div className="calc-tabs">
						<button
							className={`calc-tab-btn flex items-center justify-center gap-2 ${activeTab === "pregnancy" ? "active-pink" : ""}`}
							onClick={() => {
								setActiveTab("pregnancy");
								setResult(null);
							}}
							aria-label="حاسبة موعد الولادة"
						>
							<Baby className="w-4 h-4" />
							حاسبة موعد الولادة
						</button>
						<button
							className={`calc-tab-btn flex items-center justify-center gap-2 ${activeTab === "ovulation" ? "active-blue" : ""}`}
							onClick={() => {
								setActiveTab("ovulation");
								setResult(null);
							}}
							aria-label="حاسبة أيام التبويض والخصوبة"
						>
							<Sparkles className="w-4 h-4" />
							حاسبة أيام التبويض والخصوبة
						</button>
					</div>

					<form onSubmit={activeTab === "pregnancy" ? handleCalculatePregnancy : handleCalculateOvulation} className="calc-form">
						<div className="form-group">
							<label
								htmlFor="lmp"
								className="form-label flex items-center gap-2"
								aria-label={activeTab === "pregnancy" ? "تاريخ أول يوم من آخر دورة شهرية (LMP)" : "تاريخ بداية آخر دورة شهرية"}
							>
								<Calendar className="w-4 h-4 text-rose-600" />
								{activeTab === "pregnancy" ? "تاريخ أول يوم من آخر دورة شهرية (LMP):" : "تاريخ بداية آخر دورة شهرية:"}
							</label>
							<input
								type="date"
								id="lmp"
								value={lmpDate}
								onChange={(e) => setLmpDate(e.target.value)}
								required
								className="form-input"
								aria-label={activeTab === "pregnancy" ? "أدخل تاريخ أول يوم من آخر دورة شهرية" : "أدخل تاريخ بداية آخر دورة شهرية"}
							/>
						</div>

						<button
							type="submit"
							className={`calc-submit-btn flex items-center justify-center gap-2 ${activeTab === "pregnancy" ? "bg-pink" : "bg-blue"}`}
							aria-label={activeTab === "pregnancy" ? "احسبي موعد الولادة والأسابيع الآن" : "احسبي أيام التبويض بدقة"}
						>
							{activeTab === "pregnancy" ? (
								<>
									<HeartPulse className="w-5 h-5" />
									احسبي موعد الولادة والأسابيع الآن
								</>
							) : (
								<>
									<Activity className="w-5 h-5" />
									احسبي أيام التبويض بدقة
								</>
							)}
						</button>
					</form>

					{result && (
						<div className="calc-results-box">
							<h3 className="results-title flex items-center gap-2">
								<Sparkles className="w-5 h-5 text-rose-600" />
								نتائج التتبع الطبي
							</h3>

							{result.type === "pregnancy" ? (
								<div className="results-grid grid grid-cols-1 md:grid-cols-2">
									<div className="result-item">
										<span className="result-label">موعد الولادة المتوقع:</span>
										<span className="result-value text-pink">{result.dueDate}</span>
									</div>
									<div className="result-item">
										<span className="result-label">عمر الحمل الحالي:</span>
										<span className="result-value">{result.currentWeek}</span>
									</div>
									<div className="result-item">
										<span className="result-label">المرحلة الحالية:</span>
										<span className="result-value">{result.trimester}</span>
									</div>
									<div className="result-item">
										<span className="result-label">تشبيه حجم الجنين:</span>
										<span className="result-value text-blue">{result.babySize}</span>
									</div>

									<div className="result-full-width">
										<div className="progress-info">
											<span>مؤشر تقدم رحلة الحمل</span>
											<span>{result.progress}٪</span>
										</div>
										<div className="progress-bar-bg">
											<div className="progress-bar-fill" style={{ width: `${result.progress}%` }}></div>
										</div>
									</div>
								</div>
							) : (
								<div className="results-grid grid grid-cols-1 md:grid-cols-2">
									<div className="result-item">
										<span className="result-label">يوم التبويض المتوقع:</span>
										<span className="result-value text-blue">{result.ovulationDate}</span>
									</div>
									<div className="result-item">
										<span className="result-label">نافذة الخصوبة العالية:</span>
										<span className="result-value text-pink">{result.fertileWindow}</span>
									</div>
								</div>
							)}

							<div className="results-cta">
								<Link href="/booking" className="cta-button flex items-center justify-center gap-2" aria-label="حجز استشارة مع د. صبرين">
									<span>احجزي استشارتك مع د. صبرين لمتابعة النتائج</span>
									<ArrowLeft className="w-4 h-4" />
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
