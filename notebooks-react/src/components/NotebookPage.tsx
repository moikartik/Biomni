import { Navigate, useParams } from 'react-router-dom'

import { notebooks, type Notebook } from '../data/notebooks'
import NotebookCell from './NotebookCell'

interface NotebookPageProps {
  notebookList?: Notebook[]
}

export function NotebookPage({ notebookList = notebooks }: NotebookPageProps) {
  const { notebookId } = useParams()
  const activeNotebook = notebookList.find((entry) => entry.id === notebookId)

  if (!activeNotebook) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="notebook-viewer">
      <header className="notebook-header">
        <div>
          <p className="notebook-header__path">{activeNotebook.sourcePath}</p>
          <h2>{activeNotebook.title}</h2>
        </div>
        <div className="notebook-header__tags">
          {activeNotebook.tags.map((tag) => (
            <span className="notebook-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>
      <p className="notebook-description">{activeNotebook.description}</p>

      <section className="notebook-cells" aria-label={`${activeNotebook.title} cells`}>
        {activeNotebook.cells.map((cell, index) => (
          <NotebookCell key={`${activeNotebook.id}-cell-${index}`} index={index} cell={cell} />
        ))}
      </section>
    </div>
  )
}

export default NotebookPage
