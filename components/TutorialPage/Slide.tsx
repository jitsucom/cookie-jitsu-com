import { ReactNode } from "react"
import { Button } from "../Button/Button"
import { ReadMore } from "./ReadMore"

type SlideProps = {
  next?: () => void
  prev?: () => void
  children: ReactNode
  title: ReactNode
  description: ReactNode
  slideNumber: number
  totalSlides: number
}

export function Slide(props: SlideProps) {
  let dividerHeight = {
    minHeight: "1px",
    height: "1px",
  }
  return (
    <div className="px-12 py-5 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-4 pb-1 items-center">
          <div>
            <Button action="/" style="none" className="text-neutral-500">
              ← Back to <b>cookie.jitsu.com</b>
            </Button>
          </div>
          <div className="flex justify-between space-x-4 items-center">
            <Button action={props.prev} style="transparent" className="w-28 inline-block">
              ⟵
            </Button>
            <div className="text-sm text-neutral-600 w-24 text-center">
              {props.slideNumber} of {props.totalSlides}
            </div>
            <Button action={props.next} style="transparent" className="w-28 inline-block">
              ⟶
            </Button>
          </div>
        </div>
        <div className="w-full bg-neutral-300 mb-6" style={dividerHeight}>
          <div
            className="bg-primary-500"
            style={{
              width: `${Math.round((props.slideNumber / props.totalSlides) * 100)}%`,
              ...dividerHeight,
            }}
          />
        </div>
        <h1 className="text-center">{props.title}</h1>
        <div className="max-w-7xl flex flex-col items-center pb-12" style={{ margin: "auto" }}>
          <div className="mb-12 mt-12 w-full">{props.children}</div>
          {props.description && <ReadMore>{props.description}</ReadMore>}
        </div>
      </div>
    </div>
  )
}
