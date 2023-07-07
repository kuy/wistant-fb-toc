import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const boot = () => {
    const h1 = document.querySelector("h1")
    if (h1) {
        const container = document.createElement("div")
        container.style.maxWidth = "200px"
        const main = h1.parentElement!.parentElement!.parentElement!.parentElement!
        main.appendChild(container)
        ReactDOM.createRoot(container).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        )
    } else {
        setTimeout(boot, 500)
    }
}

boot()
