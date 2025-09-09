
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Contact = () => {

  const text = ` Got a question, how or project Idea?
WE O love to hear from you and discus further!;`

  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code It"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>
                Email
              </h2>
              <div className="w-full h-px my-2 bg-white/30"/>
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">alaminislamrahat@gmail.com</p>
            </div>
            <div className="social-link">
              <h2>
                Phone
              </h2>
              <div className="w-full h-px my-2 bg-white/30"/>
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">01575231473</p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact