"use client"

import type React from "react"

import { AlchemyAccountProvider } from "@account-kit/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { alchemyConfig, queryClient } from "@/lib/alchemy/config"

export function WalletProvider({ children }: { children: React.ReactNode }) {
  // If Alchemy is not configured, just render children without the provider
  if (!alchemyConfig) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider config={alchemyConfig} queryClient={queryClient}>
        {children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  )
}
