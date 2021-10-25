/**
 * The source of Excalidraw scene.
 */
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react"
import Error from "next/error"
import { use } from "ast-types"
import Excalidraw from "@excalidraw/excalidraw"
import { element } from "prop-types"

export type ExcalidrawSource = {
  //scene ID from plus.excalidraw.com
  sceneId?: string
  //any url to pull scene JSON
  sceneUrl?: string
  //scene object (JSON)
  sceneObject?: any
}

type Dimensions = { width: number; height: number }
export type ExcalidrawProps = {
  //source of the scene (see above)
  source: ExcalidrawSource
  //loading placeholder. Will be displayed while JSON is being loaded from
  loading?: ReactNode
  //How to display error
  errorComponent?: (e: Error) => ReactNode

  fitTo?: Dimensions
}

function DefaultPlaceholder() {
  return <div className="w-full h-full">Loading...</div>
}

function DefaultError({ error }) {
  return <div className="w-full h-full flex items-center justify-center">Error: {error.message}</div>
}

type ElementBoundary = {
  xmin: number
  xmax: number
  ymin: number
  ymax: number
}

function min(array: number[]) {
  return Math.min(...array)
}

function max(array: number[]) {
  return Math.max(...array)
}

function getDimensions(boundary: ElementBoundary): Dimensions {
  return {
    width: boundary.xmax - boundary.xmin,
    height: boundary.ymax - boundary.ymin
  }
}

function combine(...boundaries: ElementBoundary[]): ElementBoundary {
  return {
    xmin: min(boundaries.map(b => b.xmin)),
    xmax: max(boundaries.map(b => b.xmax)),
    ymin: min(boundaries.map(b => b.ymin)),
    ymax: max(boundaries.map(b => b.ymax))
  }

}

function minMax(array: number[]): { min: number; max: number } {
  return { min: min(array), max: max(array) }
}

function getElementBoundary(element) {
  if (element.points) {
    const absolutePoints = element.points.map(p => [p[0] + element.x, p[1] + element.y])
    const xLimits = minMax(absolutePoints.map(p => p[0]))
    const yLimits = minMax(absolutePoints.map(p => p[1]))
    return {
      xmax: xLimits.max,
      xmin: xLimits.min,
      ymin: yLimits.min,
      ymax: yLimits.max,
    }
  } else {
    return {
      xmax: element.x,
      xmin: element.y,
      ymin: element.x + element.width,
      ymax: element.y + element.height,
    }
  }
}



function fix({ elements, ...restOfScene }, fitTo) {
  let visibleElements = elements.filter(element => !element.isDeleted)
  console.log("Elements", visibleElements);

  let sceneBoundary = combine(...visibleElements.map(getElementBoundary));
  let sceneDimensions = getDimensions(sceneBoundary);

  let newElements = [
    ...visibleElements,
    ...visibleElements.map(element => {
      const boundaries = getElementBoundary(element);
      let dimensions = getDimensions(boundaries)
      console.log("Element boundary", boundaries);
      console.log("Element dimensions", dimensions);
      return {
        type: "rectangle",
        isDeleted: false,
        id: Math.random() + "",
        fillStyle: "hachure",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 2,
        opacity: 100,
        angle: 0,
        x: boundaries.xmin,
        y: boundaries.ymin,
        strokeColor: "red",
        backgroundColor: "transparent",
        width: dimensions.width,
        height: dimensions.height,
      }
    }),
    {
      type: "rectangle",
      isDeleted: false,
      id: Math.random()+"",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 2,
      opacity: 100,
      angle: 0,
      x: sceneBoundary.xmin,
      y: sceneBoundary.ymin,
      strokeColor: "green",
      backgroundColor: "transparent",
      width: sceneDimensions.width,
      height: sceneDimensions.height,
    },
  ];
  return {
    ...restOfScene,
    elements: newElements,
  }
}

function getUrl(source: ExcalidrawSource) {
  if (source.sceneUrl) {
    return source.sceneUrl
  } else {
    return `https://us-central1-quickstart-1595168317408.cloudfunctions.net/sceneContents/scene/${source.sceneId}/contents`
  }
}

export function ExcalidrawViewer({
  fitTo = undefined,
  source,
  errorComponent = e => <DefaultError error={e} />,
  loading: loadingPlaceholder = <DefaultPlaceholder />
}: ExcalidrawProps) {
  const excalidrawRef = useRef(null)
  const [error, setError] = useState()
  const [scene, setScene] = useState(source.sceneObject)
  const [ExcalidrawComponent, setExcalidrawComponent] = useState(null)
  useEffect(() => {
    //import("@excalidraw/excalidraw").then(comp => setExcalidrawComponent())
  }, [])

  useEffect(() => {
    console.log("Fetching " + getUrl(source))
    if (!scene) {
      fetch(getUrl(source))
        .then(res => res.json())
        .then(json => setScene(json))
        .catch(error => setError(error))
    }
  }, [scene, error])
  if (error) {
    return errorComponent(error) as ReactElement
  } else if (!ExcalidrawComponent || !scene) {
    return loadingPlaceholder as ReactElement
  }

  return (
    // @ts-ignore
    <ExcalidrawComponent
      ref={excalidrawRef}
      initialData={fix(scene, fitTo)}
      scrollToContent={true}
      {...fitTo}
      viewModeEnabled={true}
      zenModeEnabled={true}
      gridModeEnabled={false}
    />
  )
}
