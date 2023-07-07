import CSS from "csstype"
import { useState, useEffect } from "react"
import { Title } from "./Title"
import { ViewpointList, ItemData } from "./ViewpointList"

const titleLayout: CSS.Properties = {
  width: "100%",
  padding: "12px 16px",
  borderBottom: "1px solid rgb(234, 237, 237)",
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "justify",
  justifyContent: "space-between",
  height: "56px",
}

const listLayout: CSS.Properties = {
  padding: "16px",
}

export const App: React.FC = () => {
  const [viewpoints, setViewpoints] = useState([] as ItemData[])

  useEffect(() => {
    const items = []
    for (const h1 of document.querySelectorAll("h1")) {
      const tokens = (h1.textContent ?? "").split("：")
      if (tokens.length === 1 && !tokens[0].includes("の進め方")) {
        items.push({ title: h1.textContent!, el: h1 })
      } else if (
        tokens.length === 2 &&
        tokens[1].trim() === "良かった点・タイトル"
      ) {
        items.push({ title: tokens[0], el: h1 })
      }
    }
    setViewpoints(items)
  }, [])

  const handleJump = (h1: HTMLHeadElement) => {
    h1.scrollIntoView(true)
  }

  return (
    <div>
      <div style={titleLayout}>
        <Title>フィードバックの観点</Title>
      </div>
      <div style={listLayout}>
        <ViewpointList items={viewpoints} onClick={handleJump} />
      </div>
    </div>
  )
}
