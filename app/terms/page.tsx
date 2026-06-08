"use client"

import { TermsHeroSection } from "@/components/terms/hero-section"
import { TermsAccordion } from "@/components/terms/terms-accordion"
import { KeyTermsBento } from "@/components/terms/key-terms-bento"
import { TermsDisclaimer } from "@/components/terms/disclaimer-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, AlertCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="pt-20">
      <TermsHeroSection />

      {/* Main Terms Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These Terms of Service govern your access to and use of Treezures Labs platform. By participating in our
              governance ecosystem, you acknowledge that you have read, understood, and agree to be bound by these
              terms.
            </p>
            <TermsDisclaimer />
          </div>

          {/* Terms Sections */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Terms & Conditions</h2>
            <TermsAccordion />
          </div>

          {/* Key Terms Bento Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Terms Summary</h2>
            <p className="text-muted-foreground mb-8">
              Essential points you must understand before participating in Treezures governance:
            </p>
            <KeyTermsBento />
          </div>

          {/* Risk Acknowledgment */}
          <Card className="border-border/40 bg-gradient-to-br from-yellow-500/10 to-transparent mb-12">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Risk Acknowledgment</h3>
                  <p className="text-muted-foreground mb-3">You acknowledge and accept the following risks:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Smart contract vulnerabilities or failure</li>
                    <li>• Blockchain network failures or congestion</li>
                    <li>• Loss of private keys or wallet compromise</li>
                    <li>• Market volatility and asset value fluctuation</li>
                    <li>• Regulatory changes affecting governance participation</li>
                    <li>• Complete loss of invested assets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="border-border/40 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Questions About These Terms?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact our Legal Team at{" "}
                    <a href="mailto:legal@treezureslabs.com" className="text-primary hover:underline">
                      legal@treezureslabs.com
                    </a>
                    . We will respond to inquiries within 10 business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Summary */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg bg-card border border-border/40 p-8">
            <h3 className="font-semibold text-foreground mb-4">Legal & Compliance Summary</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Jurisdiction:</strong> Governed by Portuguese and European Union law
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Disputes:</strong> Resolved in Lisbon courts or through arbitration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>No Investment:</strong> TRZ is governance utility only, not a financial product
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Jurisdiction Restrictions:</strong> Users from sanctioned countries are prohibited
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>
                  <strong>Suspension Rights:</strong> We reserve the right to suspend violating accounts immediately
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
