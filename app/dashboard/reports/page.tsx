import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Calendar, TrendingUp, PieChart, BarChart3, Plus } from "lucide-react"

const reports = [
  {
    id: 1,
    name: "Q4 2025 Treasury Report",
    type: "Treasury",
    date: "Nov 15, 2025",
    status: "Published",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Monthly Analytics Summary",
    type: "Analytics",
    date: "Nov 1, 2025",
    status: "Published",
    size: "1.8 MB",
  },
  { id: 3, name: "User Growth Analysis", type: "Users", date: "Oct 28, 2025", status: "Draft", size: "956 KB" },
  {
    id: 4,
    name: "Ecosystem Rewards Distribution",
    type: "Treasury",
    date: "Oct 15, 2025",
    status: "Published",
    size: "1.2 MB",
  },
  {
    id: 5,
    name: "Network Performance Metrics",
    type: "Analytics",
    date: "Oct 1, 2025",
    status: "Published",
    size: "3.1 MB",
  },
]

const reportTypes = [
  { name: "Treasury Reports", count: 12, icon: PieChart, color: "text-blue-500" },
  { name: "Analytics Reports", count: 24, icon: BarChart3, color: "text-green-500" },
  { name: "User Reports", count: 8, icon: TrendingUp, color: "text-purple-500" },
  { name: "Custom Reports", count: 5, icon: FileText, color: "text-orange-500" },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate and manage organizational reports</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {reportTypes.map((type) => (
          <Card key={type.name}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="rounded-lg bg-muted p-3">
                <type.icon className={`h-5 w-5 ${type.color}`} />
              </div>
              <div>
                <div className="text-2xl font-bold">{type.count}</div>
                <p className="text-sm text-muted-foreground">{type.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All Reports</CardTitle>
              <CardDescription>Browse and download generated reports</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="treasury">Treasury</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between rounded-lg border border-border/40 p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-muted p-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{report.name}</span>
                      <Badge
                        variant={report.status === "Published" ? "outline" : "secondary"}
                        className={report.status === "Published" ? "border-green-500 text-green-500" : ""}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {report.date}
                      </span>
                      <span>{report.type}</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
