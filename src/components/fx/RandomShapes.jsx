import { useMemo } from 'react'

const SHAPES = ['circle', 'triangle', 'square', 'diamond', 'cross', 'ring']

const COLORS = ['#7d8cff', '#b78bff', '#5eead4', '#5a6cff', '#8b5cf6', '#4f8ef7']

const SHAPE_CSS = {
  circle: { borderRadius: '50%' },
  triangle: {
    borderRadius: 0,
    background: 'transparent',
    borderLeft: '18px solid transparent',
    borderRight: '18px solid transparent',
    borderBottom: '30px solid currentColor',
  },
  square: { borderRadius: 0 },
  diamond: { borderRadius: 0, transform: 'rotate(45deg)' },
  cross: { borderRadius: 0, clipPath: 'polygon(40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%, 0 40%, 40% 40%)' },
  ring: { borderRadius: '50%', background: 'transparent', border: '2px solid currentColor' },
}

const rand = (a, b) => a + Math.random() * (b - a)
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function RandomShapes({ count = 9, className = '', seed = 'default' }) {
  const shapes = useMemo(() => {
    // deterministic-ish but varied per mount
    const list = []
    for (let i = 0; i < count; i++) {
      const shape = pick(SHAPES)
      const size = rand(8, 22)
      const color = pick(COLORS)
      list.push({
        id: `${seed}-${i}`,
        shape,
        color,
        size,
        top: rand(0, 100),
        left: rand(0, 100),
        dur: rand(9, 18),
        pulse: rand(3, 7),
        opacity: rand(0.14, 0.4),
        css: SHAPE_CSS[shape],
      })
    }
    return list
  }, [count, seed])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {shapes.map((s) => (
        <span
          key={s.id}
          className="random-shape"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            color: s.color,
            opacity: s.opacity,
            ['--dur']: `${s.dur}s`,
            ['--pulse']: `${s.pulse}s`,
            ...s.css,
          }}
        />
      ))}
    </div>
  )
}