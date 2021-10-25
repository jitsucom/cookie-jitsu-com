import { ReactNode, useState } from "react"
import styles from "./Ellipsis.module.css"

export type EllipsisProps = {
  children: ReactNode
  title: ReactNode
}

export function Ellipsis({ children, title }: EllipsisProps) {
  const [tooltipVisible, setTootlipVisible] = useState(false)
  return (
    <span>
      {title}{" "}
      <span className="relative text-neutral-600 cursor-pointer" onClick={() => {
        setTootlipVisible(!tooltipVisible);
      }} style={{fontSize: '80%'}}>
        (
        <i className="relative">
          details👇<span className={`${styles.popover} ${tooltipVisible ? "block" : "hidden"}`}>{children}</span>
        </i>
        )
      </span>
    </span>
  )
}
