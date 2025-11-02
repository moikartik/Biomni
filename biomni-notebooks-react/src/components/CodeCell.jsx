import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import OutputCell from './OutputCell'
import './CodeCell.css'

function CodeCell({ cell, index }) {
  const [collapsed, setCollapsed] = useState(false)
  
  // Extract source code
  const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source
  
  // Check if cell has outputs
  const hasOutputs = cell.outputs && cell.outputs.length > 0
  const executionCount = cell.execution_count || null

  return (
    <div className="cell code-cell">
      <div className="cell-header">
        <div className="cell-label">
          <span className="cell-type-badge code-badge">Code</span>
          {executionCount !== null && (
            <span className="execution-count">In [{executionCount}]</span>
          )}
        </div>
        {hasOutputs && (
          <button 
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? "Show output" : "Hide output"}
          >
            {collapsed ? '?' : '?'}
          </button>
        )}
      </div>
      
      <div className="code-wrapper">
        <SyntaxHighlighter 
          language="python" 
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: '4px',
            fontSize: '14px'
          }}
        >
          {source}
        </SyntaxHighlighter>
      </div>

      {hasOutputs && !collapsed && (
        <div className="output-container">
          <div className="output-label">
            {executionCount !== null && (
              <span className="execution-count">Out [{executionCount}]</span>
            )}
          </div>
          {cell.outputs.map((output, idx) => (
            <OutputCell key={`output-${idx}`} output={output} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CodeCell
