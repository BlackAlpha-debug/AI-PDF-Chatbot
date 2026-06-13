import { useState, useCallback, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePDFExtractor } from '../hooks/usePDFExtractor'
import { useGeminiChat } from '../hooks/useGeminiChat'
import { ThemeToggle } from '../components/ThemeToggle'
import type { Message } from '../hooks/useGeminiChat'
import ReactMarkdown from 'react-markdown'
import { PDFViewer } from '../components/PDFViewer'
import { FileText, Upload, Send, Copy, Check, Trash2, X, ChevronRight, Folder, Clock, Pin, Settings, HelpCircle, LogOut, Paperclip, ThumbsUp, RefreshCw, Sparkles, Bot } from 'lucide-react'

function Sidebar({ onFileSelect }: { onFileSelect: (f: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf') onFileSelect(file)
  }

  return (
    <aside className="fixed left-0 h-full w-[272px] bg-surface-bright/80 backdrop-blur-2xl border-r border-outline-variant/20 flex flex-col p-3 gap-1 z-50">
      <div className="px-3 py-5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center shadow-md shadow-secondary/20">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-lg font-extrabold text-on-surface tracking-tight">
          DocuMind<span className="text-secondary"> AI</span>
        </h1>
      </div>

      <div className="px-1 mb-3">
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
          className="w-full py-3 px-4 btn-gradient rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-secondary/15"
        >
          <Upload className="w-4 h-4" />
          Upload PDF
        </button>
      </div>

      <nav className="flex-1 px-1 space-y-0.5">
        {[
          { icon: Folder, label: 'Library', active: true },
          { icon: Clock, label: 'Recent', active: false },
          { icon: Pin, label: 'Pinned', active: false },
          { icon: Settings, label: 'Settings', active: false },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 ${
              item.active
                ? 'bg-secondary/8 text-secondary font-semibold'
                : 'text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface'
            }`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-1 pb-3 border-t border-outline-variant/20 pt-3 space-y-0.5">
        <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 text-on-surface-variant hover:bg-surface-container-high/60 rounded-xl transition-colors">
          <HelpCircle className="w-[18px] h-[18px]" />
          <span className="text-sm">Help</span>
        </a>
        <Link to="/" className="flex items-center gap-3 px-3.5 py-2.5 text-on-surface-variant hover:bg-surface-container-high/60 rounded-xl transition-colors">
          <LogOut className="w-[18px] h-[18px]" />
          <span className="text-sm">Sign Out</span>
        </Link>
        <div className="mt-3 px-3.5 py-3 bg-surface-container-low/60 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] flex items-center justify-center text-white text-xs font-bold shadow-sm">
            U
          </div>
          <div>
            <p className="text-sm font-semibold text-on-surface leading-none">Workspace</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Free Plan</p>
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
        <div className="max-w-[70%] bg-gradient-to-br from-[var(--color-accent-start)] to-[var(--color-accent-end)] text-white px-5 py-3.5 rounded-2xl rounded-tr-md shadow-md shadow-secondary/10">
          <p className="leading-relaxed">{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 group">
      <div className="w-8 h-8 rounded-xl bg-secondary/8 flex items-center justify-center shrink-0 mt-1">
        <Bot className="w-4 h-4 text-secondary" />
      </div>
      <div className="max-w-[80%] glass-panel px-5 py-4 rounded-2xl rounded-tl-md shadow-sm space-y-3">
        {message.content ? (
          <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-surface-container-lowest prose-pre:border prose-pre:border-outline-variant/30 prose-headings:text-on-surface prose-strong:text-on-surface text-on-surface prose-a:text-secondary prose-code:text-secondary">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : isStreaming ? (
          <div className="flex gap-1.5 items-center px-1 py-1">
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.15s]" />
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.3s]" />
          </div>
        ) : null}
        {message.content && !isStreaming && (
          <div className="pt-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button onClick={handleCopy} className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors" aria-label="Copy">
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors" aria-label="Like">
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors" aria-label="Regenerate">
              <RefreshCw className="w-3.5 h-3.5" />
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

      <main className="flex-1 ml-[272px] flex flex-col h-full bg-surface-container-lowest relative">
        {/* TopBar */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-outline-variant/20 bg-surface/60 backdrop-blur-2xl sticky top-0 z-40">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Library</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className="text-sm font-semibold text-on-surface">
              {pdfInfo?.fileName ?? 'No document loaded'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {pdfInfo && (
              <>
                <div className="h-5 w-px bg-outline-variant/30" />
                <button
                  onClick={clearChat}
                  disabled={messages.length === 0}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high/60 transition-colors disabled:opacity-30 text-sm"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
                <button
                  onClick={handleRemove}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high/60 transition-colors text-sm"
                >
                  <X className="w-3.5 h-3.5" />
                  Remove
                </button>
              </>
            )}
          </div>
        </header>

        {/* Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Panel */}
          <section className={`${pdfInfo ? 'w-[60%]' : 'w-full'} flex flex-col bg-surface-container-low/50 relative ${pdfInfo ? 'border-r border-outline-variant/15' : ''}`}>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-5">
              {!pdfInfo && !isExtracting ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full py-20">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-6 shadow-sm border border-outline-variant/20">
                    <Upload className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">
                    Upload a PDF to get started
                  </h2>
                  <p className="text-sm text-on-surface-variant max-w-sm text-center mb-6 leading-relaxed">
                    Click "Upload PDF" in the sidebar to load a document, then start chatting with it.
                  </p>
                </div>
              ) : isExtracting ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full py-20">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-6 shadow-sm border border-outline-variant/20">
                    <FileText className="w-8 h-8 text-secondary animate-bounce" />
                  </div>
                  <h2 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">Extracting PDF content...</h2>
                  <p className="text-sm text-on-surface-variant mb-6">Analyzing pages for text extraction</p>
                  <div className="w-64 bg-surface-container-high/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-on-surface-variant mt-3 font-medium">{progress}%</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="max-w-[85%] mx-auto py-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mx-auto shadow-sm border border-outline-variant/20">
                    <Sparkles className="w-7 h-7 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-on-surface tracking-tight">
                    How can I assist with this document?
                  </h2>
                  <p className="text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    I've analyzed <strong>{pdfInfo?.fileName}</strong>. You can ask for summaries, data extraction, or specific clarifications.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {['Summarize this document', 'What are the key points?', 'Explain in simple terms', 'What details stand out?'].map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="px-4 py-2.5 rounded-xl text-sm bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface hover:border-outline-variant/50 transition-all duration-200"
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
              <div className="p-5 pt-0">
                <div className="max-w-3xl mx-auto glass-panel p-2 rounded-2xl shadow-lg glow-ring flex items-end gap-2">
                  <button className="p-2.5 rounded-xl hover:bg-surface-container-high/60 text-on-surface-variant transition-colors" aria-label="Attach file">
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
                    className="flex-1 bg-transparent border-none focus:ring-0 py-3 text-base text-on-surface placeholder:text-on-surface-variant/40 resize-none max-h-32 outline-none"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!input.trim() || isStreaming}
                    className="w-11 h-11 btn-gradient rounded-xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 shadow-md shadow-secondary/15"
                    aria-label="Send message"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </div>
                <p className="text-[10px] text-center text-on-surface-variant/50 mt-3 font-medium">
                  DocuMind AI can make mistakes. Verify important information.
                </p>
              </div>
            )}
          </section>

          {pdfInfo && pdfFile && <PDFViewer file={pdfFile} pageCount={pdfInfo.pageCount} />}
        </div>
      </main>

      {error && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl bg-error-container border border-error/20 text-on-error-container text-sm z-50 shadow-lg animate-scale-in">
          {error}
        </div>
      )}
    </div>
  )
}
