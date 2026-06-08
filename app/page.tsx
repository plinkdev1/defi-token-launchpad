import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
