export default function ProjectCard({ project, delay = 0 }) {
  const { num, year, name, desc, tags, highlights } = project

  return (
    <div
      className="reveal relative overflow-hidden group transition-colors duration-300 p-9 hover:bg-navy"
      style={{ background: '#0a0f1e', transitionDelay: `${delay}s` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: 'linear-gradient(90deg,#3b82f6,#38bdf8)' }} />

      <div className="font-mono text-white-muted text-xs tracking-widest uppercase mb-4">
        Project — {num} / {year}
      </div>

      <h3 className="font-syne font-bold text-2xl text-white mb-3 tracking-tight leading-tight">{name}</h3>
      <p className="font-mono text-white-dim text-xs leading-relaxed mb-5">{desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {tags.map((t, i) => (
          <span key={i} className="font-mono text-cyan text-xs px-2.5 py-1 border border-cyan/25">{t}</span>
        ))}
      </div>

      <ul className="space-y-2 list-none m-0 p-0">
        {highlights.map((h, i) => (
          <li key={i} className="font-mono text-white-dim text-xs leading-relaxed flex gap-3">
            <span className="text-blue-bright shrink-0 mt-0.5">—</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
