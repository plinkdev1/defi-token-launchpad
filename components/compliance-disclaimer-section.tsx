import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ComplianceDisclaimerSection() {
  return (
    <Card className="border-yellow-500/30 bg-yellow-500/5">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              Regulatory & Compliance Notice
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Safe-Harbor Declaration:</strong> TRZ is not intended or marketed as a financial instrument. It is a governance utility asset granting access to decentralized protocol operations. It provides no claim on assets, revenue, dividends, or profit.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-xs">Governance Utility</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Voting rights on treasury</li>
                    <li>• Protocol coordination</li>
                    <li>• Parameter adjustments</li>
                    <li>• Non-custodial participation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-xs">Not Included</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Financial returns</li>
                    <li>• Investment rights</li>
                    <li>• Ownership or equity</li>
                    <li>• Guaranteed allocations</li>
                  </ul>
                </div>
              </div>
              <p className="pt-2 italic">
                Participate at your own risk. Do your own research (DYOR). Compliance with local regulations is your responsibility.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
