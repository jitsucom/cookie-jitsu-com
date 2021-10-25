import { NextPageProps, PageProps } from "../lib/page"
import { AboutMe, aboutMeProps } from "../components/AboutMe/AboutMe"

export default AboutMe;

export async function getStaticProps(): Promise<NextPageProps<PageProps>> {
  return {
    props: aboutMeProps,
  }
}
