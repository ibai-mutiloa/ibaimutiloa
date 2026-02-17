const stack = {
  Backend: {
    color: 'var(--accent)',
    borderColor: 'rgba(59,130,246,0.3)',
    tags: ['Python', 'FastAPI', 'Node.js', 'PHP', 'REST APIs', 'PostgreSQL'],
  },
  'AI / ML': {
    color: 'var(--accent-2)',
    borderColor: 'rgba(34,211,238,0.3)',
    tags: ['RAG Systems', 'LLM Integration', 'pgvector', 'Semantic Search', 'Scikit-learn'],
  },
  Infra: {
    color: 'var(--green)',
    borderColor: 'rgba(34,197,94,0.3)',
    tags: ['Docker', 'Azure', 'Linux / Debian', 'Jenkins', 'OIDC / MFA', 'Grafana'],
  },
}

export default function StackStrip() {
  return (
    <div style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-panel)',
    }}>
      <div style={{
        maxWidth: '1020px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {Object.entries(stack).map(([category, { color, borderColor, tags }]) => (
          <div key={category} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            {/* Category label */}
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              width: '68px',
              flexShrink: 0,
            }}>
              {category}
            </span>

            {/* Tags */}
            {tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color,
                background: 'var(--bg-card)',
                border: `1px solid ${borderColor}`,
                padding: '4px 10px',
                borderRadius: 'var(--radius)',
                letterSpacing: '0.04em',
              }}>
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}