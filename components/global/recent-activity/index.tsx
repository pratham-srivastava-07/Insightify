import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function RecentActivity() {
  return (
    <Card className="col-span-full md:col-span-2 bg-gray-800 border-gray-700">
      <CardHeader className="border-b border-gray-700 bg-primary/10">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-b border-gray-700 p-4 last:border-0 hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">User {i + 1}</span> posted a new message in{" "}
                  <span className="font-medium text-primary">General</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">{2 + i} minutes ago</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

