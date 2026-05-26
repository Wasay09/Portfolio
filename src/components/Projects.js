import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader num="03" title="Projects" />

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px"
        style={{ background: 'rgba(37,99,235,0.08)' }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
