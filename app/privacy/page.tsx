"use client"

import { PrivacyHeroSection } from "@/components/privacy/hero-section"
import { PolicyAccordion } from "@/components/privacy/policy-accordion"
import { RightsBento } from "@/components/privacy/rights-bento"
import { PrivacyDisclaimer } from "@/components/privacy/disclaimer-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <PrivacyHeroSection />

      {/* Main Policy Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Treezures Labs, we take data protection seriously. This Privacy Policy outlines how we collect, use,
              store, and protect your information as you participate in our governance ecosystem. We comply with GDPR,
              CCPA, and international data protection regulations.
            </p>
            <PrivacyDisclaimer />
          </div>

          {/* Policy Sections */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Privacy Policy Sections</h2>
            <PolicyAccordion />
          </div>

          {/* Your Rights Bento Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Your Data Rights</h2>
            <p className="text-muted-foreground mb-8">
              As a Treezures Labs user, you have comprehensive rights under GDPR and other privacy regulations:
            </p>
            <RightsBento />
          </div>

          {/* Contact Card */}
          <Card className="border-border/40 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Privacy Questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact our Data Protection Team at{" "}
                    <a href="mailto:support@treezureslabs.com" className="text-primary hover:underline">
                      support@treezureslabs.com
                    </a>
                    . We respond to all inquiries within 30 days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regulatory Compliance Notice */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg bg-card border border-border/40 p-8">
            <h3 className="font-semibold text-foreground mb-4">Regulatory Compliance</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>GDPR Compliant:</strong> Full compliance with EU General Data Protection Regulation for all
                  users in the EEA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Data Minimization:</strong> We collect only essential data required for governance
                  participation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>EU Data Storage:</strong> All personal data stored on EU-based servers with encryption
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Third-Party Agreements:</strong> All service providers bound by Data Processing Agreements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Blockchain Transparency:</strong> On-chain governance actions are publicly visible but
                  pseudonymous
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
