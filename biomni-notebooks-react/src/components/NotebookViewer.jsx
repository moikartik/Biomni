import React from 'react'
import CodeCell from './CodeCell'
import MarkdownCell from './MarkdownCell'
import './NotebookViewer.css'

function NotebookViewer({ notebook }) {
  if (!notebook || !notebook.cells) {
    return (
      <div className="notebook-error">
        <h2>Unable to load notebook</h2>
        <p>The notebook data is not available or malformed.</p>
      </div>
    )
  }

  return (
    <div className="notebook-container">
      <div className="notebook-cells">
        {notebook.cells.map((cell, index) => {
          const key = `cell-${index}`
          
          if (cell.cell_type === 'markdown') {
            return <MarkdownCell key={key} cell={cell} index={index} />
          } else if (cell.cell_type === 'code') {
            return <CodeCell key={key} cell={cell} index={index} />
          } else {
            return (
              <div key={key} className="cell raw-cell">
                <pre>{Array.isArray(cell.source) ? cell.source.join('') : cell.source}</pre>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default NotebookViewer
