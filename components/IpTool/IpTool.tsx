import useSWR from "swr"
import styles from "./IpTool.module.css"
import { Button } from "../Button/Button"
import { useState } from "react"
import { GoSearch } from "react-icons/go"

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const nullFetcher = (...args) => {
  Promise.resolve(null)
}

function IpParam({ fieldName, fieldValue }) {
  return (
    <div className={styles.geoRow}>
      <div className={styles.geoField}>{fieldName}</div>
      <div className={styles.geoValue}>{fieldValue}</div>
    </div>
  )
}

function IpInfo({ ip }: { ip: string }) {
  const { data, error } = useSWR<any>(`/api/ipinfo?ip=${ip}`, fetcher)
  if (!data && !error) {
    return <>Loading...</>
  } else if (error || data?.status === "error") {
    return <>Error</>
  }
  return (
    <div className="pt-12">
      <IpParam
        fieldName={data?.geo?.countryName || "Unknown"}
        fieldValue={
          <>
            <span>{data?.geo?.countryName || "Unknown"}</span>
            <span className={styles.flag}>{data?.geo?.countryCode && getFlagEmoji(data?.geo?.countryCode)}</span>
          </>
        }
      />
      <IpParam
        fieldName={data?.geo?.countryName || "Unknown"}
        fieldValue={
          <>
            <span>{data?.geo?.countryName || "Unknown"}</span>
            <span className={styles.flag}>{data?.geo?.countryCode && getFlagEmoji(data?.geo?.countryCode)}</span>
          </>
        }
      />
    </div>
  )
}

export function IpTool({ initialIp }: { initialIp?: string }) {
  const [ip, setIp] = useState<string>(initialIp || "")
  const [ipInfo, setIpInfo] = useState<string | undefined>(undefined)

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex-grow w-1/2 flex space-x-4 justify-center items-center pl-4">
          <div className="border flex justify-between px-4 py-2 border-neutral-300 rounded-lg ">
            <input
              placeholder="Loading..."
              className="bg-transparent border-0 py-1 focus:outline-none  hover:border-primary-500"
              value={ip}
              onChange={e => setIp(e.target.value)}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  setIpInfo(ip)
                }
              }}
            />
            <Button action={ip && (() => setIpInfo(ip))}>
              <GoSearch />
            </Button>
          </div>
        </div>
      </div>
      <div>{ipInfo && <IpInfo ip={ipInfo} />}</div>
    </div>
  )
}
