import "../styles/globals.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { emptyTemplate, PageProps, PageTemplate } from "../lib/page"
import { ReactElement, ReactNode } from "react"

const defaultTemplate: PageTemplate = (component: ReactElement) => (
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

function CookieJitsu({ Component, pageProps }) {
  let page = pageProps as PageProps
  let template = page.withoutTemplate ? emptyTemplate : defaultTemplate
  return (
    <div className="root-container">
      {template(<Component {...pageProps} />)}
    </div>
  )
}

export default CookieJitsu
