import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { emptyTemplate, PageProps, PageTemplate } from "../lib/page"
import { ReactElement, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jitsuClient } from '@jitsu/sdk-js'

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


function CookieJitsu({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_JITSU_KEY) {
      jitsuClient({
        tracking_host: 'https://t.jitsu.com',
        key: process.env.NEXT_PUBLIC_JITSU_KEY,
        privacy_policy: 'strict'
      }).track('pageview', {
        app: 'cookie_jitsu'
      }).catch((e) => {
        console.warn("Unable to send data to analytics backend", e)
      });
    }
  })
  let page = pageProps as PageProps
  let template = page.withoutTemplate ? emptyTemplate : defaultTemplate
  return <div className="root-container">{template(<Component {...pageProps} />)}</div>
}

export default CookieJitsu
