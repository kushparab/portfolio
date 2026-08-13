import { SpotlightCard, FadeContent, Magnet } from '../../components/reactbits'
import { PROJECTS } from '../../data/site'
import { Section } from './shared'

export default function Projects() {
  return (
    <Section
      id="projects"
      num="01"
      kicker="Featured Work"
      title="Projects I've Built"
      desc="A selection of AI and software projects where I explore, build, and learn — from deep learning pipelines to full web applications."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <FadeContent key={p.id} threshold={0.15} duration={750} delay={(i % 2) * 90}>
            <SpotlightCard className="group h-full !rounded-[1.6rem] !p-0">
              <div className="flex h-full flex-col">
                <div
                  className="relative flex h-44 items-center justify-between overflow-hidden p-6"
                  style={{ background: p.gradient }}
                >
                  <div className="absolute inset-0 opacity-20 dot-grid" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-sm">
                    <img src={p.icon} alt="" width={30} height={30} className="rounded-[6px]" loading="lazy" />
                  </div>
                  <span className="relative font-display text-5xl font-bold text-white/25 transition-colors duration-300 group-hover:text-white/40">
                    {p.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap gap-2">
                    {p.category.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line bg-raised/60 px-3 py-1 font-mono-code text-[10.5px] uppercase tracking-wider text-accent"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-txt sm:text-[22px]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-mute">{p.description}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-txt/80">
                        <img src="https://img.icons8.com/color/16/checkmark.png" alt="" width={14} height={14} className="shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-lg border border-line bg-surface px-2.5 py-1 font-mono-code text-[11.5px] text-txt/75">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-7">
                    <Magnet padding={40} magnetStrength={30}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[13px] font-semibold text-txt transition-colors hover:bg-raised"
                      >
                        <img src="https://img.icons8.com/color/24/github.png" alt="" width={16} height={16} />
                        GitHub
                        <span className="font-mono-code text-[10px] text-dim">· soon</span>
                      </a>
                    </Magnet>
                    <Magnet padding={40} magnetStrength={30}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-txt transition-colors hover:bg-raised"
                      >
                        <img src="https://img.icons8.com/color/24/external-link.png" alt="" width={14} height={14} />
                        Live Demo
                      </a>
                    </Magnet>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </FadeContent>
        ))}
      </div>
    </Section>
  )
}