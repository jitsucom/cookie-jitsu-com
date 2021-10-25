import { PageProps } from "../../lib/page"
import styles from "./AboutMe.module.css"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { Button } from "../Button/Button"

export const aboutMeProps: PageProps = {
  title: "About author",
}

export function AboutMe() {
  return (
    <div>
      <div className="justify-center flex">
        <div className="max-w-7xl flex-grow px-12">
          <h1>About Me</h1>
          <div className="text-neutral-500 -mt-3 flex items-center">
            <div className="pr-4">Vladimir Klimontovich</div>
            <div className={`flex items-center space-x-3 ${styles.socialLinks}`}>
              <a href="https://github.com/vklimontovich">
                <BsGithub />
              </a>
              <a href="https://twitter.com/vklimontivich">
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
            </div>
            <div className="text-neutral-500">Before</div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>
                Founder & CTO at <a href="https://getintent.com">GetIntent</a>
              </span>
              . GetIntent is an online advertising platform. Built a platform processing up to 1M reqs per second.
            </div>
            <div className={styles.careerItem}>
              <span className={styles.careerTitle}>Engineer at <a href="https://www.iponweb.com">IPONWEB</a></span>. Built first version of{" "}
              <a href="https://www.iponweb.com/technology/">u-Audience</a>, a user data management platform
            </div>
          </article>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <Button action="/slides">View Presentation →</Button>
      </div>
    </div>
  )
}
