export function getIpFromRequest(req) {
  let ip = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req.connection.remoteAddress
  if (ip === '::1') {
    return '127.0.0.1';
  }
  return ip
}
