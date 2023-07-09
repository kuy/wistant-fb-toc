import CSS from "csstype"
import { useState, useEffect } from "react"
import { Title } from "./Title"
import { ViewpointList } from "./ViewpointList"
import { Viewpoint, ubpt } from "./strategies"
import { findAllViewpoints } from "./wistant"

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
  const [viewpoints, setViewpoints] = useState([] as Viewpoint[])

  useEffect(() => {
    const items = findAllViewpoints(ubpt)
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
