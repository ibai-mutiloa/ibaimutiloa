const principles = [
  'Observability is not optional. Instrument everything, alert on what matters.',
  'Boring technology beats clever technology. Use Postgres, Docker, and proven stacks before exotic ones.',
  'RAG is an architecture problem, not a prompt problem. Retrieval quality determines output quality.',
  'Security is a feature. MFA, least-privilege, and proper token handling from the start.',
  'Latency budgets are real constraints. Design APIs around the P95, not the average.',
]

const exploring = [
  'Agentic AI systems and tool-use patterns with LLMs',
  'Advanced vector search tuning and hybrid BM25 + semantic retrieval',
  'Kubernetes for container orchestration beyond basic Docker Compose',
  'Event-driven architectures with message queues',
]

export default function AboutSection() {
  return (
    <section id="about" style={{
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
          // About
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>

          {/* Background */}
          <div style={{ background: 'var(--bg-card)', padding: '28px' }}>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              // Background
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.7 }}>
              I&apos;m a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>software developer based in Spain</strong>, focused on the
              engineering side of things: backend systems, AI integrations, and the
              infrastructure that keeps them running. I studied Computer Engineering
              and have been building real production systems since early in my career.
              <br /><br />
              My work sits at the intersection of <strong style={{ color: 'var(--text)', fontWeight: 500 }}>solid backend engineering</strong> and{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>applied AI</strong> — building the pipelines, APIs, and databases
              that make LLMs actually useful in production, not just in demos.
            </p>
          </div>

          {/* Principles */}
          <div style={{ background: 'var(--bg-card)', padding: '28px' }}>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              // Engineering principles
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {principles.map((p, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--text-mid)',
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--mono)',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>→</span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Exploring */}
          <div style={{ background: 'var(--bg-card)', padding: '28px' }}>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              // Currently exploring
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exploring.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--text-mid)',
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--mono)',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Looking for */}
          <div style={{ background: 'var(--bg-card)', padding: '28px' }}>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              // Looking for
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: 1.7 }}>
              Roles where I can go deep on{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>backend systems, AI/LLM infrastructure,
              or cloud-native architecture</strong>. I thrive in environments that value
              technical depth, good engineering practices, and building things that
              run reliably at scale.
              <br /><br />
              Open to <strong style={{ color: 'var(--text)', fontWeight: 500 }}>remote, hybrid, or on-site</strong> positions
              in Spain or internationally. Comfortable in English and Spanish.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}