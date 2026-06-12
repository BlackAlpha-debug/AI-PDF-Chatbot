import { useState, useCallback, useRef } from 'react'
import { GoogleGenerativeAI, type Content } from '@google/generative-ai'
import { SYSTEM_PROMPT } from '../utils/systemPrompt'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export function useGeminiChat(pdfText: string | null) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const abortRef = useRef(false)

  const sendMessage = useCallback(
    async (question: string) => {
      if (!pdfText || isStreaming) return

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        content: question,
        timestamp: new Date(),
      }

      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMsg, assistantMsg])
      setIsStreaming(true)
      abortRef.current = false

      try {
        const systemWithDoc = SYSTEM_PROMPT.replace(
          '{PDF_CONTENT}',
          pdfText.slice(0, 100000)
        )

        const model = genAI.getGenerativeModel({
          model: 'gemini-2.0-flash',
          systemInstruction: {
            role: 'user',
            parts: [{ text: systemWithDoc }],
          },
        })

        const history: Content[] = messages.map((m) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        }))

        const chat = model.startChat({ history })

        const result = await chat.sendMessageStream(question)

        let accumulated = ''
        for await (const chunk of result.stream) {
          if (abortRef.current) break
          const text = chunk.text()
          accumulated += text
          const final = accumulated
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMsg.id ? { ...m, content: final } : m))
          )
        }
      } catch (err) {
        const errorText =
          err instanceof Error ? err.message : 'Something went wrong'
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: `Error: ${errorText}` }
              : m
          )
        )
      } finally {
        setIsStreaming(false)
      }
    },
    [pdfText, messages, isStreaming]
  )

  const clearChat = useCallback(() => {
    setMessages([])
    abortRef.current = true
  }, [])

  return { messages, isStreaming, sendMessage, clearChat }
}
