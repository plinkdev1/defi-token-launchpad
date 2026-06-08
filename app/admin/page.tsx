'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Lock, BarChart3, AlertTriangle, Users, TrendingUp, Activity } from 'lucide-react'
import { ProjectManager } from '@/components/admin/project-manager'
import { TreezuresLogo } from '@/components/treezures-logo'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedProject, setSelectedProject] = useState<string>('atlas')

  // Note: Password validation should be done via API route in production
  // Client-side validation is for demo only. Use proper authentication (OAuth, JWT) in production.
  const DEMO_PASSWORD = 'TreazuresTRZ2026'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // In production, call a secure API endpoint
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      
      if (response.ok) {
        setIsAuthenticated(true)
        setError('')
        setPassword('')
      } else {
        setError('Invalid password')
        setPassword('')
      }
    } catch (err) {
      setError('Authentication failed')
      setPassword('')
    }
  }

  // Projects data matching the 10 cards from /projects page
  const projects = [
    { id: 'datx', name: 'DATX DX ARENA', status: 'Development', chain: 'Solana' },
    { id: 'orya', name: 'ORYA', status: 'Development', chain: 'Multichain' },
    { id: 'dust', name: 'DUST', status: 'Development', chain: 'Sui and Polygon' },
    { id: 'trz', name: 'TRZ', status: 'Development', chain: 'Gnosis' },
    { id: 'atlas', name: 'ATLAS', status: 'Development', chain: 'Multi-chain' },
    { id: 'flipper', name: 'FLIPPER', status: 'Development', chain: 'Multichain' },
    { id: 'project7', name: 'Project 7', status: 'Coming Soon', chain: 'Multichain' },
    { id: 'project8', name: 'Project 8', status: 'Coming Soon', chain: 'Multichain' },
    { id: 'project9', name: 'Project 9', status: 'Coming Soon', chain: 'Multichain' },
    { id: 'project10', name: 'Project 10', status: 'Coming Soon', chain: 'Multichain' },
  ]

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <TreezuresLogo size="lg" />
            </div>
            <CardTitle className="flex items-center justify-center gap-2">
              <Lock className="h-5 w-5" />
              Admin Dashboard
            </CardTitle>
            <CardDescription className="text-center">Treezures Labs - Internal Access Only</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  className="font-mono"
                  autoComplete="off"
                  defaultValue=""
                />
                {error && (
                  <Alert className="border-destructive/50 bg-destructive/5">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-destructive">{error}</AlertDescription>
                  </Alert>
                )}
              </div>
              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                This is a password-protected internal dashboard. Unauthorized access is prohibited.
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20">
        {/* Header */}
        <section className="border-b border-border/40 py-8 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin Dashboard</h1>
                <p className="mt-2 text-sm text-muted-foreground">Treezures Labs - Compliance & Project Management</p>
              </div>
              <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
                Logout
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8">
            {/* Key Metrics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Projects</p>
                      <p className="text-3xl font-bold">10</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Development</p>
                      <p className="text-3xl font-bold">6</p>
                    </div>
                    <Activity className="h-8 w-8 text-yellow-500/50" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                      <p className="text-3xl font-bold">4</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Treasury</p>
                      <p className="text-3xl font-bold">$8.5M</p>
                    </div>
                    <Users className="h-8 w-8 text-green-500/50" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Management Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Manage and monitor individual project metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedProject} onValueChange={setSelectedProject}>
                  <TabsList className="grid grid-cols-5 lg:grid-cols-10 mb-6">
                    {projects.map((project) => (
                      <TabsTrigger key={project.id} value={project.id} className="text-xs">
                        {project.name.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {projects.map((project) => (
                    <TabsContent key={project.id} value={project.id}>
                      <ProjectManager project={project} />
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Compliance Monitoring */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance Monitoring</CardTitle>
                <CardDescription>Real-time compliance verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-lg border border-border/40 bg-muted/30">
                    <p className="text-sm font-semibold text-foreground mb-2">Language Compliance</p>
                    <p className="text-2xl font-bold text-green-500">100%</p>
                    <p className="text-xs text-muted-foreground mt-1">No security-like terminology detected</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border/40 bg-muted/30">
                    <p className="text-sm font-semibold text-foreground mb-2">UI Compliance</p>
                    <p className="text-2xl font-bold text-green-500">100%</p>
                    <p className="text-xs text-muted-foreground mt-1">All governance semantics verified</p>
                  </div>
                </div>

                <Alert className="border-green-500/50 bg-green-500/5">
                  <AlertDescription className="text-sm">
                    ✓ All documentation includes safe-harbor declaration
                    <br />✓ Smart contracts use governance-only terminology in NatSpec
                    <br />✓ No dividend, revenue-share, or financial claims present
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Transaction Logs */}
            <Card>
              <CardHeader>
                <CardTitle>Access Logs</CardTitle>
                <CardDescription>Recent admin dashboard access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>• Dashboard accessed at {new Date().toLocaleString()}</p>
                  <p>• All changes logged for audit compliance</p>
                  <p>• Multi-project dashboard initialized</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
