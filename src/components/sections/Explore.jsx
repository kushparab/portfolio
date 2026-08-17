import { FadeContent, Magnet, StarBorder } from '../../components/reactbits'
import { SITE } from '../../data/site'
import { Parallax, ShapeMorph } from '../fx'

export default function Explore() {
  return (
    <section id="code" className="section-pad relative">
      <div className="wrap">
        <Parallax offset={30}>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-br from-accent/12 via-panel to-teal/8 p-8 sm:p-12">
            <div className="absolute inset-0 dot-grid opacity-20" />
            <ShapeMorph className="opacity-60" />
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-[100px]" />

          <div className="relative">
            <FadeContent threshold={0.2} duration={700}>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-accent to-violet" />
                Github / Open Source
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-txt sm:text-4xl md:text-5xl">
                Explore My <span className="grad-text">Code</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-mute">
                Explore my projects, experiments, and technical work on GitHub.
              </p>
            </FadeContent>

            <FadeContent threshold={0.2} duration={700} delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnet padding={50} magnetStrength={26}>
                  <StarBorder as="span" color="#8b8cff" speed="5s" className="!bg-transparent">
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 px-5"
                    >
                      <img src="https://img.icons8.com/color/28/github.png" alt="" width={20} height={20} className="rounded-[4px]" />
                      GitHub Profile
                      <span className="font-mono-code text-[11px] text-dim">@placeholder</span>
                    </a>
                  </StarBorder>
                </Magnet>
                <Magnet padding={50} magnetStrength={26}>
                  <a href="#projects" className="btn btn-ghost">
                    View Projects
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Magnet>
              </div>
            </FadeContent>
          </div>

          <div className="relative mt-10 flex flex-col gap-5 rounded-3xl border border-line bg-ink/60 p-7 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-txt">
                Want to know more about my journey?
              </h3>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-mute">
                Explore my resume to learn more about my education, technical skills, projects, hackathons, and
                career interests.
              </p>
            </div>
            <Magnet padding={50} magnetStrength={24}>
              <a href={SITE.resume} download target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </Magnet>
          </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}