const experiences = [
  {
    date: 'sept. 2025 — Present',
    company: 'University / Institutional',
    role: 'Software Developer | Azure, Docker, RAG Systems',
    description:
      'Development of a Retrieval-Augmented Generation (RAG) system integrating university regulations into a legacy intranet used daily by 200+ employees. Implemented vector search with pgvector, secured platform access with OIDC/MFA, and set up observability and analytics using Grafana and Matomo. Collaborated with cross-functional teams and supported CI/CD and containerized deployments.',
    stack: ['Python', 'pgvector', 'RAG', 'Azure', 'Docker', 'Grafana', 'Matomo', 'OIDC', 'PostgreSQL'],
  },
  {
    date: 'oct. 2024 — July 2025',
    company: 'University / Institutional',
    role: 'Software Development Intern | PHP, Moodle, Grafana',
    description:
      'Software development intern contributing to web applications and Moodle-related features. Supported PHP-based developments, improved functionality and user experience for students and staff, and assisted with maintenance and deployments.',
    stack: ['PHP', 'Moodle', 'Grafana', 'Docker', 'PostgreSQL'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" style={{
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
          // Experience
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: '0 32px',
              padding: '28px 0',
              borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              {/* Date */}
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--text-dim)',
                paddingTop: '3px',
                letterSpacing: '0.04em',
              }}>
                {exp.date}
              </span>

              {/* Content */}
              <div>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  color: 'var(--accent)',
                  marginBottom: '3px',
                  letterSpacing: '0.02em',
                }}>
                  {exp.company}
                </div>
                <div style={{
                  fontSize: '15px',
                  color: 'var(--text)',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}>
                  {exp.role}
                </div>
                <p style={{
                  fontSize: '13.5px',
                  color: 'var(--text-mid)',
                  lineHeight: 1.65,
                  marginBottom: '12px',
                }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {exp.stack.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--text-dim)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      padding: '2px 7px',
                      borderRadius: '3px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}