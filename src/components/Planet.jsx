import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function Planet(props) {
    const shapContainer = useRef(null)
    const sphereContainer = useRef(null)
    const ringContainer = useRef(null)
    const { nodes, materials } = useGLTF('/models/Planet.glb')

    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(shapContainer.current.position,{
            y: 5,
            duration: 3,
            ease: "circ.out"
        }).from(shapContainer.current.rotation,{
            x: 0,
            y: Math.PI,
            z: -Math.PI,
            duration: 10,
            ease: "power1.inOut",
        }, "-=25%").from(ringContainer.current.rotation,{
            x: 0.8,
            y: 0,
            z: 0,
            duration: 10,
            ease: "power1.inOut"
        },"<")
    },[])
    return (
        <group
            ref={shapContainer}
            {...props} dispose={null}>
            <group ref={sphereContainer}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials['Material.002']}
                    rotation={[0, 0, 0.741]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere2.geometry}
                    material={materials['Material.001']}
                    position={[0.647, 1.03, -0.724]}
                    rotation={[0, 0, 0.741]}
                    scale={0.223}
                />
            </group>
            <mesh
            ref={ringContainer}
                castShadow
                receiveShadow
                geometry={nodes.Ring.geometry}
                material={materials['Material.001']}
                rotation={[-0.124, 0.123, -0.778]}
                scale={2}
            />

        </group>
    )
}

useGLTF.preload('/models/Planet.glb')
