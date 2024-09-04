import Creators from "@/components/Creators";
import HeroSection from "@/components/HeroSection";
import Information from "@/components/Information";
import TestimonialCards from "@/components/TestimonialCards";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Information/>
      <TestimonialCards/>
      <Creators/>
    </main>
  );
}
