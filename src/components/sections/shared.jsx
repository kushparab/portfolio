import { FadeContent, GradientText } from '../../components/reactbits'

export const I8 = ({ name, size = 48, className = '', alt = '', style }) => (
  <img
    src={`https://img.icons8.com/color/${size}/${name}.png`}
    alt={alt || name}
    className={className}
    style={style}
    loading="lazy"
  />
)

export function Section({
  id,
  num,
  kicker,
  title,
  titleAs: TitleTag = 'h2',
  desc,
  children,
  className = '',
  center = false,
}) {
  return (
    <section id={id} className={`section-pad relative ${className}`}>
      <div className="wrap">
        <div className={center ? 'text-center flex flex-col items-center' : ''}>
          <FadeContent threshold={0.15} duration={700}>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-violet" />
              {num && <span className="text-accent">{num}</span>}
              {kicker}
              {center && <span className="h-px w-8 bg-gradient-to-r from-violet to-teal" />}
            </p>
          </FadeContent>

          <FadeContent threshold={0.15} duration={800} delay={80}>
            <div className={center ? 'flex justify-center' : ''}>
              <TitleTag className="font-display mt-4 text-3xl font-bold text-txt sm:text-4xl md:text-5xl leading-[1.06]">
                <GradientText animationSpeed={6} yoyo colors={['#cfe2ff', '#8fb0ff', '#b78bff', '#5eead4']}>
                  {title}
                </GradientText>
              </TitleTag>
            </div>
          </FadeContent>

          {desc && (
            <FadeContent threshold={0.15} duration={800} delay={120}>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-mute">{desc}</p>
            </FadeContent>
          )}
        </div>

        <div className="relative z-10 mt-14">{children}</div>
      </div>
    </section>
  )
}

export const Chip = ({ name, icon }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-txt/90 transition-colors duration-200 hover:border-line-strong hover:bg-raised">
    {icon && <img src={icon} alt="" width={16} height={16} className="shrink-0" loading="lazy" />}
    {name}
  </span>
)