// @/app/components/ui/ScrollToDown.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import "./ScrollToDown.css";

export default function ScrollToDown() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 150) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", toggleVisibility, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToNextSection = () => {
		const startPosition = window.scrollY;
		const targetPosition = window.innerHeight;
		const distance = targetPosition - startPosition;
		const duration = 750;
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
	};

	return (
		<button type="button" onClick={scrollToNextSection} aria-label="النزول إلى القسم التالي" className={`scroll-to-down-btn ${isVisible ? "show" : ""}`}>
			<ArrowDown className="w-6 h-6 scroll-icon" />
		</button>
	);
}
