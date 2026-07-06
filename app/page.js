import HeroSection from "@/sections/home/HeroSection";
import FeaturedCars from "@/sections/home/FeaturedCars";
import StatsSection from "@/sections/home/StatsSection";
import BrandSection from "@/sections/home/BrandSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <StatsSection />
      <BrandSection />
      <TestimonialsSection />
    </>
  );
}
