import { BsGithub } from "react-icons/bs"

export function Footer() {
  return (
    <div className="text-neutral-300 px-12 pb-4 flex flex-row flex-nowrap justify-between items-start space-x-8">
      <article>
        &copy; Jitsu Labs, Inc. Jitsu is an open-source data ingestion engine. Read more at{" "}
        <a href="https://jitsu.com">jitsu.com</a>. This website does not contain a legal advice!
      </article>
        <a href="https://github.com/jitsucom/cookie-jitsu-com" className="flex items-center space-x-2 hover:text-neutral-700">
          <BsGithub />
          <div>src</div>
        </a>
    </div>
  )
}
