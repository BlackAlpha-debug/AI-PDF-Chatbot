import { FileText, X, FileDigit, Type, HardDrive } from 'lucide-react'
import type { PDFInfo } from '../utils/pdfParser'

interface Props {
  pdfInfo: PDFInfo
  onRemove: () => void
}

export function PDFPreview({ pdfInfo, onRemove }: Props) {
  return (
    <div className="mx-4 mb-4">
      <div className="flex items-center gap-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 px-4 py-3">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-violet-400" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{pdfInfo.fileName}</p>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <FileDigit className="w-3 h-3" />
              {pdfInfo.pageCount} pages
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <Type className="w-3 h-3" />
              {pdfInfo.wordCount.toLocaleString()} words
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <HardDrive className="w-3 h-3" />
              {pdfInfo.fileSize}
            </span>
          </div>
        </div>

        <button
          onClick={onRemove}
          className="shrink-0 p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700 transition-colors"
          aria-label="Remove PDF"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
