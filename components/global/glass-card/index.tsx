import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode,
    className?: string 
}

export default function GlassCard({children, className}: Props) {
    return <Card className={cn("rounded-2xl bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-4xl bg-opacity-40", className)}>
        {children}
    </Card>
}