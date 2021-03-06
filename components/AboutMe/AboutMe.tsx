import { PageProps } from "../../lib/page"
import styles from "./AboutMe.module.css"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { Button } from "../Button/Button"

export const aboutMeProps: PageProps = {
  title: "About author",
}

function AnalyticsStack({ children }) {
  return (
    <div className="pt-1">
      <b>📈 Analytics Stack: </b> {children}
    </div>
  )
}

export function AboutMe() {
  return (
    <div>
      <div className="justify-center flex">
        <div className="max-w-7xl flex-grow px-12">
          <h1>About Author</h1>
          <div className="text-neutral-500 -mt-3 flex items-center">
            <div className="pr-4">Vladimir Klimontovich</div>
            <div className={`flex items-center space-x-3 ${styles.socialLinks}`}>
              <a href="https://github.com/vklimontovich">
                <BsGithub />
              </a>
              <a href="https://twitter.com/vl_klmn">
                <BsTwitter />
              </a>
              <a href="https://linkedin.com/in/klimontovich">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <article className="pt-6">
            <div className="text-neutral-500">Now</div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>
                Founder & CEO at <a href="https://jitsu.com">Jitsu (YC S20)</a>
              </span>
              . We{"'"}re open-source data ingestion platform with strong focus on realtime.
              <AnalyticsStack>Jitsu, Postgres, DBT, Metabase, Prometheus, Grafana</AnalyticsStack>
            </div>
            <div className="text-neutral-500">Before</div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>
                Founder & CTO at <a href="https://getintent.com">GetIntent</a>
              </span>
              . GetIntent is an online advertising platform. I created a platform capable of processing
              up to 1M reqs per second.
              <AnalyticsStack>Hadoop MapReduce, HDFS, ClickHouse, Postgres, Graphite, Grafana</AnalyticsStack>
            </div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>
                Engineer at <a href="https://www.iponweb.com">IPONWEB</a>
              </span>
              . Built first version of <a href="https://www.iponweb.com/technology/">u-Audience</a>, a user data
              management platform
              <AnalyticsStack>Hadoop Map-reduce / HDFS, HBase, Graphite</AnalyticsStack>
            </div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>
                Software Engineer at <a href="https://www.iponweb.com">PulsePoint</a>
              </span>
              . Built a data pipeline processing with Apache Hadoop. I also worked on ML tool that predicted clicks on
              online ads
              <AnalyticsStack>Hadoop Map-reduce / HDFS, HBase</AnalyticsStack>
            </div>
          </article>
        </div>
      </div>
      <div className="flex justify-center pt-12 pb-12">
        <Button action="/slides">View Presentation →</Button>
      </div>
    </div>
  )
}
