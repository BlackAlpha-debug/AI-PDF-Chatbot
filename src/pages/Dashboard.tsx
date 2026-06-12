import { useState, useCallback, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePDFExtractor } from '../hooks/usePDFExtractor'
import { useGeminiChat } from '../hooks/useGeminiChat'
import { ThemeToggle } from '../components/ThemeToggle'
import type { Message } from '../hooks/useGeminiChat'
import ReactMarkdown from 'react-markdown'
import { PDFViewer } from '../components/PDFViewer'
import { FileText, Upload, Send, Copy, Check, Trash2, X, ChevronRight, Folder, Clock, Pin, Settings, HelpCircle, LogOut, Paperclip, ThumbsUp, RefreshCw } from 'lucide-react'

function Sidebar({ onFileSelect }: { onFileSelect: (f: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf') onFileSelect(file)
  }

  return (
    <aside className="fixed left-0 h-full w-[280px] bg-surface-bright border-r border-outline-variant/30 flex flex-col p-2 gap-2 z-50">
      <div className="px-4 py-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h1 className="text-xl font-black text-on-surface">DocuMind AI</h1>
      </div>

      <div className="px-2 mb-4">
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
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full py-3 px-4 bg-secondary text-on-secondary rounded-xl text-xs font-semibold tracking-[0.05em] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-sm"
        >
          <Upload className="w-4 h-4" />
          Upload PDF
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {[
          { icon: <Folder className="w-5 h-5" />, label: 'Library', active: true },
          { icon: <Clock className="w-5 h-5" />, label: 'Recent', active: false },
          { icon: <Pin className="w-5 h-5" />, label: 'Pinned', active: false },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings', active: false },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg hover:translate-x-1 transition-transform ${
              item.active
                ? 'bg-secondary/10 text-secondary font-semibold'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {item.icon}
            <span className="text-xs font-semibold tracking-[0.05em]">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-2 pb-4 border-t border-outline-variant/30 pt-4 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-[0.05em]">Help</span>
        </a>
        <Link to="/" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-[0.05em]">Sign Out</span>
        </Link>
        <div className="mt-4 px-4 py-3 bg-surface-container-low rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary-container flex items-center justify-center text-on-secondary text-xs font-bold">
            U
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface leading-none">Workspace</p>
            <p className="text-[10px] text-on-surface-variant mt-1">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function ChatMessage({ message, isStreaming }: { message: Message; isStreaming: boolean }) {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === 'user'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isUser) {
    return (
      <div className="flex justify-end group">
        <div className="max-w-[70%] bg-secondary text-on-secondary px-4 py-3 rounded-2xl rounded-tr-none shadow-sm">
          <p>{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex group">
      <div className="max-w-[80%] glass-panel px-5 py-4 rounded-2xl rounded-tl-none shadow-sm space-y-3">
        {message.content ? (
          <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-surface-container-lowest prose-pre:border prose-pre:border-outline-variant/30 prose-headings:text-on-surface prose-strong:text-on-surface text-on-surface prose-a:text-secondary prose-code:text-secondary">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : isStreaming ? (
          <div className="flex gap-2 items-center px-2 py-1">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        ) : null}
        {message.content && !isStreaming && (
          <div className="pt-2 flex gap-2">
            <button onClick={handleCopy} className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <button className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors">
              <ThumbsUp className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export function Dashboard() {
  const { pdfInfo, pdfFile, isExtracting, progress, error, extract, reset } = usePDFExtractor()
  const { messages, isStreaming, sendMessage, clearChat } = useGeminiChat(pdfInfo?.text ?? null)
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (!isStreaming) textareaRef.current?.focus()
  }, [isStreaming])

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim()
    if (!trimmed || isStreaming || !pdfInfo) return
    sendMessage(trimmed)
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }, [input, isStreaming, pdfInfo, sendMessage])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 128) + 'px'
  }

  const handleRemove = useCallback(() => {
    reset()
    clearChat()
  }, [reset, clearChat])

  return (
    <div className="bg-surface-container-lowest text-on-surface overflow-hidden h-screen flex">
      <Sidebar onFileSelect={extract} />

      <main className="flex-1 ml-[280px] flex flex-col h-full bg-surface-container-lowest relative">
        {/* TopBar */}
        <header className="h-14 flex items-center justify-between px-8 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-[0.05em]">Library</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-xs font-bold tracking-[0.05em] text-on-surface">
              {pdfInfo?.fileName ?? 'No document loaded'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {pdfInfo && (
              <>
                <div className="h-6 w-[1px] bg-outline-variant/50" />
                <button
                  onClick={clearChat}
                  disabled={messages.length === 0}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-30"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-[0.05em]">Clear</span>
                </button>
                <button
                  onClick={handleRemove}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-[0.05em]">Remove</span>
                </button>
              </>
            )}
          </div>
        </header>

        {/* Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Panel */}
          <section className={`${pdfInfo ? 'w-[60%]' : 'w-full'} flex flex-col bg-surface-container-low relative ${pdfInfo ? 'border-r border-outline-variant/20' : ''}`}>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
              {!pdfInfo && !isExtracting ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full py-20">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm border border-outline-variant/30 mb-6">
                    <Upload className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-on-surface mb-2" style={{ letterSpacing: '-0.01em' }}>
                    Upload a PDF to get started
                  </h2>
                  <p className="text-sm text-on-surface-variant max-w-sm text-center mb-6">
                    Click "Upload PDF" in the sidebar to load a document, then start chatting with it.
                  </p>
                </div>
              ) : isExtracting ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full py-20">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm border border-outline-variant/30 mb-6">
                    <FileText className="w-8 h-8 text-secondary animate-bounce" />
                  </div>
                  <h2 className="text-2xl font-semibold text-on-surface mb-2">Extracting PDF content...</h2>
                  <p className="text-sm text-on-surface-variant mb-6">Analyzing pages for text extraction</p>
                  <div className="w-64 bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-on-surface-variant mt-3">{progress}% complete</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="max-w-[85%] mx-auto py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-surface-container-lowest rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-outline-variant/30">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.741 3.427a2.25 2.25 0 01-1.748.823H8.69a2.25 2.25 0 01-1.748-.823L4.2 14.5m15.6 0l.106-.132a2.25 2.25 0 00.406-1.852l-1.17-4.398a2.25 2.25 0 00-2.18-1.718H7.038a2.25 2.25 0 00-2.18 1.718l-1.17 4.398a2.25 2.25 0 00.406 1.852l.106.132" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-on-surface" style={{ letterSpacing: '-0.01em' }}>
                    How can I assist with this document?
                  </h2>
                  <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
                    I've analyzed <strong>{pdfInfo?.fileName}</strong>. You can ask for summaries, data extraction, or specific clarifications.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
                    {['Summarize this document', 'What are the key points?', 'Explain this in simple terms', 'What important details stand out?'].map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="px-4 py-2 rounded-xl text-sm bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <ChatMessage
                    key={msg.id}
                    message={msg}
                    isStreaming={isStreaming && i === messages.length - 1}
                  />
                ))
              )}
              <div ref={bottomRef} />
            </div>

            {pdfInfo && (
              <div className="p-6 pt-0">
                <div className="max-w-3xl mx-auto glass-panel p-2 rounded-2xl shadow-lg flex items-end gap-2">
                  <button className="p-3 rounded-xl hover:bg-surface-container-high text-on-surface-variant transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything about your document..."
                    disabled={isStreaming}
                    rows={1}
                    className="flex-1 bg-transparent border-none focus:ring-0 py-3 text-base text-on-surface placeholder:text-on-surface-variant/50 resize-none max-h-32"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!input.trim() || isStreaming}
                    className="w-12 h-12 bg-secondary text-on-secondary rounded-xl flex items-center justify-center hover:brightness-110 transition-all active:scale-95 disabled:opacity-40"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[10px] text-center text-on-surface-variant/60 mt-3 font-semibold tracking-[0.05em]">
                  DocuMind AI can make mistakes. Verify important information.
                </p>
              </div>
            )}
          </section>

          {pdfInfo && pdfFile && <PDFViewer file={pdfFile} pageCount={pdfInfo.pageCount} />}
        </div>
      </main>

      {error && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl bg-error-container border border-error/20 text-on-error-container text-sm z-50">
          {error}
        </div>
      )}
    </div>
  )
}
