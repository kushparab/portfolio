import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const DOTS = 12

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(() => {
    let cancelled = false
    const done = () => {
      if (cancelled) return
      if (rootRef.current) {
        animate(rootRef.current, {
          opacity: 0,
          duration: 600,
          easing: 'easeInQuad',
          complete: () => onComplete?.(),
        })
      }
    }

    animate(dotsRef.current, {
      opacity: [0, 1],
      delay: stagger(45, { from: 'center', grid: [DOTS, 3] }),
      duration: 800,
      easing: 'easeOutCubic',
    })

    animate('.preloader-pct', {
      innerHTML: [0, 100],
      round: 1,
      duration: 1900,
      delay: 300,
      easing: 'easeInOutQuart',
    })

    animate('.preloader-bar', {
      scaleX: [0, 1],
      duration: 2200,
      delay: 200,
      easing: 'easeInOutQuart',
    })

    const timer = setTimeout(done, 2400)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-white/5">
        <div
          className="preloader-bar h-full w-full origin-left bg-gradient-to-r from-accent via-violet to-teal"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="flex flex-col items-center gap-7 px-6">
        <div className="preloader-grid" style={{ gridTemplateColumns: `repeat(${DOTS}, 1fr)` }}>
          {Array.from({ length: DOTS * 3 }).map((_, i) => (
            <span
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              className="preloader-dot block h-[7px] w-[7px] rounded-full bg-accent"
              style={{ opacity: 0 }}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.32em] text-dim">
            Initializing Portfolio
          </p>
          <div className="mt-3 flex items-baseline justify-center gap-1 font-display text-5xl font-bold text-txt">
            <span className="preloader-pct">0</span>
            <span className="text-2xl text-accent">%</span>
          </div>
        </div>
      </div>
    </div>
  )
}