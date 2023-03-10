import { useState } from "react"
import Markdown from "marked-react"
import styled from "styled-components"

function App() {
  const [markdown, setMarkdown] = useState("")

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(e.target.value)
  }

  return (
    <div className="App">
      <h1 className=""> Hello tailwind</h1>
      <div className="marked">
        <textarea
          id=""
          cols={100}
          rows={30}
          value={markdown}
          onChange={(e) => handleInput(e)}
          className="input"
        ></textarea>

        <div className="markdown">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default App
