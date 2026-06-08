// ... existing code up to the hero section ...

export default function GovernancePage() {
  const progressPercentage = (3.29 / 6.9) * 100

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="border-b border-border/40 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Treasury Governance</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Transparent, on-chain governance for our decentralized treasury. TRZ token holders vote on allocations,
            parameter changes, and ecosystem initiatives. Track all treasury activities and participate in
            decision-making in real-time. Note: TRZ is a utility governance token and does not represent equity,
            ownership, or investment returns.
          </p>
        </div>
      </section>

      {/* Regulatory & Compliance Section */}
      <section className="border-b border-border/40 py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-lg bg-background/50 border border-border/40 p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Regulatory & Compliance</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>Safe-Harbor Declaration:</strong> TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit. Users participate at their own risk and must comply with local jurisdictions.
              </p>
              <div className="pt-4 border-t border-border/40 space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What TRZ Is</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Governance coordination token</li>
                    <li>Voting mechanism for protocol decisions</li>
                    <li>Treasury allocation tool</li>
                    <li>Non-custodial participation asset</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What TRZ Is NOT</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Financial investment or security</li>
                    <li>Revenue share or dividend vehicle</li>
                    <li>Ownership stake in Treezures Labs</li>
                    <li>Interest-bearing or yield-generating asset</li>
                  </ul>
                </div>
              </div>
              <p className="pt-4 italic">
                For detailed information, see <a href="/docs/REGULATORY_COMPLIANCE.md" className="text-primary hover:underline">our compliance framework</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of existing governance content remains unchanged ... */}
    </div>
  )
}
