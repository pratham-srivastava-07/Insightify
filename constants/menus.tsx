import { Contact, Home, HomeIcon } from "lucide-react"
import { SiAboutdotme, SiChatbot, SiCoursera, SiDevexpress, SiMsibusiness, SiWritedotas } from "react-icons/si"

export type MenuProps = {
    id: number,
    label: string,
    icon: JSX.Element
    path: string,
    section?: boolean
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
