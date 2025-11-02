import { Link } from 'react-router-dom'
import { notebooks } from '../data/notebookManifest'

const NotebookGrid = () => {
  return (
    <div className="notebook-grid">
      {notebooks.map((notebook) => (
        <article key={notebook.id} className="notebook-card">
          <header className="notebook-card__header">
            <p className="notebook-card__category">{notebook.category}</p>
            <h2 className="notebook-card__title">{notebook.title}</h2>
          </header>
          <p className="notebook-card__summary">{notebook.summary}</p>
          <Link className="notebook-card__cta" to={`/notebooks/${notebook.id}`}>
            Open Notebook
          </Link>
        </article>
      ))}
    </div>
  )
}

export default NotebookGrid
