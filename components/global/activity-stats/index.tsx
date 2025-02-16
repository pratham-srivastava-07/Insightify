import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { title: "Messages", value: "1,234", description: "Total messages sent" },
  { title: "Members", value: "321", description: "Active members" },
  { title: "Online Now", value: "45", description: "Members online" },
]

export function ActivityStats() {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
          <CardHeader className="bg-primary/10 pb-3">
            <CardTitle className="text-lg">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

