"use client"

import { AlertTriangle } from "lucide-react"

export function TermsDisclaimer() {
  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6">
      <div className="flex gap-4">
        <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-foreground mb-2">Explicit Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TRZ is a governance and utility token only. It is not an investment, security, or financial product. TRZ
            provides no equity, ownership, dividends, financial rights, or expectation of profit. Participation in
            Treezures governance is entirely voluntary and occurs at your own risk. Do your own research (DYOR) before
            participating. Nothing herein constitutes financial, legal, or investment advice.
          </p>
        </div>
      </div>
    </div>
  )
}
