import { IpTool } from '../components/IpTool/IpTool'
import { getIpFromRequest } from './api/lib'

export default IpTool;

export async function getServerSideProps(context) {
  return {
    props: {
      initialIp: getIpFromRequest(context.req)
    }
  }
}