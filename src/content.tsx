import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { createContainer, findEntryPoint } from "./wistant"

const DURATION = 500 // msec

const boot = () => {
  const entry = findEntryPoint()
  if (entry) {
    const container = createContainer()
    entry.appendChild(container)
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } else {
    setTimeout(boot, DURATION)
  }
}

boot()
