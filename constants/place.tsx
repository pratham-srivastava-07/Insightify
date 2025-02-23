import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { Grid, Heart, Megaphone } from "lucide-react"
import { JSX } from "react"

export type PlaceholderProps = {
  id: string
  label: string
  icon: JSX.Element
}

export const GROUP_PLACEHOLDER: PlaceholderProps[] = [
  {
    id: "0",
    label: "Highly engaging",
    icon: <Megaphone />,
  },
  {
    id: "1",
    label: "Easy to setup",
    icon: <Heart />,
  },
  {
    id: "2",
    label: "Group chat and posts",
    icon: <ChatBubbleIcon />,
  },
  {
    id: "3",
    label: "Create teams within Groups",
    icon: <Grid />,
  },
 
]