'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay) =>
    `transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-24 grid-bg"
    >
      <div className="relative z-10 max-w-4xl">
        {/* Tag */}
        <div
          className={`flex items-center gap-3 mb-7 text-blue-glow text-xs tracking-widest uppercase ${anim()}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="inline-block w-8 h-px bg-blue-glow" />
          Software Engineer · Cybersecurity
        </div>

        {/* Name */}
        <h1
          className={`font-syne font-extrabold leading-none tracking-tighter mb-7 ${anim()}`}
          style={{ fontSize: 'clamp(3.2rem,9vw,7.5rem)', transitionDelay: '0.25s' }}
        >
          <span className="block text-white">Wasayuddin</span>
          <span className="block text-gradient">Syed.</span>
        </h1>

        {/* Bio */}
        <p
          className={`font-mono text-white-dim text-sm leading-relaxed max-w-xl mb-12 ${anim()}`}
          style={{ transitionDelay: '0.4s' }}
        >
          Computer Science student at the University of Guelph specialising in
          Cybersecurity. Building robust systems, elegant interfaces, and data-driven
          solutions — one commit at a time.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-5 items-center flex-wrap ${anim()}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <a
            href="https://github.com/Wasay09"
            target="_blank"
            rel="noreferrer"
            className="clip-btn inline-flex items-center gap-2 px-7 py-3 text-xs tracking-widest uppercase font-mono text-white relative overflow-hidden group no-underline"
            style={{ background: '#2563eb', border: '1px solid #2563eb' }}
          >
            <span className="absolute inset-0 bg-blue-bright -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">↗ GitHub</span>
          </a>

          <Link
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase text-blue-glow hover:text-cyan transition-colors duration-200 flex items-center gap-2 no-underline"
          >
            View Projects <span>→</span>
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-8 md:left-16 flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-white-muted ${anim()}`}
        style={{ transitionDelay: '0.85s' }}
      >
        <span className="w-12 h-px bg-white-muted" />
        Scroll to explore
      </div>
    </section>
  )
}
