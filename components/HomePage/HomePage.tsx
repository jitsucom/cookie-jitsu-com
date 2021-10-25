import styles from "./HomePage.module.css"
import { Button } from "../Button/Button"

export function HomePage() {
  return (
    <div className="flex flex-col items-center pt-16 px-16 text">
      <div className="text-neutral-600 text-lg">
        Introducing <b>cookie.jitsu.com</b>
      </div>
      <h1 className="font-bold text-6xl text-center" style={{ maxWidth: "36em" }}>
        Cookie & privacy policy <span className={`${styles.highlight}`}>for engineers</span>
      </h1>
      <div className="text-xl pt-8 text-center text-neutral-600 pb-12" style={{ maxWidth: "36em" }}>
        <article>
          A developer-friendly explanation of laws regulating user behaviour data collection. We cover{" "}
          <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">🇪🇺 GDPR</a>,{" "}
          <a href="https://www.gov.uk/data-protection">
            🇬🇧 DPA
          </a>
          , and <a href="https://en.wikipedia.org/wiki/California_Consumer_Privacy_Act">CCPA (California)</a>{" "}
          regulations. This website has been build for a talk on{" "}
          <a href="https://altinity.com/osa-con-2021/">OSA Con 2021.</a>
        </article>
      </div>
      <div className="flex flex-col items-center">
        <Button action="/slides">View Presentation →</Button>
        <article className="text-center pt-6">
          Built by{" "}
          <Button action="/about" style="none">
            Vladimir Klimontovich
          </Button>
          <br /> CEO @ <a href="https://jitsu.com">Jitsu (YC S20)</a>
        </article>
      </div>
    </div>
  )
}
