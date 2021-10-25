import { NextPageProps, PageProps } from "../lib/page"
import { TutorialPage, tutorialPageProps } from "../components/TutorialPage/TutorialPage"

export default TutorialPage

export async function getStaticProps(): Promise<NextPageProps<PageProps>> {
  return {
    props: tutorialPageProps,
  }
}
