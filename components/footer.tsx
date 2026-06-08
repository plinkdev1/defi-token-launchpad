'use client';

import Link from "next/link"
import { TreezuresLogo } from "@/components/treezures-logo"

const footerLinks = {
  Product: [
    { name: "Funding", href: "/funding" },
    { name: "Governance", href: "/governance" },
    { name: "Resources", href: "/resources" },
  ],
  Company: [
    { name: "About", href: "/company" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <TreezuresLogo size="md" />
              <span className="text-lg font-semibold text-foreground">Treezures Labs</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Governance and protocol coordination through decentralized treasury management.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => {
                  const isLegalLink = category === "Legal";
                  return (
                    <li key={link.name}>
                      {isLegalLink ? (
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          
                          className="text-sm text-muted-foreground/50 cursor-not-allowed opacity-50"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground mb-2">Regulatory Disclosure</p>
            <p>
              TRZ is a governance and utility token used to participate in Treezures DAO operations. TRZ does not grant
              equity, ownership, dividends, financial rights, or any expectation of profit. TRZ is not an investment or
              financial product. Participation requires understanding of digital asset risks. Do your own research
              (DYOR). Nothing herein constitutes financial advice.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} Treezures Labs. All rights reserved.
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event('manage-cookies'))}
            className="text-sm text-primary hover:underline transition-colors"
          >
            Manage Cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
