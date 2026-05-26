const LINKS = [
  { icon: '✉', label: 'wasaysyed09@outlook.com', href: 'mailto:wasaysyed09@outlook.com' },
  { icon: '☎', label: '(647) 643-3196',           href: 'tel:6476433196' },
  { icon: '⌥', label: 'github.com/Wasay09',        href: 'https://github.com/Wasay09', external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-8 md:px-16 py-28 text-center">
      <div className="reveal max-w-2xl mx-auto">
        <h2
          className="font-syne font-extrabold tracking-tight mb-5 text-white"
          style={{ fontSize: 'clamp(2.2rem,6vw,4rem)' }}
        >
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>

        <p className="font-mono text-white-dim text-sm leading-relaxed mb-12">
          Open to co-op opportunities, internships, and interesting collaborations.
          <br />
          Based in Mississauga, ON — available for remote and local roles.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white-dim px-6 py-4 relative overflow-hidden group transition-colors duration-300 hover:text-white no-underline"
              style={{ border: '1px solid rgba(37,99,235,0.22)' }}
            >
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'rgba(37,99,235,0.15)' }} />
              <span className="relative z-10 text-base">{l.icon}</span>
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
