// @/app/components/layout/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
	const [theme, setTheme] = useState("light");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const savedTheme = document.documentElement.getAttribute("data-theme") || "light";
		setTheme(savedTheme);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
		document.documentElement.setAttribute("data-theme", nextTheme);
		localStorage.setItem("theme", nextTheme);
	};

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		// 1. لو رابط رئيسي (مثل /#hero) ونحن لسنا في الصفحة الرئيسية أساساً
		if (href.startsWith("/#") && window.location.pathname !== "/") {
			// دع المتصفح ينتقل للرئيسية طبيعياً
			setIsMobileMenuOpen(false);
			return;
		}

		if (href.includes("#")) {
			const targetId = href.split("#")[1];
			const element = document.getElementById(targetId);

			if (element) {
				e.preventDefault();
				const navHeight = 80;
				const elementPosition = element.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = elementPosition - navHeight;

				const startPosition = window.scrollY;
				const distance = offsetPosition - startPosition;
				const duration = 700;
				let startTime: number | null = null;

				const animation = (currentTime: number) => {
					if (startTime === null) startTime = currentTime;
					const timeElapsed = currentTime - startTime;
					const progress = Math.min(timeElapsed / duration, 1);
					const ease = progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

					window.scrollTo(0, startPosition + distance * ease);

					if (timeElapsed < duration) {
						requestAnimationFrame(animation);
					}
				};

				requestAnimationFrame(animation);
				window.history.pushState(null, "", href);
			}
		}
		setIsMobileMenuOpen(false);
	};

	const navItems = [
		{ name: "الرئيسية", href: "/#hero" },
		{ name: "الخدمات", href: "/#services" },
		{ name: "آراء المرضى", href: "/#testimonials" },
	];

	return (
		<header className="clinic-navbar">
			<div className="nav-container">
				<p className="nav-logo">
					عيادة <span>د. صبرين بدر الديب</span>
				</p>

				<nav className="nav-links">
					{navItems.map((item, index) => (
						<a key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)} aria-label={item.name}>
							{item.name}
						</a>
					))}
				</nav>

				<div className="nav-actions">
					<button onClick={toggleTheme} aria-label="تبديل الوضع الليلي" title="تبديل الوضع الليلي" className="theme-toggle-btn">
						{theme === "light" ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
					</button>

					<button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="فتح القائمة الرئيسية">
						{isMobileMenuOpen ? "✕" : "☰"}
					</button>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="mobile-dropdown-menu">
					{navItems.map((item, index) => (
						<a key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="mobile-nav-link">
							{item.name}
						</a>
					))}
					<Link href="/calculator" className="mobile-nav-link calc-highlight" onClick={() => setIsMobileMenuOpen(false)}>
						حاسبة الحمل و التبويض
					</Link>
					<Link href="/booking" className="btn-primary text-sm py-3 px-5 text-center mt-2">
						احجزي موعداً الآن
					</Link>
				</div>
			)}
		</header>
	);
}
