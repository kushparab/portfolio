import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'
import { Magnet } from './reactbits'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex h-[68px] items-center justify-between">
        <a href="#home" onClick={close} className="flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-violet font-display text-[15px] font-bold text-white">
            {SITE.initials}
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-txt">
            Kush Parab
            <span className="ml-2 hidden rounded-full border border-line px-2 py-0.5 font-mono-code text-[10px] font-medium tracking-wider text-dim sm:inline">
              AI/ML
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover-line text-[13.5px] font-medium text-mute transition-colors hover:text-txt"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Magnet padding={45} magnetStrength={30} wrapperClassName="hidden md:inline-block">
            <a
              href={SITE.resume}
              download
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost !px-5 !py-2.5 !text-[13.5px]"
            >
              Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </Magnet>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[2px] bg-txt transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-[2px] bg-txt transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-txt transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-txt/85 hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.resume}
              download
              onClick={close}
              className="mt-2 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-accent"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}