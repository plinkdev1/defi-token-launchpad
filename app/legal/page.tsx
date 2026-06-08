'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, Scale, FileText, Shield } from 'lucide-react'

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20">
        {/* Header */}
        <section className="border-b border-border/40 py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Legal & Compliance</h1>
            <p className="mt-4 text-muted-foreground">
              Technical documentation for auditors, regulators, and compliance verification. This page is not part of public user-facing UI.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-8">
            {/* Safe-Harbor Declaration */}
            <Alert className="border-2 border-primary/50 bg-primary/5">
              <Scale className="h-4 w-4" />
              <AlertDescription className="ml-2">
                <strong>Safe-Harbor Declaration (Verbatim):</strong> TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit. Users participate at their own risk and must comply with local jurisdictions.
              </AlertDescription>
            </Alert>

            {/* Tabs */}
            <Tabs defaultValue="regulatory" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
                <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                <TabsTrigger value="contracts">Contracts</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>

              {/* Regulatory */}
              <TabsContent value="regulatory">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      Regulatory Framework
                    </CardTitle>
                    <CardDescription>Jurisdiction-specific compliance classification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">United States (Securities Law)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Classification:</strong> Utility Token (Non-Security)
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Fails Howey Test: No expectation of profits from efforts of others</li>
                        <li>No revenue share mechanism</li>
                        <li>No secondary market reliance for profit</li>
                        <li>Governance voting only (discretionary, not financial)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">European Union (MiCA)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Classification:</strong> Utility Token
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Provides access to governance protocol operations</li>
                        <li>No financial service classification</li>
                        <li>Compliant with Regulation (EU) 2023/1114</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Singapore (MAS)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Classification:</strong> Governance Token (Non-DeFi)
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Not classified as Payment Token or Investment Token</li>
                        <li>Guidance: Notification-based regime applies</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">CFTC (Commodity Futures Trading Commission)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Classification:</strong> Non-Commodity (Governance Protocol)
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Governance access function, not commodity function</li>
                        <li>No derivatives or perpetuals enabled</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tokenomics */}
              <TabsContent value="tokenomics">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Tokenomics Verification
                    </CardTitle>
                    <CardDescription>Auditor-facing tokenomics specification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                        <p className="text-sm font-semibold text-foreground">Token Name:</p>
                        <p className="text-sm text-muted-foreground">Treezures Labs (TRZ)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                        <p className="text-sm font-semibold text-foreground">Total Supply:</p>
                        <p className="text-sm text-muted-foreground">3,000,000 TRZ (Fixed Cap)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                        <p className="text-sm font-semibold text-foreground">Launch Mechanism:</p>
                        <p className="text-sm text-muted-foreground">Balancer LBP (80/20 TRZ/USDC, Fair Price Discovery)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                        <p className="text-sm font-semibold text-foreground">Minting Policy:</p>
                        <p className="text-sm text-muted-foreground">Revenue-Only (No Premine, No Team Allocation)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                        <p className="text-sm font-semibold text-foreground">Burn Mechanism:</p>
                        <p className="text-sm text-muted-foreground">Optional Treasury Burn (Deflationary)</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/40">
                      <h5 className="font-semibold mb-3">What TRZ Does NOT Do:</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✗ Does not pay dividends or revenue share</li>
                        <li>✗ Does not represent ownership or equity</li>
                        <li>✗ Does not guarantee financial returns</li>
                        <li>✗ Does not function as a yield-generating vehicle</li>
                        <li>✗ Does not create derivative positions</li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <h5 className="font-semibold mb-3">What TRZ Does:</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Governance participation (voting on treasury allocation)</li>
                        <li>✓ Protocol coordination (decentralized decision-making)</li>
                        <li>✓ Access control (staking for governance weight)</li>
                        <li>✓ Treasury coordination (discretionary operations only)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Smart Contracts */}
              <TabsContent value="contracts">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Smart Contract Specifications
                    </CardTitle>
                    <CardDescription>Deployment and auditing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-3">Core Contracts</h5>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 rounded bg-muted/30 border border-border/40">
                          <p className="font-mono text-xs text-muted-foreground mb-1">TRZ.sol</p>
                          <p className="text-muted-foreground">ERC-20 OFT (Omnichain Fungible Token) with revenue-only minting</p>
                        </div>
                        <div className="p-3 rounded bg-muted/30 border border-border/40">
                          <p className="font-mono text-xs text-muted-foreground mb-1">TRZStaking.sol</p>
                          <p className="text-muted-foreground">3-tier staking vault (flexible/30d/180d) with governance weight</p>
                        </div>
                        <div className="p-3 rounded bg-muted/30 border border-border/40">
                          <p className="font-mono text-xs text-muted-foreground mb-1">AutoBuyback.sol</p>
                          <p className="text-muted-foreground">Treasury revenue auto-buyback mechanism (non-financial)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Audit Status</h5>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          Contracts are audit-ready. Formal audits by Zellic/OpenZeppelin recommended before mainnet deployment.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">NatSpec Documentation</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        All contracts include comprehensive NatSpec comments documenting governance-only semantics. See <code className="bg-muted px-2 py-1 rounded text-xs">docs/SMART_CONTRACT_NATSPEC.md</code> for full details.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Compliance */}
              <TabsContent value="compliance">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Compliance Monitoring
                    </CardTitle>
                    <CardDescription>Automated compliance validation and monitoring</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-3">Content Validation</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        Automated script scans all PRs and code for prohibited security-like terminology:
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/40">
                        <p className="text-xs font-mono text-muted-foreground mb-2">Prohibited Terms:</p>
                        <p className="text-xs text-muted-foreground space-y-1">
                          returns, yields, financial returns, interest, dividends, passive income, appreciation, price targets, financial upside, investment
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Approved Terminology</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        All UX copy must use governance-only language:
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/40">
                        <p className="text-xs font-mono text-muted-foreground mb-2">Approved Terms:</p>
                        <p className="text-xs text-muted-foreground space-y-1">
                          governance participation, voting power, protocol coordination, treasury management, governance weight, discretionary staking rewards (only if no guarantee), community-controlled, non-custodial
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Validation Script</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Run before merge:
                      </p>
                      <div className="bg-muted/50 p-3 rounded border border-border/40">
                        <code className="text-xs font-mono text-muted-foreground">npm run validate:compliance</code>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Compliance Mode</h5>
                      <p className="text-sm text-muted-foreground">
                        UI toggle forces governance-focused language. All yield/APR displays disabled in Compliance Mode.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Footer Notice */}
            <Alert className="border-2 border-muted-foreground/50">
              <FileText className="h-4 w-4" />
              <AlertDescription>
                <strong>Auditor Notice:</strong> For full compliance documentation, see: <code className="bg-muted px-2 py-1 rounded text-xs">docs/REGULATORY_COMPLIANCE.md</code>, <code className="bg-muted px-2 py-1 rounded text-xs">docs/TRZ_TOKENOMICS_GOVERNANCE.md</code>, and <code className="bg-muted px-2 py-1 rounded text-xs">docs/COMPLIANCE_AUDIT_REPORT.md</code>
              </AlertDescription>
            </Alert>
          </div>
        </section>
      </div>
    </main>
  )
}
