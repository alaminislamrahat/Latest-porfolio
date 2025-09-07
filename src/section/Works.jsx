import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { projects } from "../constants"
const Works = () => {

  const text = `Featured projects that have been meticulously
crafted with passion to drive
results and impact.`
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light"></div>
    </section>
  )
}

export default Works