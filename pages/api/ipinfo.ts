import { join } from 'path';
import * as fs from 'fs'
import maxmind from 'maxmind'
import { getIpFromRequest } from './lib'

let cachedMultiMaxMind: MaxMindDB;

export type MaxMindDB = (ip: string) => any;

function combine(maxminds: MaxMindDB[]): MaxMindDB {
  return (ip) => {
    return maxminds.map(mm => mm(ip)).reduce((obj, data) => ({...obj, ...data}), {})
  }
}

let emptyErrorHandler = (error) => {}

type ErrorHandler = (error) => void

async function getMultiMaxMind(
  fileNames: string[],
  errorHandler: ErrorHandler = emptyErrorHandler
): Promise<MaxMindDB> {
  return combine(await Promise.all(fileNames.map(fileName => getMaxMind(fileName,errorHandler))))
}

async function getMaxMind(fileName: string, errorHandler: ErrorHandler = emptyErrorHandler): Promise<MaxMindDB> {
  const paths = [
    join(__dirname, '.maxmind', fileName),
    join(__dirname, '../../../../' ,'.maxmind', fileName)
  ]
  let maxMindFile = paths.find(p => fs.existsSync(p))
  if (!maxMindFile) {
    let message = "MaxMind file is not found at \n\t" + paths.join("\n\t")
    console.warn(message);
    errorHandler(new Error(message))
    return Promise.resolve(() => ({}))
  } else {
    let reader;
    try {
      reader = await maxmind.open(maxMindFile);
      console.debug(`MaxMind db successfully loaded from ${maxMindFile}`)
      return Promise.resolve((ip) => reader.get(ip));
    } catch (e: any) {
      let message = `Failed to open ${maxMindFile}: ${e?.message}`
      console.error(message, e);
      errorHandler(new Error(message))
      return Promise.resolve(() => ({}));
    }
  }
}


export default async function handler(req, res) {
  const {
    ip = getIpFromRequest(req),
    verbose = "false"
  } = req.query;
  const maxmind = cachedMultiMaxMind || (cachedMultiMaxMind = await getMultiMaxMind(['geo-lite-asn.mmdb', 'geo-ip-2.mmdb']));
  if (!ip) {
    console.log("Failed to detect IP, headers and address: ", req, req.address)
    res.status(500).send({
      status: 'error',
      message: 'Failed to detect IP'
    })
  }
  if (!maxmind) {
    res.status(404).send({
      status: 'error',
      ip,
      message: 'IP databased cannot be opened'
    })
  } else {
    let geoIp = maxmind(ip)
    let city = geoIp?.city?.names?.en
    let countryName = geoIp?.country?.names?.en
    let countryCode = geoIp?.country?.iso_code
    let postalCode = geoIp?.postal?.code
    let regionCode = geoIp?.subdivisions?.[0]?.iso_code
    let regionName = geoIp?.subdivisions?.[0]?.names?.en
    let timezone = geoIp?.location?.time_zone
    res.status(200).send({
      status: "ok",
      ip,
      geo: { city, countryName, countryCode, postalCode, regionCode, regionName, timezone },
      regulation: {},
      regulationFlags: {},
      maxmind: verbose === "true" ? geoIp : undefined,
    })
  }
}