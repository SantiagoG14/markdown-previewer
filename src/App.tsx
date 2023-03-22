import { useState } from "react"
import Markdown from "marked-react"

function App() {
  const starterString = `# Hello\n## This is markdown btw\n[this is built with react](https://reactjs.org/)\n![react react](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)\nto center a div use \` display: flex;\` \n\`\`\`\nif(thisIsTrue) {\n  callFunction()\n}\n\`\`\`
\n> A wise man said that coding is not fun\n1.Display: flex;\n1. Display: none\n\n**bold text**`
  const [markdown, setMarkdown] = useState(starterString)

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(e.target.value)
  }

  return (
    <div className="App">
      <h1 className=""> Hello tailwind</h1>
      <div className="marked">
        <textarea
          id="editor"
          cols={100}
          rows={30}
          value={markdown}
          onChange={(e) => handleInput(e)}
          className="input"
        ></textarea>

        <div className="markdown" id="preview">
          <Markdown gfm={true}>{markdown}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default App
