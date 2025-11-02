import { NavLink } from 'react-router-dom'

import type { Notebook } from '../data/notebooks'

interface NotebookSidebarProps {
  notebooks: Notebook[]
}

export function NotebookSidebar({ notebooks }: NotebookSidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h1>Biomni Notebooks</h1>
        <p>Explore the curated tutorials that ship with the Biomni agent repository.</p>
      </div>
      <nav className="sidebar__nav" aria-label="Notebook navigation">
        {notebooks.map((notebook) => (
          <NavLink
            key={notebook.id}
            to={`/notebook/${notebook.id}`}
            className={({ isActive }) => `sidebar__link${isActive ? ' sidebar__link--active' : ''}`}
          >
            <span className="sidebar__link-title">{notebook.title}</span>
            <span className="sidebar__link-summary">{notebook.summary}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default NotebookSidebar
