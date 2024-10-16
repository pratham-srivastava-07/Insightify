import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { Label } from "@radix-ui/react-label"
import { Grid, Heart, Megaphone } from "lucide-react"
import { BsListColumnsReverse } from "react-icons/bs"
import { IoDocument } from "react-icons/io5"


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
    label: "Students can create teams within Groups",
    icon: <Grid />,
  },
  {
    id: "4",
    label: "Gamification",
    icon: <IoDocument />,
  },
  {
    id: "5",
    label: "Host unlimited courses",
    icon: <BsListColumnsReverse />,
  },
  {
    id: "6",
    label: "White-labeling options",
    icon: <Label />,
  },
]