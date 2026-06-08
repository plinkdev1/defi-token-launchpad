import { type AlchemyAccountsUIConfig, createConfig } from "@account-kit/react"
import { sepolia, alchemy } from "@account-kit/infra"
import { QueryClient } from "@tanstack/react-query"

// Alchemy Account Kit client configuration
// This key is designed for client-side use and should be domain-restricted in Alchemy Dashboard

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "linear",
  auth: {
    sections: [
      [{ type: "email" }],
      [{ type: "passkey" }, { type: "social", authProviderId: "google", mode: "popup" }],
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "" },
          wallets: ["wallet_connect", "coinbase wallet"],
          chainType: ["evm"],
          moreButtonText: "More wallets",
          hideMoreButton: false,
          numFeaturedWallets: 2,
        },
      ],
    ],
    addPasskeyOnSignup: true,
    header: "Connect to Treezures",
  },
}

// Client key for Alchemy Account Kit
const clientKey = process.env.NEXT_PUBLIC_ALCHEMY_CLIENT_ID

export const alchemyConfig = clientKey
  ? createConfig(
      {
        transport: alchemy({ apiKey: clientKey }),
        chain: sepolia,
        ssr: true,
        enablePopupOauth: true,
      },
      uiConfig,
    )
  : null

export const queryClient = new QueryClient()
