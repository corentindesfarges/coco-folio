import { useEffect, useRef, useState } from "react"

import "./FadeInSection.css"

export default function FadeInSection({ children, className = "" }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`fade-in-section ${isVisible ? "visible" : ""} ${className}`} ref={domRef}>
      {children}
    </div>
  )
}
