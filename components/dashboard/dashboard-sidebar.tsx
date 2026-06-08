"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import {
  LayoutDashboard,
  Users,
  Activity,
  MessageSquare,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Wallet,
  TrendingUp,
  FolderKanban,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Treasury", href: "/dashboard/treasury", icon: Wallet },
  { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Activity", href: "/dashboard/activity", icon: Activity },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Collaboration", href: "/dashboard/collaboration", icon: FolderKanban },
]

const bottomItems = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help & Support", href: "/dashboard/help", icon: HelpCircle },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  return (
    <aside className="hidden w-64 flex-col border-r border-border/40 bg-background lg:flex">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="space-y-1">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main Menu</p>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>

        <div className="space-y-1">
          {bottomItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
            Sign out
          </Button>
        </div>
      </div>
    </aside>
  )
}
