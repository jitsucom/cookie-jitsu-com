import styles from "./Tutorial.module.css"
import { Ellipsis } from '../Ellipsis/Ellipsis'

export function CcpaGdprComparison() {
  return (
    <table>
      <tr>
        <td colSpan={3} className={styles.sectionHeader}>
          common
        </td>
      </tr>
      <tr>
        <td colSpan={3} className="py-6 pl-4">
          <article>
            <ul>
              <li>
                Users should know what <i>personal data</i> data is being collected and be able to make a choice
              </li>
              <li>User should be able to request data deletion / copy of personal data</li>
            </ul>
          </article>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={styles.sectionHeader}>
          Differences
        </td>
      </tr>
      <tr>
        <td></td>
        <td className={styles.regulation}>
          <span>GDPR</span>
        </td>
        <td className={styles.regulation}>
          <span>CCPA</span>
        </td>
      </tr>
      <tr className={styles.comparison}>
        <td>Who should comply?</td>
        <td>
          <b>Any company having users in UE</b>
        </td>
        <td>
          <b>Large companies</b> <i className="text-neutral-600">(any for-profit entity doing business in CA and making {">"}$25M or has {">"}50k MAU, or makes {">"}50% of
          selling personal data)</i>
        </td>
      </tr>
      <tr className={styles.comparison}>
        <td>What is personal data?</td>
        <td>

          <Ellipsis title={<b>Email, full name, address, SSN, <u>Cookie-based id</u>, <u>IP address</u>, <u>any other frontend ID</u></b>}>
            ‘personal data’ means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;
          </Ellipsis>
        </td>
        <td>
          <Ellipsis title={<b>Email, full name, address, SSN</b>}>
            Personal information that identifies, relates to, describes, is capable of being associated with, or may
            reasonably be linked, directly or indirectly, with a particular consumer or household.
          </Ellipsis>
        </td>
      </tr>
      <tr className={styles.comparison}>
        <td>What is  NOT a personal data?</td>
        <td>
          <b>First 3 octets of IP address</b> (<i className="text-neutral-600">91.149.244.214 → 91.149.244.0</i>), <b>User-Agent</b>
        </td>
        <td>
          <b><u>Cookie ID</u>, <u>Frontend ID</u>, <u>IP Address (sometimes)</u>, User-Agent</b>
        </td>
      </tr>
      <tr className={styles.comparison}>
        <td>Consent</td>
        <td>
          <b>Opt-out</b>. You can start collecting data right-away, should give a user an option to opt-out
        </td>
        <td>
          <b>Opt-in</b>. You should ask user first
        </td>
      </tr>
    </table>
  )
}
