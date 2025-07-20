import { features } from "@/components/global/features"
import GradientText from "@/components/global/gradient-text"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, BarChart, Settings, Globe, Zap } from "lucide-react"



export default function FeaturesSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="text-center space-y-3">
        <GradientText className="text-4xl font-semibold" element="H2">
          Powerful Features for Thriving Communities
        </GradientText>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Insightify provides a comprehensive suite of tools designed to help you build, manage, and grow your online
          community with ease.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => (
          <Card key={index} className="bg-themeBlack border-themeGray p-6 flex flex-col items-start text-left">
            <CardHeader className="p-0 pb-4">
              <feature.icon className="h-8 w-8 text-purple-400" />
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
              <CardDescription className="text-lightGray">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
