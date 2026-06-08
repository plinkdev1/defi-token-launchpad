'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Flame, PieChart } from 'lucide-react'

interface DashboardStat {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  color: string
}

export function LiveTreasuryDashboard() {
  const [stats, setStats] = useState<DashboardStat[]>([
    {
      label: 'TRZ Bought Back Today',
      value: '15,234',
      change: '+2.5%',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'text-green-500',
    },
    {
      label: 'TRZ Burned Today',
      value: '8,945',
      change: '+1.2%',
      icon: <Flame className="h-5 w-5" />,
      color: 'text-yellow-500',
    },
    {
      label: 'Treasury Balance',
      value: '$12.5M',
      change: '+0.8%',
      icon: <PieChart className="h-5 w-5" />,
      color: 'text-primary',
    },
  ])

  // Simulate live updates (in production, this would be real-time data)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value:
            stat.label === 'TRZ Bought Back Today'
              ? `${Math.floor(Math.random() * 30000)}`
              : stat.label === 'TRZ Burned Today'
                ? `${Math.floor(Math.random() * 20000)}`
                : stat.value,
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Treasury Operations</h2>
        <p className="text-sm text-muted-foreground">Real-time ecosystem metrics powered by governance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-background/50 backdrop-blur border border-border/40 hover:border-primary/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className={`text-xs mt-2 font-medium ${stat.color}`}>{stat.change} from yesterday</p>
                </div>
                <div className={`${stat.color} opacity-80`}>{stat.icon}</div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-xs text-muted-foreground">
                  {stat.label === 'TRZ Bought Back Today'
                    ? 'Treasury buybacks strengthen governance participation and community holdings'
                    : stat.label === 'TRZ Burned Today'
                      ? 'Token burns reduce supply and support long-term ecosystem sustainability'
                      : 'Total assets available for governance operations and treasury allocation'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border border-border/40 bg-muted/30 p-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>Transparency Note:</strong> These metrics reflect governance-driven treasury operations managed by
          community voting. All operations are non-custodial and controlled through DAO governance. Buybacks and burns
          are discretionary and determined by community proposals, not guaranteed returns.
        </p>
      </div>
    </div>
  )
}
