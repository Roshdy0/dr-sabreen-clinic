// @/app/components/Booking/Booking.tsx
"use client";

import { useState } from "react";
import { Calendar, Phone, MapPin, Clock, MessageSquare, CheckCircle2, User, Stethoscope, ClipboardList } from "lucide-react";
import "./Booking.css";

export default function Booking() {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		service: "متابعة حمل",
		date: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);

		const phoneNumber = "201117651690";
		const message = `مرحباً د. صبرين، أود حجز موعد جديد:
- *الاسم:* ${formData.name}
- *رقم الهاتف:* ${formData.phone}
- *نوع الخدمة:* ${formData.service}
- *الموعد المفضل:* ${formData.date}`;

		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<section className="contact-section" id="booking">
			<div className="contact-container">
				{/* رأس القسم */}
				<div className="contact-header">
					<span className="contact-badge">
						<Stethoscope className="w-4 h-4 ml-1.5 text-sky-600" />
						احجزي موعدك الآن
					</span>
					<h2 className="contact-title">تواصل معنا واحجزي استشارتك بكل سهولة</h2>
					<p className="contact-subtitle">نحن هنا لخدمتك والرد على كافة استفساراتك الطبية. يسعدنا استقبالك في العيادة بمواعيد محددة لضمان راحتك ورعايتك.</p>
				</div>

				<div className="contact-grid grid grid-cols-1 lg:grid-cols-2">
					{/* نموذج الحجز */}
					<div className="contact-card form-card">
						<h3 className="card-title flex items-center gap-2">
							<ClipboardList className="w-5 h-5 text-rose-600" />
							حجز موعد جديد
						</h3>
						{submitted ? (
							<div className="success-message">
								<CheckCircle2 className="w-12 h-12 text-rose-600 mx-auto" />
								<h4>تم إرسال طلب حجزك بنجاح!</h4>
								<p>سيقوم طاقم العيادة بالتواصل معك قريباً جداً عبر الهاتف أو الواتساب لتأكيد الموعد النهائي.</p>
								<button onClick={() => setSubmitted(false)} className="reset-btn" aria-label="حجز موعد آخر">
									حجز موعد آخر
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="booking-form" aria-label="نموذج حجز موعد">
								<div className="form-group">
									<label htmlFor="name" className="flex items-center gap-1.5">
										<User className="w-4 h-4 text-rose-600" />
										الاسم الكامل
									</label>
									<input type="text" id="name" required placeholder="أدخلي اسمك الكريم" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
								</div>

								<div className="form-group">
									<label htmlFor="phone" className="flex items-center gap-1.5">
										<Phone className="w-4 h-4 text-rose-600" />
										رقم الهاتف / الواتساب
									</label>
									<input type="tel" id="phone" required placeholder="01xxxxxxxxx" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
								</div>

								<div className="form-group">
									<label htmlFor="service" className="flex items-center gap-1.5">
										<Stethoscope className="w-4 h-4 text-rose-600" />
										نوع الخدمة أو الاستشارة
									</label>
									<select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
										<option value="متابعة حمل">متابعة حمل وولادة</option>
										<option value="تأخر حمل">علاج تأخر الحمل والحقن المجهري</option>
										<option value="سونار متقدم">سونار رباعي الأبعاد ومتقدم</option>
										<option value="فحص دوري">فحص نسائي دوري</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="date" className="flex items-center gap-1.5">
										<Calendar className="w-4 h-4 text-rose-600" />
										الموعد المفضل
									</label>
									<input type="date" id="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
								</div>

								<button type="submit" className="submit-btn" aria-label="تأكيد طلب الحجز">
									تأكيد طلب الحجز
								</button>
							</form>
						)}
					</div>

					{/* معلومات العيادة */}
					<div className="contact-card info-card">
						<h3 className="card-title flex items-center gap-2">
							<MapPin className="w-5 h-5 text-sky-600" />
							معلومات العيادة والمواعيد
						</h3>

						<div className="info-item">
							<div className="info-icon">
								<MapPin className="w-5 h-5 text-rose-600" />
							</div>
							<div>
								<h4>عنوان العيادة</h4>
								<p>العيادة المركزية لطب النساء والتوليد، برج الأطباء، الدور الثالث.</p>
							</div>
						</div>

						<div className="info-item">
							<div className="info-icon">
								<Clock className="w-5 h-5 text-sky-600" />
							</div>
							<div>
								<h4>ساعات العمل</h4>
								<p>
									السبت إلى الخميس: من 2 ظهراً حتى 9 مساءً.
									<br />
									الجمعة: إجازة أسبوعية.
								</p>
							</div>
						</div>

						<div className="info-item">
							<div className="info-icon">
								<Phone className="w-5 h-5 text-rose-600" />
							</div>
							<div>
								<h4>الاتصال السريع والدعم</h4>
								<p>هاتف / واتساب: +201117651690</p>
							</div>
						</div>

						<div className="quick-whatsapp">
							<a
								href="https://wa.me/201117651690"
								target="_blank"
								rel="noopener noreferrer"
								className="whatsapp-btn flex items-center justify-center gap-2"
								aria-label="تواصل عبر الواتساب"
							>
								<MessageSquare className="w-5 h-5" />
								تواصل فوري عبر الواتساب
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
