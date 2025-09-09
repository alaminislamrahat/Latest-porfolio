import { useRef } from "react"

const ContactSummery = () => {
  const containerRef = useRef(null)
  return (
    <section 
    ref={containerRef} 
    className="flex flex-col justify-between items-center min-h-screen gap-12 mt-16"></section>
  )
}

export default ContactSummery