"use client"

import { useState } from "react"
import { Shield, ChevronDown, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const coverTypes = ["Protocol cover", "Depeg cover", "Custody cover"]

const protocols = [
  { name: "Treezures Protocol", badge: "MULTI-PROTOCOL", subtext: "See included sub-protocols here" },
  { name: "Aave V3", badge: "LENDING", subtext: "Decentralized lending protocol" },
  { name: "Uniswap V3", badge: "DEX", subtext: "Automated market maker" },
]

const durations = ["30 days", "60 days", "90 days", "180 days", "365 days"]

const chains = [
  { name: "Optimism", color: "#FF0420" },
  { name: "Arbitrum", color: "#28A0F0" },
  { name: "Ethereum", color: "#627EEA" },
  { name: "Polygon", color: "#8247E5" },
  { name: "Base", color: "#0052FF" },
  { name: "EVM", color: "#6B7280", isText: true },
]

interface OpenCoverModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function OpenCoverModal({ open, onOpenChange }: OpenCoverModalProps) {
  const [selectedCoverType, setSelectedCoverType] = useState(0)
  const [selectedProtocol, setSelectedProtocol] = useState(0)
  const [selectedDuration, setSelectedDuration] = useState(0)
  const [protocolDropdownOpen, setProtocolDropdownOpen] = useState(false)
  const [amountDropdownOpen, setAmountDropdownOpen] = useState(false)
  const [coverAmount, setCoverAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Mock submit handler with loading state and toast notification
  const handleSubmit = async () => {
    if (!coverAmount) return
    setIsSubmitting(true)

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Insurance Activated",
        description: `OpenCover protection activated for $${Number.parseFloat(coverAmount).toLocaleString()} on ${protocols[selectedProtocol].name}`,
        duration: 5000,
      })
      setCoverAmount("")
      onOpenChange(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-0 shadow-2xl">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-background border-b border-border/40 p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-foreground">
              Protect your onchain wealth
            </DialogTitle>
          </DialogHeader>

          <div className="flex mt-4 bg-muted/50 rounded-full p-1 gap-0.5">
            {coverTypes.map((type, index) => (
              <button
                key={type}
                onClick={() => setSelectedCoverType(index)}
                className={cn(
                  "flex-1 py-2 px-3 text-sm font-medium rounded-full transition-all duration-200",
                  selectedCoverType === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80",
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-4 bg-background">
          {/* Protect against text */}
          <p className="text-sm text-muted-foreground">
            Protect my funds against{" "}
            <a
              href="#"
              className="text-primary hover:underline inline-flex items-center gap-1 font-medium transition-colors"
            >
              protocol failures
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            on:
          </p>

          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {/* Protocol Selector */}
            <div className="relative lg:col-span-2">
              <button
                onClick={() => setProtocolDropdownOpen(!protocolDropdownOpen)}
                className="w-full flex items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/50 hover:shadow-[0_0_20px_rgba(112,204,232,0.15)] transition-all duration-200 bg-background/50 hover:bg-background/80 group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{protocols[selectedProtocol].name}</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                        {protocols[selectedProtocol].badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{protocols[selectedProtocol].subtext}</p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    protocolDropdownOpen && "rotate-180",
                  )}
                />
              </button>

              {protocolDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border/50 rounded-lg shadow-xl z-10 backdrop-blur-sm">
                  {protocols.map((protocol, index) => (
                    <button
                      key={protocol.name}
                      onClick={() => {
                        setSelectedProtocol(index)
                        setProtocolDropdownOpen(false)
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 first:rounded-t-lg last:rounded-b-lg transition-colors text-left"
                    >
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-foreground">{protocol.name}</span>
                          <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">
                            {protocol.badge}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setAmountDropdownOpen(!amountDropdownOpen)}
                className="w-full flex items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/50 hover:shadow-[0_0_20px_rgba(112,204,232,0.15)] transition-all duration-200 bg-background/50 hover:bg-background/80 group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted/80 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                    <span className="text-lg font-semibold text-primary">$</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{coverAmount || "Protection amount"}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    amountDropdownOpen && "rotate-180",
                  )}
                />
              </button>

              {amountDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border/50 rounded-lg shadow-xl z-10 p-4 backdrop-blur-sm">
                  <input
                    type="number"
                    placeholder="Enter amount in USD"
                    value={coverAmount}
                    onChange={(e) => setCoverAmount(e.target.value)}
                    className="w-full p-2 border border-border rounded-lg bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {["1000", "5000", "10000", "25000"].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setCoverAmount(amount)
                          setAmountDropdownOpen(false)
                        }}
                        className="py-2 px-3 text-xs bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-200"
                      >
                        ${Number.parseInt(amount).toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(Number.parseInt(e.target.value))}
                className="w-full p-3 border border-border/50 rounded-lg bg-background/50 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-primary/50 cursor-pointer"
              >
                {durations.map((duration, index) => (
                  <option key={duration} value={index} className="bg-background">
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Chains Covered</label>
              <div className="flex flex-wrap gap-2 p-3 border border-border/50 rounded-lg bg-background/50">
                {chains.map((chain) =>
                  chain.isText ? (
                    <span
                      key={chain.name}
                      className="text-xs bg-muted/80 text-muted-foreground px-2 py-1 rounded-full font-medium"
                    >
                      {chain.name}
                    </span>
                  ) : (
                    <div
                      key={chain.name}
                      className="h-6 w-6 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: chain.color }}
                      title={chain.name}
                    >
                      <span className="text-[8px] text-white font-bold">{chain.name[0]}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Cover Details Section */}
          <div className="space-y-3 py-4 border-t border-border/40 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cover provider</span>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-xs text-green-500 font-bold">N</span>
                </div>
                <span className="text-sm font-medium text-foreground">Nexus Mutual</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-border/40 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Cover price</span>
              <span className="text-foreground font-medium">
                {coverAmount ? `$${(Number.parseFloat(coverAmount) * 0.02).toFixed(2)}` : "-"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">OpenCover fee</span>
              <span className="text-foreground font-medium">
                {coverAmount ? `$${(Number.parseFloat(coverAmount) * 0.005).toFixed(2)}` : "-"}
              </span>
            </div>
            <div className="flex items-center justify-between font-semibold text-base py-2 border-t border-border/40 pt-3">
              <span className="text-foreground">Total</span>
              <span className="text-primary">
                {coverAmount ? `$${(Number.parseFloat(coverAmount) * 0.025).toFixed(2)}` : "-"}
              </span>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!coverAmount || isSubmitting}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary hover:shadow-[0_0_30px_rgba(112,204,232,0.4)] hover:from-primary hover:to-primary/90 text-primary-foreground transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Activating...
              </>
            ) : coverAmount ? (
              "Get Cover"
            ) : (
              "Enter Cover Amount"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">Powered by OpenCover × Alchemy</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
