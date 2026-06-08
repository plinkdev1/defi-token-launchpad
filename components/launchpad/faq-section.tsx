"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqCategories = [
  {
    title: "Getting Started",
    items: [
      {
        q: "How do I start participating in TRZ Launchpad IDOs?",
        a: "Simply connect your wallet, complete KYC verification, enter the lottery with your preferred allocation tier, and wait for the drawing. If selected, you can contribute funds to the IDO.",
      },
      {
        q: "Which wallets are supported?",
        a: "We support Dynamic.xyz, ReOwn (Coinbase), WalletConnect, MetaMask, and hardware wallets like Ledger. Additional integrations are added regularly.",
      },
      {
        q: "Can I participate on mobile?",
        a: "Yes, our platform is fully mobile-responsive. You can participate through any modern mobile browser with your preferred wallet.",
      },
    ],
  },
  {
    title: "Fees & Eligibility",
    items: [
      {
        q: "What are the participation fees?",
        a: "Lottery entry fee is 10 TRZ. If selected, you pay the project's minimum contribution amount. No hidden fees—all costs are transparent.",
      },
      {
        q: "Are there geographic restrictions?",
        a: "Some projects may have restrictions based on jurisdiction. We display restrictions upfront. Participation is restricted for residents of certain countries for regulatory compliance.",
      },
      {
        q: "What is the minimum KYC requirement?",
        a: "We use Blockpass for KYC verification. You need a valid government ID and proof of address. The process typically takes 5-10 minutes.",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        q: "Are TRZ Launchpad projects audited?",
        a: "We require third-party smart contract audits from reputable firms. All audit reports are available in each project's details page.",
      },
      {
        q: "How is my data protected?",
        a: "All KYC data is encrypted and stored securely by our KYC provider. We never share personal data without explicit consent.",
      },
      {
        q: "What happens if a project fails?",
        a: "Projects are vetted by our team before listing. However, all blockchain projects carry risk. We recommend reviewing audits and governance structures carefully before participating.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        q: "My wallet connection failed. What should I do?",
        a: "Try refreshing the page and reconnecting. Ensure your wallet has network access. If issues persist, try a different wallet provider.",
      },
      {
        q: "I completed KYC but still can't participate. Why?",
        a: "KYC verification typically takes 1-5 minutes. If delayed, check your email for verification requests. Contact support if issues continue.",
      },
      {
        q: "How do I claim my tokens after the IDO ends?",
        a: "Token claiming is automated. You'll receive a notification when tokens are ready. Visit the Launchpad dashboard and click 'Claim Tokens' to receive them.",
      },
    ],
  },
]

export function LaunchpadFAQSection() {
  return (
    <section className="border-t border-border/40 py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Find answers to common questions about TRZ Launchpad</p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <Card key={category.title}>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                <Accordion type="single" collapsible>
                  {category.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`${category.title}-${idx}`}>
                      <AccordionTrigger className="hover:text-primary">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
