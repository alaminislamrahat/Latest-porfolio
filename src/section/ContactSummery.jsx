import { useRef } from "react"
import Marquee from "../components/Marquee"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummery = () => {
  const containerRef = useRef(null);
  const items = ["Innovation", "Precision", "Trust", "Collaboration", "Exellece"];
  const items2 = ["contact Us", "contact Us", "contact Us", "contact Us", "contact Us", "contact Us",];

  useGSAP(()=>{
    gsap.to(containerRef.current,{
      scrollTrigger:{
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })
  },[])

  return (
    <section
      ref={containerRef}
      className="flex flex-col justify-between items-center min-h-screen gap-12 mt-16">
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>" Let's build a <br />
          <span className="font-normal">memorable</span> & {" "} <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> "
        </p>
      </div>

      <Marquee
        reverse={true}
        className="bg-transparent text-black border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
        items={items2} />

    </section>
  )
}

export default ContactSummery