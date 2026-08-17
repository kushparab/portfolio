import { useEffect, useRef } from 'react'

export default function DotMatrixBg({
  size = 14,
  gap = 26,
  color = 'rgba(125, 140, 255, 0.5)',
  speed = 1,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const cols = Math.ceil(w / gap) + 1
    const rows = Math.ceil(h / gap) + 1

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const time = (t / 1000) * speed
      const offsetX = ((w / 2) % gap)
      const offsetY = ((h / 2) % gap)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap + offsetX
          const y = r * gap + offsetY

          const dist = Math.hypot(x - w / 2, y - h / 2)
          const pulse =
            0.5 +
            0.5 * Math.sin(time * 1.5 - dist * 0.02 + (c + r) * 0.28)
          const ring = Math.sin(time * 0.8 - dist * 0.05) > 0.5 ? 0.35 : 0

          const alpha = 0.05 + pulse * 0.3 + ring
          const rad = size * 0.5 * (0.5 + pulse * 0.9)

          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.4, rad), 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.globalAlpha = Math.min(1, alpha)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [size, gap, color, speed])

  return <canvas ref={ref} className={`dot-matrix-canvas ${className}`} />
}