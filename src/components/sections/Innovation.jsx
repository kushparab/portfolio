import { FadeContent, AnimatedContent, ShinyText } from '../../components/reactbits'
import { HACKATHON, DEFENCE } from '../../data/site'
import { Section } from './shared'
import { RandomShapes, DotMatrixBg } from '../fx'

function Radar() {
  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute rounded-full border border-accent/25"
          style={{ width: `${110 + i * 40}px`, height: `${110 + i * 40}px` }}
        />
      ))}
      <div className="spin-slow absolute inset-0 grid place-items-center" style={{ animationDuration: '6s' }}>
        <div className="h-3 w-3 rounded-full bg-teal" style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 12px 2px rgba(94,234,212,0.7)' }} />
      </div>
      <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-line-strong bg-raised">
        <img src={DEFENCE.icon} alt="" width={32} height={32} loading="lazy" />
      </div>
    </div>
  )
}

export default function Innovation() {
  return (
    <Section
      id="innovation"
      num="04"
      kicker="Innovation & Problem Solving"
      title="Building With Purpose"
      desc="Beyond courses — applying technology to real challenges through hackathons and hands-on concept work."
      fx={
        <div className="absolute inset-0 opacity-60">
          <RandomShapes count={10} seed="innovation" />
          <DotMatrixBg size={5} gap={44} color="rgba(94, 234, 212, 0.22)" speed={0.6} />
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* -------- hackathon -------- */}
        <FadeContent threshold={0.15} duration={750} className="lg:col-span-3">
          <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-line bg-gradient-to-b from-violet/10 via-panel to-panel p-7 sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/15 blur-[90px]" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line-strong bg-raised">
                  <img src={HACKATHON.icon} alt="" width={26} height={26} loading="lazy" />
                </div>
                <div>
                  <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-dim">
                    Hackathon
                  </p>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-txt">
                    <ShinyText text={HACKATHON.title} speed={3} className="font-display" color="#e8eaf2" shineColor="#b78bff" />
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-mute">
                {HACKATHON.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {HACKATHON.areas.map((a) => (
                  <div
                    key={a.name}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface/60 px-2 py-4 text-center transition-colors duration-200 hover:border-line-strong"
                  >
                    <img src={a.icon} alt="" width={24} height={24} className="rounded-[5px]" loading="lazy" />
                    <span className="text-[11.5px] font-medium leading-tight text-txt/85">{a.name}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 flex items-center gap-2 font-mono-code text-[11.5px] text-dim">
                <img src="https://img.icons8.com/color/16/about.png" alt="" width={13} height={13} className="rounded" />
                Participation in progress — no claims of wins or qualification yet.
              </p>
            </div>
          </div>
        </FadeContent>

        {/* -------- defence digital twin -------- */}
        <AnimatedContent threshold={0.15} duration={800} distance={40} className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-line-strong bg-ink p-7 sm:p-9">
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/70 to-transparent" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono-code text-[10.5px] uppercase tracking-wider text-teal">
                  Innovation Concept
                </span>
                <span className="rounded-full border border-line px-3 py-1 font-mono-code text-[10.5px] uppercase tracking-wider text-dim">
                  v0.1 — ideation
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-txt">
                {DEFENCE.title}
              </h3>

              <Radar />

              <p className="text-[14px] leading-relaxed text-mute">{DEFENCE.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {DEFENCE.concepts.map((c) => (
                  <span
                    key={c.name}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-surface/70 px-2.5 py-1 font-mono-code text-[11px] text-txt/80"
                  >
                    <img src={c.icon} alt="" width={13} height={13} className="rounded-[3px]" loading="lazy" />
                    {c.name}
                  </span>
                ))}
              </div>

              <details className="group mt-6 cursor-pointer">
                <summary className="flex items-center justify-between rounded-xl border border-line bg-surface/60 px-4 py-3 text-[13px] font-semibold text-txt transition-colors hover:border-line-strong">
                  <span className="font-mono-code text-[11.5px] uppercase tracking-wider text-dim">The idea in short</span>
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 rounded-xl bg-surface/40 p-4 text-[13.5px] leading-relaxed text-mute">
                  A digital twin mirrors a physical defence asset in real time. Feed it sensor data, run AI
                  models for prediction and anomaly detection, and you get a simulation environment that
                  supports planning, training, and data-driven decisions without touching the real system.
                </p>
              </details>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 font-mono-code text-[11px] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Note: {DEFENCE.note}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </Section>
  )
}