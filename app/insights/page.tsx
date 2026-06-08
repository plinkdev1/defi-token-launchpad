import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const insights = [
  {
    category: "Market Analysis",
    title: "Q4 2025 DeFi Treasury Trends",
    excerpt: "An in-depth look at how decentralized treasuries are evolving and what it means for the ecosystem.",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    category: "Governance",
    title: "Proposal #47: Treasury Diversification Strategy",
    excerpt: "Breaking down the latest governance proposal and its potential impact on token holders.",
    date: "Nov 25, 2025",
    readTime: "5 min read",
  },
  {
    category: "Technology",
    title: "Introducing Treezures SDK v2.0",
    excerpt: "New developer tools for seamless integration with the Treezures protocol.",
    date: "Nov 20, 2025",
    readTime: "4 min read",
  },
  {
    category: "Partnership",
    title: "Strategic Partnership with SUI Network",
    excerpt: "Expanding our multi-chain presence to bring treasury services to the SUI ecosystem.",
    date: "Nov 15, 2025",
    readTime: "3 min read",
  },
  {
    category: "Education",
    title: "Understanding Non-Dilutive Funding",
    excerpt: "A comprehensive guide to alternative funding mechanisms in Web3.",
    date: "Nov 10, 2025",
    readTime: "10 min read",
  },
  {
    category: "Community",
    title: "Community Call Recap: November 2025",
    excerpt: "Key takeaways from our monthly community call including roadmap updates.",
    date: "Nov 5, 2025",
    readTime: "6 min read",
  },
]

const categories = ["All", "Market Analysis", "Governance", "Technology", "Partnership", "Education", "Community"]

export default function InsightsPage() {
  const featuredPost = insights.find((p) => p.featured)
  const regularPosts = insights.filter((p) => !p.featured)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Insights</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Analysis, updates, and perspectives from the Treezures Labs team.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="overflow-hidden border-primary/50">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 lg:p-12">
                  <div className="flex h-full flex-col justify-center">
                    <span className="text-sm font-medium text-primary">Featured</span>
                    <h2 className="mt-2 text-2xl font-bold text-foreground lg:text-3xl">{featuredPost.title}</h2>
                    <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link href="#" className="mt-6">
                      <Button className="gap-2">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden bg-gradient-to-br from-primary/10 to-transparent lg:block" />
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.title} className="group transition-all hover:border-primary/40">
                <CardHeader>
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
