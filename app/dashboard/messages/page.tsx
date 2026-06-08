"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Send, MoreHorizontal, Star, Archive, Trash2 } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "AJ",
    lastMessage: "Thanks for the update on the treasury report!",
    time: "2 min ago",
    unread: 2,
    starred: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "BS",
    lastMessage: "Can we schedule a call to discuss the new proposal?",
    time: "15 min ago",
    unread: 0,
    starred: false,
  },
  {
    id: 3,
    name: "Carol White",
    avatar: "CW",
    lastMessage: "The analytics dashboard looks great!",
    time: "1 hour ago",
    unread: 0,
    starred: true,
  },
  {
    id: 4,
    name: "David Brown",
    avatar: "DB",
    lastMessage: "I've approved the allocation request.",
    time: "3 hours ago",
    unread: 1,
    starred: false,
  },
  {
    id: 5,
    name: "Eva Martinez",
    avatar: "EM",
    lastMessage: "Please review the user permissions changes.",
    time: "Yesterday",
    unread: 0,
    starred: false,
  },
]

const messageStats = [
  { label: "Total Messages", value: "1,247" },
  { label: "Unread", value: "23" },
  { label: "Starred", value: "15" },
  { label: "Archived", value: "89" },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">Communicate with team members and stakeholders</p>
        </div>
        <Button className="gap-2">
          <Send className="h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {messageStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2 p-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full flex items-center gap-3 rounded-lg p-3 text-left transition-colors ${selectedConversation.id === conv.id ? "bg-primary/10" : "hover:bg-muted"}`}
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/20 text-primary">{conv.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && <Badge className="ml-auto">{conv.unread}</Badge>}
                {conv.starred && <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="border-b border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/20 text-primary">{selectedConversation.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{selectedConversation.name}</CardTitle>
                  <CardDescription>Online</CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Archive className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex h-[400px] flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto py-4">
              <div className="flex justify-start">
                <div className="max-w-[70%] rounded-lg bg-muted p-3">
                  <p className="text-sm">{selectedConversation.lastMessage}</p>
                  <span className="mt-1 block text-xs text-muted-foreground">{selectedConversation.time}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[70%] rounded-lg bg-primary p-3 text-primary-foreground">
                  <p className="text-sm">{"Got it, I'll take a look at it right away!"}</p>
                  <span className="mt-1 block text-xs opacity-70">Just now</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 border-t border-border/40 pt-4">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button className="gap-2">
                <Send className="h-4 w-4" />
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
