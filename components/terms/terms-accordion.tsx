"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, AlertCircle, Scale, Shield, Gavel, Lock, FileText, Trash2 } from "lucide-react"

const termsItems = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content:
      "By accessing and using Treezures Labs, you acknowledge and agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please discontinue use immediately. These terms apply to all users, visitors, and participants in our governance ecosystem.",
  },
  {
    id: "eligibility",
    icon: Shield,
    title: "Eligibility & Compliance",
    content:
      "You must be at least 18 years old and of legal age in your jurisdiction to use Treezures Labs. You agree to comply with all applicable local, national, and international laws. We prohibit access from restricted jurisdictions as determined by economic sanctions or local regulations. Users must not be on any government sanctions lists.",
  },
  {
    id: "services",
    icon: FileText,
    title: "Services Provided",
    content:
      "Treezures Labs provides a platform for governance voting, treasury allocation, and protocol utilities. We do not provide financial services, investment products, or trading facilities. Our services are for governance participation in a decentralized autonomous organization (DAO) only. TRZ token holders participate in governance operations at their discretion.",
  },
  {
    id: "conduct",
    icon: AlertCircle,
    title: "User Conduct",
    content:
      "You agree not to: (1) Engage in illegal activities; (2) Violate community guidelines or governance norms; (3) Attempt unauthorized system access; (4) Manipulate voting or governance processes; (5) Use the platform for fraud, deception, or harassment; (6) Distribute malware or harmful code. Violations may result in immediate suspension.",
  },
  {
    id: "ip-rights",
    icon: Lock,
    title: "Intellectual Property",
    content:
      "All content, design, code, and materials on Treezures Labs are owned by Treezures Labs or licensed from third parties. You are granted a limited, non-exclusive, non-transferable license to use our platform for governance participation only. You may not reproduce, distribute, or commercialize any content without explicit written permission.",
  },
  {
    id: "disclaimers",
    icon: AlertCircle,
    title: "Disclaimers",
    content:
      "Treezures Labs is provided 'as is' without warranties of any kind. We make no representations regarding reliability, availability, accuracy, or fitness for a particular purpose. Participation in governance involves risks including loss of invested assets, smart contract failures, and market volatility. You assume all risks associated with participation.",
  },
  {
    id: "liability",
    icon: Gavel,
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Treezures Labs and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages. Our total liability is limited to fees paid by you in the past 12 months. We are not responsible for losses from smart contract failures, hacking, wallet compromise, or market downturns.",
  },
  {
    id: "termination",
    icon: Trash2,
    title: "Termination of Access",
    content:
      "We reserve the right to suspend or terminate your access to Treezures Labs at any time for: (1) Violation of these terms; (2) Suspicious or fraudulent activity; (3) Non-compliance with jurisdictional laws; (4) Sanctions list involvement; (5) Governance rule violations. Termination may be immediate and without prior notice in serious cases.",
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "Governing Law & Jurisdiction",
    content:
      "These terms are governed by the laws of Portugal and the European Union. Any disputes arising from your use of Treezures Labs shall be subject to the exclusive jurisdiction of the courts of Lisbon, Portugal. You consent to personal jurisdiction and agree to submit to the binding arbitration or court proceedings.",
  },
  {
    id: "changes",
    icon: FileText,
    title: "Changes to Terms",
    content:
      "We may modify these terms at any time. Updates will be posted on our website with a new 'Last Updated' date. Material changes will be notified via site banner with 30 days notice. Your continued use of Treezures Labs after updates constitutes acceptance of the new terms.",
  },
]

export function TermsAccordion() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {termsItems.map((item) => {
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
