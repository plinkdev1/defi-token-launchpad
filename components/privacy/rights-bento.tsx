"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accessibility as AccessTime, Delete, Share, Eye, AlertCircle, Shield } from "lucide-react"

const rights = [
  {
    icon: Eye,
    title: "Right to Access",
    description: "Request a copy of all data we hold about you",
  },
  {
    icon: AlertCircle,
    title: "Right to Correction",
    description: "Update inaccurate or incomplete data",
  },
  {
    icon: Delete,
    title: "Right to Deletion",
    description: "Request removal of your data (with exceptions)",
  },
  {
    icon: Share,
    title: "Right to Portability",
    description: "Get your data in a portable, reusable format",
  },
  {
    icon: Shield,
    title: "Right to Object",
    description: "Opt-out of certain processing activities",
  },
  {
    icon: AccessTime,
    title: "Right to Withdraw",
    description: "Revoke consent at any time without penalty",
  },
]

export function RightsBento() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {rights.map((right) => {
        const Icon = right.icon
        return (
          <Card key={right.title} className="border-border/40 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">{right.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{right.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
