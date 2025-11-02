import { useState } from 'react'
import './App.css'
import NotebookViewer from './components/NotebookViewer'
import Sidebar from './components/Sidebar'

// Import notebooks as raw text using Vite's ?raw suffix
import biomni101Raw from '../notebooks/biomni_101.ipynb?raw'
import notebook101Raw from '../notebooks/101_biomni.ipynb?raw'
import cloningNotebookRaw from '../notebooks/examples/cloning.ipynb?raw'

// Parse the raw notebook content
const parseNotebook = (raw) => {
  try {
    return JSON.parse(raw)
  } catch (error) {
    console.error('Error parsing notebook:', error)
    return { cells: [] }
  }
}

const notebooks = [
  {
    id: 'biomni_101',
    name: 'Biomni 101',
    path: 'biomni_101',
    data: parseNotebook(biomni101Raw)
  },
  {
    id: '101_biomni',
    name: '101 Biomni Tutorial',
    path: '101_biomni',
    data: parseNotebook(notebook101Raw)
  },
  {
    id: 'cloning',
    name: 'CRISPR Cloning Example',
    path: 'examples/cloning',
    data: parseNotebook(cloningNotebookRaw)
  }
]

function App() {
  const [selectedNotebook, setSelectedNotebook] = useState(notebooks[0])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app">
      <header className="app-header">
        <button 
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          ?
        </button>
        <h1>Biomni Interactive Notebooks</h1>
        <div className="header-info">
          <span className="notebook-title">{selectedNotebook.name}</span>
        </div>
      </header>
      
      <div className="app-body">
        <Sidebar 
          notebooks={notebooks}
          selectedNotebook={selectedNotebook}
          onSelect={setSelectedNotebook}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className={`main-content ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
          <NotebookViewer notebook={selectedNotebook.data} />
        </main>
      </div>
    </div>
  )
}

export default App
