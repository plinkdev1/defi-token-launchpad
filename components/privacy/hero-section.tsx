"use client"

import { Lock, Shield } from "lucide-react"

export function PrivacyHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-20">
      {/* Subtle gradient background with governance icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Subtle governance icons */}
      <div className="absolute inset-0 opacity-5">
        <Lock className="absolute top-20 left-20 h-24 w-24" />
        <Shield className="absolute bottom-20 right-20 h-24 w-24" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Treezures Labs Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Committed to data protection and transparency in governance operations.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
