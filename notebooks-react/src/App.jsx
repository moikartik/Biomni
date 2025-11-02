import { Navigate, Route, Routes } from 'react-router-dom'
import NotebookGrid from './components/NotebookGrid'
import NotebookSidebar from './components/NotebookSidebar'
import NotebookViewer from './components/NotebookViewer'
import './App.css'

const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__content">
          <h1>Biomni React Notebooks</h1>
          <p>Browse and explore Biomni tutorials directly in your browser.</p>
        </div>
      </header>
      <div className="app-layout">
        <NotebookSidebar />
        <main className="app-main" id="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <section className="welcome">
                  <h2>Start With a Notebook</h2>
                  <p className="welcome__intro">
                    This React application renders the official Biomni tutorial notebooks without any
                    backend. Choose a notebook to read through the markdown narrative, inspect code cells,
                    and review execution outputs.
                  </p>
                  <NotebookGrid />
                </section>
              }
            />
            <Route path="/notebooks/:notebookId" element={<NotebookViewer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <footer className="app-footer">
        <p>
          Built with React and Vite. Notebook content sourced from the Biomni repository and rendered on the
          client.
        </p>
      </footer>
    </div>
  )
}

export default App
