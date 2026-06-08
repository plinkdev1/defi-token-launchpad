import { Users, Target, Globe, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former DeFi protocol architect with 10+ years in fintech.",
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    bio: "Blockchain engineer, previously at major L1 protocols.",
  },
  {
    name: "David Kim",
    role: "Head of Treasury",
    bio: "Traditional finance background, crypto native since 2017.",
  },
  {
    name: "Emily Wong",
    role: "Head of Partnerships",
    bio: "Built BD teams at multiple successful Web3 startups.",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to empower Web3 builders with the capital they need to innovate.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our token holders are our partners. Every decision serves the ecosystem.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We support projects from every corner of the world, building a borderless future.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of transparency and execution.",
  },
]

const milestones = [
  { year: "2021", event: "Treezures Labs founded" },
  { year: "2022", event: "First $1M deployed to ecosystem" },
  { year: "2023", event: "Reached 1,000+ token holders" },
  { year: "2024", event: "Launched governance v2.0" },
  { year: "2025", event: "$10M+ total value locked" },
]

export default function CompanyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Building the Future of DeFi
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Treezures Labs is pioneering decentralized treasury management, providing Web3 projects with the capital
              and support they need to thrive in the new economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Our Values</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Leadership Team</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Experienced builders from Web3 and traditional finance
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/40" />
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Our Journey</h2>
          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="rounded-lg border border-border/40 bg-card p-4">
                        <div className="text-lg font-bold text-primary">{milestone.year}</div>
                        <div className="mt-1 text-muted-foreground">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
