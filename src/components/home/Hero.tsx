import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      padding: '100px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1020px',
        margin: '0 auto',
        padding: '0 24px',
      }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          background: 'var(--bg-panel)',
          border: '1px solid var(--border)',
          padding: '4px 12px 4px 10px',
          borderRadius: '100px',
          marginBottom: '32px',
          letterSpacing: '0.05em',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            background: 'var(--green)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--green)',
            animation: 'pulse-dot 2.5s ease-in-out infinite',
            display: 'inline-block',
          }} />
          Open to backend / AI roles · Remote-friendly
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--mono)',
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: '#dde6f0',
          marginBottom: '10px',
        }}>
          Ibai Mutiloa Aliaga<span style={{ color: 'var(--accent)' }}>.</span>
        </h1>

        {/* Role */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '14px',
          color: 'var(--text-mid)',
          marginBottom: '24px',
          letterSpacing: '0.02em',
        }}>
          Backend Engineer · AI Systems · <span style={{ color: 'var(--accent-2)' }}>Cloud Infrastructure</span>
        </div>

        {/* Bio */}
        <p style={{
          fontSize: '16px',
          color: 'var(--text-mid)',
          maxWidth: '560px',
          lineHeight: 1.75,
          marginBottom: '40px',
        }}>
          I build <strong style={{ color: 'var(--text)', fontWeight: 500 }}>production-grade backend systems and AI pipelines</strong>
          {' '}— from RAG architectures with semantic search to cloud-native infrastructure
          with proper observability.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="#projects" style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            background: 'var(--accent)',
            color: '#fff',
            padding: '9px 20px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}>
            View Projects
          </Link>
          <Link href="#contact" style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--text-mid)',
            border: '1px solid var(--border-lit)',
            padding: '9px 20px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}>
            Get in touch
          </Link>
          <a href="https://github.com/ibai-mutiloa" target="_blank" rel="noopener" style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--text-mid)',
            border: '1px solid var(--border-lit)',
            padding: '9px 20px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}>
            GitHub ↗
          </a>
        </div>

      </div>
    </section>
  )
}