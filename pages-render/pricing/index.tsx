import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

type Props = {}

const pricingPlans = [
  {
    title: "Free",
    price: "$0/m",
    description: "Great if you’re just getting started",
    features: [
      "Basic community features",
      "Limited storage",
      "Standard support",
      "Up to 5 members",
      "Public communities only",
    ],
    buttonText: "Start for free",
    buttonVariant: "outline",
    buttonClass: "bg-transparent text-lightGray hover:bg-lightGray hover:text-themeBlack",
    link: "#",
  },
  {
    title: "Pro",
    price: "$99/m",
    description: "Perfect for growing communities",
    features: [
      "All Free features",
      "Unlimited storage",
      "Priority support",
      "Up to 50 members",
      "Private communities",
      "Advanced analytics",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    buttonClass: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
    link: "#",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited members",
      "On-premise deployment",
      "24/7 premium support",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    buttonClass: "bg-transparent text-lightGray hover:bg-lightGray hover:text-themeBlack",
    link: "#",
  },
]

const Pricing = (props: Props) => {
  return (
    <div className="w-full pt-20 flex flex-col items-center gap-3" id="pricing">
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center" container={""}>
        <GradientText className="text-4xl font-semibold text-center" element="H2">
          Pricing Plans That Fit Your Right
        </GradientText>
        <p className="text-sm md:text-center text-left text-muted-foreground">
          Insightify is a growing online community platform that empowers people to connect,{" "}
          <br className="hidden md:block" /> collaborate, and cultivate meaningful relationships
        </p>
      </BackdropGradient>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.title}
            className={`p-7 bg-themeBlack border-themeGray flex flex-col ${plan.highlight ? "border-2 border-purple-500 shadow-lg" : ""}`}
          >
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl font-bold text-white">{plan.price}</CardTitle>
              <CardDescription className="text-lightGray">{plan.description}</CardDescription>
              {plan.highlight && <span className="text-xs font-semibold text-purple-400 mt-2">Most Popular</span>}
              <Link href={plan.link} className="w-full mt-3">
                <Button variant={"outline"} className={`w-full rounded-2xl ${plan.buttonClass}`}>
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-lightGray mt-5">
              <p className="font-semibold text-white">Features</p>
              {plan.features.map((feature, featureIndex) => (
                <span key={featureIndex} className="flex gap-2 mt-1 items-center">
                  <Check className="h-4 w-4 text-purple-400" />
                  {feature}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Pricing
