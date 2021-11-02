import styles from "./Header.module.css"
import { Button, ButtonAction } from "../Button/Button"
import { useRouter } from "next/router"

type MenuItem = {
  title: string
  action: ButtonAction
}

const menu: MenuItem[] = [
  // { title: "Check IP", action: "/iptool" },
  { title: "Slides", action: "/slides" },
  { title: "About", action: "/about" },
]

export function Menu() {
  const router = useRouter()
  return (
    <div className="flex flex-row space-x-4">
      {menu.map(item => (
        <div key={item.title}>
          <Button
            action={item.action}
            style="none"
            className={`text-neutral-600 font-semibold ${router.asPath === item.action && ' border-b-2 border-primary-500'}`}>
            {item.title}
          </Button>
        </div>
      ))}
    </div>
  )
}
