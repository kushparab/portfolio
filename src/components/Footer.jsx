import { SITE } from '../data/site'
import { DecryptedText } from './reactbits'
import { RandomShapes, EntranceReveal } from './fx'

export default function Footer() {
  const socials = [
    {
      name: 'GitHub',
      href: SITE.github,
      icon: 'https://img.icons8.com/color/48/github.png',
    },
    {
      name: 'LinkedIn',
      href: SITE.linkedin,
      icon: 'https://img.icons8.com/color/48/linkedin.png',
    },
    {
      name: 'Email',
      href: `mailto:${SITE.email}`,
      icon: 'https://img.icons8.com/color/48/new-post.png',
    },
  ]

  return (
    <footer className="relative border-t border-line bg-panel/40 overflow-hidden">
      <RandomShapes count={8} seed="footer" className="opacity-50" />
      <div className="wrap relative py-14">
        <EntranceReveal>
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet font-display text-lg font-bold text-white">
              {SITE.initials}
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-txt">{SITE.name}</h3>
            <p className="mt-2 font-mono-code text-[12px] tracking-wide text-dim">{SITE.headline}</p>
          </div>

          <div className="flex items-center gap-2 text-[14px] text-mute">
            <span>“Building. Learning. Experimenting. Innovating.”</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/50"
              >
                <img src={s.icon} alt={s.name} width={20} height={20} className="rounded-[4px]" loading="lazy" />
              </a>
            ))}
          </div>

          <p className="font-mono-code text-[12px] text-dim">
            <DecryptedText
              text="kush // ai-ml || always-building"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={40}
              className="text-teal/80"
            />
          </p>

          <div className="flex flex-col items-center gap-2 border-t border-line pt-6 text-[12.5px] text-dim sm:flex-row sm:gap-4">
            <span>© 2026 {SITE.name}. All rights reserved.</span>
            <span className="hidden h-1 w-1 rounded-full bg-dim sm:block" />
            <span>
              Crafted with React, Tailwind, <span className="text-accent">ReactBits</span> & anime.js
            </span>
          </div>
        </div>
        </EntranceReveal>
      </div>
    </footer>
  )
}