'use client'

import { Project } from '@/content/project'

const statusStyles: Record<string, { label: string; color: string; bg: string; border: string }> = {
  production: {
    label: 'Production',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.25)',
  },
  development: {
    label: 'In Development',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.25)',
  },
  'open-source': {
    label: 'Open Source',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.25)',
  },
}

export default function ProjectCard({ project }: { project: Project }) {
  const badge = statusStyles[project.status]

  return (
    <div style={{
      background: 'var(--bg-card)',
      padding: '28px 28px 24px',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background 0.2s',
    }}
      onMouseEnter={e => (e.currentTarget.style.background = '#161c26')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--text-dim)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {project.type}
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          padding: '2px 8px',
          borderRadius: '100px',
          letterSpacing: '0.05em',
          color: badge.color,
          background: badge.bg,
          border: `1px solid ${badge.border}`,
        }}>
          {badge.label}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--mono)',
        fontSize: '16px',
        fontWeight: 500,
        color: '#dde6f0',
        marginBottom: '8px',
        letterSpacing: '-0.01em',
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '13.5px',
        color: 'var(--text-mid)',
        lineHeight: 1.65,
        marginBottom: '20px',
      }}>
        {project.shortDescription}
      </p>

      {/* Metrics */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
        padding: '12px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        {project.metrics.map(m => (
          <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '16px',
              color: 'var(--text)',
              fontWeight: 500,
            }}>
              {m.value}
            </span>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stack tags */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {project.stack.map(tag => (
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

      {/* Arrow */}
      <span style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        fontSize: '16px',
        color: 'var(--accent)',
        opacity: 0,
        transition: 'opacity 0.2s',
      }}
        className="project-arrow"
      >
        ↗
      </span>
    </div>
  )
}