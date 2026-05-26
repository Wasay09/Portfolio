import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import StatsBar   from '@/components/StatsBar'
import Skills     from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects   from '@/components/Projects'
import Education  from '@/components/Education'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <main className="relative bg-ink min-h-screen">
      <div className="scanline-overlay" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Initialises scroll-reveal (client component) */}
      <RevealInit />

      <Nav />
      <Hero />
      <StatsBar />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
