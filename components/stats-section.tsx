const stats = [
  { value: "$140M+", label: "Total Value Locked" },
  { value: "1,770+", label: "Token Holders" },
  { value: "$2.5M", label: "Ecosystem Rewards" },
  { value: "192M", label: "Tokens Burned" },
]

export function StatsSection() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
