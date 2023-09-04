import './App.css'
import { useEffect, useState } from 'react'
import quotes from "./quotes"

function App() {

  let [author, setAuthor] = useState("")
  let [quote, setQuote] = useState("")

  const getTextColor = (r: number, g: number, b: number) => r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "black" : "white"

  useEffect(() => {
    const rows = quotes.length / 2
    const selected = Math.floor(Math.random() * rows)
    setAuthor(quotes[selected * 2])
    setQuote(quotes[selected * 2 + 1])

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 100)`
    document.body.style.color = getTextColor(r, g, b)
  }, [])

  return (
    <>
      <h1>
        "{quote}"
      </h1>
      {author != "" &&
        <h3>
          - {author}
        </h3>
      }
    </>
  )
}

export default App
