"use client"

import { useState } from "react"
import { X, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  name: string
  description: string
  url: string
  blockchain: string
  status: string
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleVisit = () => {
    if (project.url !== "#") {
      window.open(project.url, "_blank")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Tame-Fly Loader Background */}
      <div className="absolute inset-0 opacity-0 animate-pulse" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl">
        {/* 3D Card Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg blur-lg opacity-50" />

        {/* Modal Content */}
        <div className="relative bg-card border border-primary/20 rounded-lg shadow-2xl overflow-hidden">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-border/40 bg-gradient-to-r from-primary/5 to-transparent">
            <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>

          {/* Bento Grid Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                About
              </h3>
              <p className="text-base text-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Bento Grid for Details */}
            <div className="grid grid-cols-2 gap-4">
              {/* Status Card */}
              <div className="bg-muted/50 border border-border/40 rounded-lg p-4 hover:border-primary/40 transition-colors">
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Status</p>
                <p className="text-lg font-semibold text-foreground">{project.status}</p>
              </div>

              {/* Blockchain Card */}
              <div className="bg-muted/50 border border-border/40 rounded-lg p-4 hover:border-primary/40 transition-colors">
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Blockchain</p>
                <p className="text-lg font-semibold text-foreground">{project.blockchain}</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm text-destructive">
                <span className="font-semibold">Disclaimer:</span> Projects are independent; participation at your own risk. Do your own research.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleVisit}
                disabled={project.url === "#" || isLoading}
                className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </>
                )}
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1 rounded-lg bg-transparent"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
