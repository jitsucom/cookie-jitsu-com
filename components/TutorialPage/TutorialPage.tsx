import { ReactNode, useEffect, useState } from "react"
import { emptyTemplate, PageProps } from "../../lib/page"
import { Slide } from "./Slide"
import styles from "./Tutorial.module.css"

import { useRouter } from "next/router"
import { UserState } from "./UserState"
import { RegulationsOverview, RegulationsOverviewUpcoming } from "../RegulationsOverview/RegulationsOverview"
import { CcpaGdprComparison } from "./CcpaGdprComparison"
import { ExcalidrawViewer } from "../Excalidraw/Excalidraw"
import { Ellipsis } from "../Ellipsis/Ellipsis"
import { Footer } from '../Footer/Footer'

const slides: SlideDefinition[] = [
  {
    title: "Two types of tracked users",
    component: <UserState />,
    description: (
      <article className="prose">
        <p>
          Typically, user journey of each service is very simple. When the user first visits the landing page or opens
          the app we don{"'"}t know much about her. The user is <b>anonymous</b>. User rights is governed by common
          laws.
        </p>
        <p>
          Some of the <i>anonymous</i> users will eventually sign up for the service. At some point during the sign up
          flow user will agree to Terms of Services and/or Privacy Policy and will become <b>registered user</b>. After
          that moment your relationship with the user is governed by those documents. It
          {"'"}s unlikely you could put anything to ToS or Privacy Policy. However, things such as tracking
        </p>

        <p>
          This tutorial explains the tracking of <i>anonymous</i> users. What you can put into ToS/Privacy policy should
          be a separate topic
        </p>
      </article>
    ),
  },
  {
    title: "Regulations Overview",
    component: <RegulationsOverview />,
  },
  {
    title: "Upcoming Regulations",
    component: <RegulationsOverviewUpcoming />,
    description: (
      <article>
        <ul>
          <li>
            CPRA is CCPA 2.0. The changes don{"'"}t affect tracking practices. However, they affect how data is
            processed afterwards. See an{" "}
            <a href="https://www.jdsupra.com/legalnews/california-s-new-privacy-law-the-crpa-93354/">
              overview of changes
            </a>
          </li>
          <li>
            NYPA is failed to pass state senate in 2019. However, it passed the comettee in May, 2021. The vote won{"'"}
            t happen at least until 2022
          </li>
        </ul>
      </article>
    ),
  },
  {
    title: "CCPA and GDPR",
    component: <CcpaGdprComparison />,
  },
  {
    title: "The ultimate algorithm",
    component: (
      <div className="flex justify-center" style={{ height: "50vh" }}>
        <img className="h-full" src="/img/algo.png" />
      </div>
    ),
  },
  {
    title: "Jurisdiction. Can we decide based on IP address?",
    component: (
      <article className={styles.slideBullets}>
        <ul>
          <li>IP databases are not 100% accurate</li>
          <li>User might use a VPN or proxy</li>
          <li>EU resident maybe travelling</li>
          <li>
            Short answer: <u>yes we can</u> *
          </li>
        </ul>
        <div className="mt-12 text-neutral-600">* — consult your legal council</div>
      </article>
    ),
    description: (
      <article>
        Why we can?
        <ul>
          <li>That{"'"}s what Facebook / Google does</li>
          <li>Legal reference</li>
        </ul>
      </article>
    ),
  },
  {
    title: "GDPR cookie banner",
    component: (
      <article className={styles.slideBullets}>
        <p>GDPR distinguishes few types of cookies</p>
        <ul>
          <li>
            <b>Strictly necessary cookies</b>. Session id etc
          </li>
          <li>
            <b>Preferences cookies</b>. Example dark/light theme
          </li>
          <li>
            <b>
              <u>Analytics cookies</u>
            </b>
            . Product analytics
          </li>
          <li>
            <b>Marketing cookies</b>. To show more relevant ad
          </li>
        </ul>
        <p>
          User should be allowed to pick which type of cookies will be used. You can{"'"}t deny a service because user
          didn{"'"}t opted in to a certain cookie type (except <i>strictly necessary cookies</i>).
        </p>
        <p>The same logic applies to local storage or any other type of data stored on device</p>
      </article>
    ),
    description: <article>Technicaly speaking,</article>,
  },
  {
    title: "CCPA cookie banner",
    component: (
      <article className={styles.slideBullets}>
        <ul>
          <li>You do not need a banner!</li>
          <li>
            CCPA is an opt-out regulation. At it applies only to {'"'}large{'"'} companies (see definition above)
          </li>
          <li>Some businesses may need to provide a way to opt-out from analytics cookies *</li>
          <li>
            Most businesses should allow to opt-out from marketing cookies (aka {'"'}do not sell my data{'"'})
          </li>
          <li>Consult you legal council!</li>
        </ul>
        <p className="text-xl text-neutral-600">
          * — see{" "}
          <a href="https://ccpa-info.com/wp-content/uploads/2019/08/Handbook-of-FAQs-Cookies.pdf">
            ccpa-info.com Handbook
          </a>
        </p>
      </article>
    ),
  },
  {
    title: "IP address",
    component: (
      <article className={styles.slideBullets}>
        <ul>
          <li>
            <Ellipsis title={<>IP address is a personal information, CCPA</>}>
              Quote from <a href="https://cdp.cooley.com/ccpa-2018/">CCPA</a>:{" "}
              <i>
                {'"'}Personal Information{'"'} means information that identifies, relates to, describes, is reasonably
                capable of being associated with, or could reasonably be linked, directly or indirectly, with a
                particular consumer or household. Personal information includes, but is not limited to [...] identifiers
                such as a real name, alias, postal address, unique personal identifier, online identifier,{" "}
                <u>internet protocol</u>
                address, email address, account name, social security number, driver’s license number, passport number,
                or other similar identifiers.{" "}
              </i>
            </Ellipsis>
          </li>
          <li>
            Instead IP address you can collect first 3 octets <code>195.91.157.21 → 195.91.157.0</code>. It{"'"}s enough
            for geo-locating user (up to city precision)
          </li>
          <li>You can record IP address for security purposes (check with Leonard)</li>
          <li>Consult you legal council!</li>
        </ul>
        <p className="text-xl text-neutral-600">
          * — see{" "}
          <a href="https://ccpa-info.com/wp-content/uploads/2019/08/Handbook-of-FAQs-Cookies.pdf">
            ccpa-info.com Handbook
          </a>
        </p>
      </article>
    ),
  },
  {
    title: <>IP address</>,
    component: (
      <article className={styles.slideBullets}>
        <ul>
          <li>
            IP is a personal information in both CCPA
            <Ellipsis title={<>CCPA</>}>
              Quote from <a href="https://cdp.cooley.com/ccpa-2018/">CCPA</a>:{" "}
              <i>
                {'"'}Personal Information{'"'} means information that identifies, relates to, describes, is reasonably
                capable of being associated with, or could reasonably be linked, directly or indirectly, with a
                particular consumer or household. Personal information includes, but is not limited to [...] identifiers
                such as a real name, alias, postal address, unique personal identifier, online identifier,{" "}
                <u>internet protocol</u>
                address, email address, account name, social security number, driver’s license number, passport number,
                or other similar identifiers.{" "}
              </i>
            </Ellipsis>{" "}
            and{" "}
            <Ellipsis title={<>GDPR</>}>
              Quote from <a href="https://cdp.cooley.com/ccpa-2018/">CCPA</a>:{" "}
              <i>
                {'"'}Personal Information{'"'} means information that identifies, relates to, describes, is reasonably
                capable of being associated with, or could reasonably be linked, directly or indirectly, with a
                particular consumer or household. Personal information includes, but is not limited to [...] identifiers
                such as a real name, alias, postal address, unique personal identifier, online identifier,{" "}
                <u>internet protocol</u>
                address, email address, account name, social security number, driver’s license number, passport number,
                or other similar identifiers.{" "}
              </i>
            </Ellipsis>{" "}
          </li>
          <li>
            Instead IP address you can collect first 3 octets <code>195.91.157.21 → 195.91.157.0</code>. It{"'"}s enough
            for geo-locating user (up to city precision)
          </li>
          <li>You can record IP address for security purposes (check with Leonard)</li>
          <li>Consult you legal council!</li>
        </ul>
      </article>
    ),
  },
  {
    title: <>Alternative Methods</>,
    component: (
      <>
        <article className={styles.slideBullets}>
          <ul>
            <li>
              <code>hash(ip + user_agent)</code>
            </li>
            <li>
              <code>hash(ip + user_agent + salt)</code>. <code>salt</code> is recycled on daily basis
            </li>
            <li>
              <code>hash(first_3octets(ip) + user_agent)</code>. <code>salt</code> is recycled on daily basis
            </li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: (
      <>
        <code>hash(ip + user_agent + daily_salt)</code>
      </>
    ),
    component: (
      <>
        <article className={styles.slideBullets}>
          <ul>
            <li>
              Accuracy: <code>90%</code>
            </li>
            <li>Can do: daily uniques, daily uniques per pages, etc</li>
            <li>Can{"'"}t do: conversion attribution, cohort analysis</li>
            <li>Fine with GDPR and CCPA</li>
            <li>Used by plausible.io (open-source analytics), Fathom (privacy focused analytics)</li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: (
      <>
        <code>hash(first_3octets(ip) + user_agent)</code>
      </>
    ),
    component: (
      <>
        <article className={styles.slideBullets}>
          <ul>
            <li>
              Accuracy: <code>90%</code>
            </li>
            <li>Probably ok with GDPR</li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: (
      <>
        <code>hash(ip + user_agent)</code>
      </>
    ),
    component: (
      <>
        <article className={styles.slideBullets}>
          <ul>
            <li>
              Accuracy: <code>90%</code>
            </li>
            <li>Questionable with GDPR and CCPA</li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: (
      <>
        <code>hash(ip + user_agent)</code>
      </>
    ),
    component: (
      <>
        <article className={styles.slideBullets}>
          <ul>
            <li>
              Accuracy: <code>90%</code>
            </li>
            <li>Questionable with GDPR and CCPA</li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: <>Conclusion</>,
    component: <></>,
  },
]

type SlideDefinition = {
  title: ReactNode
  component: ReactNode
  description?: ReactNode
}

export const tutorialPageProps: PageProps = {
  withoutTemplate: true,
  title: "Cookies & Privacy walk-through",
}

export function TutorialPage() {
  const router = useRouter()
  const { s: initialSlide = "0" } = router.query
  let initialSlideIndex = parseInt(Array.isArray(initialSlide) ? initialSlide[0] : initialSlide)
  const [slideIndex, setSlideIndex] = useState<number>(initialSlideIndex)
  useEffect(() => {
    setSlideIndex(initialSlideIndex)
  }, [initialSlideIndex])
  const nextSlide = () => {
    setSlideIndex(slideIndex + 1)
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        s: slideIndex + 1,
      },
    })
  }
  const prevSlide = () => {
    setSlideIndex(slideIndex - 1)
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        s: slideIndex - 1,
      },
    })
  }
  let currentSlide = slides[slideIndex]
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Slide
          next={slideIndex < slides.length - 1 ? nextSlide : undefined}
          prev={slideIndex > 0 ? prevSlide : undefined}
          title={currentSlide.title}
          description={currentSlide.description}
          slideNumber={slideIndex + 1}
          totalSlides={slides.length}>
          {currentSlide.component}
        </Slide>
      </div>
      <div><Footer /></div>
    </div>
  )
}
