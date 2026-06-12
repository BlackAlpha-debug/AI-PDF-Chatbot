import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export interface PDFInfo {
  text: string
  pageCount: number
  wordCount: number
  fileName: string
  fileSize: string
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export async function extractPDF(
  file: File,
  onProgress?: (percent: number) => void
): Promise<PDFInfo> {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  let fullText = ''

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    fullText += content.items.map((item) => ('str' in item ? item.str : '')).join(' ') + '\n'
    onProgress?.(Math.round((i / pdf.numPages) * 100))
  }

  return {
    text: fullText,
    pageCount: pdf.numPages,
    wordCount: fullText.split(/\s+/).filter(Boolean).length,
    fileName: file.name,
    fileSize: formatFileSize(file.size),
  }
}
