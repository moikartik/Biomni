import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const normalizeSource = (source) => {
  if (!source) return ''
  if (Array.isArray(source)) {
    return source.join('')
  }
  return source
}

const OutputBlock = ({ output }) => {
  if (!output) return null

  const { output_type: outputType } = output

  if (outputType === 'stream') {
    const text = Array.isArray(output.text) ? output.text.join('') : output.text ?? ''
    return (
      <div className={`cell-output cell-output--${output.name ?? 'stream'}`}>
        <pre>{text}</pre>
      </div>
    )
  }

  if (outputType === 'error') {
    const traceback = output.traceback?.length ? output.traceback.join('\n') : output.ename
    return (
      <div className="cell-output cell-output--error">
        <strong>{output.ename ?? 'Error'}</strong>
        <pre>{traceback}</pre>
      </div>
    )
  }

  if (outputType === 'execute_result' || outputType === 'display_data') {
    const data = output.data ?? {}
    if (typeof data === 'string') {
      return (
        <div className="cell-output">
          <pre>{data}</pre>
        </div>
      )
    }

    if (data['text/html']) {
      const html = Array.isArray(data['text/html']) ? data['text/html'].join('') : data['text/html']
      return (
        <div className="cell-output cell-output--html" dangerouslySetInnerHTML={{ __html: html }} />
      )
    }

    if (data['image/png']) {
      return (
        <div className="cell-output cell-output--image">
          <img
            src={`data:image/png;base64,${data['image/png']}`}
            alt="Notebook output"
            loading="lazy"
          />
        </div>
      )
    }

    if (data['text/plain']) {
      const text = Array.isArray(data['text/plain']) ? data['text/plain'].join('') : data['text/plain']
      return (
        <div className="cell-output">
          <pre>{text}</pre>
        </div>
      )
    }

    const fallback = JSON.stringify(data, null, 2)
    return (
      <div className="cell-output">
        <pre>{fallback}</pre>
      </div>
    )
  }

  return null
}

const NotebookCell = ({ cell, index }) => {
  const source = normalizeSource(cell.source)

  if (cell.cell_type === 'markdown') {
    return (
      <section className="cell cell--markdown" aria-label={`Markdown cell ${index + 1}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
      </section>
    )
  }

  if (cell.cell_type === 'code') {
    return (
      <section className="cell cell--code" aria-label={`Code cell ${index + 1}`}>
        <header className="cell__meta">
          <span className="cell__badge">Code</span>
          {typeof cell.execution_count === 'number' && (
            <span className="cell__execution">In [{cell.execution_count}]</span>
          )}
        </header>
        <pre className="cell__input">
          <code>{source}</code>
        </pre>
        {Array.isArray(cell.outputs) && cell.outputs.length > 0 && (
          <div className="cell__outputs" aria-live="polite">
            {cell.outputs.map((output, outputIndex) => (
              <OutputBlock key={outputIndex} output={output} />
            ))}
          </div>
        )}
      </section>
    )
  }

  if (cell.cell_type === 'raw') {
    return (
      <section className="cell cell--raw" aria-label={`Raw cell ${index + 1}`}>
        <pre>{source}</pre>
      </section>
    )
  }

  return null
}

export default NotebookCell
