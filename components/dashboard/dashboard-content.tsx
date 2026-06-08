"use client"

import type { User } from "@supabase/supabase-js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, TrendingUp, DollarSign, MoreHorizontal, Sparkles } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const stats = [
  {
    title: "Total Holdings",
    value: "$140,166",
    change: "+2% from last month",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Proposals",
    value: "12",
    change: "+15% from last month",
    trend: "up",
    icon: FileText,
  },
  {
    title: "Token Holders",
    value: "1,770",
    change: "+5% from last month",
    trend: "up",
    icon: Users,
  },
  {
    title: "Voting Power",
    value: "12.5M VP",
    change: "+2% from last month",
    trend: "up",
    icon: TrendingUp,
  },
]

const performanceData = [
  { name: "Jun 1", value: 45 },
  { name: "Jun 2", value: 52 },
  { name: "Jun 3", value: 49 },
  { name: "Jun 4", value: 63 },
  { name: "Jun 5", value: 58 },
  { name: "Jun 6", value: 72 },
  { name: "Jun 7", value: 68 },
]

const allocationData = [
  { name: "ETH", value: 58.9, color: "#14b8a6" },
  { name: "SUI", value: 41.1, color: "#0ea5e9" },
]

const recentActivity = [
  { id: 1, action: "Treasury allocation", amount: "$181 USDC", time: "2 hours ago" },
  { id: 2, action: "Governance vote", amount: "Proposal #47", time: "5 hours ago" },
  { id: 3, action: "Reward distribution", amount: "15,000 ETH", time: "1 day ago" },
]

export function DashboardContent({ user }: { user: User }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.email?.split("@")[0] || "Admin"}</p>
        </div>
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI Assistant
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
              <p className="mt-2 text-xs text-primary">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Treasury Performance</CardTitle>
            <CardDescription>Weekly treasury value changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Allocation Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
            <CardDescription>Current portfolio distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center gap-6">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest treasury and governance actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between rounded-lg border border-border/40 p-4"
              >
                <div>
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <span className="font-mono text-sm text-foreground">{activity.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
