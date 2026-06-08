"use client"

import { Scale } from "lucide-react"

export function TermsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-16">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Scale className="h-16 w-16 text-primary opacity-80" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Treezures Labs Terms of Service
        </h1>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Governing participation in our governance and protocol ecosystem
        </p>

        <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>
    </section>
  )
}
