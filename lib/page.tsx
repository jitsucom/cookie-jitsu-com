import { Component, ReactElement, ReactNode } from "react"

export type PageTemplate = (component: ReactElement) => ReactElement

export const emptyTemplate: PageTemplate = component => component

export interface PageProps {
  withoutTemplate?: boolean
  title: string
}

export interface NextPageProps<T> {
  props: T
}
