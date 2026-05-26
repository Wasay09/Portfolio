export default function SectionHeader({ num, title }) {
  return (
    <div className="reveal flex items-center gap-5 mb-14">
      <span className="font-mono text-blue-bright text-xs tracking-widest uppercase shrink-0">
        {num} /
      </span>
      <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white tracking-tight shrink-0">
        {title}
      </h2>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg,rgba(37,99,235,0.4),transparent)' }}
      />
    </div>
  )
}
