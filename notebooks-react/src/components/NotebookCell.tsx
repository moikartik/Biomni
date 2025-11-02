import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import type { NotebookCell as NotebookCellType } from '../data/notebooks'

interface NotebookCellProps {
  index: number
  cell: NotebookCellType
}

export function NotebookCell({ index, cell }: NotebookCellProps) {
  const label = cell.type === 'code' ? `Code Cell ${index + 1}` : `Markdown Cell ${index + 1}`

  return (
    <article className={`notebook-cell notebook-cell--${cell.type}`}>
      <header className="notebook-cell__label">
        <span>{label}</span>
        {cell.caption ? <span className="notebook-cell__caption">{cell.caption}</span> : null}
      </header>
      <div className="notebook-cell__body">
        {cell.type === 'code' ? (
          <SyntaxHighlighter
            language={cell.language ?? 'python'}
            style={oneDark}
            customStyle={{ borderRadius: '1rem', margin: 0, padding: '1.25rem', fontSize: '0.95rem' }}
          >
            {cell.content.trim()}
          </SyntaxHighlighter>
        ) : (
          <div className="notebook-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{cell.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </article>
  )
}

export default NotebookCell
