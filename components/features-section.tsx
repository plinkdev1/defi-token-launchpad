import { Shield, Zap, TrendingUp, Lock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Treasury",
    description: "Multi-signature wallets and audited smart contracts protect your assets.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Get immediate access to capital without lengthy approval processes.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic allocation designed to maximize ecosystem value.",
  },
  {
    icon: Lock,
    title: "Transparent Governance",
    description: "On-chain voting and real-time tracking of all treasury activities.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why choose Treezures Labs?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Built for the future of decentralized finance</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/40 bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
