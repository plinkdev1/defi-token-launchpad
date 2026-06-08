"use client"

import { ProjectsHeroSection } from "@/components/projects/hero-section"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsHeroSection />
      <ProjectsGrid />
    </div>
  )
}
