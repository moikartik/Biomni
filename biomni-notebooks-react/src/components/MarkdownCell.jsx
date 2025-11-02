import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import './MarkdownCell.css'

function MarkdownCell({ cell }) {
  // Extract markdown source
  const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source

  return (
    <div className="cell markdown-cell">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Custom renderers for better styling
          h1: ({node, ...props}) => <h1 className="md-h1" {...props} />,
          h2: ({node, ...props}) => <h2 className="md-h2" {...props} />,
          h3: ({node, ...props}) => <h3 className="md-h3" {...props} />,
          h4: ({node, ...props}) => <h4 className="md-h4" {...props} />,
          p: ({node, ...props}) => <p className="md-p" {...props} />,
          code: ({node, inline, ...props}) => 
            inline ? 
              <code className="md-inline-code" {...props} /> : 
              <code className="md-code-block" {...props} />,
          ul: ({node, ...props}) => <ul className="md-ul" {...props} />,
          ol: ({node, ...props}) => <ol className="md-ol" {...props} />,
          table: ({node, ...props}) => (
            <div className="table-wrapper">
              <table className="md-table" {...props} />
            </div>
          ),
          blockquote: ({node, ...props}) => <blockquote className="md-blockquote" {...props} />,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownCell
