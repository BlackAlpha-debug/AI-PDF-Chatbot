import { useEffect, useRef, useState, useCallback } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'
import { Search, Download, ZoomIn, ZoomOut, ChevronUp, ChevronDown } from 'lucide-react'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

interface Props {
  file: File
  pageCount: number
}

function PageCanvas({ pdf, pageNum, scale }: { pdf: pdfjsLib.PDFDocumentProxy; pageNum: number; scale: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const renderTaskRef = useRef<pdfjsLib.RenderTask | null>(null)

  useEffect(() => {
    let cancelled = false

    async function renderPage() {
      const canvas = canvasRef.current
      if (!canvas || !pdf) return

      try {
        const page = await pdf.getPage(pageNum)
        if (cancelled) return

        if (renderTaskRef.current) {
          renderTaskRef.current.cancel()
        }

        const viewport = page.getViewport({ scale })
        canvas.width = viewport.width
        canvas.height = viewport.height
        canvas.style.width = '100%'
        canvas.style.height = 'auto'

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const task = page.render({ canvasContext: ctx, viewport })
        renderTaskRef.current = task

        await task.promise
      } catch {
        // render cancelled or page unavailable
      }
    }

    renderPage()

    return () => {
      cancelled = true
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel()
      }
    }
  }, [pdf, pageNum, scale])

  return (
    <div className="relative bg-surface-container-lowest shadow-xl rounded-sm border border-outline-variant/50 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full" />
      <div className="absolute bottom-3 right-3 bg-surface-container/70 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold text-on-surface-variant">
        PAGE {pageNum}
      </div>
    </div>
  )
}

export function PDFViewer({ file, pageCount }: Props) {
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null)
  const [scale, setScale] = useState(1.2)
  const [currentPage, setCurrentPage] = useState(1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const pageRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  useEffect(() => {
    let cancelled = false

    async function loadPdf() {
      const buffer = await file.arrayBuffer()
      const doc = await pdfjsLib.getDocument({ data: buffer }).promise
      if (!cancelled) setPdf(doc)
    }

    loadPdf()
    return () => { cancelled = true }
  }, [file])

  const zoomIn = useCallback(() => setScale((s) => Math.min(s + 0.2, 3)), [])
  const zoomOut = useCallback(() => setScale((s) => Math.max(s - 0.2, 0.5)), [])

  const goToPage = useCallback((num: number) => {
    const clamped = Math.max(1, Math.min(num, pageCount))
    setCurrentPage(clamped)
    const el = pageRefs.current.get(clamped)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pageCount])

  const handlePageInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = parseInt(e.currentTarget.value)
      if (!isNaN(val)) goToPage(val)
    }
  }

  return (
    <section className="w-[40%] bg-surface-bright flex flex-col border-l border-outline-variant/30">
      {/* Toolbar */}
      <div className="h-12 flex items-center justify-between px-4 bg-surface/50 border-b border-outline-variant/20 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center disabled:opacity-30">
            <ChevronUp className="w-4 h-4 text-on-surface-variant" />
          </button>
          <div className="flex items-center bg-surface-container px-2 py-1 rounded-md">
            <input
              className="w-8 bg-transparent border-none text-center text-xs font-semibold p-0 focus:ring-0 focus:outline-none text-on-surface"
              type="text"
              defaultValue={currentPage}
              key={currentPage}
              onKeyDown={handlePageInput}
            />
            <span className="text-on-surface-variant text-xs font-semibold mx-1">/</span>
            <span className="text-on-surface-variant text-xs font-semibold">{pageCount}</span>
          </div>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= pageCount} className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center disabled:opacity-30">
            <ChevronDown className="w-4 h-4 text-on-surface-variant" />
          </button>
          <div className="h-5 w-[1px] bg-outline-variant/40 mx-1" />
          <button onClick={zoomOut} className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center">
            <ZoomOut className="w-4 h-4 text-on-surface-variant" />
          </button>
          <span className="text-[10px] font-semibold text-on-surface-variant w-8 text-center">{Math.round(scale * 100)}%</span>
          <button onClick={zoomIn} className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center">
            <ZoomIn className="w-4 h-4 text-on-surface-variant" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center">
            <Search className="w-4 h-4 text-on-surface-variant" />
          </button>
          <button
            onClick={() => {
              const url = URL.createObjectURL(file)
              const a = document.createElement('a')
              a.href = url
              a.download = file.name
              a.click()
              URL.revokeObjectURL(url)
            }}
            className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center"
          >
            <Download className="w-4 h-4 text-on-surface-variant" />
          </button>
        </div>
      </div>

      {/* Pages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col items-center gap-6 bg-surface-dim/20">
        {pdf ? (
          Array.from({ length: pageCount }, (_, i) => i + 1).map((num) => (
            <div
              key={num}
              ref={(el) => { if (el) pageRefs.current.set(num, el) }}
              className="w-full max-w-[500px]"
            >
              <PageCanvas pdf={pdf} pageNum={num} scale={scale} />
            </div>
          ))
        ) : (
          <div className="flex-1 flex items-center justify-center py-20">
            <div className="text-center space-y-3">
              <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-on-surface-variant">Loading PDF...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
