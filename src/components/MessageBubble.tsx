import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Copy, Check, User, Sparkles } from 'lucide-react'
import type { Message } from '../hooks/useGeminiChat'

interface Props {
  message: Message
  isStreaming?: boolean
}

export function MessageBubble({ message, isStreaming }: Props) {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === 'user'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex gap-3 px-4 py-3 ${isUser ? '' : 'bg-zinc-800/30'}`}>
      <div
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 ${
          isUser
            ? 'bg-zinc-700 text-zinc-300'
            : 'bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-400'
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-zinc-500 mb-1.5">
          {isUser ? 'You' : 'AI Assistant'}
        </p>

        <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700 prose-code:text-violet-300 prose-headings:text-zinc-100 prose-strong:text-zinc-100 prose-a:text-violet-400">
          {isUser ? (
            <p className="text-zinc-200">{message.content}</p>
          ) : message.content ? (
            <ReactMarkdown>{message.content}</ReactMarkdown>
          ) : isStreaming ? (
            <div className="flex items-center gap-1.5 py-1">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
            </div>
          ) : null}
        </div>

        {!isUser && message.content && !isStreaming && (
          <button
            onClick={handleCopy}
            className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
