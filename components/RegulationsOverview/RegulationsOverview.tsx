import styles from "./RegulationsOverview.module.css"
import { Card } from "./Card"

export function RegulationsOverview() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-shrink w-96">
          <Card gdpPercent={17} populationPercent={8} name="GDPR" flagImg="/img/eu.svg" regionName="European Union" />
        </div>
        <div className="flex-shrink w-96">
          <Card gdpPercent={4} populationPercent={1} name="CCPA" flagImg="/img/cali.svg" regionName="California, US" />
        </div>
        <div className="flex-shrink w-96">
          <Card gdpPercent={3} populationPercent={1} name="Data Protection Act" flagImg="/img/uk.svg" regionName="UK" />
        </div>
      </div>
      <div className="text-neutral-600 pt-12 text-xl text-center">
        <h2>
          UK{"'"}s Data Protection Act and EU{"'"}s GDPR is the same thing!
        </h2>
      </div>
    </div>
  )
}

export function RegulationsOverviewUpcoming() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-shrink w-96">
          <Card
            gdpPercent={2}
            populationPercent={"<1"}
            name="NYPA"
            flagImg="/img/ny.svg"
            regionName={
              <>
                New York, US
                <br />
                <i>(not passed, maybe in 23)</i>
              </>
            }
          />
        </div>
        <div className="flex-shrink w-96">
          <Card
            gdpPercent={4}
            populationPercent={1}
            name="CPRA (aka CCPA 2.0)"
            flagImg="/img/cali.svg"
            regionName={
              <>
                California, US
                <br />
                <i>(takes affect at 1/1/23)</i>
              </>
            }
          />
        </div>
        <div className="flex-shrink w-96">
          <Card gdpPercent={18} populationPercent={21} name={"PIPL"} flagImg="/img/china.svg" regionName={<>
            CHINA<br />
            (took effect yesterday!)
          </>} />
        </div>
      </div>
    </div>
  )
}
