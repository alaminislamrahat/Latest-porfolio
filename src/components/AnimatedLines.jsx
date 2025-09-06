import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const AnimatedLines = ({text, className}) => {
    // console.log(text)
    const containerRef = useRef(null);
    const lineRef = useRef([])
    const lines = text?.split("\n")?.filter(line => line?.trim() !== "")

    useGSAP(()=>{
        if(lineRef.current.length > 0){
            gsap.from(lineRef.current,{
                y: 100,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current
                }
            })
        }
    })
  return (
    <div ref={containerRef} className={className}>
        {lines?.map((line, index) => (
            <span
            key={index}
            ref={(el)=> (lineRef.current[index] = el)}
            className="block leading-relaxed tracking-wide text-pretty">
                {line}
            </span>
        ))}
    </div>
  )
}

export default AnimatedLines