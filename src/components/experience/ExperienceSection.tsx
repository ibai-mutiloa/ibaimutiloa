const experiences = [
  {
    date: '2023 — Present',
    company: 'University / Institutional',
    role: 'Backend & AI Systems Engineer',
    description:
      'Designed and shipped a production RAG system serving 200+ daily users on university intranet. Implemented modern authentication (OIDC, MFA), observability infrastructure (Grafana, Matomo), and developed Moodle plugins for LMS workflow automation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'Azure', 'PHP/Moodle'],
  },
  {
    date: '2022 — 2023',
    company: 'LEZGuard Project',
    role: 'ML Engineer & Backend Developer',
    description:
      'Built an end-to-end ML pipeline for vehicle emissions prediction in Low Emission Zones. Feature engineering, model training, evaluation, and REST API exposure via FastAPI with CI/CD through Jenkins.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Jenkins', 'Docker'],
  },
  {
    date: '2022 — Present',
    company: 'Solraise',
    role: 'Full-Stack Developer & Infrastructure',
    description:
      'Designing and developing a scalable web platform from scratch. Responsible for backend architecture, containerised deployment, observability stack, and analytics infrastructure. Emphasis on operations-readiness from day one.',
    stack: ['Node.js', 'Docker', 'Grafana', 'Matomo', 'Linux'],
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