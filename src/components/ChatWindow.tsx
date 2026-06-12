import { useEffect, useRef } from 'react'
import { MessageBubble } from './MessageBubble'
import type { Message } from '../hooks/useGeminiChat'
import { SUGGESTED_QUESTIONS } from '../utils/systemPrompt'
import { Sparkles } from 'lucide-react'

interface Props {
  messages: Message[]
  isStreaming: boolean
  onSuggestedQuestion: (q: string) => void
}

export function ChatWindow({ messages, isStreaming, onSuggestedQuestion }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
          <Sparkles className="w-7 h-7 text-violet-400" />
        </div>
        <h2 className="text-lg font-semibold text-white mb-1">Ready to chat</h2>
        <p className="text-sm text-zinc-400 mb-6 text-center max-w-sm">
          Ask anything about your document. Try one of these to get started:
        </p>
        <div className="flex flex-wrap gap-2 justify-center max-w-lg">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => onSuggestedQuestion(q)}
              className="px-4 py-2 rounded-xl text-sm bg-zinc-800 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-all duration-200"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="divide-y divide-zinc-800/50">
        {messages.map((msg, i) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isStreaming={isStreaming && i === messages.length - 1}
          />
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  )
}
