import { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Optimized Planet component
export function Planet(props) {
  const mainGroupRef = useRef(null)
  const ringRef = useRef(null)
  const { nodes, materials } = useGLTF('/models/Planet.glb')

  // GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(mainGroupRef.current.position, {
      y: 5,
      duration: 2,
      ease: 'circ.out',
    })
      .from(
        mainGroupRef.current.rotation,
        { x: 0, y: Math.PI, z: -Math.PI, duration: 5, ease: 'power1.inOut' },
        '-=50%'
      )
      .from(ringRef.current.rotation, {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 5,
        ease: 'power1.inOut',
      })
  }, [])

  return (
    <group ref={mainGroupRef} {...props} dispose={null}>
      {/* Main Sphere */}
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        rotation={[0, 0, 0.741]}
        castShadow={false} // shadows off for better performance
        receiveShadow={false}
      />

      {/* Small Sphere */}
      <mesh
        geometry={nodes.Sphere2.geometry}
        material={materials['Material.001']}
        position={[0.647, 1.03, -0.724]}
        rotation={[0, 0, 0.741]}
        scale={0.223}
        castShadow={false}
        receiveShadow={false}
      />

      {/* Ring */}
      <mesh
        ref={ringRef}
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
        castShadow={false}
        receiveShadow={false}
      />
    </group>
  )
}

// Preload GLB for faster first render
useGLTF.preload('/models/Planet.glb')
