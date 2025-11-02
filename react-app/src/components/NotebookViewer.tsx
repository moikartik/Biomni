import React from 'react';
import NotebookCell from './NotebookCell';

interface NotebookViewerProps {
  notebook: {
    cells: Array<{
      cell_type: string;
      source: string | string[];
      outputs?: any[];
      execution_count?: number | null;
    }>;
  };
  title: string;
}

const NotebookViewer: React.FC<NotebookViewerProps> = ({ notebook, title }) => {
  return (
    <div className="container">
      <div className="notebook-container">
        <h1 style={{ marginBottom: '24px', fontSize: '2em' }}>{title}</h1>
        {notebook.cells.map((cell, index) => (
          <NotebookCell key={index} cell={cell} index={index} />
        ))}
      </div>
    </div>
  );
};

export default NotebookViewer;
