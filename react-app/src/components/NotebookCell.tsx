import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface NotebookCellProps {
  cell: {
    cell_type: string;
    source: string | string[];
    outputs?: any[];
    execution_count?: number | null;
  };
  index: number;
}

const NotebookCell: React.FC<NotebookCellProps> = ({ cell, index }) => {
  const getSource = (): string => {
    if (Array.isArray(cell.source)) {
      return cell.source.join('');
    }
    return cell.source || '';
  };

  const source = getSource();

  if (cell.cell_type === 'markdown') {
    return (
      <div className="cell markdown">
        <div className="cell-header">Markdown</div>
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {source}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  if (cell.cell_type === 'code') {
    return (
      <div className="cell code">
        <div className="cell-header">
          Code {cell.execution_count !== null && cell.execution_count !== undefined ? `[${cell.execution_count}]` : ''}
        </div>
        <div className="code-block">
          <SyntaxHighlighter
            language="python"
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            {source}
          </SyntaxHighlighter>
        </div>
        {cell.outputs && cell.outputs.length > 0 && (
          <div className="cell-output">
            <div className="cell-header">Output</div>
            {cell.outputs.map((output, idx) => (
              <OutputDisplay key={idx} output={output} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

const OutputDisplay: React.FC<{ output: any }> = ({ output }) => {
  const MAX_OUTPUT_LENGTH = 10000; // Limit output display length
  
  const truncateText = (text: string): string => {
    if (text.length > MAX_OUTPUT_LENGTH) {
      return text.substring(0, MAX_OUTPUT_LENGTH) + '\n\n... (output truncated)';
    }
    return text;
  };

  if (output.output_type === 'stream') {
    const text = Array.isArray(output.text) ? output.text.join('') : output.text || '';
    return (
      <div className="output-block" style={{ color: output.name === 'stderr' ? '#d32f2f' : '#333' }}>
        {truncateText(text)}
      </div>
    );
  }

  if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
    const data = output.data || {};
    if (data['text/plain']) {
      const text = Array.isArray(data['text/plain']) 
        ? data['text/plain'].join('') 
        : data['text/plain'];
      return (
        <div className="output-block">
          {truncateText(text)}
        </div>
      );
    }
    if (data['text/html']) {
      const html = Array.isArray(data['text/html']) 
        ? data['text/html'].join('') 
        : data['text/html'];
      // For HTML, we'll still render it but add a note if it's too long
      return (
        <div 
          className="output-block" 
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    if (data['image/png'] || data['image/jpeg']) {
      const imageData = data['image/png'] || data['image/jpeg'];
      const imageSrc = Array.isArray(imageData) ? imageData.join('') : imageData;
      return (
        <div className="output-block">
          <img src={`data:image/png;base64,${imageSrc}`} alt="Output" style={{ maxWidth: '100%' }} />
        </div>
      );
    }
  }

  if (output.output_type === 'error') {
    const traceback = output.traceback 
      ? (Array.isArray(output.traceback) ? output.traceback.join('\n') : output.traceback)
      : '';
    return (
      <div className="output-block" style={{ color: '#d32f2f', background: '#ffebee' }}>
        <strong>Error:</strong> {output.ename}: {output.evalue}
        {traceback && (
          <pre style={{ marginTop: '8px', fontSize: '12px', whiteSpace: 'pre-wrap' }}>
            {truncateText(traceback)}
          </pre>
        )}
      </div>
    );
  }

  return null;
};

export default NotebookCell;
