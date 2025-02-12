import React from 'react';
import { Bell, Home, MessageSquare, Settings, Users, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const channels = [
  { id: 1, name: "General", icon: Home, count: 12 },
  { id: 2, name: "Announcements", icon: Bell },
  { id: 3, name: "Community", icon: Users },
  { id: 4, name: "Support", icon: MessageSquare },
];

const leaderboard = [
  { id: 1, name: "Sarah K.", points: 1250, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Michael R.", points: 1100, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "David L.", points: 950, avatar: "/placeholder.svg?height=32&width=32" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="fixed left-0 h-screen w-64 bg-white shadow-lg">
          <div className="flex h-16 items-center justify-between border-b px-4">
            <h1 className="text-xl font-bold text-primary">Dashboard</h1>
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1 p-2">
              {channels.map((channel) => (
                <Button
                  key={channel.id}
                  variant="ghost"
                  className="w-full justify-start gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                  asChild
                >
                  <Link href="#">
                    <channel.icon className="h-4 w-4 text-gray-500" />
                    <span>{channel.name}</span>
                    {channel.count && (
                      <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
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
        <main className="ml-64 flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2>
              <p className="text-gray-500">Here's what's happening in your community</p>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Activity Stats Cards */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-3">
                <CardTitle className="text-lg">Messages</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">1,234</div>
                <p className="mt-1 text-sm text-gray-500">Total messages sent</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-3">
                <CardTitle className="text-lg">Members</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">321</div>
                <p className="mt-1 text-sm text-gray-500">Active members</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-3">
                <CardTitle className="text-lg">Online Now</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">45</div>
                <p className="mt-1 text-sm text-gray-500">Members online</p>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader className="border-b bg-primary/5">
                <CardTitle>Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {leaderboard.map((user, i) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-4 border-b p-4 last:border-0 hover:bg-gray-50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <img src={user.avatar} alt="" className="h-10 w-10 rounded-full" />
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.points.toLocaleString()} points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="col-span-full md:col-span-2">
              <CardHeader className="border-b bg-primary/5">
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 border-b p-4 last:border-0 hover:bg-gray-50"
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">User {i + 1}</span> posted a new message in{" "}
                          <span className="font-medium text-primary">General</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">{2 + i} minutes ago</p>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="fixed right-0 h-screen w-64 border-l bg-white">
          <div className="flex h-16 items-center border-b px-4">
            <h2 className="font-semibold">Online Members</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 py-3">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">User {i + 1}</div>
                    <div className="text-xs text-gray-500">Active now</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;