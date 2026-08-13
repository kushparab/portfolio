import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Aurora, BlurText, Magnet, CountUp, DecryptedText } from './reactbits'
import { SITE, STATS, MARQUEE_ITEMS } from '../data/site'

const ROLES = ['AI/ML Developer', 'Computer Science Student', 'Future AI Researcher']

function ProfileCard({ children }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 160, damping: 20 })
  const ry = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 160, damping: 20 })

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect()
        px.set((e.clientX - rect.left) / rect.width)
        py.set((e.clientY - rect.top) / rect.height)
      }}
      onMouseLeave={() => {
        px.set(0.5)
        py.set(0.5)
      }}
      className="[perspective:1000px]"
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={['#1a2b5e', '#4c2f8f', '#0a3f46']}
          amplitude={1.1}
          blend={0.45}
          speed={0.6}
          className="aurora-wrap"
        />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet/15 blur-[150px]" />
      </div>

      <div className="wrap grid min-h-screen items-center gap-16 pt-28 pb-20 lg:grid-cols-12 lg:pt-32">
        {/* ------------- left ------------- */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 font-mono-code text-[13px] tracking-wide text-dim">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="ping-slow absolute inline-flex h-2 w-2 rounded-full bg-teal" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Open to AI/ML roles
            </span>
          </div>

          <BlurText
            text={SITE.name}
            delay={40}
            animateBy="chars"
            direction="top"
            threshold={0}
            className="mt-7 font-display text-[clamp(3.2rem,9vw,6.4rem)] font-bold leading-[0.98] tracking-tight text-txt"
            easing="easeOut"
            stepDuration={0.14}
          />

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {ROLES.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                <span className="font-display text-lg font-medium text-txt/90 sm:text-xl">{r}</span>
                {i < ROLES.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-teal sm:block" />
                )}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-mute">{SITE.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnet padding={60} magnetStrength={26}>
              <a href="#projects" className="btn btn-primary">
                View Projects
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={26}>
              <a href={SITE.resume} download target="_blank" rel="noreferrer" className="btn btn-ghost">
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={26}>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </Magnet>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-4 divide-x divide-line rounded-2xl border border-line bg-panel/80 backdrop-blur">
            {STATS.map((s) => (
              <div key={s.label} className="px-3 py-4 text-center">
                <div className="font-display text-2xl font-bold text-txt">
                  <CountUp to={s.value} duration={2} separator="" />
                  {s.suffix}
                </div>
                <div className="mt-1 text-[10.5px] font-medium uppercase tracking-wider text-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------- right ------------- */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/15 via-violet/10 to-teal/10 blur-2xl" />

            <ProfileCard>
              <div className="relative w-full select-none overflow-hidden rounded-[1.6rem] border border-line-strong bg-panel/90 backdrop-blur-xl glow-ring">
                <div className="p-7 pb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono-code text-[11px] tracking-wider text-dim">
                      neural-portrait v2.4
                    </span>
                  </div>

                  <div className="relative mt-6 grid place-items-center">
                    <div className="spin-slow absolute h-44 w-44 rounded-full border border-dashed border-line-strong" />
                    <div className="spin-slow absolute h-56 w-56 rounded-full border border-dashed border-line opacity-50" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
                    <div className="relative grid h-32 w-32 place-items-center">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-violet to-teal opacity-90" />
                      <span className="absolute inset-[3px] rounded-full bg-ink" />
                      <span className="relative font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-teal">
                        {SITE.initials}
                      </span>
                    </div>

                    <div className="floaty absolute -left-2 top-2 grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised/90">
                      <img src="https://img.icons8.com/color/48/python.png" alt="Python" width={26} height={26} />
                    </div>
                    <div className="floaty absolute -right-2 top-10 grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised/90" style={{ animationDelay: '-2s' }}>
                      <img src="https://img.icons8.com/color/48/tensorflow.png" alt="TensorFlow" width={26} height={26} />
                    </div>
                    <div className="floaty absolute -bottom-2 left-6 grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised/90" style={{ animationDelay: '-4s' }}>
                      <img src="https://img.icons8.com/color/48/opencv.png" alt="OpenCV" width={26} height={26} />
                    </div>
                    <div className="floaty absolute -bottom-3 right-8 grid h-11 w-11 place-items-center rounded-xl border border-line bg-raised/90" style={{ animationDelay: '-1.2s' }}>
                      <img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="AI" width={26} height={26} />
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-line bg-surface/70 p-4 font-mono-code text-[12.5px] leading-relaxed text-mute">
                    <p className="flex gap-2 text-dim">
                      <span className="text-violet">➜</span>
                      <span>
                        <DecryptedText
                          text="whoami —kush"
                          animateOn="view"
                          sequential
                          revealDirection="start"
                          speed={35}
                          className="text-teal"
                        />
                      </span>
                    </p>
                    <p className="mt-1.5 flex gap-2">
                      <span className="text-violet">➜</span>
                      <span>role: <span className="text-txt">aspiring_ai_ml_engineer</span></span>
                    </p>
                    <p className="mt-1.5 flex gap-2">
                      <span className="text-violet">➜</span>
                      <span>
                        build&#40;&#41; → <span className="text-accent">intelligent_systems</span>
                        <span className="blink text-teal">▌</span>
                      </span>
                    </p>
                  </div>
                </div>

                <span className="scan-line" />
              </div>
            </ProfileCard>

            <div className="absolute -left-10 bottom-16 hidden rounded-xl border border-line bg-raised/95 px-4 py-3 shadow-xl sm:block">
              <p className="font-mono-code text-[10px] uppercase tracking-wider text-dim">Focus</p>
              <p className="mt-1 font-display text-[13px] font-semibold text-txt">ML · CV · GenAI</p>
            </div>
            <div className="absolute -right-6 top-8 hidden rounded-xl border border-line bg-raised/95 px-4 py-3 shadow-xl sm:block">
              <p className="font-mono-code text-[10px] uppercase tracking-wider text-dim">Status</p>
              <p className="mt-1 flex items-center gap-1.5 font-display text-[13px] font-semibold text-txt">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------- keyword marquee ------------- */}
      <div className="relative border-y border-line bg-panel/60 py-4 backdrop-blur">
        <div className="marquee-wrap flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display text-[15px] font-medium tracking-wide text-mute/80 whitespace-nowrap">
                  {item}
                </span>
                <span className="text-accent/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}