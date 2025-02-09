"use client"
import { Bell, Home, MessageSquare, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// Sample data
const channels = [
  { id: 1, name: "General", icon: Home, count: 12 },
  { id: 2, name: "Announcements", icon: Bell },
  { id: 3, name: "Community", icon: Users },
  { id: 4, name: "Support", icon: MessageSquare },
]

const leaderboard = [
  { id: 1, name: "Sarah K.", points: 1250, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Michael R.", points: 1100, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "David L.", points: 950, avatar: "/placeholder.svg?height=32&width=32" },
]

export default function DashboardPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full border-r md:w-64">
        <div className="flex h-14 items-center border-b px-4">
          <Input placeholder="Search channels..." className="h-8" />
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-2">
            {channels.map((channel) => (
              <Button key={channel.id} variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="#">
                  <channel.icon className="h-4 w-4" />
                  <span>{channel.name}</span>
                  {channel.count && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {channel.count}
                    </span>
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Leaderboard Card */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, i) => (
                    <div key={user.id} className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">{i + 1}</div>
                      <div className="flex items-center gap-2">
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-8 w-8 rounded-full" />
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.points} points</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Messages</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Members</span>
                    <span className="font-medium">321</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Online</span>
                    <span className="font-medium">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm">
                          New message in <span className="font-medium">General</span>
                        </p>
                        <p className="text-xs text-muted-foreground">2 min ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden w-64 border-l lg:block">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="font-semibold">Online Members</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 py-2">
                <div className="relative">
                  <img src={`/placeholder.svg?height=32&width=32`} alt="" className="h-8 w-8 rounded-full" />
                  <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-background bg-green-500" />
                </div>
                <div>
                  <div className="text-sm font-medium">User {i + 1}</div>
                  <div className="text-xs text-muted-foreground">Online</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>
    </div>
  )
}