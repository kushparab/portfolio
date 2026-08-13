import { FadeContent, AnimatedContent } from '../../components/reactbits'
import { RESEARCH, BUILDING } from '../../data/site'
import { Section } from './shared'

export default function Research() {
  return (
    <Section
      id="research"
      num="05"
      kicker="Directions"
      title="AI Research Interests"
      desc="Kush is interested in exploring how intelligent systems can become more capable, reliable, autonomous, and useful in real-world environments."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {RESEARCH.map((r, i) => (
          <FadeContent key={r.name} threshold={0.2} duration={600} delay={(i % 5) * 70}>
            <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:bg-raised/60">
              <img src={r.icon} alt="" width={30} height={30} className="rounded-[6px] transition-transform duration-300 group-hover:scale-110" loading="lazy" />
              <span className="text-[13px] font-medium leading-snug text-txt/90">{r.name}</span>
            </div>
          </FadeContent>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <AnimatedContent distance={40} direction="vertical" threshold={0.2}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/10 via-panel to-teal/5 p-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">Long-Term Goal</p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-txt sm:text-[22px]">
              &ldquo;To contribute to the development of advanced AI systems through{' '}
              <span className="grad-text">research, experimentation, and real-world engineering.</span>&rdquo;
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" threshold={0.2} delay={0.06}>
          <div className="h-full rounded-3xl border border-line bg-panel p-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">Why Research</p>
            <p className="mt-4 text-[15px] leading-relaxed text-mute">
              Because the most exciting AI problems sit exactly where research meets engineering — where a
              good model has to work in a messy, real environment. That's the space I want to live in.
            </p>
          </div>
        </AnimatedContent>
      </div>

      {/* ---------- currently building ---------- */}
      <div className="mt-16">
        <FadeContent threshold={0.2} duration={700}>
          <div className="flex items-center gap-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-slow absolute h-2.5 w-2.5 rounded-full bg-teal" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl">
              Currently Building & Exploring
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
        </FadeContent>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUILDING.map((b, i) => (
            <FadeContent key={b.title} threshold={0.2} duration={650} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-panel p-6 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-raised transition-transform duration-300 group-hover:scale-110">
                    <img src={b.icon} alt="" width={26} height={26} loading="lazy" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/5 transition-colors group-hover:text-white/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold text-txt">{b.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{b.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </Section>
  )
}