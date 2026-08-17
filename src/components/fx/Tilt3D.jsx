import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react'

export default function Tilt3D({
  children,
  max = 10,
  scale = 1.02,
  glare = true,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 160, damping: 22 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 160, damping: 22 })
  const s = useSpring(scale, { stiffness: 180, damping: 22 })
  const glareX = useSpring(useTransform(px, [0, 1], [0, 100]), { stiffness: 120, damping: 30 })
  const glareY = useSpring(useTransform(py, [0, 1], [0, 100]), { stiffness: 120, damping: 30 })

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, scale: s, transformStyle: 'preserve-3d' }}
      className={`[perspective:1000px] ${className}`}
      {...props}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 55%)`,
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
        />
      )}
    </motion.div>
  )
}