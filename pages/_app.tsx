import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { emptyTemplate, PageProps, PageTemplate } from "../lib/page"
import React, { ReactElement, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { jitsuClient } from "@jitsu/sdk-js"
import Head from 'next/head'

const defaultTemplate: PageTemplate = (component: ReactElement) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Header />
        <div>{component}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

const NotMobileFriendlyBanner: React.FC<{}> = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div
      className={`${
        visible ? "fixed" : "hidden"
      } lg:hidden bg-primary-500  text-neutral-200 px-4  rounded-b-lg flex items-center left-1/2 transform  -translate-x-1/2`}>
      <div className="pr-6  pb-1 text-xs">
        Sorry, this website is not mobile friendly🥲. I hope you can enjoy it on a desktop
      </div>
      <div className="transform rotate-45 text-2xl cursor-pointer" onClick={() => setVisible(false)}>
        +
      </div>
    </div>
  )
}

function CookieJitsu({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_JITSU_KEY) {
      jitsuClient({
        tracking_host: "https://t.jitsu.com",
        key: process.env.NEXT_PUBLIC_JITSU_KEY,
        privacy_policy: "strict",
      })
        .track("pageview", {
          app: "cookie_jitsu",
        })
        .catch(e => {
          console.warn("Unable to send data to analytics backend", e)
        })
    }
  })
  let page = pageProps as PageProps
  let template = page.withoutTemplate ? emptyTemplate : defaultTemplate
  return (

    <div className="root-container">
      <Head>
        <title>Cookie Policy for engineers</title>
        <link rel="icon" key="ic-32" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" key="ic-64" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <NotMobileFriendlyBanner />
      {template(<Component {...pageProps} />)}
    </div>
  )
}

export default CookieJitsu
