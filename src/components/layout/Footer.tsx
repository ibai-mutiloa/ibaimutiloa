export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 0',
      background: 'var(--bg-panel)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1020px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          letterSpacing: '0.04em',
        }}>
          © 2025 Ibai Mutiloa Aliaga ·{' '}
          <a href="https://ibaimutiloa.es" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
            ibaimutiloa.es
          </a>
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          letterSpacing: '0.04em',
        }}>
          Built with Next.js · Deployed on Google Cloud
        </span>
      </div>
    </footer>
  )
}