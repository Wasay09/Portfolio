import SectionHeader from './SectionHeader'
import { skills } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader num="01" title="Technical Skills" />

      <div
        className="reveal grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ background: 'rgba(37,99,235,0.1)' }}
      >
        {skills.map((cat, i) => (
          <div
            key={i}
            className="p-8 relative overflow-hidden group transition-colors duration-300 hover:bg-navy"
            style={{ background: '#0a0f1e' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: 'linear-gradient(90deg,#3b82f6,#38bdf8)' }} />

            <div className="font-mono text-blue-bright text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="text-white-muted">//</span> {cat.cat}
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, ii) => (
                <span
                  key={ii}
                  className="font-mono text-xs text-white-dim px-3 py-1 border border-blue-bright/20 hover:border-blue-bright/60 hover:text-blue-glow transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
