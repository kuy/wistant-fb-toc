import { useState, useEffect } from 'react'

type IndexData = {
  title: string,
  node: HTMLHeadingElement
}

export const App: React.FC = () => {
  const [viewpoints, setViewpoints] = useState([] as IndexData[])

  useEffect(() => {
    const items = []
    for (const h1 of document.querySelectorAll("h1")) {
      const tokens = (h1.textContent ?? '').split("：")
      if (tokens.length === 1 && !tokens[0].includes("の進め方")) {
        items.push({ title: h1.textContent!, node: h1 })
      } else if (tokens.length === 2 && tokens[1] === "良かった点・タイトル") {
        items.push({
          title: tokens[0], node: h1
        })
      }
    }
    setViewpoints(items)
  }, [])

  const handleJump = (h1: HTMLHeadElement) => {
    h1.scrollIntoView(true)
  }

  return (
    <ul>
      {viewpoints.map((data) => {
        return <li onClick={() => handleJump(data.node)} style={{ fontSize: '1.2rem', cursor: 'pointer', lineHeight: '1.8' }}>{data.title}</li>
      })}
    </ul>
  )
}
