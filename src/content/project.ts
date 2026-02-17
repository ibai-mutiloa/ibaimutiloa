export type ProjectStatus = 'production' | 'development' | 'open-source'

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  slug: string
  title: string
  type: string
  status: ProjectStatus
  shortDescription: string
  metrics: ProjectMetric[]
  stack: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'rag-intranet',
    title: 'University Intranet RAG System',
    type: 'AI Infrastructure',
    status: 'production',
    shortDescription:
      'End-to-end Retrieval-Augmented Generation system deployed on university intranet. Document ingestion pipeline, vector storage with pgvector, semantic retrieval, and LLM response synthesis with context grounding.',
    metrics: [
      { value: '200+', label: 'Daily users' },
      { value: '<400ms', label: 'P95 latency' },
      { value: 'pgvector', label: 'Vector store' },
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'Azure', 'LLM'],
    featured: true,
  },
  {
    slug: 'mfa-oidc',
    title: 'Modern MFA & OIDC Implementation',
    type: 'Security / Auth',
    status: 'production',
    shortDescription:
      'Designed and implemented multi-factor authentication and OpenID Connect single-sign-on for institutional users. Replaced legacy session auth with token-based flows and identity federation.',
    metrics: [
      { value: 'OIDC', label: 'Auth protocol' },
      { value: 'TOTP', label: 'MFA method' },
      { value: '0', label: 'Incidents post-deploy' },
    ],
    stack: ['Python', 'OIDC', 'TOTP', 'JWT', 'Linux'],
    featured: true,
  },
  {
    slug: 'lez-guard',
    title: 'LEZGuard — Emissions Prediction',
    type: 'ML / Prediction',
    status: 'open-source',
    shortDescription:
      'Machine learning pipeline to predict vehicle emissions and compliance with Low Emission Zone regulations. Feature engineering from traffic and environmental data, model evaluation and API exposure.',
    metrics: [
      { value: 'ML', label: 'Pipeline' },
      { value: 'REST', label: 'API layer' },
      { value: 'CI/CD', label: 'Jenkins' },
    ],
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Jenkins', 'Docker'],
    featured: true,
  },
  {
    slug: 'solraise',
    title: 'Solraise — Web Platform',
    type: 'Full Stack Platform',
    status: 'development',
    shortDescription:
      'Full-stack web platform with a modern backend architecture, user management, observability stack (Grafana + Matomo), and containerised deployment. Designed for horizontal scaling from day one.',
    metrics: [
      { value: 'Grafana', label: 'Observability' },
      { value: 'Docker', label: 'Containers' },
      { value: 'Matomo', label: 'Analytics' },
    ],
    stack: ['Node.js', 'Docker', 'Grafana', 'Matomo', 'PostgreSQL'],
    featured: false,
  },
  {
    slug: 'moodle-plugins',
    title: 'Moodle Plugin Development',
    type: 'LMS / Plugin Dev',
    status: 'production',
    shortDescription:
      'Custom Moodle plugins extending LMS functionality for institutional workflows. PHP backend, Moodle APIs, database abstraction layer and integration with external university systems.',
    metrics: [
      { value: 'PHP', label: 'Backend' },
      { value: 'Moodle', label: 'Platform' },
      { value: 'APIs', label: 'External integration' },
    ],
    stack: ['PHP', 'Moodle API', 'MySQL', 'REST'],
    featured: false,
  },
  {
    slug: 'observability',
    title: 'Observability Stack',
    type: 'DevOps / Observability',
    status: 'production',
    shortDescription:
      'Designed and deployed metrics and analytics infrastructure for production services. Real-time dashboards, alerting rules, and user analytics for data-driven decisions on system health.',
    metrics: [
      { value: 'Real-time', label: 'Monitoring' },
      { value: 'Alerts', label: 'Threshold rules' },
      { value: 'SLO', label: 'Defined & tracked' },
    ],
    stack: ['Grafana', 'Prometheus', 'Matomo', 'Docker', 'Linux'],
    featured: false,
  },
]