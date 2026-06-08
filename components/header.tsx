"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { TreezuresLogo } from "@/components/treezures-logo"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Funding", href: "/funding" },
  { name: "Governance", href: "/governance" },
  { name: "Staking", href: "/staking" },
  { name: "Launchpad", href: "/launchpad" },
  { name: "Projects", href: "/projects" },
  { name: "Company", href: "/company" },
  { name: "Resources", href: "/resources" },
  { name: "Insights", href: "/insights" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <TreezuresLogo size="md" />
          <span className="text-lg font-semibold text-foreground">Treezures Labs</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              disabled
              className="px-3 py-2 text-sm font-medium text-muted-foreground/50 cursor-not-allowed opacity-50"
              title="Coming soon"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            disabled
            className="hidden text-sm font-medium text-muted-foreground/50 cursor-not-allowed opacity-50 sm:block"
            title="Coming soon"
          >
            Contact us
          </button>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent opacity-50 cursor-not-allowed" disabled title="Coming soon">
            Login
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out border-t border-border/40 bg-background/95 backdrop-blur-xl",
          mobileMenuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              disabled
              className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground/50 cursor-not-allowed opacity-50 w-full text-left"
              title="Coming soon"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-4 border-t border-border/40">
            <Button variant="outline" className="w-full bg-transparent opacity-50 cursor-not-allowed" disabled title="Coming soon">
              Contact us
            </Button>
            <Button className="w-full opacity-50 cursor-not-allowed" disabled title="Coming soon">Login</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
