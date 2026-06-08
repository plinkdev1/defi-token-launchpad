"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TrendingUp, Users, DollarSign } from "lucide-react"

const previousLaunches = [
  {
    id: 1,
    name: "OryaSwap Protocol",
    symbol: "ORYA",
    blockchain: "Ethereum",
    totalRaise: "$2.5M",
    participants: 1250,
    initialPrice: "$0.25",
    status: "Completed",
    image: "🔷",
    description:
      "Cross-chain DEX protocol enabling atomic swaps. Successfully raised $2.5M from 1,250 participants. Token price increased 3.2x post-launch.",
    tokenomics:
      "Total Supply: 100M ORYA. Community: 40%, Team: 20%, Treasury: 20%, Development: 20%. Vesting: 6 months linear unlock.",
  },
  {
    id: 2,
    name: "Dust Analytics",
    symbol: "DUST",
    blockchain: "Polygon",
    totalRaise: "$1.8M",
    participants: 892,
    initialPrice: "$0.18",
    status: "Completed",
    image: "✨",
    description:
      "On-chain analytics and risk assessment platform. Raised $1.8M with strong community support. Launched 4 weeks ago.",
    tokenomics:
      "Total Supply: 150M DUST. Community: 35%, Team: 25%, Treasury: 25%, Ecosystem: 15%. Vesting: 9 months with 3 month cliff.",
  },
  {
    id: 3,
    name: "FluxPoint Protocol",
    symbol: "FLPR",
    blockchain: "Arbitrum",
    totalRaise: "$3.2M",
    participants: 1840,
    initialPrice: "$0.32",
    status: "Completed",
    image: "⚡",
    description:
      "Liquidity aggregation layer for low-slippage swaps. Record-breaking IDO with highest participation rate. Live for 2 weeks.",
    tokenomics:
      "Total Supply: 80M FLPR. Community: 45%, Team: 18%, Treasury: 22%, Ecosystem: 15%. Vesting: 5 months linear with immediate 5% unlock.",
  },
]

export function PreviousLaunches() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Previous Launches</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore successful IDOs that launched through TRZ Launchpad
          </p>
        </div>

        {/* Launches Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previousLaunches.map((launch) => (
            <Card key={launch.id} className="overflow-hidden hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{launch.image}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{launch.name}</h3>
                      <p className="text-sm text-muted-foreground">{launch.symbol}</p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  >
                    {launch.status}
                  </Badge>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border/40">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Total Raise
                    </span>
                    <span className="font-semibold text-foreground">{launch.totalRaise}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Participants
                    </span>
                    <span className="font-semibold text-foreground">{launch.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Initial Price
                    </span>
                    <span className="font-semibold text-primary">{launch.initialPrice}</span>
                  </div>
                </div>

                {/* Blockchain Badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="bg-primary/5">
                    {launch.blockchain}
                  </Badge>
                </div>

                {/* Details Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl">{launch.image}</div>
                        <div>
                          <DialogTitle>{launch.name}</DialogTitle>
                          <DialogDescription>
                            {launch.symbol} on {launch.blockchain}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="space-y-6">
                      {/* Summary Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-muted p-4">
                          <p className="text-xs text-muted-foreground mb-1">Total Raise</p>
                          <p className="text-lg font-semibold">{launch.totalRaise}</p>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                          <p className="text-xs text-muted-foreground mb-1">Participants</p>
                          <p className="text-lg font-semibold">{launch.participants.toLocaleString()}</p>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                          <p className="text-xs text-muted-foreground mb-1">Initial Price</p>
                          <p className="text-lg font-semibold text-primary">{launch.initialPrice}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-semibold mb-2">Project Overview</h4>
                        <p className="text-sm text-muted-foreground">{launch.description}</p>
                      </div>

                      {/* Tokenomics */}
                      <div>
                        <h4 className="font-semibold mb-2">Tokenomics</h4>
                        <p className="text-sm text-muted-foreground">{launch.tokenomics}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button className="flex-1">View Contract</Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          Read Whitepaper
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
