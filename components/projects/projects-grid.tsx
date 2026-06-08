"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectModal } from "./project-modals"

const projects = [
  {
    id: "datx",
    name: "DATX DX ARENA",
    short: "Satirical meme token p2p gamefi project with community governance and utilities.",
    description: "DATX features meme burns, NFTs, games – satirical 'flush the system' lore. Players engage in satirical economic simulations powered by the DATX token.",
    url: "https://datxit.space",
    blockchain: "Solana",
    status: "Development",
  },
  {
    id: "orya",
    name: "ORYA",
    short: "Governance utility token for protocol operations.",
    description: "ORYA enables protocol-level decision-making and parameter adjustments within the Treezures ecosystem. Holders vote on treasury allocations and strategic initiatives.",
    url: "#",
    blockchain: "Multichain",
    status: "Development",
  },
  {
    id: "dust",
    name: "DUST",
    short: "Ecosystem token for treasury and rewards.",
    description: "DUST is carefully being developed as a reward and utilities token tailored for a vibrant meme culture community. It powers fun, community-driven incentives and ecosystem participation within Treezure Labs projects.",
    url: "#",
    blockchain: "Sui and Polygon",
    status: "Development",
  },
  {
    id: "trz",
    name: "TRZ",
    short: "Core governance token for DAO decisions.",
    description: "TRZ is the governance and coordination token of the Treezures ecosystem. It enables holders to participate in decentralized decision-making, treasury allocation, and protocol parameter adjustments.",
    url: "#",
    blockchain: "Gnosis",
    status: "Development",
  },
  {
    id: "atlas",
    name: "ATLAS",
    short: "Infra Tools for Blockchains.",
    description: "ATLAS provides essential infrastructure tooling for blockchain developers and protocols. It includes analytics, monitoring, and governance infrastructure for Web3 projects.",
    url: "#",
    blockchain: "Multi-chain",
    status: "Development",
  },
  {
    id: "flipper",
    name: "FLIPPER",
    short: "Coin p2p gamblefi with deep Defi integrations.",
    description: "FLIPPER integrates p2p gaming mechanics with deep DeFi protocols. Users engage in predictive games while maintaining exposure to yield-generating strategies.",
    url: "#",
    blockchain: "Multichain",
    status: "Development",
  },
  {
    id: "project7",
    name: "Project 7",
    short: "Placeholder for future Treezure Labs initiative. Stay tuned for details.",
    description: "Details coming soon. This project is currently in planning stages.",
    url: "#",
    blockchain: "Multichain",
    status: "Coming Soon",
  },
  {
    id: "project8",
    name: "Project 8",
    short: "Placeholder for future Treezure Labs initiative. Stay tuned for details.",
    description: "Details coming soon. This project is currently in planning stages.",
    url: "#",
    blockchain: "Multichain",
    status: "Coming Soon",
  },
  {
    id: "project9",
    name: "Project 9",
    short: "Placeholder for future Treezure Labs initiative. Stay tuned for details.",
    description: "Details coming soon. This project is currently in planning stages.",
    url: "#",
    blockchain: "Multichain",
    status: "Coming Soon",
  },
  {
    id: "project10",
    name: "Project 10",
    short: "Placeholder for future Treezure Labs initiative. Stay tuned for details.",
    description: "Details coming soon. This project is currently in planning stages.",
    url: "#",
    blockchain: "Multichain",
    status: "Coming Soon",
  },
]

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border border-primary/20 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(102,204,204,0.1)]"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {project.status}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.blockchain}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.short}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modals */}
      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
