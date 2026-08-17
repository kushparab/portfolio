import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect } from 'react'

export default function EntranceReveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  blur = true,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function useScrollVelocity() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const prev = useRef(0)
  const velocity = useSpring(0, { stiffness: 160, damping: 30 })

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => {
      const v = y - prev.current
      prev.current = y
      velocity.set(v)
    })
    return unsub
  }, [scrollY, velocity])

  return { ref, velocity }
}

export function ScrollTilt({ children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [10, -10]), { stiffness: 140, damping: 26 })

  return (
    <motion.div ref={ref} style={{ rotateX, transformPerspective: 1000 }} className={className}>
      {children}
    </motion.div>
  )
}