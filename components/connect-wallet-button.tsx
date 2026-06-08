"use client"

import { useState } from "react"
import { Wallet, ChevronDown, LogOut, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock wallet state - in production this would use Alchemy Account Kit hooks
export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const mockAddress = "0x1234...5678"

  const handleConnect = (method: string) => {
    // Simulate connection
    console.log(`Connecting with ${method}...`)
    setIsConnected(true)
    setWalletAddress(mockAddress)
    setShowModal(false)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  const copyAddress = () => {
    navigator.clipboard.writeText("0x1234567890abcdef1234567890abcdef12345678")
  }

  if (isConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-transparent">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            {walletAddress}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={copyAddress}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ExternalLink className="mr-2 h-4 w-4" />
            View on Explorer
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDisconnect} className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="gap-2">
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">T</span>
              </div>
              Connect to Treezures
            </DialogTitle>
            <DialogDescription>Choose your preferred wallet connection method</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" placeholder="Enter your email" />
                <Button onClick={() => handleConnect("email")}>Continue</Button>
              </div>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Social & Wallet Options */}
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                onClick={() => handleConnect("google")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                onClick={() => handleConnect("passkey")}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                Continue with Passkey
              </Button>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">External Wallets</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="justify-start gap-2 bg-transparent"
                onClick={() => handleConnect("walletconnect")}
              >
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M9.58 11.58c3.54-3.47 9.28-3.47 12.84 0l.43.42a.44.44 0 010 .63l-1.46 1.43a.23.23 0 01-.32 0l-.59-.58a6.45 6.45 0 00-8.96 0l-.63.62a.23.23 0 01-.32 0l-1.46-1.43a.44.44 0 010-.63l.47-.46zm15.87 2.96l1.3 1.27a.44.44 0 010 .63l-5.85 5.72a.46.46 0 01-.64 0l-4.15-4.06a.11.11 0 00-.16 0l-4.15 4.06a.46.46 0 01-.64 0l-5.85-5.72a.44.44 0 010-.63l1.3-1.27a.46.46 0 01.64 0l4.15 4.06a.11.11 0 00.16 0l4.15-4.06a.46.46 0 01.64 0l4.15 4.06a.11.11 0 00.16 0l4.15-4.06a.46.46 0 01.64 0z"
                    fill="#3B99FC"
                  />
                </svg>
                WalletConnect
              </Button>

              <Button
                variant="outline"
                className="justify-start gap-2 bg-transparent"
                onClick={() => handleConnect("coinbase")}
              >
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#0052FF" />
                  <path
                    d="M16 6a10 10 0 100 20 10 10 0 000-20zm-2.5 12.5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-5a1 1 0 011-1h1a1 1 0 011 1v5zm6 0a1 1 0 01-1 1h-1a1 1 0 01-1-1v-5a1 1 0 011-1h1a1 1 0 011 1v5z"
                    fill="#fff"
                  />
                </svg>
                Coinbase
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            By connecting, you agree to the Terms of Service and Privacy Policy
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
