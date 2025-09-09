import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const VideoPinSection = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-pin",
                start: "top top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
                markers: true,
            }
        })
        tl.to(".video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut",

        })
    })
    return (
        <section className="min-h-screen overflow-hidden md:!-translate-y-[15%] md:mt-0 mt-20 video-pin">
            <div
                className="video-box size-full"
                style={{
                    clipPath: "circle(10% at 50% 50%)"
                }}

            >
                <video className=" w-full h-full object-cover " src="/video/my video portfolio.mp4" muted autoPlay playsInline loop></video>

                <div className="scale-200 md:scale-100   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img
                        style={{ animation: 'spin 4s linear infinite' }}
                        className=' w-full h-full' src="/images/circle-text.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default VideoPinSection