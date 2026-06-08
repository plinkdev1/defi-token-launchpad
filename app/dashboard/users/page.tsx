import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, MoreHorizontal } from "lucide-react"

const users = [
  {
    id: "USR001",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 15, 2025",
  },
  {
    id: "USR002",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Member",
    status: "Active",
    joined: "Feb 22, 2025",
  },
  {
    id: "USR003",
    name: "Carol White",
    email: "carol@example.com",
    role: "Member",
    status: "Inactive",
    joined: "Mar 10, 2025",
  },
  {
    id: "USR004",
    name: "David Brown",
    email: "david@example.com",
    role: "Moderator",
    status: "Active",
    joined: "Apr 5, 2025",
  },
  {
    id: "USR005",
    name: "Eva Martinez",
    email: "eva@example.com",
    role: "Member",
    status: "Active",
    joined: "May 18, 2025",
  },
]

const stats = [
  { label: "Total Users", value: "1,770" },
  { label: "Active Users", value: "1,542" },
  { label: "New This Month", value: "87" },
  { label: "Retention Rate", value: "94.2%" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>A list of all users in your organization</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Joined</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-border/40">
                    <td className="px-4 py-3 text-sm font-mono text-muted-foreground">{user.id}</td>
                    <td className="px-4 py-3 text-sm font-medium">{user.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{user.email}</td>
                    <td className="px-4 py-3 text-sm">
                      <Badge variant={user.role === "Admin" ? "default" : "secondary"}>{user.role}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <Badge
                        variant={user.status === "Active" ? "outline" : "secondary"}
                        className={user.status === "Active" ? "border-green-500 text-green-500" : ""}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{user.joined}</td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
