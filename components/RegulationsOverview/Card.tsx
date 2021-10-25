import { inspect } from "util"
import styles from "./RegulationsOverview.module.css"
import { ReactNode } from 'react'

type CardProps = {
  gdpPercent: ReactNode
  populationPercent: ReactNode
  name: ReactNode
  flagImg: string
  regionName: ReactNode
}

export function Card({ flagImg, gdpPercent, name, populationPercent, regionName }: CardProps) {
  return (
    <div className={`flex flex-col bg-neutral-100 rounded-xl ${styles.card} w-full h-full`}>
      <div className="px-4 py-6 rounded-t-xl font-semibold text-sm">
        <div>
          <span className="text-outline-success text-xl">{gdpPercent}%</span>{" "}
          <span className="text-neutral-600">of World GDP</span>
        </div>
        <div>
          <span className="text-outline-success text-xl">{populationPercent}%</span>{" "}
          <span className="text-neutral-600">of Internet Population</span>
        </div>
      </div>
      <div className="bg-primary-500 rounded-b-xl from-primary-300 to-primary-500 bg-gradient-to-br px-4 py-6 text-background font-semibold flex flex-row items-center">
        <div className="flex flex-col items-center flex-shrink-0">
          <img src={flagImg} className="h-12" />
        </div>
        <div className="ml-12 text-neutral-100 flex-grow">
          <div>{name}</div>
          <div className="text-xs text-neutral-300">{regionName}</div>
        </div>
      </div>
    </div>
  )
}
