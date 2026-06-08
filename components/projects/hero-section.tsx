"use client"

export function ProjectsHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">PORTFOLIO</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            Treezures Labs Projects Portfolio
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl">
            Innovative infra-tools, governance, community-led and utility projects in our ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}
