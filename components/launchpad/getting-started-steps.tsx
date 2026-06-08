"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, CheckCircle2, Battery as Lottery, Zap, ArrowRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Connect Wallet",
    description: "Select your wallet and chain to get started with TRZ Launchpad",
    icon: Wallet,
    color: "text-blue-500",
    details: ["Choose from multiple wallet providers", "Select your preferred blockchain", "Approve wallet connection"],
  },
  {
    id: 2,
    title: "Complete KYC",
    description: "Verify your identity to participate in IDOs",
    icon: CheckCircle2,
    description: "Verify your identity to participate in IDOs",
    icon: CheckCircle2,
    color: "text-green-500",
    details: ["Verify email address", "Submit identity documents", "Approve KYC verification"],
  },
  {
    id: 3,
    title: "Lottery Participation",
    description: "Enter the lottery to get selected for IDO allocation",
    icon: Lottery,
    color: "text-purple-500",
    details: ["Choose allocation tier", "Entry fee: 10 TRZ", "Automatic lottery drawing"],
  },
  {
    id: 4,
    title: "Contribute Funds",
    description: "If selected, contribute to the IDO and receive tokens",
    icon: Zap,
    color: "text-yellow-500",
    details: ["Confirm allocation amount", "Send contribution", "Receive IDO tokens"],
  },
]

export function GettingStartedSteps() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Getting Started</h2>
          <p className="mt-4 text-lg text-muted-foreground">Follow these simple steps to participate in TRZ IDOs</p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            const isExpanded = expandedStep === step.id

            return (
              <Card
                key={step.id}
                className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                  isExpanded ? "ring-1 ring-primary md:col-span-2 lg:col-span-4" : ""
                }`}
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Step Number */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                        <ArrowRight
                          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-border/40 space-y-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{detail}</span>
                            </div>
                          ))}
                          <Button className="w-full mt-4">Continue</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
