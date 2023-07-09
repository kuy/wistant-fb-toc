import { Finder, Viewpoint } from "./strategies"

export const findEntryPoint = (): HTMLDivElement | null => {
  const h1 = document.querySelector("h1")
  if (h1 === null) {
    return null // Not found
  }

  const main = h1.parentElement?.parentElement?.parentElement?.parentElement
  if (typeof main === "undefined" || main === null) {
    return null // Not found
  }

  return main as HTMLDivElement
}

export const createContainer = (): HTMLDivElement => {
  const container = document.createElement("div")
  container.style.maxWidth = "220px"
  return container
}

export const findAllViewpoints = (find: Finder): Viewpoint[] => {
  const items = []
  for (const h1 of document.querySelectorAll("h1")) {
    const viewpoint = find(h1)
    if (viewpoint) {
      items.push(viewpoint)
    }
  }
  return items
}
