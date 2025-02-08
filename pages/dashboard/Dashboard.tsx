"use client"

import { useState } from "react";
import { Menu, Users, MessageSquare, Heart, Bell, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const leaderboardData = [
    { id: 1, name: "David H.", avatar: "/placeholder.svg", points: 1250, progress: 85 },
    { id: 2, name: "Arun Kumar", avatar: "/placeholder.svg", points: 1100, progress: 75 },
    { id: 3, name: "Romeo J.", avatar: "/placeholder.svg", points: 950, progress: 65 },
    { id: 4, name: "Sarah M.", avatar: "/placeholder.svg", points: 920, progress: 60 },
    { id: 5, name: "Mike R.", avatar: "/placeholder.svg", points: 890, progress: 55 },
  ];

  const channelPosts = [
    {
      id: 1,
      author: "Perrin Joseph",
      content: "Just launched my SAAS product! Check out how I built it from scratch with zero budget. Full tutorial dropping tomorrow! 🚀",
      timestamp: "25 minutes ago",
      likes: 40245,
      comments: 892,
      tags: ["Launch", "SAAS"],
    },
    {
      id: 2,
      author: "Coffee Chat",
      content: "Join us for an exclusive Q&A session with successful founders who built million-dollar businesses. Starting in 23 minutes!",
      timestamp: "1 hour ago",
      likes: 32150,
      comments: 445,
      tags: ["Event", "Startup"],
    },
    {
      id: 3,
      author: "Tech Insights",
      content: "Breaking down the top 5 emerging tech trends that will shape 2024. Thread incoming! 🧵",
      timestamp: "2 hours ago",
      likes: 28930,
      comments: 673,
      tags: ["Tech", "Trends"],
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Sidebar */}
      <div 
        className={`${
          sidebarOpen ? (isMobile ? 'w-full fixed inset-0 z-50' : 'w-72') : 'w-0'
        } glass transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-lg bg-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Prodigies</h1>
              <p className="text-sm text-muted-foreground">Community</p>
            </div>
          </div>

          <nav className="space-y-2">
            {["Home", "Discover", "Activity", "Analytics", "Messages", "Settings"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start text-base font-normal hover:bg-white/5"
              >
                {item}
              </Button>
            ))}
          </nav>

          <div className="mt-auto">
            <Card className="glass p-4">
              <p className="text-sm font-medium mb-2">Need help?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Check our documentation or contact support
              </p>
              <Button variant="secondary" className="w-full">
                Get Support
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto scrollbar-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 glass border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:hidden"
              >
                <Menu size={20} />
              </Button>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-9 pr-4 rounded-lg glass focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
              </Button>
              <Avatar className="h-9 w-9">
                <img src="/placeholder.svg" alt="User" />
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Members", value: "52.4k", change: "+12%" },
                { label: "Active Now", value: "324", change: "+8%" },
                { label: "Weekly Posts", value: "2.1k", change: "+23%" },
                { label: "Engagement", value: "87%", change: "+5%" },
              ].map((stat) => (
                <Card key={stat.label} className="glass p-6 hover-scale">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="flex items-end gap-2 mt-2">
                    <h3 className="text-2xl font-semibold">{stat.value}</h3>
                    <span className="text-sm text-emerald-400">{stat.change}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leaderboard */}
              <Card className="glass p-6 lg:row-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Top Performers</h3>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </div>
                <div className="space-y-6">
                  {leaderboardData.map((user, index) => (
                    <div key={user.id} className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-4">{index + 1}</span>
                      <Avatar className="h-10 w-10">
                        <img src={user.avatar} alt={user.name} />
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{user.name}</p>
                        <div className="w-full h-1.5 bg-secondary/50 rounded-full mt-2">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${user.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-primary font-medium">{user.points}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Feed */}
              <div className="lg:col-span-2 space-y-4">
                {channelPosts.map((post) => (
                  <Card key={post.id} className="glass p-6 hover-scale">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <img src="/placeholder.svg" alt={post.author} />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{post.author}</h4>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                        </div>
                        <p className="text-base mb-3">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6 text-muted-foreground">
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Heart size={18} />
                            <span>{post.likes.toLocaleString()}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <MessageSquare size={18} />
                            <span>{post.comments.toLocaleString()}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block w-80 glass border-l border-white/10">
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Prodigies University</h2>
            <p className="text-sm text-muted-foreground">
              Learn how to start your SAAS for $0
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-semibold">52.4k</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-semibold">324</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-semibold">10</div>
              <div className="text-sm text-muted-foreground">Admins</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: Users, label: "Pro Mentorship" },
              { icon: MessageSquare, label: "Pro Discord" },
            ].map((item) => (
              <Button
                key={item.label}
                variant="outline"
                className="w-full justify-between hover:bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={16} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;