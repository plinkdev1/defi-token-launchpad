import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const fundingOptions = [
  {
    title: "Seed Funding",
    amount: "$50K - $250K",
    description: "For early-stage projects building core infrastructure",
    features: ["Non-dilutive capital", "6-month runway support", "Technical advisory", "Community access"],
  },
  {
    title: "Growth Funding",
    amount: "$250K - $1M",
    description: "For projects with proven traction seeking scale",
    features: ["Flexible terms", "12-month runway support", "Strategic partnerships", "Marketing support"],
    featured: true,
  },
  {
    title: "Ecosystem Grants",
    amount: "$10K - $50K",
    description: "For builders contributing to the ecosystem of Orÿa and Dust Protocols.",
    features: ["No strings attached", "Quick approval process", "Mentorship access", "Governance rights"],
  },
]

const process = [
  {
    step: 1,
    title: "Apply",
    description: "Submit your project details and funding requirements through our simple application.",
  },
  {
    step: 2,
    title: "Review",
    description: "Our team reviews your application and schedules a discovery call within 48 hours.",
  },
  {
    step: 3,
    title: "Due Diligence",
    description: "We conduct thorough technical and financial review of your project.",
  },
  {
    step: 4,
    title: "Fund",
    description: "Upon approval, funds are disbursed directly to your treasury within 7 days.",
  },
]

export default function FundingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Funding for Web3 Innovation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Access non-dilutive capital to build, scale, and grow your decentralized project. No equity required, just
              great ideas and execution.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Funding Options</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Choose the funding option that best fits your project stage
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {fundingOptions.map((option) => (
              <Card
                key={option.title}
                className={`relative ${option.featured ? "border-primary shadow-lg shadow-primary/10" : ""}`}
              >
                {option.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold text-foreground">{option.amount}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-6 block">
                    <Button className="w-full" variant={option.featured ? "default" : "outline"}>
                      Apply now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-center text-muted-foreground">From application to funding in as little as 2 weeks</p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Why Treezures Labs?</h2>
              <p className="mt-4 text-muted-foreground">
                We understand the unique challenges of Web3 projects. Our funding model is designed to support
                innovation without compromising your vision or ownership.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Shield, text: "No equity dilution required" },
                  { icon: Zap, text: "Fast approval and disbursement" },
                  { icon: TrendingUp, text: "Ongoing strategic support" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground">Total Funded</div>
                  <div className="text-3xl font-bold text-foreground">$12.5M+</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Projects Supported</div>
                  <div className="text-3xl font-bold text-foreground">87+</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Average Time to Fund</div>
                  <div className="text-3xl font-bold text-foreground">14 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
