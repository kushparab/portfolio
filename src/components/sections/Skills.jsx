import { FadeContent } from '../../components/reactbits'
import { SKILLS } from '../../data/site'
import { Section } from './shared'
import { DotMatrixBg } from '../fx'

const ORDER = [
  ['programming', 'ai', 'web'],
  ['databases', 'tools', 'exploring'],
]

export default function Skills() {
  const cats = SKILLS
  return (
    <Section
      id="skills"
      num="03"
      kicker="Toolbox"
      title="Skills & Technologies"
      desc="The languages, frameworks, and tools I use to design, train, build, and ship intelligent applications."
      fx={
        <div className="absolute inset-0 opacity-40">
          <DotMatrixBg size={7} gap={34} color="rgba(183, 139, 255, 0.35)" speed={0.7} />
        </div>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {ORDER.flat().map((key, idx) => {
          const cat = cats[key]
          return (
            <FadeContent key={key} threshold={0.2} duration={700} delay={(idx % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-panel p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-txt">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-dim">{cat.blurb}</p>
                  </div>
                  <span className="font-mono-code text-[11px] text-dim/70">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      title={item.name}
                      className="flex items-center gap-2 rounded-full border border-line bg-raised/60 px-3 py-1.5 text-[12.5px] font-medium text-txt/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong"
                    >
                      <img src={item.icon} alt="" width={17} height={17} className="rounded-[4px]" loading="lazy" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeContent>
          )
        })}
      </div>

      <FadeContent threshold={0.2} duration={600} delay={120}>
        <p className="mt-8 rounded-2xl border border-dashed border-line-strong bg-surface/40 px-5 py-4 text-center font-mono-code text-[12.5px] text-dim">
          <span className="text-accent">//</span> Exploring categories reflect topics I'm actively learning —
          not yet claims of expertise.
        </p>
      </FadeContent>
    </Section>
  )
}