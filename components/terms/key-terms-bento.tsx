"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Users, Lock, Gavel, TrendingUp, Shield } from "lucide-react"

const keyTerms = [
  {
    icon: AlertTriangle,
    title: "No Investment Product",
    description: "TRZ is a governance utility token, not an investment or financial product.",
  },
  {
    icon: Users,
    title: "DAO Governance Only",
    description: "Participation is limited to decentralized governance and protocol coordination.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your data is protected under GDPR and processed with strict confidentiality.",
  },
  {
    icon: Gavel,
    title: "Legal Jurisdiction",
    description: "Governed by Portuguese and EU law. Disputes resolved in Lisbon courts.",
  },
  {
    icon: TrendingUp,
    title: "No Financial Rights",
    description: "TRZ confers no equity, dividends, profits, or financial returns.",
  },
  {
    icon: Shield,
    title: "Risk Acknowledgment",
    description: "Users acknowledge and accept all risks associated with blockchain participation.",
  },
]

export function KeyTermsBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {keyTerms.map((term, idx) => {
        const Icon = term.icon
        return (
          <Card
            key={idx}
            className="border-border/40 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <CardTitle className="text-base">{term.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{term.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
