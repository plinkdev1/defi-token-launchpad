"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24">
      <ParticlesBackground />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        {/* Wave Pattern */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full text-primary/5"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Treezures Intelligence</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Soon</span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Treezures Labs: A <span className="text-primary">Creative Studio</span> for Web3
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            We innovate, design, and build the future of decentralized protocol governance and ecosystem coordination.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className=" bg-transparent" >
              Learn more
            </Button>
          </div>
        </div>

        {/* 3D Cards Section */}
        <div className="relative mt-20 flex items-center justify-center">
          <div className="flex gap-4 perspective-1000">
            {/* Card 1 */}
            <div className="relative h-32 w-32 rotate-[-15deg] rounded-2xl bg-gradient-to-br from-primary/80 to-primary p-4 shadow-2xl transition-transform hover:rotate-[-10deg] hover:scale-110 sm:h-40 sm:w-40">
              <div className="flex h-full flex-col items-center justify-center text-primary-foreground">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-36 w-36 rounded-2xl bg-gradient-to-br from-primary to-primary/60 p-4 shadow-2xl transition-transform hover:scale-110 sm:h-48 sm:w-48">
              <div className="flex h-full flex-col items-center justify-center text-primary-foreground">
                <svg
                  className="h-10 w-10 sm:h-14 sm:w-14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-32 w-32 rotate-[15deg] rounded-2xl bg-gradient-to-br from-primary/60 to-primary/80 p-4 shadow-2xl transition-transform hover:rotate-[10deg] hover:scale-110 sm:h-40 sm:w-40">
              <div className="flex h-full flex-col items-center justify-center text-primary-foreground">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
