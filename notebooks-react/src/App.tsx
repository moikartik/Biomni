import { Navigate, Route, Routes } from 'react-router-dom'

import NotebookPage from './components/NotebookPage'
import NotebookSidebar from './components/NotebookSidebar'
import { notebooks } from './data/notebooks'
import './App.css'

const defaultNotebookId = notebooks[0]?.id

function App() {
  if (!defaultNotebookId) {
    return (
      <div className="app-shell app-shell--empty">
        <div className="empty-state">
          <h1>Notebook content missing</h1>
          <p>Add notebook definitions in <code>src/data/notebooks.ts</code> to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <NotebookSidebar notebooks={notebooks} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to={`/notebook/${defaultNotebookId}`} replace />} />
          <Route path="/notebook/:notebookId" element={<NotebookPage notebookList={notebooks} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
