import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const leaderboard = [
  { id: 1, name: "Sarah K.", points: 1250, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Michael R.", points: 1100, avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "David L.", points: 950, avatar: "/placeholder.svg?height=32&width=32" },
]

export function Leaderboard() {
  return (
    <Card className="col-span-full md:col-span-1 bg-gray-800 border-gray-700">
      <CardHeader className="border-b border-gray-700 bg-primary/10">
        <CardTitle>Top Contributors</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {leaderboard.map((user, i) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border-b border-gray-700 p-4 last:border-0 hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              {i + 1}
            </div>
            <img src={user.avatar || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-400">{user.points.toLocaleString()} points</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

