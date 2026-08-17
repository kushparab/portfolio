export default function ShapeMorph({ className = '' }) {
  const blobs = [
    {
      w: 340,
      h: 340,
      top: '-12%',
      left: '-8%',
      bg: 'linear-gradient(135deg, #5a6cff, #b78bff)',
      opacity: 0.16,
      duration: '16s',
      delay: '0s',
    },
    {
      w: 280,
      h: 280,
      top: '40%',
      right: '-6%',
      bg: 'linear-gradient(135deg, #5eead4, #3b82f6)',
      opacity: 0.13,
      duration: '19s',
      delay: '-5s',
    },
    {
      w: 220,
      h: 220,
      bottom: '-6%',
      left: '28%',
      bg: 'linear-gradient(135deg, #b78bff, #5a6cff)',
      opacity: 0.12,
      duration: '22s',
      delay: '-9s',
    },
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {blobs.map((b, i) => (
        <span
          key={i}
          className="blob-shape"
          style={{
            width: b.w,
            height: b.h,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            background: b.bg,
            opacity: b.opacity,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  )
}