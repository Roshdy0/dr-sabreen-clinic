// @/app/booking/page.tsx (أو حسب مسار صفحة الحجز لديك)
"use client";

import { useState } from "react";
import { Calendar, MapPin, Phone, Clock, MessageSquare, User, Stethoscope, FileText, CheckCircle2 } from "lucide-react";
import "./booking.css";

export default function BookingPage() {
	const [activeTab, setActiveTab] = useState<"booking" | "info">("booking");

	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		service: "متابعة حمل",
		notes: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	return (
		<section className="booking-section" id="booking">
			<div className="booking-container">
				<div className="booking-header">
					<span className="booking-badge">
						<Stethoscope className="w-3.5 h-3.5 ml-1.5 text-rose-600" />
						احجزي موعدك الآن
					</span>
					<h2 className="booking-title">تواصل معنا واجهزي استشارتك بكل سهولة</h2>
					<p className="booking-subtitle">نحن هنا لخدمتك والرد على كافة استفساراتك الطبية. يسعدنا استقبالك في العيادة بمواعيد محددة لضمان راحتك ورعايتك.</p>
				</div>

				<div className="booking-card-wrapper">
					<div className="booking-tabs-nav">
						<button type="button" onClick={() => setActiveTab("booking")} className={`tab-btn ${activeTab === "booking" ? "active" : ""}`}>
							<Calendar className="w-4 h-4 ml-2" />
							حجز موعد جديد
						</button>
						<button type="button" onClick={() => setActiveTab("info")} className={`tab-btn ${activeTab === "info" ? "active" : ""}`}>
							<MapPin className="w-4 h-4 ml-2" />
							معلومات العيادة والمواعيد
						</button>
					</div>

					{activeTab === "booking" && (
						<div className="tab-content animate-fadeIn">
							{isSubmitted ? (
								<div className="success-box">
									<CheckCircle2 className="w-12 h-12 text-emerald-600 mb-2" />
									<h3>تم استلام طلب حجزك بنجاح!</h3>
									<p>سنتواصل معك قريباً لتأكيد الموعد النهائي عبر الهاتف أو الواتساب.</p>
									<button
										type="button"
										onClick={() => {
											setIsSubmitted(false);
											setFormData({ name: "", phone: "", service: "متابعة حمل", notes: "" });
										}}
										className="reset-btn"
									>
										حجز موعد آخر
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="booking-form">
									<div className="form-group">
										<label className="form-label">
											<User className="w-4 h-4 text-rose-600 ml-1" />
											الاسم الكامل:
										</label>
										<input
											type="text"
											required
											placeholder="أدخلي اسمك الكريم"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className="form-input"
										/>
									</div>

									<div className="form-group">
										<label className="form-label">
											<Phone className="w-4 h-4 text-rose-600 ml-1" />
											رقم الهاتف / الواتساب:
										</label>
										<input
											type="tel"
											required
											placeholder="01xxxxxxxxx"
											value={formData.phone}
											onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
											className="form-input"
										/>
									</div>

									<div className="form-group">
										<label className="form-label">
											<Stethoscope className="w-4 h-4 text-rose-600 ml-1" />
											نوع الخدمة أو الاستشارة:
										</label>
										<select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-input">
											<option value="متابعة حمل">متابعة الحمل والاطمئنان على الجنين</option>
											<option value="تأخر حمل وحقن مجهري">علاج تأخر الحمل والحقن المجهري</option>
											<option value="فحص نسائي دوري">فحص نسائي دوري وسونار</option>
											<option value="استشارة عامة">استشارة طبية عامة</option>
										</select>
									</div>

									<div className="form-group">
										<label className="form-label">
											<FileText className="w-4 h-4 text-rose-600 ml-1" />
											ملاحظات إضافية (اختياري):
										</label>
										<textarea
											rows={3}
											placeholder="اكتبي أي تفاصيل أو أعراض ترغبين في إخبار الدكتورة بها..."
											value={formData.notes}
											onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
											className="form-textarea"
										></textarea>
									</div>

									<button type="submit" className="submit-btn">
										<Calendar className="w-4 h-4 ml-2" />
										تأكيد وإرسال طلب الحجز
									</button>
								</form>
							)}
						</div>
					)}

					{activeTab === "info" && (
						<div className="tab-content animate-fadeIn">
							<div className="info-grid-single">
								<div className="info-item">
									<div className="info-icon-wrapper">
										<MapPin className="w-5 h-5 text-rose-600" />
									</div>
									<div>
										<h4>عنوان العيادة</h4>
										<p>برج الأطباء، الدور الثالث، العيادة المركزية لنساء والتوليد.</p>
									</div>
								</div>

								<div className="info-item">
									<div className="info-icon-wrapper">
										<Clock className="w-5 h-5 text-rose-600" />
									</div>
									<div>
										<h4>ساعات العمل</h4>
										<p>
											السبت إلى الخميس: من 2:00 ظهراً حتى 9:00 مساءً.
											<br />
											الجمعة: إجازة أسبوعية.
										</p>
									</div>
								</div>

								<div className="info-item">
									<div className="info-icon-wrapper">
										<Phone className="w-5 h-5 text-rose-600" />
									</div>
									<div>
										<h4>الاتصال السريع والدعم</h4>
										<p>هاتف / واتساب: +201117651690</p>
									</div>
								</div>

								<div className="clinic-map-action">
									<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link-btn">
										<MapPin className="w-4 h-4 ml-2" />
										فتح الموقع على خريطة جوجل التفاعلية
									</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
