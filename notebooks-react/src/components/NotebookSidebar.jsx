import { NavLink } from 'react-router-dom'
import { notebooks } from '../data/notebookManifest'

const sortNotebooks = (items) =>
  [...items].sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

const groupByCategory = (items) => {
  return items.reduce((acc, notebook) => {
    const group = notebook.category || 'Notebooks'
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(notebook)
    return acc
  }, {})
}

const NotebookSidebar = () => {
  const grouped = groupByCategory(notebooks)
  const categories = Object.keys(grouped).sort()

  return (
    <nav className="sidebar">
      {categories.map((category) => (
        <div key={category} className="sidebar-section">
          <h2 className="sidebar-heading">{category}</h2>
          <ul className="sidebar-links">
            {sortNotebooks(grouped[category]).map((notebook) => (
              <li key={notebook.id}>
                <NavLink
                  to={`/notebooks/${notebook.id}`}
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link sidebar-link__active' : 'sidebar-link'
                  }
                >
                  {notebook.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default NotebookSidebar
