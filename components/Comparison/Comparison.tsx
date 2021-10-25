import { ReactNode } from "react"
import { string } from "prop-types"
import { options } from "colorette"

export interface ComparisonColumn<T extends string> {
  title: ReactNode
  //key should correspond to id in the option
  values: Record<T, ReactNode>
}

export interface ComparisonOption<T extends string> {
  id: T
  title: ReactNode
}

export type ComparisonProps<T extends string = string> = {
  columns: ComparisonColumn<T>[]
  options: ComparisonOption<T>[]
  className?: string
}

export function Comparison({ columns, options, className = undefined }: ComparisonProps) {
  return (
    <div className={`flex flex-row justify-center flex-grow ${className}`}>
      <div className={"flex flex-col flex-shrink"}>
        <div className="h-24 mb-12"></div>
        {options.map((option, idx) => (
          <div key={idx} className="h-12 flex flex-row items-center">
            <div className="text-neutral-500 text-sm">{option.title}</div>
          </div>
        ))}
      </div>
      {columns.map((column, colIdx) => (
        <div className="bg-neutral-100 ml-12 shadow-xl rounded-lg pb-12 flex-1" key={colIdx}>
          <div className="mb-12 bg-primary-500 from-primary-300 to-primary-500 bg-gradient-to-br text-neutral-100 font-semibold px-12 py-6 text-xl h-24 rounded-t-lg flex justify-center items-center">
            {column.title}
          </div>
          {options.map((option, optIndex) => (
            <div key={optIndex} className="w-96 h-12 flex flex-row items-center px-12">
              <div>{column.values[option.id]}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
