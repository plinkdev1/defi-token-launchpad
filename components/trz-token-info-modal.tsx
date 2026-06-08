import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface TRZTokenInfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TRZTokenInfoModal({ open, onOpenChange }: TRZTokenInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">T</span>
            TRZ Token Information
          </DialogTitle>
          <DialogDescription>Governance and utility token of Treezures protocol</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Classification */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Token Classification</h3>
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-semibold text-primary">Governance Utility Token</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Classification:</span>
                    <span className="font-semibold">Non-Security</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Regulatory:</span>
                    <span className="font-semibold">Utility Token (Safe Harbor)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Financial Product:</span>
                    <span className="font-semibold text-yellow-600">No</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What TRZ Is */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              What TRZ Is
            </h3>
            <ul className="space-y-2">
              {[
                "Governance coordination token for Treezures DAO",
                "Voting mechanism for treasury and protocol decisions",
                "Participation asset for governance coordination tiers",
                "Non-custodial—users retain full control",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What TRZ Is NOT */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              What TRZ Is NOT
            </h3>
            <ul className="space-y-2">
              {[
                "Not a financial investment or security",
                "Not a revenue share or dividend mechanism",
                "Not an ownership stake or equity",
                "Not a yield-generating or interest-bearing asset",
                "Not a speculative or price-appreciation vehicle",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-1">×</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Disclaimer */}
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Disclosure:</strong> TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit. Users participate at their own risk and must comply with local jurisdictions.
              </p>
            </CardContent>
          </Card>

          {/* Documentation Link */}
          <div className="border-t border-border/40 pt-4">
            <a
              href="/docs/TRZ_TOKENOMICS_GOVERNANCE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View full TRZ tokenomics & governance documentation →
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
