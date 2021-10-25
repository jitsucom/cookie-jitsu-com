import { ReactNode } from "react"
import styles from "./Button.module.css"
import clsx from "clsx"
import Link from "next/link"

export type ButtonAction = (() => void) | string | undefined

export type ButtonStyle = "none" | "button" | "transparent"

export type ButtonProps = {
  action: ButtonAction
  children: ReactNode
  className?: string
  style?: ButtonStyle
}

export function Button(props: ButtonProps) {
  const style = props.style || "button"
  let className = clsx(
    {
      [styles.buttonTransparent]: style === "transparent",
      [styles.buttonDefaultPalette]: style === "button",
      [styles.buttonShape]: style !== "none",
      [styles.buttonDisabled]: props.action === undefined,
    },
    props.action === undefined ? "cursor-not-allowed" : "cursor-pointer",
    props.className
  )
  if (typeof props.action === "function") {
    return (
      <a className={className} onClick={props.action}>
        {props.children}
      </a>
    )
  } else if (typeof props.action === "string") {
    return (
      <Link href={props.action}>
        <a className={className}>{props.children}</a>
      </Link>
    )
  } else {
    return <a className={className}>{props.children}</a>
  }
}
