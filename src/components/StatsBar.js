import { stats } from '@/data/portfolio'

export default function StatsBar() {
  return (
    <div
      className="reveal relative z-10 flex justify-center flex-wrap"
      style={{
        borderTop: '1px solid rgba(37,99,235,0.15)',
        borderBottom: '1px solid rgba(37,99,235,0.15)',
        background: 'rgba(10,15,30,0.7)',
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 min-w-[130px] max-w-[220px] text-center py-8 px-6"
          style={{
            borderRight: i < stats.length - 1 ? '1px solid rgba(37,99,235,0.15)' : 'none',
          }}
        >
          <span className="font-syne font-extrabold text-3xl text-blue-bright block leading-none">
            {s.num}
          </span>
          <span className="font-mono text-xs tracking-widest uppercase text-white-muted block mt-2">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}
