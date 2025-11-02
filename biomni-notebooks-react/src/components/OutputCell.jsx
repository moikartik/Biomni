import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './OutputCell.css'

function OutputCell({ output }) {
  // Handle different output types
  if (output.output_type === 'stream') {
    const text = Array.isArray(output.text) ? output.text.join('') : output.text
    return (
      <div className="output stream-output">
        <pre className="output-text">{text}</pre>
      </div>
    )
  }
  
  if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
    const data = output.data || {}
    
    // Check for different data types
    if (data['text/html']) {
      const html = Array.isArray(data['text/html']) ? data['text/html'].join('') : data['text/html']
      return (
        <div className="output html-output">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )
    }
    
    if (data['image/png']) {
      return (
        <div className="output image-output">
          <img src={`data:image/png;base64,${data['image/png']}`} alt="Output" />
        </div>
      )
    }
    
    if (data['image/jpeg']) {
      return (
        <div className="output image-output">
          <img src={`data:image/jpeg;base64,${data['image/jpeg']}`} alt="Output" />
        </div>
      )
    }
    
    if (data['text/plain']) {
      const text = Array.isArray(data['text/plain']) ? data['text/plain'].join('') : data['text/plain']
      return (
        <div className="output plain-output">
          <pre className="output-text">{text}</pre>
        </div>
      )
    }
  }
  
  if (output.output_type === 'error') {
    const traceback = output.traceback ? output.traceback.join('\n') : ''
    return (
      <div className="output error-output">
        <div className="error-header">
          <span className="error-name">{output.ename}</span>
          <span className="error-value">{output.evalue}</span>
        </div>
        {traceback && (
          <pre className="error-traceback">{traceback}</pre>
        )}
      </div>
    )
  }
  
  return (
    <div className="output unknown-output">
      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  )
}

export default OutputCell
