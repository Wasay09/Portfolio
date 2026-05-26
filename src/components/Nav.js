import Link from 'next/link'

const NAV_LINKS = ['Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5"
      style={{
        background: 'rgba(6,8,16,0.78)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(37,99,235,0.12)',
      }}
    >
      <span className="font-syne font-extrabold text-lg text-white tracking-tight select-none">
        WS<span className="text-blue-bright">.</span>
      </span>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              className="relative font-mono text-white-dim text-xs tracking-widest uppercase hover:text-white transition-colors duration-200 group no-underline"
            >
              {link}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-blue-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
