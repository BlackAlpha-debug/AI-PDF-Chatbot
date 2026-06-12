import { useState, useCallback } from 'react'
import { extractPDF, type PDFInfo } from '../utils/pdfParser'

export function usePDFExtractor() {
  const [pdfInfo, setPdfInfo] = useState<PDFInfo | null>(null)
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isExtracting, setIsExtracting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const extract = useCallback(async (file: File) => {
    setIsExtracting(true)
    setProgress(0)
    setError(null)

    try {
      const info = await extractPDF(file, setProgress)
      setPdfInfo(info)
      setPdfFile(file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to extract PDF')
    } finally {
      setIsExtracting(false)
    }
  }, [])

  const reset = useCallback(() => {
    setPdfInfo(null)
    setPdfFile(null)
    setProgress(0)
    setError(null)
  }, [])

  return { pdfInfo, pdfFile, isExtracting, progress, error, extract, reset }
}
