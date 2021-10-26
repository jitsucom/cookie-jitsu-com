const http = require("https")
const path = require("path")
const fs = require("fs")

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest) // Delete temp file
    }
    const file = fs.createWriteStream(dest)

    const request = http.get(url, response => {
      if (response.statusCode === 200) {
        response.pipe(file)
      } else {
        file.close()
        fs.unlink(dest, () => {}) // Delete temp file
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`)
      }
    })

    request.on("error", err => {
      file.close()
      reject(err.message)
    })

    file.on("finish", () => {
      resolve()
    })

    file.on("error", err => {
      file.close()
      if (err.code === "EEXIST") {
        reject("File already exists")
      } else {
        fs.unlink(dest, () => {}) // Delete temp file
        reject(err.message)
      }
    })
  })
}

;(async function () {
  console.log("Running pre-build script. Env: ", process.env)
  if (!process.env.MAXMIND_KEY) {
    console.warn("MAXMIND_KEY is not set. Maxmind files won't be downloaded")
  } else {
    console.log("Downloading MaxMind DB...")
    let maxmindDir = path.join(__dirname, "..", ".maxmind")
    fs.mkdirSync(maxmindDir, { recursive: true });
    let dest = path.join(maxmindDir, "geo-ip-2.mmdb")
    await download(
      `https://download.maxmind.com/app/geoip_download?edition_id=GeoIP2-City&license_key=${process.env.MAXMIND_KEY}&suffix=tar.gz`,
      dest
    )
    const mb = fs.statSync(dest).size / (1024^1024)
    console.log(`MaxMind DB (size=${Math.round(mb)}mb) downloaded to ${dest}`)
  }
})()
