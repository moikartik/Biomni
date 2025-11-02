import React from 'react'
import './Sidebar.css'

function Sidebar({ notebooks, selectedNotebook, onSelect, isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Tutorials</h2>
          <button 
            className="close-btn"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ?
          </button>
        </div>
        
        <nav className="notebook-list">
          {notebooks.map(notebook => (
            <button
              key={notebook.id}
              className={`notebook-item ${selectedNotebook.id === notebook.id ? 'active' : ''}`}
              onClick={() => {
                onSelect(notebook)
                // Close sidebar on mobile after selection
                if (window.innerWidth < 768) {
                  onClose()
                }
              }}
            >
              <span className="notebook-icon">??</span>
              <div className="notebook-info">
                <span className="notebook-name">{notebook.name}</span>
                <span className="notebook-path">{notebook.path}</span>
              </div>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <p>Biomni Tutorial Notebooks</p>
          <p className="version">v1.0.0</p>
        </div>
      </aside>
      
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Sidebar
