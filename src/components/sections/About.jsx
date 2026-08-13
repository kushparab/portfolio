import { AnimatedContent } from '../../components/reactbits'
import { INTERESTS, PERSONAL_INTERESTS } from '../../data/site'
import { Section, Chip } from './shared'

const SUMMARY =
  'Kush Parab is an aspiring AI/ML developer focused on building intelligent applications using Python, machine learning, deep learning, computer vision, and modern AI technologies. He combines software development with AI experimentation to create practical solutions for real-world problems.'

export default function About() {
  return (
    <Section
      id="about"
      num="02"
      kicker="Profile"
      title="About Me"
      desc="A quick look at who I am, what I work on, and where I'm headed."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 text-[15.5px] leading-relaxed text-mute">
          <AnimatedContent distance={40} direction="vertical">
            <p>
              <span className="font-display text-lg font-semibold text-txt">Hi, I'm Kush Parab</span> — a
              Computer Science student specializing in{' '}
              <span className="text-txt">Artificial Intelligence and Machine Learning</span>. I enjoy taking
              ideas and turning them into practical software and AI solutions — applications that actually do
              something useful instead of just demonstrating a concept.
            </p>
          </AnimatedContent>
          <AnimatedContent distance={40} direction="vertical" delay={0.05}>
            <p>
              My interests span{' '}
              <span className="text-txt">
                deep learning, computer vision, generative AI, large language models, and AI agents
              </span>
              , along with the data science and software engineering that make intelligent systems
              production-ready.
            </p>
          </AnimatedContent>
          <AnimatedContent distance={40} direction="vertical" delay={0.1}>
            <p>
              I spend my time building technical projects, experimenting with AI technologies, and taking part
              in hackathons. I'm also genuinely interested in where AI is going — and I hope to eventually
              pursue advanced AI research while continuing to ship real engineering work.
            </p>
          </AnimatedContent>
        </div>

        <div className="flex flex-col gap-6">
          <AnimatedContent distance={50} direction="vertical">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/10 via-panel to-teal/5 p-7">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
              <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">
                Professional Summary
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-txt/90">
                &ldquo;{SUMMARY}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-accent to-teal" />
                <span className="font-display text-sm font-semibold text-txt">Kush Parab</span>
                <span className="text-[12px] text-dim">— AI/ML Developer</span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="vertical" delay={0.06}>
            <div className="rounded-3xl border border-line bg-panel p-7">
              <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">
                What I'm Into
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {PERSONAL_INTERESTS.map((c) => (
                  <Chip key={c} name={c} />
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-line bg-panel/70 p-7">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-dim">
          Core Interests & Focus Areas
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {INTERESTS.map((i) => (
            <Chip key={i} name={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}