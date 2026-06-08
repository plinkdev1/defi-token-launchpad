"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FolderKanban,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Link2,
  FileText,
  MessageSquare,
  Calendar,
  Zap,
  Bell,
  RefreshCw,
  Lock,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react"

// Workspace Stats
const workspaceStats = [
  { label: "Active Projects", value: "24", icon: FolderKanban, change: "+3 this week" },
  { label: "Team Members", value: "18", icon: Users, change: "2 pending invites" },
  { label: "Tasks Completed", value: "156", icon: CheckCircle2, change: "+23 today" },
  { label: "Overdue Tasks", value: "7", icon: AlertCircle, change: "-2 from yesterday" },
]

// Projects Data
const projects = [
  {
    id: 1,
    name: "Orÿa Protocol Development",
    description: "Core protocol development and smart contract audits",
    team: ["JD", "MK", "AS", "RB"],
    progress: 68,
    tasks: { total: 45, completed: 31 },
    dueDate: "Dec 15, 2025",
    status: "On Track",
    isPrivate: false,
  },
  {
    id: 2,
    name: "Dust Token Launch",
    description: "Token economics and launch strategy",
    team: ["MK", "LP", "CH"],
    progress: 42,
    tasks: { total: 28, completed: 12 },
    dueDate: "Jan 20, 2026",
    status: "At Risk",
    isPrivate: true,
  },
  {
    id: 3,
    name: "Community Governance",
    description: "DAO structure and voting mechanisms",
    team: ["AS", "RB", "JD", "MK", "LP"],
    progress: 85,
    tasks: { total: 20, completed: 17 },
    dueDate: "Dec 1, 2025",
    status: "On Track",
    isPrivate: false,
  },
  {
    id: 4,
    name: "Marketing Campaign Q1",
    description: "Brand awareness and user acquisition",
    team: ["CH", "LP"],
    progress: 15,
    tasks: { total: 35, completed: 5 },
    dueDate: "Feb 28, 2026",
    status: "On Track",
    isPrivate: false,
  },
]

// Tasks Data
const tasks = [
  {
    id: 1,
    title: "Review smart contract audit report",
    project: "Orÿa Protocol Development",
    assignee: { name: "John Doe", avatar: "JD" },
    dueDate: "Today",
    priority: "P1",
    labels: ["@review", "@urgent"],
    status: "In Progress",
  },
  {
    id: 2,
    title: "Prepare tokenomics presentation",
    project: "Dust Token Launch",
    assignee: { name: "Maria Kim", avatar: "MK" },
    dueDate: "Tomorrow",
    priority: "P1",
    labels: ["@presentation"],
    status: "Todo",
  },
  {
    id: 3,
    title: "Update governance documentation",
    project: "Community Governance",
    assignee: { name: "Alex Smith", avatar: "AS" },
    dueDate: "Dec 5, 2025",
    priority: "P2",
    labels: ["@docs"],
    status: "In Progress",
  },
  {
    id: 4,
    title: "Design social media assets",
    project: "Marketing Campaign Q1",
    assignee: { name: "Chris Han", avatar: "CH" },
    dueDate: "Dec 10, 2025",
    priority: "P2",
    labels: ["@design", "@blocked"],
    status: "Blocked",
  },
  {
    id: 5,
    title: "Set up analytics dashboard",
    project: "Orÿa Protocol Development",
    assignee: { name: "Rob Brown", avatar: "RB" },
    dueDate: "Dec 8, 2025",
    priority: "P3",
    labels: ["@analytics"],
    status: "Todo",
  },
]

// Activity Log
const activityLog = [
  {
    id: 1,
    user: "John Doe",
    avatar: "JD",
    action: "completed task",
    target: "Deploy testnet v2.1",
    project: "Orÿa Protocol",
    time: "5 min ago",
  },
  {
    id: 2,
    user: "Maria Kim",
    avatar: "MK",
    action: "commented on",
    target: "Token distribution model",
    project: "Dust Token Launch",
    time: "15 min ago",
  },
  {
    id: 3,
    user: "Alex Smith",
    avatar: "AS",
    action: "created task",
    target: "Draft proposal template",
    project: "Community Governance",
    time: "1 hour ago",
  },
  {
    id: 4,
    user: "Chris Han",
    avatar: "CH",
    action: "uploaded file",
    target: "brand_guidelines_v3.pdf",
    project: "Marketing Campaign Q1",
    time: "2 hours ago",
  },
  {
    id: 5,
    user: "Lisa Park",
    avatar: "LP",
    action: "changed due date",
    target: "Finalize whitepaper",
    project: "Dust Token Launch",
    time: "3 hours ago",
  },
]

// Team Activity Summary
const teamSummary = [
  { name: "John Doe", avatar: "JD", active: 8, completed: 12, overdue: 0 },
  { name: "Maria Kim", avatar: "MK", active: 6, completed: 9, overdue: 1 },
  { name: "Alex Smith", avatar: "AS", active: 5, completed: 15, overdue: 0 },
  { name: "Chris Han", avatar: "CH", active: 4, completed: 7, overdue: 2 },
  { name: "Rob Brown", avatar: "RB", active: 7, completed: 11, overdue: 1 },
  { name: "Lisa Park", avatar: "LP", active: 3, completed: 8, overdue: 0 },
]

// Automations
const automations = [
  { name: "Daily standup reminder", trigger: "Every day at 9:00 AM", status: "Active" },
  { name: "Weekly report generation", trigger: "Every Monday at 8:00 AM", status: "Active" },
  { name: "Overdue task escalation", trigger: "When task is 2 days overdue", status: "Active" },
  { name: "Gmail task creation", trigger: "On starred email", status: "Paused" },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "P1":
      return "border-red-500 text-red-500"
    case "P2":
      return "border-yellow-500 text-yellow-500"
    case "P3":
      return "border-blue-500 text-blue-500"
    default:
      return "border-muted-foreground text-muted-foreground"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "On Track":
      return "border-green-500 text-green-500"
    case "At Risk":
      return "border-yellow-500 text-yellow-500"
    case "Blocked":
      return "border-red-500 text-red-500"
    default:
      return "border-muted-foreground text-muted-foreground"
  }
}

export default function CollaborationPage() {
  const [quickAddTask, setQuickAddTask] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Collaboration</h1>
          <p className="text-muted-foreground">Manage projects, tasks, and team collaboration</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {workspaceStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/70">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Add Task */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Zap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Quick add: 'Review proposal tomorrow @maria #P1' "
                value={quickAddTask}
                onChange={(e) => setQuickAddTask(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>Add Task</Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Use natural language: dates, @mentions, #priorities, and +labels are auto-detected
          </p>
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">My Tasks</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="automations">Automations</TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="group cursor-pointer transition-colors hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      {project.isPrivate && <Lock className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <Badge variant="outline" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 4).map((member, i) => (
                        <Avatar key={i} className="h-8 w-8 border-2 border-background">
                          <AvatarFallback className="text-xs">{member}</AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 4 && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                          +{project.team.length - 4}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        {project.tasks.completed}/{project.tasks.total}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.dueDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Link2 className="h-3 w-3" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <FileText className="h-3 w-3" />
                      Files
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <MessageSquare className="h-3 w-3" />
                      Discuss
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="today">Due Today</SelectItem>
                <SelectItem value="p1">Priority P1</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardContent className="divide-y divide-border/40 p-0">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-4 w-4 rounded-full border-2 ${task.status === "In Progress" ? "border-primary bg-primary/20" : task.status === "Blocked" ? "border-red-500 bg-red-500/20" : "border-muted-foreground"}`}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{task.title}</span>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{task.project}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {task.dueDate}
                        </span>
                      </div>
                      <div className="mt-1 flex gap-1">
                        {task.labels.map((label) => (
                          <Badge
                            key={label}
                            variant="secondary"
                            className={`text-xs ${label === "@blocked" ? "bg-red-500/10 text-red-500" : ""}`}
                          >
                            {label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">{task.assignee.avatar}</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Log Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>Complete history of all project activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activityLog.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium text-primary">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.project} • {activity.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                Load More Activity
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Activity</CardTitle>
                  <CardDescription>Summary of active, completed, and overdue tasks per member</CardDescription>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Plus className="h-4 w-4" />
                  Invite Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamSummary.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center justify-between rounded-lg border border-border/40 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">Team Member</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{member.active}</p>
                        <p className="text-xs text-muted-foreground">Active</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-500">{member.completed}</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-lg font-bold ${member.overdue > 0 ? "text-red-500" : "text-muted-foreground"}`}
                        >
                          {member.overdue}
                        </p>
                        <p className="text-xs text-muted-foreground">Overdue</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automations Tab */}
        <TabsContent value="automations" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Automations</CardTitle>
                  <CardDescription>Automate repetitive workflows and notifications</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Automation
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {automations.map((automation, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border/40 p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      {automation.name.includes("reminder") ? (
                        <Bell className="h-5 w-5 text-primary" />
                      ) : automation.name.includes("report") ? (
                        <FileText className="h-5 w-5 text-primary" />
                      ) : automation.name.includes("Gmail") ? (
                        <MessageSquare className="h-5 w-5 text-primary" />
                      ) : (
                        <RefreshCw className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{automation.name}</p>
                      <p className="text-sm text-muted-foreground">{automation.trigger}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={
                        automation.status === "Active"
                          ? "border-green-500 text-green-500"
                          : "border-yellow-500 text-yellow-500"
                      }
                    >
                      {automation.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-dashed border-border/60 p-6 text-center">
                <Zap className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-2 font-medium">Connect Integrations</p>
                <p className="text-sm text-muted-foreground">Link Gmail, Slack, or Zapier to unlock more automations</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Browse Integrations
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
