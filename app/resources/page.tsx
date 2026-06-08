import { Book, FileText, Video, Code, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resourceCategories = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides for developers and users",
    items: [
      { name: "Getting Started Guide", type: "PDF" },
      { name: "API Reference", type: "Docs" },
      { name: "Smart Contract Specs", type: "Docs" },
    ],
  },
  {
    icon: Video,
    title: "Tutorials",
    description: "Step-by-step video walkthroughs",
    items: [
      { name: "Treasury Management 101", type: "Video" },
      { name: "Governance Participation", type: "Video" },
      { name: "Staking Deep Dive", type: "Video" },
    ],
  },
  {
    icon: Code,
    title: "Developer Tools",
    description: "SDKs, APIs, and integration resources",
    items: [
      { name: "JavaScript SDK", type: "GitHub" },
      { name: "Python SDK", type: "GitHub" },
      { name: "REST API", type: "Docs" },
    ],
  },
  {
    icon: FileText,
    title: "Research",
    description: "Whitepapers and technical analysis",
    items: [
      { name: "Treezures Whitepaper v2", type: "PDF" },
      { name: "Tokenomics Report", type: "PDF" },
      { name: "Security Audits", type: "PDF" },
    ],
  },
]

const quickLinks = [
  { name: "GitHub Repository", url: "#", icon: Code },
  { name: "Discord Community", url: "#", icon: ExternalLink },
  { name: "Brand Assets", url: "#", icon: Download },
]

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to build, integrate, and participate in the Treezures ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.url}>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {resourceCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg border border-border/40 p-3 transition-colors hover:bg-muted"
                        >
                          <span className="text-foreground">{item.name}</span>
                          <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            {item.type}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "How do I participate in governance?",
                a: "Hold TRZ tokens to vote on proposals and participate in treasury allocation decisions. Visit the Governance page for active proposals and voting details.",
              },
              {
                q: "What is TRZ used for?",
                a: "TRZ is the governance and coordination token of the Treezures ecosystem. It enables holders to participate in decentralized decision-making, parameter adjustments, and launchpad approvals. TRZ does not represent equity, ownership, or financial rights.",
              },
              {
                q: "How can I apply for funding?",
                a: "Submit your project through our Funding page. Our team will review your proposal within 48-72 hours.",
              },
              {
                q: "Where can I get support?",
                a: "Join our Discord community or email support@treezures.io for assistance with governance participation and ecosystem questions.",
              },
            ].map((faq) => (
              <Card key={faq.q}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
