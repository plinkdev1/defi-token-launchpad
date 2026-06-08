import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Footer } from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <div className="flex flex-1 overflow-auto">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto bg-muted/30 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
