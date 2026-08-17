import { FadeContent, AnimatedContent } from '../../components/reactbits'
import { EDUCATION, EXPERIENCE } from '../../data/site'
import { Section } from './shared'
import { RandomShapes } from '../fx'

export default function Journey() {
  return (
    <Section
      id="education"
      num="06"
      kicker="Background"
      title="Education & Experience"
      desc="My academic foundation and the journey so far — with space to grow as new opportunities come in."
      fx={<RandomShapes count={7} seed="journey" className="opacity-50" />}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          {EDUCATION.map((ed, i) => (
            <FadeContent key={ed.type} threshold={0.2} duration={700} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent via-violet to-teal opacity-70" />
                <div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.18em] text-dim">
                  <img src="https://img.icons8.com/color/24/graduation-cap.png" alt="" width={15} height={15} className="rounded" />
                  {ed.type}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-txt">
                  {ed.stream}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-mute">
                  <span className="flex items-center gap-1.5">
                    <img src="https://img.icons8.com/color/24/school.png" alt="" width={13} height={13} className="rounded" />
                    {ed.placeholders.college}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img src="https://img.icons8.com/color/24/clock.png" alt="" width={13} height={13} className="rounded" />
                    {ed.placeholders.duration}
                  </span>
                </div>

                {ed.subjects.length > 0 && (
                  <>
                    <p className="mt-5 font-mono-code text-[10.5px] uppercase tracking-[0.18em] text-dim">
                      Relevant Subjects
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ed.subjects.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-line bg-surface px-2.5 py-1 text-[12px] font-medium text-txt/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </FadeContent>
          ))}
        </div>

        <AnimatedContent distance={50} direction="vertical" threshold={0.2}>
          <div className="h-full rounded-3xl border border-line bg-gradient-to-b from-surface to-panel p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-txt">Experience</h3>
              <span className="flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono-code text-[10.5px] uppercase tracking-wider text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {EXPERIENCE.status}
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-mute">
              My experience so far is built through hands-on learning — academic projects, AI/ML development,
              hackathon teams, and consistent technical experimentation.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {EXPERIENCE.items.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/40"
                >
                  <img src="https://img.icons8.com/color/24/checkmark.png" alt="" width={18} height={18} className="rounded" />
                  <span className="text-[13px] font-medium leading-snug text-txt/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-dashed border-line-strong bg-surface/40 p-5">
              <p className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.18em] text-dim">
                <img src="https://img.icons8.com/color/24/rocket.png" alt="" width={14} height={14} />
                Up Next
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{EXPERIENCE.placeholder}</p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </Section>
  )
}