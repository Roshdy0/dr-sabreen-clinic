// @/app/page.tsx
import Hero from "@/app/components/Home/Hero/Hero";
import TrustBadges from "@/app/components/Home/TrustBadges/TrustBadges";
import Services from "@/app/components/Home/Services/Services";
import Testimonials from "@/app/components/Home/Testimonials/Testimonials";
import VideoReels from "@/app/components/Home/Reels/VideoReels";
import FAQ from "@/app/components/Home/FAQ/FAQ";
import ScrollToTop from "@/app/components/ui/Buttons/ScrollToTop/ScrollToTop";
import ScrollToDown from "@/app/components/ui/Buttons/ScrollToDown/ScrollToDown";
export default function Home() {
	return (
		<div>
			<Hero />
			<TrustBadges />
			<Services />
			<Testimonials />
			<VideoReels />
			<FAQ />
			<ScrollToTop />
			<ScrollToDown />
		</div>
	);
}
