"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lock, Shield, Cookie, Mail, FileText } from "lucide-react"

const policyItems = [
  {
    id: "introduction",
    icon: FileText,
    title: "Introduction",
    content:
      "Treezures Labs respects your privacy. This policy explains how we collect, use, and protect data in our governance and protocol utility ecosystem. We are committed to GDPR compliance for all EU users and maintain strict data protection standards.",
  },
  {
    id: "data-collected",
    icon: Lock,
    title: "Data Collected",
    content:
      "We collect: (1) Wallet addresses for governance participation and onboarding; (2) Anonymized analytics data without personally identifiable information (PII); (3) Essential cookies for site functionality; (4) Public transaction data on blockchain networks. We do not collect financial data, payment information, or sensitive personal identifiers.",
  },
  {
    id: "purpose",
    icon: Shield,
    title: "Purpose & Use",
    content:
      "Your data is used solely for: (1) Onboarding new governance participants; (2) Voting and proposal participation; (3) Protocol coordination and treasury allocation; (4) Security and fraud prevention; (5) Improving user experience through anonymized analytics. We do not use data for marketing, advertising, or share it with third parties without explicit consent.",
  },
  {
    id: "sharing-storage",
    icon: Shield,
    title: "Data Sharing & Storage",
    content:
      "Data is stored on EU-based servers (Supabase) complying with GDPR. We share data only with essential service providers under Data Processing Agreements (DPA), including: wallet adapters for blockchain interaction, authentication providers, and governance smart contracts. All third parties are contractually bound to maintain confidentiality.",
  },
  {
    id: "rights",
    icon: Lock,
    title: "Your Rights",
    content:
      "Under GDPR, you have the right to: (1) Access your data; (2) Request correction or deletion; (3) Withdraw consent at any time; (4) Object to processing; (5) Request data portability. To exercise any of these rights, contact support@treezureslabs.com with your wallet address. We will respond within 30 days.",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking",
    content:
      "We use essential cookies only for site functionality (authentication, session management). No marketing, analytics, or tracking cookies are used. You can manage cookie preferences in your browser settings. By using Treezures Labs, you consent to essential cookies.",
  },
  {
    id: "changes",
    icon: FileText,
    title: "Policy Changes",
    content:
      "We may update this policy to reflect legal requirements, governance changes, or operational improvements. Material updates will be notified via site banner with 30 days notice. Continued use constitutes acceptance of updates.",
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact & Support",
    content:
      "Questions about this policy or data privacy? Contact us at support@treezureslabs.com or visit our Discord community. For data requests or complaints, contact our Data Protection Officer.",
  },
]

export function PolicyAccordion() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {policyItems.map((item) => {
          const Icon = item.icon
          return (
            <AccordionItem key={item.id} value={item.id} className="border-b border-border/40">
              <AccordionTrigger className="hover:no-underline py-4 px-4 md:px-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground text-left">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4">
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
