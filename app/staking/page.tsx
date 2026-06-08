"use client"

import { useState } from "react"
import { Shield, ArrowUpRight, Lock, Unlock, CheckCircle2, Wallet, Vote, TrendingUp, Flame, PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { OpenCoverModal } from "@/components/opencover-modal"
import { LiveTreasuryDashboard } from "@/components/live-treasury-dashboard"

const stakingTiers = [
  {
    id: 1,
    name: "USDC Flexible",
    vestingPeriod: "Unlocked",
    totalParticipants: "12.5M USDC",
    lockPeriod: "None",
    minStake: "100 USDC",
    icon: Unlock,
    color: "text-green-500",
    description: "Flexible staking with no lock period",
    vestingSchedule: "Immediate access",
  },
  {
    id: 2,
    name: "beTRZ 30-Day",
    vestingPeriod: "90 days linear",
    totalParticipants: "45.8M USDC",
    lockPeriod: "30 days",
    minStake: "500 USDC",
    icon: Lock,
    color: "text-primary",
    description: "Escrowed TRZ with 30-day lock and linear vesting",
    vestingSchedule: "Linear vesting over 90 days post-unlock",
  },
  {
    id: 3,
    name: "beTRZ 90-Day",
    vestingPeriod: "270 days linear",
    totalParticipants: "89.2M USDC",
    lockPeriod: "90 days",
    minStake: "1,000 USDC",
    icon: Lock,
    color: "text-yellow-500",
    description: "Escrowed TRZ with 90-day lock and extended vesting",
    vestingSchedule: "Linear vesting over 270 days post-unlock",
  },
]

const userParticipation = [
  {
    tier: "beTRZ 30-Day",
    amount: "5,000 USDC",
    claimable: "1,234 TRZ",
    vestingProgress: 65,
    unlockDate: "Mar 15, 2026",
    progress: 65,
  },
  {
    tier: "USDC Flexible",
    amount: "2,500 USDC",
    claimable: "Ready to claim",
    vestingProgress: 100,
    unlockDate: "Available now",
    progress: 100,
  },
]

const recentActivity = [
  { type: "staked", amount: "1,000 USDC", tier: "beTRZ 90-Day", time: "2 hours ago" },
  { type: "vesting", amount: "Vesting 4,567 TRZ", tier: "beTRZ 30-Day", time: "1 day ago" },
  { type: "claimed", amount: "500 TRZ", tier: "USDC Flexible", time: "3 days ago" },
]

const PageHeader = () => (
  <section className="border-b border-border/40 py-16 relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Staking & Vesting</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Participate in Treezures governance by staking USDC or receiving escrowed TRZ (beTRZ) through discretionary rewards. Staking rewards are determined by governance decisions and treasury operations—not guaranteed. This is governance participation, not an investment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <ConnectWalletButton />
          <Button variant="outline" className="gap-2 bg-transparent">
            <Shield className="h-4 w-4" />
            Learn More
          </Button>
        </div>
      </div>

      {/* Staking Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="bg-background/50 backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Total Staked</div>
            <div className="text-2xl font-bold text-foreground">$45.2M</div>
          </CardContent>
        </Card>
        <Card className="bg-background/50 backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Participants</div>
            <div className="text-2xl font-bold text-primary">12,450</div>
          </CardContent>
        </Card>
        <Card className="bg-background/50 backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Avg Lock Period</div>
            <div className="text-2xl font-bold text-foreground">87 days</div>
          </CardContent>
        </Card>
        <Card className="bg-background/50 backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Treasury Balance</div>
            <div className="text-2xl font-bold text-foreground">$8.5M</div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default function StakingPage() {
  const [lockAmount, setLockAmount] = useState("")
  const [selectedTier, setSelectedTier] = useState(stakingTiers[1])
  const [isConnected, setIsConnected] = useState(false)
  const [showInsuranceModal, setShowInsuranceModal] = useState(false)

  const calculateEstimatedTRZ = () => {
    if (!lockAmount) return "0"
    const amount = Number.parseFloat(lockAmount)
    // Mock calculation: 1 USDC = ~0.75 TRZ equivalent
    return (amount * 0.75).toFixed(0)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <PageHeader />

      {/* Live Treasury Dashboard */}
      <section className="py-8 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <LiveTreasuryDashboard />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Tabs defaultValue="stake" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="stake">Stake USDC</TabsTrigger>
              <TabsTrigger value="positions">My Stakes</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            {/* Stake Tab */}
            <TabsContent value="stake" className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Governance Tiers */}
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-xl font-semibold">Select Staking Tier</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stakingTiers.map((tier) => (
                      <Card
                        key={tier.id}
                        className={`cursor-pointer transition-all hover:border-primary/50 ${
                          selectedTier.id === tier.id ? "border-primary ring-1 ring-primary" : ""
                        }`}
                        onClick={() => setSelectedTier(tier)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <tier.icon className={`h-5 w-5 ${tier.color}`} />
                            <span className="text-xs font-semibold text-muted-foreground">{tier.vestingPeriod}</span>
                          </div>
                          <h3 className="font-semibold">{tier.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                            <div className="flex justify-between">
                              <span>Lock Period:</span>
                              <span className="text-foreground">{tier.lockPeriod}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Min Stake:</span>
                              <span className="text-foreground">{tier.minStake}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Staked:</span>
                              <span className="text-foreground">{tier.totalParticipants}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Vesting:</span>
                              <span className="text-foreground">{tier.vestingSchedule}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Locking Form */}
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Stake USDC
                      </CardTitle>
                      <CardDescription>Participate in governance through staking in {selectedTier.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <div className="relative">
                          <Input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            value={lockAmount}
                            onChange={(e) => setLockAmount(e.target.value)}
                            className="pr-16"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                            USDC
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Balance: 50,000 USDC</span>
                          <button className="text-primary hover:underline" onClick={() => setLockAmount("50000")}>
                            Max
                          </button>
                        </div>
                      </div>

                      {/* Vesting Summary */}
                      <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Estimated beTRZ</span>
                          <span className="font-medium text-primary">{calculateEstimatedTRZ()} TRZ</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Vesting Period</span>
                          <span className="font-medium">{selectedTier.vestingPeriod}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Lock Period</span>
                          <span className="font-medium">{selectedTier.lockPeriod}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Claim Type</span>
                          <span className="font-medium text-yellow-500">Escrowed (beTRZ)</span>
                        </div>
                      </div>

                      <Button className="w-full" size="lg" disabled={!lockAmount}>
                        <Wallet className="mr-2 h-4 w-4" />
                        Stake USDC
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Staking is governed by discretionary treasury decisions. Rewards are not guaranteed. This is governance participation, not an investment.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Insurance CTA */}
                  <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Insurance Available</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Optionally protect your staked assets against smart contract risks with OpenCover insurance.
                          </p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-primary mt-2"
                            onClick={() => setShowInsuranceModal(true)}
                          >
                            View coverage <ArrowUpRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Positions Tab */}
            <TabsContent value="positions" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-xl font-semibold">My Stakes & Vesting</h2>
                  {userParticipation.map((participation, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <h3 className="font-semibold">{participation.tier}</h3>
                            <div className="text-2xl font-bold">{participation.amount}</div>
                            <div className="flex items-center gap-2 text-sm text-primary">
                              <TrendingUp className="h-4 w-4" />
                              {participation.claimable} claimable
                            </div>
                          </div>
                          <div className="space-y-2 sm:text-right">
                            <div className="text-sm text-muted-foreground">
                              <CheckCircle2 className="inline h-4 w-4 mr-1" />
                              Unlock: {participation.unlockDate}
                            </div>
                            <Progress value={participation.vestingProgress} className="w-full sm:w-32 h-2" />
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" disabled={participation.vestingProgress < 100}>
                                Claim
                              </Button>
                              <Button size="sm" variant="outline">
                                Unstake
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Staking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Staked</span>
                        <span className="font-semibold">7,500 USDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total beTRZ</span>
                        <span className="font-semibold text-primary">5,625 TRZ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Currently Vesting</span>
                        <span className="font-semibold">3,421 TRZ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Claimable Now</span>
                        <span className="font-semibold text-green-500">2,204 TRZ</span>
                      </div>
                    </div>
                    <Button className="w-full">View Governance</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              activity.type === "locked"
                                ? "bg-green-500/10"
                                : activity.type === "voted"
                                  ? "bg-primary/10"
                                  : "bg-yellow-500/10"
                            }`}
                          >
                            {activity.type === "staked" ? (
                              <Lock className="h-5 w-5 text-green-500" />
                            ) : activity.type === "vesting" ? (
                              <TrendingUp className="h-5 w-5 text-primary" />
                            ) : (
                              <Flame className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium capitalize">{activity.type}</div>
                            <div className="text-sm text-muted-foreground">{activity.tier}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-medium ${activity.type === "unlocked" ? "text-yellow-500" : "text-primary"}`}
                          >
                            {activity.amount}
                          </div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Insurance Modal */}
      <OpenCoverModal open={showInsuranceModal} onOpenChange={setShowInsuranceModal} />
    </div>
  )
}
