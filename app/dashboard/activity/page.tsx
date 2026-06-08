import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, ArrowDownRight, RefreshCw, Wallet, Send, Download, Users } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "Transfer",
    from: "0x742d...8f3e",
    to: "0x8a3b...2d4c",
    amount: "72,020 ETH",
    value: "$181",
    time: "2 min ago",
    status: "Completed",
  },
  {
    id: 2,
    type: "Stake",
    from: "0x1f5e...9a7b",
    to: "Staking Pool",
    amount: "150,000 ETH",
    value: "$376.50",
    time: "15 min ago",
    status: "Completed",
  },
  {
    id: 3,
    type: "Withdrawal",
    from: "Treasury",
    to: "0x3c2a...6e8d",
    amount: "25,000 ETH",
    value: "$62.75",
    time: "1 hour ago",
    status: "Pending",
  },
  {
    id: 4,
    type: "Allocation",
    from: "Treasury",
    to: "Ecosystem Fund",
    amount: "500,000 ETH",
    value: "$1,255",
    time: "3 hours ago",
    status: "Completed",
  },
  {
    id: 5,
    type: "Burn",
    from: "0x9d7f...4b1a",
    to: "Burn Address",
    amount: "100,000 ETH",
    value: "$251",
    time: "5 hours ago",
    status: "Completed",
  },
  {
    id: 6,
    type: "Transfer",
    from: "0x5e2c...7d9f",
    to: "0x4a1b...3c8e",
    amount: "45,000 ETH",
    value: "$112.95",
    time: "8 hours ago",
    status: "Completed",
  },
]

const activityStats = [
  { label: "Total Transactions", value: "2,847", icon: RefreshCw },
  { label: "Transfers Today", value: "156", icon: Send },
  { label: "Withdrawals", value: "23", icon: Download },
  { label: "Active Users", value: "342", icon: Users },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Transfer":
      return Send
    case "Stake":
      return Wallet
    case "Withdrawal":
      return ArrowDownRight
    case "Allocation":
      return ArrowUpRight
    case "Burn":
      return RefreshCw
    default:
      return Send
  }
}

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Activity</h1>
          <p className="text-muted-foreground">Monitor all network transactions and events</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Activity</SelectItem>
            <SelectItem value="transfers">Transfers</SelectItem>
            <SelectItem value="stakes">Stakes</SelectItem>
            <SelectItem value="withdrawals">Withdrawals</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {activityStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest transactions across the network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = getTypeIcon(activity.type)
              return (
                <div
                  key={activity.id}
                  className="flex items-center justify-between rounded-lg border border-border/40 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-muted p-2">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{activity.type}</span>
                        <Badge
                          variant={activity.status === "Completed" ? "outline" : "secondary"}
                          className={
                            activity.status === "Completed"
                              ? "border-green-500 text-green-500"
                              : "border-yellow-500 text-yellow-500"
                          }
                        >
                          {activity.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {activity.from} → {activity.to}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{activity.amount}</div>
                    <p className="text-sm text-muted-foreground">
                      {activity.value} • {activity.time}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <Button variant="outline" className="mt-4 w-full bg-transparent">
            Load More Activity
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
