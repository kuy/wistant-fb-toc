export type BlankStatus = "unknown" | "filled" | "blank"

export type Viewpoint = {
  title: string
  el: HTMLHeadingElement
  blank: BlankStatus
}

export type Finder = (el: HTMLHeadingElement) => Viewpoint | null

export const ubpt: Finder = (el: HTMLHeadingElement): Viewpoint | null => {
  const tokens = (el.textContent ?? "").split("：")
  if (tokens.length === 1 && !tokens[0].includes("の進め方")) {
    return { title: el.textContent!, el, blank: "unknown" }
  } else if (
    tokens.length === 2 &&
    tokens[1].trim() === "良かった点・タイトル"
  ) {
    return { title: tokens[0], el, blank: "unknown" }
  }
  return null
}
