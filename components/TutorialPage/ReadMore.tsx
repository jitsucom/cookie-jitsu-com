import { useState } from "react"

export function ReadMore({ title = undefined, children }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <div className="text-center cursor-pointer text-neutral-500" onClick={() => setExpanded(!expanded)}>
        {title || "Read More"}
        <svg
          className={`inline transition ease-in-out duration-150 transform h-6  ${expanded && "rotate-180"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </div>
      {expanded && <div className="text-sm mt-4 text-neutral-500">{children}</div>}
    </div>
  )
}
