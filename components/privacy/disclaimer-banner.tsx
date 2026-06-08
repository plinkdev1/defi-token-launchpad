"use client"

import { AlertCircle } from "lucide-react"

export function PrivacyDisclaimer() {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
      <div className="flex items-start gap-4">
        <AlertCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-foreground mb-2">Financial Data Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No financial data or payment information is processed through our platform. TRZ is a governance and utility
            token only. We do not handle banking information, credit card data, or any financial assets. All
            transactions occur directly on blockchain networks outside our systems.
          </p>
        </div>
      </div>
    </div>
  )
}
