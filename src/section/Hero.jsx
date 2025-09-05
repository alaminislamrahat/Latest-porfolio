import { useRef } from "react"
import AnimatedLines from "../components/AnimatedLines"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { AmbientLight } from "three";
import { Environment, Float, Lightformer } from "@react-three/drei";

const Hero = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs`;

    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(contextRef.current,{
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        }).from(headerRef.current,{
            opacity: 0,
            y: 200,
            duration: 1,
            ease: "circ.out"
        },"<+0.2")
    },[])
    return (
        <section id="home" className="flex flex-col justify-end min-h-screen">
            <div ref={contextRef}>
                <div style={{ clipPath: " polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
                    <div ref={headerRef} className="flex flex-col gap-12 pt-16 justify-center sm:gap-16">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">404 no Bugs Found</p>
                        <div className="px-10">
                            <h1 className="flex flex-col flex-wrap text-black gap-12 uppercase banner-text-responsive sm:gap-16 md:block">Md. Al-Amin Islam Rahat</h1>
                        </div>
                    </div>
                </div>

                <div className="relative px-10 text-black">
                    <div className="absolute inset-x-0 border-t-2" />
                    <div className="py-12 sm:py-16 text-end">
                        <AnimatedLines text={aboutText} className="font-light uppercase value-text-responsive"></AnimatedLines>
                    </div>
                </div>
            </div>
            <figure
            style={{height: "100vh", width : "100vh"}}
            className="absolute left-[50vh] -z-50 inset-0">
                <Canvas shadows camera={{position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}>
                    <ambientLight intensity={0.5}/>
                    <Float speed={0.5}>
                         <Planet/>
                    </Float>
                   
                    <Environment resolution={256}>
                        <group rotation={[-Math.PI/3, 4, 1]}>
                            <Lightformer form={"circle"} intensity={2} position={[0, 5, -9]} scale={10}/>
                            <Lightformer form={"circle"} intensity={2} position={[0, 3, 1]} scale={10}/>
                            <Lightformer form={"circle"} intensity={2} position={[-5, -1, -1]} scale={10}/>
                            <Lightformer form={"circle"} intensity={2} position={[10, 1, 0]} scale={16}/>
                        </group>
                    </Environment>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero