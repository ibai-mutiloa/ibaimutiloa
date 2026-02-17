"use client"

import { useState } from 'react'

const links = [
  { icon: '✉', label: 'ibaimutiloaaliaga@gmail.com', href: 'mailto:ibaimutiloaaliaga@gmail.com' },
  { icon: 'in', label: 'linkedin.com/in/ibaimutiloa', href: 'https://www.linkedin.com/in/ibai-mutiloa-aliaga-a4266919b/' },
  { icon: '⌥', label: 'github.com/ibaimutiloa', href: 'https://github.com/ibai-mutiloa' },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <section id="contact" style={{
      padding: '80px 0',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1020px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          // Contact
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }}>

          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'var(--mono)',
              fontSize: '22px',
              fontWeight: 500,
              color: '#dde6f0',
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}>
              Let&apos;s talk engineering.
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-mid)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              Whether you have a backend or AI role in mind, want to discuss
              architecture, or just want to chat about RAG systems and vector
              search — feel free to reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--mono)',
                    fontSize: '12px',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    letterSpacing: '0.04em',
                    transition: 'color 0.15s, border-color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--text)'
                    e.currentTarget.style.borderColor = 'var(--border-lit)'
                    e.currentTarget.style.background = '#161c26'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-dim)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--bg-card)'
                  }}
                >
                  <span style={{ fontSize: '14px' }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={async e => {
              e.preventDefault()
              setLoading(true)
              setError('')
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message }),
                })
                if (!res.ok) throw new Error('Request failed')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
              } catch (err: any) {
                setError(err?.message || 'Error sending message')
              } finally {
                setLoading(false)
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--text-dim)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Name
              </label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                required
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  color: 'var(--text)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '10px 14px',
                  outline: 'none',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--text-dim)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Email
              </label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                required
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  color: 'var(--text)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '10px 14px',
                  outline: 'none',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--text-dim)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Message
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What are you working on?"
                required
                rows={4}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  color: 'var(--text)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '10px 14px',
                  outline: 'none',
                  resize: 'vertical',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            {error && <div style={{ color: 'var(--red)', fontSize: '13px' }}>{error}</div>}

            <button
              type="submit"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                background: submitted ? 'var(--green)' : 'var(--accent)',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: 'var(--radius)',
                cursor: submitted || loading ? 'default' : 'pointer',
                letterSpacing: '0.04em',
                alignSelf: 'flex-start',
                transition: 'background 0.2s, opacity 0.15s',
              }}
              disabled={submitted || loading}
            >
              {loading ? 'Sending…' : submitted ? 'Sent ✓' : 'Send message →'}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}