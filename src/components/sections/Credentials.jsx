import { FadeContent } from '../../components/reactbits'
import { ACHIEVEMENT_CATEGORIES } from '../../data/site'
import { Section } from './shared'
import { DotMatrixBg } from '../fx'

export default function Credentials() {
  return (
    <Section
      id="credentials"
      num="07"
      kicker="Proof of Work"
      title="Certifications & Achievements"
      desc="Verified milestones only — details will be added here as credentials and results come through."
      fx={
        <div className="absolute inset-0 opacity-40">
          <DotMatrixBg size={6} gap={42} color="rgba(94, 234, 212, 0.28)" speed={0.6} />
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* ---------- certifications ---------- */}
        <div className="rounded-3xl border border-line bg-panel p-7">
          <div className="flex items-center gap-3">
            <img src="https://img.icons8.com/color/48/certificate.png" alt="" width={34} height={34} className="rounded-lg" />
            <div>
              <h3 className="font-display text-lg font-semibold text-txt">Certifications</h3>
              <p className="text-[12.5px] text-dim">Courses and credentials I've completed.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex min-h-[150px] flex-col rounded-2xl border border-dashed border-line-strong bg-surface/40 p-5"
              >
                <img src="https://img.icons8.com/color/48/lock.png" alt="" width={22} height={22} className="rounded opacity-60" />
                <p className="mt-auto pt-4 font-display text-[15px] font-semibold text-txt/70">
                  Certification Slot {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-1 font-mono-code text-[11px] text-dim">
                  Organization · Date · Credential ID
                </p>
                <button className="mt-3 self-start rounded-lg border border-line px-3 py-1.5 text-[11.5px] font-semibold text-dim transition-colors hover:border-line-strong hover:text-txt">
                  View Credential
                </button>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-xl border border-dashed border-line-strong bg-surface/30 px-4 py-3 font-mono-code text-[11.5px] text-dim">
            // Placeholders — will be replaced with verified credentials only.
          </p>
        </div>

        {/* ---------- achievements ---------- */}
        <div className="rounded-3xl border border-line bg-panel p-7">
          <div className="flex items-center gap-3">
            <img src="https://img.icons8.com/color/48/trophy.png" alt="" width={34} height={34} className="rounded-lg" />
            <div>
              <h3 className="font-display text-lg font-semibold text-txt">Achievements</h3>
              <p className="text-[12.5px] text-dim">Recognitions, wins, and milestones worth sharing.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ACHIEVEMENT_CATEGORIES.map((cat, i) => (
              <div
                key={cat}
                className="group flex min-h-[112px] flex-col justify-between rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/40"
              >
                <span className="font-display text-2xl font-bold text-white/5 transition-colors group-hover:text-white/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[14px] font-semibold leading-snug text-txt/85">{cat}</p>
                <p className="font-mono-code text-[10.5px] uppercase tracking-wider text-dim">pending</p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-xl border border-dashed border-line-strong bg-surface/30 px-4 py-3 font-mono-code text-[11.5px] text-dim">
            // No unverified wins — this list grows only with real results.
          </p>
        </div>
      </div>
    </Section>
  )
}