import { useState } from 'react'
import { FadeContent, AnimatedContent, Magnet } from '../../components/reactbits'
import { SITE } from '../../data/site'
import { Section } from './shared'
import { RandomShapes, DotMatrixBg } from '../fx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Section
      id="contact"
      num="08"
      kicker="Get In Touch"
      title="Let's Build Something Intelligent"
      desc="Have an interesting project, research idea, collaboration opportunity, or internship opportunity? I'd love to connect and explore what we can build together."
      center
      className="!pb-24"
      fx={
        <div className="absolute inset-0 opacity-50">
          <RandomShapes count={12} seed="contact" />
          <DotMatrixBg size={5} gap={46} color="rgba(125, 140, 255, 0.2)" speed={0.5} />
        </div>
      }
    >
      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-5">
        <AnimatedContent distance={40} direction="vertical" threshold={0.2} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-panel p-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">
              Direct Lines
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised">
                <img src="https://img.icons8.com/color/48/new-post.png" alt="" width={22} height={22} className="rounded" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] text-dim">Email</p>
                <p className="truncate text-[14px] font-medium text-txt">{SITE.email}</p>
              </div>
            </a>

            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised">
                <img src="https://img.icons8.com/color/48/github.png" alt="" width={22} height={22} className="rounded-[5px]" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] text-dim">GitHub</p>
                <p className="truncate text-[14px] font-medium text-txt">@your-github</p>
              </div>
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised">
                <img src="https://img.icons8.com/color/48/linkedin.png" alt="" width={22} height={22} className="rounded-[5px]" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] text-dim">LinkedIn</p>
                <p className="truncate text-[14px] font-medium text-txt">in/your-handle</p>
              </div>
            </a>

            <div className="mt-auto rounded-2xl border border-dashed border-line-strong bg-surface/30 p-4">
              <p className="font-mono-code text-[11px] leading-relaxed text-dim">
                // Placeholders — swap in real GitHub, LinkedIn & email URLs anytime.
              </p>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" threshold={0.2} delay={0.05} className="lg:col-span-3">
          <div className="h-full rounded-3xl border border-line bg-panel p-7 sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-14 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-teal/40 bg-teal/10">
                  <img src="https://img.icons8.com/color/32/checkmark.png" alt="" width={28} height={28} className="rounded" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-txt">Message received!</h3>
                <p className="mt-2 max-w-sm text-[14px] text-mute">
                  Thanks for reaching out. I'll get back to you soon. (This demo form doesn't send anything yet
                  — wire it to your email/backend when ready.)
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-line px-5 py-2 text-[13px] font-semibold text-txt transition-colors hover:bg-raised"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex h-full flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">Drop a message</p>
                  <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono-code text-[10.5px] text-dim">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> usually replies fast
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your name" className="field" />
                  <input required type="email" placeholder="Your email" className="field" />
                </div>
                <textarea required rows={5} placeholder="Tell me about the project, idea, or opportunity..." className="field resize-none" />
                <Magnet padding={50} magnetStrength={24}>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </Magnet>
              </form>
            )}
          </div>
        </AnimatedContent>
      </div>

      <FadeContent threshold={0.2} duration={700} delay={100}>
        <p className="mt-12 text-center font-mono-code text-[12.5px] text-dim">
          <span className="text-accent">//</span> Open to internships, hackathon teams, research projects & AI collaborations.
        </p>
      </FadeContent>
    </Section>
  )
}