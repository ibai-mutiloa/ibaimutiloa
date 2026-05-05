"use client"

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

let msgId = 0

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: msgId++, role: 'assistant', content: 'Hi! I\'m Ibai\'s assistant. Ask me anything about his background, projects, or experience.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    const next: Message[] = [...messages, { id: msgId++, role: 'user', content: text }]
    setMessages(next)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages([...next, { id: msgId++, role: 'assistant', content: data.reply ?? 'Sorry, I could not get a response.' }])
    } catch {
      setMessages([...next, { id: msgId++, role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '24px',
            width: '340px',
            maxHeight: '480px',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-panel)',
            border: '1px solid var(--border-lit)',
            borderRadius: '10px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.55)',
            zIndex: 10000,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-card)',
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              color: 'var(--text)',
              letterSpacing: '0.04em',
            }}>
              ibai<span style={{ color: 'var(--accent)' }}>.</span>chat
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                fontFamily: 'var(--mono)',
                fontSize: '16px',
                lineHeight: 1,
                padding: '0 2px',
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: msg.role === 'user' ? 'var(--accent)' : 'var(--bg-card)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                  color: msg.role === 'user' ? '#fff' : 'var(--text)',
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-dim)',
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                }}>
                  …
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '12px',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-card)',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything…"
              style={{
                flex: 1,
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: 'var(--text)',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '8px 12px',
                outline: 'none',
              }}
              onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: '#fff',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: 'var(--radius)',
                padding: '8px 14px',
                cursor: loading || !input.trim() ? 'default' : 'pointer',
                opacity: loading || !input.trim() ? 0.5 : 1,
                transition: 'opacity 0.15s',
                letterSpacing: '0.04em',
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--mono)',
          fontSize: '12px',
          color: open ? '#fff' : 'var(--accent)',
          background: open ? 'var(--accent)' : 'var(--bg-panel)',
          border: '1px solid rgba(59,130,246,0.45)',
          borderRadius: '999px',
          padding: '10px 18px',
          cursor: 'pointer',
          letterSpacing: '0.04em',
          boxShadow: '0 4px 24px rgba(59,130,246,0.18)',
          transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          if (!open) {
            e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
            e.currentTarget.style.boxShadow = '0 4px 28px rgba(59,130,246,0.28)'
          }
        }}
        onMouseLeave={e => {
          if (!open) {
            e.currentTarget.style.background = 'var(--bg-panel)'
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.18)'
          }
        }}
      >
        <span style={{ fontSize: '14px' }}>{open ? '×' : '💬'}</span>
        {open ? 'Close' : 'Chat'}
      </button>
    </>
  )
}
