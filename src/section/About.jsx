import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedLines from "../components/AnimatedLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);

  const text = `Passionate about clean architecture
I build scalable, high-performance solutions from prototype to production`;

  const aboutText = `I’m a 💻 MERN stack developer with a 🎯 frontend focus—I love crafting sleek, fast, and responsive UIs that feel as good as they look. ⚛️ React and ✨ Next.js are my playgrounds, and I’m all about turning complex ideas into smooth user experiences.

I also work across the stack with 🟢 Node.js, 🚀 Express, and 🍃 MongoDB to keep apps running clean under the hood. But my real passion is the frontend—the part users actually feel.

When I’m not coding, I’m probably 🛠 experimenting with new tools, 📚 leveling up my skills, or 💡 brainstorming the next project to build.`;

useGSAP(()=>{
  gsap.to("#about",{
    scale: 0.95,
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 80%",
      end: "bottom 20%",
      scrub: true,
    },
    ease: "power1.inOut"
  })


  gsap.set(imgRef.current,{
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
  })
  gsap.to(imgRef.current,{
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 2,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: imgRef.current,
    }
  })
},[])
  return (
    <section
      id="about"
      className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Build to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col justify-between items-center gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          className="w-md rounded-3xl"
          src="/images/porfolio old.jpeg"
          alt="" />
          <AnimatedLines text={aboutText} className={"w-full"}/>
      </div>
    </section>
  )
}

export default About