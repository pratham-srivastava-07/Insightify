import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export function OnlineMembers() {
  return (
    <aside className="hidden lg:block fixed right-0 h-screen w-64 border-l border-gray-800 bg-gray-900">
      <div className="flex h-16 items-center border-b border-gray-800 px-4">
        <h2 className="font-semibold">Online Members</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <div className="relative">
                <Image fill src="/placeholder.svg?height=32&width=32" alt="" className="h-8 w-8 rounded-full" />
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-gray-900 bg-green-500" />
              </div>
              <div>
                <div className="text-sm font-medium">User {i + 1}</div>
                <div className="text-xs text-gray-400">Active now</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

