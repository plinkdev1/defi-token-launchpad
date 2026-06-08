'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, Users, Zap, Calendar, Link as LinkIcon } from 'lucide-react'

interface Project {
  id: string
  name: string
  status: string
  chain: string
}

interface ProjectManagerProps {
  project: Project
}

export function ProjectManager({ project }: ProjectManagerProps) {
  const [stats, setStats] = useState({
    tvl: 0,
    participants: 0,
    volume24h: 0,
    transactions: 0,
  })

  // Mock project data
  const projectData = {
    atlas: {
      description: 'Infra Tools for Blockchains',
      launches: ['Q1 2026: Phase 1', 'Q2 2026: Multichain'],
      participants: 1250,
      tvl: '$2.4M',
      volume: '$845K',
      transactions: 12450,
    },
    orya: {
      description: 'Governance utility token for protocol operations',
      launches: ['Q1 2026: Sui Launch'],
      participants: 980,
      tvl: '$1.8M',
      volume: '$523K',
      transactions: 8920,
    },
    dust: {
      description: 'Ecosystem token for treasury and rewards',
      launches: ['Q2 2026: Polygon', 'Q2 2026: Sui'],
      participants: 750,
      tvl: '$1.2M',
      volume: '$342K',
      transactions: 6234,
    },
    default: {
      description: `${project.name} - Governance utility asset`,
      launches: ['TBD'],
      participants: 0,
      tvl: '$0',
      volume: '$0',
      transactions: 0,
    },
  }

  const data = projectData[project.id as keyof typeof projectData] || projectData.default

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{data.description}</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">{project.status}</Badge>
          <Badge variant="outline">{project.chain}</Badge>
        </div>
      </div>

      {/* Project Tabs */}
      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">TVL</p>
                  <BarChart3 className="h-4 w-4 text-primary/50" />
                </div>
                <p className="text-2xl font-bold text-foreground">{data.tvl}</p>
                <p className="text-xs text-muted-foreground mt-1">Total Value Locked</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Participants</p>
                  <Users className="h-4 w-4 text-primary/50" />
                </div>
                <p className="text-2xl font-bold text-foreground">{data.participants.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Active Users</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Volume (24h)</p>
                  <TrendingUp className="h-4 w-4 text-primary/50" />
                </div>
                <p className="text-2xl font-bold text-foreground">{data.volume}</p>
                <p className="text-xs text-muted-foreground mt-1">Trading Volume</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Transactions</p>
                  <Zap className="h-4 w-4 text-primary/50" />
                </div>
                <p className="text-2xl font-bold text-foreground">{data.transactions.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">All-Time</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Updates Tab */}
        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Roadmap & Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.launches.map((launch, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-border/40 bg-muted/30">
                  <p className="text-sm text-foreground">{launch}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-border/40">
                <Label>Add Update</Label>
                <div className="mt-3 flex gap-2">
                  <Input placeholder="New update..." className="flex-1" />
                  <Button size="sm">Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Governance-only certification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-green-500/50 bg-green-500/5">
                  <span className="text-sm font-medium text-foreground">Language Compliance</span>
                  <Badge className="bg-green-500/20 text-green-700">✓ Verified</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-green-500/50 bg-green-500/5">
                  <span className="text-sm font-medium text-foreground">No Financial Claims</span>
                  <Badge className="bg-green-500/20 text-green-700">✓ Verified</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-green-500/50 bg-green-500/5">
                  <span className="text-sm font-medium text-foreground">Governance-Only Semantics</span>
                  <Badge className="bg-green-500/20 text-green-700">✓ Verified</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-green-500/50 bg-green-500/5">
                  <span className="text-sm font-medium text-foreground">Safe-Harbor Declaration</span>
                  <Badge className="bg-green-500/20 text-green-700">✓ Present</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Project Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Project ID</Label>
                <Input value={project.id} disabled className="font-mono" />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Input value={project.status} disabled />
              </div>
              <div className="space-y-2">
                <Label>Chain</Label>
                <Input value={project.chain} disabled />
              </div>
              <div className="pt-4 flex gap-2">
                <Button variant="outline" disabled>
                  Edit
                </Button>
                <Button variant="outline" disabled>
                  Archive
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Settings modifications require multi-sig approval</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
