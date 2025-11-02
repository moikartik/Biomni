import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotebookViewer from './components/NotebookViewer';

// Parse notebook JSON
const parseNotebook = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error('Error parsing notebook:', e);
    return { cells: [] };
  }
};

// Hook to load notebook data
const useNotebook = (path: string) => {
  const [notebook, setNotebook] = useState<any>({ cells: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(data => {
        setNotebook(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading notebook:', err);
        setLoading(false);
      });
  }, [path]);

  return { notebook, loading };
};

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="nav">
        <h1>Biomni Tutorials</h1>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Interactive React implementations of Biomni tutorial notebooks
        </p>
        <ul>
          <li>
            <Link to="/biomni-101">Biomni 101</Link>
            <p style={{ fontSize: '14px', color: '#888', marginTop: '4px', marginLeft: '20px' }}>
              Basic concepts and first steps with Biomni
            </p>
          </li>
          <li>
            <Link to="/101-biomni">101 Biomni</Link>
            <p style={{ fontSize: '14px', color: '#888', marginTop: '4px', marginLeft: '20px' }}>
              Extended tutorial with advanced examples
            </p>
          </li>
          <li>
            <Link to="/cloning">Cloning Example</Link>
            <p style={{ fontSize: '14px', color: '#888', marginTop: '4px', marginLeft: '20px' }}>
              Molecular cloning workflow example
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NotebookPage: React.FC<{ path: string; title: string }> = ({ path, title }) => {
  const { notebook, loading } = useNotebook(path);

  if (loading) {
    return (
      <div className="container">
        <div className="nav" style={{ marginBottom: '0' }}>
          <Link to="/" style={{ marginRight: '16px' }}>? Back to Home</Link>
        </div>
        <div className="notebook-container">
          <p>Loading notebook...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="nav" style={{ marginBottom: '0' }}>
        <Link to="/" style={{ marginRight: '16px' }}>? Back to Home</Link>
      </div>
      <NotebookViewer notebook={notebook} title={title} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/biomni-101" 
          element={<NotebookPage path="/tutorials/biomni_101.ipynb" title="Biomni 101" />} 
        />
        <Route 
          path="/101-biomni" 
          element={<NotebookPage path="/tutorials/101_biomni.ipynb" title="101 Biomni" />} 
        />
        <Route 
          path="/cloning" 
          element={<NotebookPage path="/tutorials/cloning.ipynb" title="Cloning Example" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
