import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Users, Activity, Wallet } from "lucide-react"

const metrics = [
  { label: "Total Value Locked", value: "$2.4M", change: "+12.5%", icon: Wallet },
  { label: "Active Wallets", value: "1,770", change: "+8.3%", icon: Users },
  { label: "Daily Transactions", value: "342", change: "+15.2%", icon: Activity },
  { label: "Avg. Transaction Size", value: "$1,250", change: "+3.1%", icon: TrendingUp },
]

const topHolders = [
  { rank: 1, address: "0x742d...8f3e", balance: "5,250,000 ETH", percentage: "15.9%" },
  { rank: 2, address: "0x8a3b...2d4c", balance: "3,100,000 ETH", percentage: "9.4%" },
  { rank: 3, address: "0x1f5e...9a7b", balance: "2,750,000 ETH", percentage: "8.3%" },
  { rank: 4, address: "0x3c2a...6e8d", balance: "2,200,000 ETH", percentage: "6.7%" },
  { rank: 5, address: "0x9d7f...4b1a", balance: "1,850,000 ETH", percentage: "5.6%" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track performance and key metrics</p>
        </div>
        <Select defaultValue="7d">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="90d">90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.label}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-green-500">{metric.change} from last period</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Volume</CardTitle>
            <CardDescription>Daily transaction count over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed border-border rounded-lg bg-muted/20">
              <div className="text-center">
                <TrendingUp className="mx-auto h-12 w-12 text-primary/50" />
                <p className="mt-2 text-muted-foreground">Line chart visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Holder Distribution</CardTitle>
            <CardDescription>Token distribution by wallet size</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed border-border rounded-lg bg-muted/20">
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-primary/50" />
                <p className="mt-2 text-muted-foreground">Bar chart visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Holders</CardTitle>
          <CardDescription>Largest token holders by balance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Address</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Balance</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">% of Supply</th>
                </tr>
              </thead>
              <tbody>
                {topHolders.map((holder) => (
                  <tr key={holder.rank} className="border-b border-border/40">
                    <td className="px-4 py-3 text-sm font-medium">{holder.rank}</td>
                    <td className="px-4 py-3 text-sm font-mono text-muted-foreground">{holder.address}</td>
                    <td className="px-4 py-3 text-right text-sm">{holder.balance}</td>
                    <td className="px-4 py-3 text-right text-sm text-muted-foreground">{holder.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
