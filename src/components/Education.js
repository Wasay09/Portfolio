import SectionHeader from './SectionHeader'
import { courses } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader num="04" title="Education" />

      <div
        className="reveal relative overflow-hidden p-10 md:p-14 flex flex-col md:flex-row gap-10 justify-between"
        style={{ background: '#0a0f1e', border: '1px solid rgba(37,99,235,0.2)' }}
      >
        {/* Left accent */}
        <div className="absolute top-0 left-0 bottom-0 w-0.5"
          style={{ background: 'linear-gradient(180deg,#3b82f6,#38bdf8)' }} />

        <div>
          <h3 className="font-syne font-extrabold text-3xl text-white mb-2 tracking-tight">
            Bachelor of Computing
          </h3>
          <div className="font-mono text-blue-glow text-xs mb-1">
            Software Engineering (Co-op) · Specialization in Cybersecurity
          </div>
          <div className="font-mono text-white-muted text-xs mb-8">
            University of Guelph — Guelph, ON · Expected 2029
          </div>

          <div className="font-mono text-white-muted text-xs tracking-widest uppercase mb-3">
            Relevant Courses
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((c, i) => (
              <span key={i} className="font-mono text-white-dim text-xs px-3 py-1 border border-blue-bright/20">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-start shrink-0">
          <span className="font-syne font-extrabold text-blue-bright leading-none" style={{ fontSize: '4rem' }}>
            84.3
          </span>
          <span className="font-mono text-white-muted text-xs tracking-widest uppercase mt-1">GPA %</span>
          <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-cyan text-xs px-3 py-1.5 border border-cyan/30">
            ★ Dean&apos;s List
          </div>
        </div>
      </div>
    </section>
  )
}
