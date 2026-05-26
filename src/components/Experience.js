import SectionHeader from './SectionHeader'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader num="02" title="Experience" />

      {experience.map((exp, i) => (
        <div
          key={i}
          className="reveal border-t border-blue-bright/10 py-12 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 relative group"
        >
          <div className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            style={{ background: 'linear-gradient(90deg,#3b82f6,transparent)' }} />

          <div>
            <div className="font-mono text-blue-glow text-xs tracking-widest uppercase mb-2">{exp.period}</div>
            <div className="font-mono text-white-muted text-xs">{exp.location}</div>
          </div>

          <div>
            <div className="font-syne font-bold text-2xl text-white mb-1 tracking-tight">{exp.role}</div>
            <div className="font-mono text-blue-glow text-xs mb-6">{exp.company}</div>
            <ul className="space-y-3 list-none m-0 p-0">
              {exp.bullets.map((b, bi) => (
                <li key={bi} className="font-mono text-white-dim text-xs leading-relaxed flex gap-3">
                  <span className="text-blue-bright mt-0.5 shrink-0">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
