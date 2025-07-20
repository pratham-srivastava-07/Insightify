import GradientText from "@/components/global/gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Insightify has transformed how our community interacts. The features are intuitive and the platform is incredibly stable.",
    author: "Jane Doe",
    title: "Community Manager at ConnectHub",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "The best platform for fostering genuine connections. Our members love the clean interface and powerful discussion tools.",
    author: "John Smith",
    title: "Founder of Creative Minds",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "Finally, a community platform that understands our needs. Insightify's analytics are a game-changer for understanding engagement.",
    author: "Alice Johnson",
    title: "CEO of InnovateTech",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export default function TestimonialsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="text-center space-y-3">
        <GradientText className="text-4xl font-semibold" element="H2">
          What Our Community Says
        </GradientText>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Hear directly from the people who are building and thriving on Insightify.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-themeBlack border-themeGray p-6 flex flex-col items-start text-left">
            <CardContent className="p-0 space-y-4">
              <p className="text-lightGray italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-themeGray">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
