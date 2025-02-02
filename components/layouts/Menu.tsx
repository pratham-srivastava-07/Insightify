import useNavigation from "@/hooks/navigation"
import { Card, CardContent } from "../ui/card"
import { GROUP_CONSTANTS } from "@/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"

type MenuProps = {
    orientation: "desktop" | "mobile"
}

export default function Menu({orientation}: MenuProps) {
    const {section, onSetSection} = useNavigation()

    switch(orientation) {
        case "desktop":
            return <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur_safari backdrop-filter backdrop-blur-2xl  bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                <CardContent className="p-0 flex gap-2">
                {GROUP_CONSTANTS.landingPageMenu.map((menuItem) => (
                  <div key={menuItem.id}>
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path),
                })}
                className={cn(
                  "rounded-xl flex gap-2 py-2 px-4 items-center",
                  section == menuItem.path
                    ? "bg-[#09090B] border-[#27272A]"
                    : "",
                )}
                
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
              </div>
            ))}
                </CardContent>
            </Card>
        
        case "mobile":
            return (
                <div className="flex flex-col mt-10">
                  {GROUP_CONSTANTS.landingPageMenu.map((menuItem) => (
                    <div key={menuItem.id}>
                    <Link
                      href={menuItem.path}
                      {...(menuItem.section && {
                        onClick: () => onSetSection(menuItem.path),
                      })}
                      className={cn(
                        "rounded-xl flex gap-2 py-2 px-4 items-center",
                        section == menuItem.path ? "bg-themeGray border-[#27272A]" : "",
                      )} 
                    >
                      {menuItem.icon}
                      {menuItem.label}
                    </Link>
                    </div>
                  ))}
                </div>
              )
        
        default:
            return <div></div>
    }
}