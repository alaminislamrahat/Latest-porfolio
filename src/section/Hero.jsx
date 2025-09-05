import { useRef } from "react"
import AnimatedLines from "../components/AnimatedLines"

const Hero = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
   const aboutText = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs`;
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
        </section>
    )
}

export default Hero