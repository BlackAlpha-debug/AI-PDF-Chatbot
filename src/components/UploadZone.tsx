import { useCallback, useRef, useState } from 'react'
import { Upload, FileText } from 'lucide-react'

interface Props {
  onFileSelect: (file: File) => void
  isExtracting: boolean
  progress: number
}

export function UploadZone({ onFileSelect, isExtracting, progress }: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(
    (file: File) => {
      if (file.type === 'application/pdf') {
        onFileSelect(file)
      }
    },
    [onFileSelect]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  if (isExtracting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="w-full max-w-md space-y-6 text-center">
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 animate-pulse" />
            <div className="relative flex items-center justify-center w-full h-full">
              <FileText className="w-10 h-10 text-violet-400 animate-bounce" />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-white mb-1">Extracting PDF content...</p>
            <p className="text-sm text-zinc-400">Analyzing pages for text extraction</p>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-zinc-500">{progress}% complete</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-full max-w-xl space-y-8 text-center">
        <div className="space-y-3">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            AI PDF Chat
          </h1>
          <p className="text-zinc-400 max-w-sm mx-auto">
            Upload a PDF document and start asking questions. Powered by Gemini AI.
          </p>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`
            group relative cursor-pointer rounded-2xl border-2 border-dashed p-12
            transition-all duration-300 ease-out
            ${
              isDragging
                ? 'border-violet-400 bg-violet-500/10 scale-[1.02]'
                : 'border-zinc-700 bg-zinc-900/50 hover:border-zinc-500 hover:bg-zinc-800/50'
            }
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFile(file)
            }}
          />

          <div className="flex flex-col items-center gap-4">
            <div
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                ${
                  isDragging
                    ? 'bg-violet-500/20 text-violet-300 scale-110'
                    : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-300'
                }
              `}
            >
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-medium text-zinc-200">
                Drop your PDF here or{' '}
                <span className="text-violet-400 underline underline-offset-2">browse</span>
              </p>
              <p className="text-sm text-zinc-500 mt-1">Supports any PDF file</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
