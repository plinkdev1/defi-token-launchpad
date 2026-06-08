"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LaunchpadHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">TRZ LAUNCHPAD</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            Get exclusive early access to new TRZ project IDOs
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl">
            Web3 projects you can trust, supported by industry-leading creators and funds.
          </p>

          {/* CTA Button */}
          <Button size="lg" className="gap-2 mt-4">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
