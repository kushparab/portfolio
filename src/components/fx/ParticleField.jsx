import { useEffect, useRef } from 'react'
import { Renderer, Camera, Transform, Geometry, Program, Mesh } from 'ogl'

const VERT = `
attribute vec3 position;
attribute vec4 random;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
varying vec4 vRandom;
void main() {
  vRandom = random;
  vec3 pos = position;
  float t = uTime * 0.4;
  pos.x += sin(pos.y * 1.8 + t + random.w * 6.2831) * 0.09;
  pos.y += cos(pos.x * 1.8 + t * 0.8 + random.z * 6.2831) * 0.09;
  pos.z += sin(pos.x * 1.2 + t * 0.6) * 0.07;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (5.0 + 14.0 * random.w) / -gl_Position.z;
}
`

const FRAG = `
precision highp float;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec4 vRandom;
void main() {
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  float r = dot(cxy, cxy);
  if (r > 1.0) discard;
  float a = (1.0 - r) * (0.55 + vRandom.w * 0.45);
  vec3 color = mix(uColorA, uColorB, vRandom.z);
  color = mix(color, uColorC, vRandom.y * 0.5);
  gl_FragColor = vec4(color, a);
}
`

export default function ParticleField({
  count = 1300,
  radius = 2.6,
  colorA = '#7d8cff',
  colorB = '#b78bff',
  colorC = '#5eead4',
  className = '',
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const renderer = new Renderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' })
    const gl = renderer.gl

    const camera = new Camera(gl, { fov: 50 })
    camera.position.z = 4.2

    const positions = new Float32Array(count * 3)
    const random = new Float32Array(count * 4)

    for (let i = 0; i < count; i++) {
      // fibonacci sphere for even distribution
      const phi = Math.acos(1 - 2 * ((i + 0.5) / count))
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = radius * Math.cbrt(Math.random() * 0.9 + 0.1)

      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      random[i * 4 + 0] = Math.random()
      random[i * 4 + 1] = Math.random()
      random[i * 4 + 2] = Math.random()
      random[i * 4 + 3] = Math.random()
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: random },
    })

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: [0.49, 0.55, 1] },
        uColorB: { value: [0.72, 0.55, 1] },
        uColorC: { value: [0.37, 0.92, 0.83] },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: gl.ADDITIVE,
    })

    const mesh = new Mesh(gl, { geometry, program })
    const scene = new Transform()

    let width = 0
    let height = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      renderer.setSize(width, height)
      camera.perspective({ aspect: width / height })
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let raf
    const clock = performance.now()

    const loop = (t) => {
      const uTime = (t - clock) / 1000
      program.uniforms.uTime.value = uTime
      mesh.rotation.x = uTime * 0.03
      mesh.rotation.y = uTime * 0.05
      mesh.position.z = Math.sin(uTime * 0.12) * 0.25
      renderer.render({ scene, camera })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      geometry.dispose()
      program.dispose()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, radius])

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      {...props}
    />
  )
}