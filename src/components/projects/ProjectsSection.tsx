import { projects } from '@/content/project'
import ProjectCard from '@/content/projects/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '80px 0' }}>
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
          // Selected Projects
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}