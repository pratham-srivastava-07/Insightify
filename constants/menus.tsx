import { Contact, Home, HomeIcon, WorkflowIcon } from "lucide-react"
import { JSX } from "react"
import { PiCommandDuotone } from "react-icons/pi"
import { SiAboutdotme, SiChatbot, SiCoursera, SiDevexpress, SiMsibusiness, SiStudyverse, SiWritedotas } from "react-icons/si"

export type MenuProps = {
    id: number,
    label: string,
    icon: JSX.Element
    path: string,
    section?: boolean
    description?: string
}

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
        id: 0,
        label: "Home",
        icon: <Home />,
        path: "/",
        section: true
    },
    {
        id: 1,
        label: "Blogs",
        icon: <SiWritedotas />,
        path: "/blog",
        section: true
    },
    {
        id: 2,
        label: "Contact",
        icon: <Contact />,
        path: "/contact",
        section: true
    },
    {
        id: 3,
        label: "About",
        icon: <SiAboutdotme />,
        path: "/about",
        section: true
    }
]   


export type GroupMenuProps = {
    id: number
    label: string
    icon: JSX.Element
    path: string
  }


  export const GROUP_PAGE_MENU: MenuProps[] = [
    {
      id: 0,
      label: "Group",
      icon: <Home />,
      path: "/",
      section: true,
    },
    {
      id: 1,
      label: "Courses",
      icon: <SiCoursera />,
      path: "#pricing",
      section: true,
    },
    {
        id: 2,
        label: "Events",
        icon: <SiMsibusiness />,
        path: "/explore",
        section: false
    },
    {
      id: 3,
      label: "Members",
      icon: <SiDevexpress />,
      path: "/explore",
    },
    {
      id: 4,
      label: "About",
      icon: <SiAboutdotme />,
      path: "/explore",
    },
    {
      id: 5,
      label: "Huddle",
      icon: <SiChatbot />,
      path: "/explore",
    },
]



export const GROUP_TEMPLATES: MenuProps[] = [
  {
    id: 1,
    label: "Community Group",
    description: "Ideal for clubs, social groups, and community events.",
    icon: <PiCommandDuotone />,
    path: ""
  },
  {
    id: 2,
    label: "Study Group",
    description: "Perfect for students collaborating on projects and assignments.",
    icon: <SiStudyverse />,
    path: ""
  },
  {
    id: 3,
    label: "Work Project",
    description: "Best for organizing work-related projects and team collaborations.",
    icon: <WorkflowIcon />,
    path: ""
  },
  // Add more templates as needed
]
