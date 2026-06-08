"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Zap } from "lucide-react"

export function LaunchpadInfoSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* About Section */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">About TRZ Launchpad</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The TRZ Launchpad facilitates token sales and helps blockchain projects raise capital in a fair, transparent
            manner. Our platform uses a lottery-based system to ensure equal opportunity for all participants, from
            retail users to institutional investors.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After passing our rigorous vetting process, projects receive listing approval. Users are randomly selected
            via lottery after KYC verification to participate in IDOs, ensuring fairness and preventing whale dominance.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Vetted Projects</h3>
              <p className="text-sm text-muted-foreground">
                Every project undergoes rigorous due diligence and smart contract audits before listing.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Fair Lottery System</h3>
              <p className="text-sm text-muted-foreground">
                Random allocation ensures equal opportunity for all participants regardless of wallet size.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">KYC Verified</h3>
              <p className="text-sm text-muted-foreground">
                Secure identity verification protects against fraud and ensures regulatory compliance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How the Lottery Works */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">How The Lottery System Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Users Enter With Stake</h4>
                  <p className="text-sm text-muted-foreground">
                    Participants lock 10 TRZ to enter the lottery pool. Higher tier members have better odds.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Smart Contract Draw</h4>
                  <p className="text-sm text-muted-foreground">
                    On the draw date, a Chainlink VRF ensures randomness. Winners are selected transparently on-chain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Winners Contribute</h4>
                  <p className="text-sm text-muted-foreground">
                    Selected participants receive allocation slots and can contribute within the specified timeframe.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tokens Distributed</h4>
                  <p className="text-sm text-muted-foreground">
                    After IDO closes, tokens are distributed according to the project's vesting schedule.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
