import { LaunchpadHeroSection } from "@/components/launchpad/hero-section"
import { GettingStartedSteps } from "@/components/launchpad/getting-started-steps"
import { PreviousLaunches } from "@/components/launchpad/previous-launches"
import { LaunchpadInfoSection } from "@/components/launchpad/info-section"
import { LaunchpadFAQSection } from "@/components/launchpad/faq-section"
import { ApplyProjectSection } from "@/components/launchpad/apply-project-section"

export const metadata = {
  title: "TRZ Launchpad - IDO Platform for Blockchain Projects",
  description:
    "Launch and participate in token IDOs through TRZ Launchpad. Fair lottery system, vetted projects, and secure infrastructure.",
}

export default function LaunchpadPage() {
  return (
    <div className="pt-20">
      <LaunchpadHeroSection />
      <GettingStartedSteps />
      <PreviousLaunches />
      <LaunchpadInfoSection />
      <LaunchpadFAQSection />
      <ApplyProjectSection />
    </div>
  )
}
