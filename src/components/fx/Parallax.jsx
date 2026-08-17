import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

export default function Parallax({
  children,
  offset = 40,
  className = '',
  reverse = false,
  ...props
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [reverse ? offset : -offset, reverse ? -offset : offset]), {
    stiffness: 120,
    damping: 26,
    mass: 0.5,
  })

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...props}>
      {children}
    </motion.div>
  )
}