import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Props {
  onSend: (message: string) => void
  isStreaming: boolean
  prefilledMessage?: string | null
  onPrefilledConsumed?: () => void
}

export function MessageInput({ onSend, isStreaming, prefilledMessage, onPrefilledConsumed }: Props) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (prefilledMessage) {
      onSend(prefilledMessage)
      onPrefilledConsumed?.()
    }
  }, [prefilledMessage, onSend, onPrefilledConsumed])

  useEffect(() => {
    if (!isStreaming) textareaRef.current?.focus()
  }, [isStreaming])

  const handleSubmit = () => {
    const trimmed = input.trim()
    if (!trimmed || isStreaming) return
    onSend(trimmed)
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

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
    el.style.height = Math.min(el.scrollHeight, 160) + 'px'
  }

  return (
    <div className="border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-sm px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-end gap-2">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your document..."
            disabled={isStreaming}
            rows={1}
            className="w-full resize-none rounded-xl bg-zinc-800 border border-zinc-700/50 px-4 py-3 pr-12 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 disabled:opacity-50 transition-all"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || isStreaming}
          className="shrink-0 w-11 h-11 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
        >
          <Send className="w-4.5 h-4.5" />
        </button>
      </div>
      <p className="text-center text-xs text-zinc-600 mt-2">
        AI responses are based on document content. Always verify important information.
      </p>
    </div>
  )
}
