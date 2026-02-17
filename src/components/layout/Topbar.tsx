import Link from 'next/link'

export default function Topbar() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10,12,15,0.88)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '54px',
        maxWidth: '1020px',
        margin: '0 auto',
        padding: '0 24px',
      }}>

        <Link href="/" style={{
          fontFamily: 'var(--mono)',
          fontSize: '13px',
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}>
          ibai<span style={{ color: 'var(--accent)' }}>.</span>dev
        </Link>

        <nav style={{ display: 'flex', gap: '4px' }}>
          {['Projects', 'Experience', 'About'].map(item => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 'var(--radius)',
                letterSpacing: '0.04em',
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              color: 'var(--accent)',
              textDecoration: 'none',
              padding: '5px 14px',
              border: '1px solid rgba(59,130,246,0.35)',
              borderRadius: 'var(--radius)',
              letterSpacing: '0.04em',
            }}
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  )
}