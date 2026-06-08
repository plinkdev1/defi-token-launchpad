import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { MatrixBackground } from "@/components/matrix-background"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Treezures Labs | Decentralized Treasury Management",
  description:
    "Unlock boundless growth with access to non-dilutive capital through innovative decentralized treasury management.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MatrixBackground />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AIChatWidget />
          <CookieConsentBanner />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
