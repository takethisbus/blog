import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from "react-syntax-highlighter";

const CopyButton = ({ target }) => { 
  const handleCopy = async () => { 
    if (target) { 
      try {
        await navigator.clipboard.writeText(target);
        alert('Copied');
      } catch (error) {
        alert(`Copy Failed ${error}`)
      }
    }
  }
  return (
    <button
      className='absolute top-1 right-1 py-1 px-2 rounded text-sm bg-white dark:text-gray-800'
      onClick={handleCopy}
    >
      copy
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className='relative'>
      <CopyButton target={children}/>
      <SyntaxHighlighter
        style={rainbow}
        showLineNumbers
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}