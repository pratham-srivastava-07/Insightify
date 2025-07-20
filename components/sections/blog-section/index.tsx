import GradientText from "@/components/global/gradient-text"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Online Communities",
    description: "Explore the trends shaping digital interactions and community building.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "5 Tips for Engaging Your Members",
    description: "Strategies to boost participation and foster a lively community.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Insightify's Latest Updates",
    description: "Discover the new features and improvements we've rolled out.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function BlogSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="text-center space-y-3">
        <GradientText className="text-4xl font-semibold" element="H2">
          Latest From Our Blog
        </GradientText>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Stay updated with our insights, tips, and company news.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-themeBlack border-themeGray flex flex-col items-start text-left overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-xl"
              />
            </div>
            <CardContent className="p-6 space-y-3">
              <CardTitle className="text-xl font-bold text-white">{post.title}</CardTitle>
              <CardDescription className="text-lightGray">{post.description}</CardDescription>
              <Link href={post.link} className="text-purple-400 hover:underline text-sm font-medium">
                Read More &rarr;
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
