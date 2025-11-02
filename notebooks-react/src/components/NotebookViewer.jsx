import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotebookCell from './NotebookCell'
import { notebookIndex } from '../data/notebookManifest'

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error',
}

const useNotebook = (notebookId) => {
  const notebookMeta = notebookIndex[notebookId]
  const [status, setStatus] = useState(STATUS.IDLE)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!notebookMeta) {
      setStatus(STATUS.ERROR)
      setError(new Error('Notebook not found'))
      return
    }

    let cancelled = false
    setStatus(STATUS.LOADING)
    setError(null)
    setData(null)

    fetch(notebookMeta.filename)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load notebook: HTTP ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        if (cancelled) return
        setData(json)
        setStatus(STATUS.READY)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err)
        setStatus(STATUS.ERROR)
      })

    return () => {
      cancelled = true
    }
  }, [notebookMeta, notebookId])

  return useMemo(
    () => ({
      metadata: notebookMeta,
      status,
      error,
      data,
    }),
    [data, error, notebookMeta, status],
  )
}

const NotebookViewer = () => {
  const { notebookId } = useParams()
  const { metadata, status, error, data } = useNotebook(notebookId)

  if (!metadata && status === STATUS.ERROR) {
    return (
      <section className="notebook-viewer__empty">
        <h1>Notebook not found</h1>
        <p>The notebook you are trying to view does not exist in this project.</p>
      </section>
    )
  }

  if (status === STATUS.LOADING || status === STATUS.IDLE) {
    return (
      <section className="notebook-viewer__loading" aria-busy="true">
        <div className="loading-spinner" aria-hidden="true" />
        <p>Loading notebook?</p>
      </section>
    )
  }

  if (status === STATUS.ERROR) {
    return (
      <section className="notebook-viewer__error">
        <h1>Something went wrong</h1>
        <p>{error?.message ?? 'Unknown error while loading the notebook.'}</p>
      </section>
    )
  }

  const cells = data?.cells ?? []

  return (
    <article className="notebook">
      <header className="notebook__header">
        <p className="notebook__category">{metadata.category}</p>
        <h1 className="notebook__title">{metadata.title}</h1>
        <p className="notebook__summary">{metadata.summary}</p>
      </header>
      <div className="notebook__cells">
        {cells.length === 0 ? (
          <p className="notebook__empty">This notebook does not contain any cells.</p>
        ) : (
          cells.map((cell, index) => <NotebookCell key={index} cell={cell} index={index} />)
        )}
      </div>
    </article>
  )
}

export default NotebookViewer
