import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"

const treasuryAssets = [
  { name: "ETH", amount: "32,887,245", value: "$82,546.98", change: "+2.5%", positive: true },
  { name: "SUI", amount: "1,250,000", value: "$57,619.50", change: "+5.2%", positive: true },
  { name: "USDC", amount: "50,000", value: "$50,000.00", change: "0%", positive: true },
]

const allocations = [
  { category: "Treasury Reserve", percentage: 45, amount: "$63,074.92" },
  { category: "Ecosystem Rewards", percentage: 25, amount: "$35,041.62" },
  { category: "Operating Costs", percentage: 15, amount: "$21,024.97" },
  { category: "Accumulation Fund", percentage: 15, amount: "$21,024.97" },
]

export default function TreasuryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Treasury</h1>
          <p className="text-muted-foreground">Manage and monitor treasury assets</p>
        </div>
        <Button className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Sync Balances
        </Button>
      </div>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Total Portfolio Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-foreground">$140,166.48</div>
          <div className="mt-2 flex items-center text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            +3.2% from last week
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {treasuryAssets.map((asset) => (
          <Card key={asset.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{asset.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{asset.amount}</div>
              <div className="text-muted-foreground">{asset.value}</div>
              <div className={`mt-2 flex items-center text-sm ${asset.positive ? "text-green-500" : "text-red-500"}`}>
                {asset.positive ? (
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                )}
                {asset.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Treasury Allocations</CardTitle>
          <CardDescription>How funds are distributed across categories</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {allocations.map((allocation) => (
            <div key={allocation.category} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{allocation.category}</span>
                <span className="text-muted-foreground">
                  {allocation.amount} ({allocation.percentage}%)
                </span>
              </div>
              <Progress value={allocation.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
