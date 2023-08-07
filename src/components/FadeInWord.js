import React, { useEffect, useState } from "react"

function FadeIn({ delay = 50, transitionDuration = 400, children, className }) {
  const [maxIsVisible, setMaxIsVisible] = useState(0)

  useEffect(() => {
    const count = React.Children.count(children)
    const increment = count > maxIsVisible ? 1 : -1
    const timeout = setTimeout(() => {
      if (count == maxIsVisible) {
        return () => clearTimeout(timeout)
      }
      setMaxIsVisible(maxIsVisible + increment)
    }, delay)
    return () => clearTimeout(timeout)
  }, [children, delay, maxIsVisible])

  return (
    <span>
      {React.Children.map(children, (child, i) => {
        return (
          <span
            className={className}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: maxIsVisible > i ? "none" : "translateY(20px)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </span>
        )
      })}
    </span>
  )
}

export default function FadeInWord({ text, className, display, placeholderClassName }) {
  return (
    <>
      {display ? (
        <FadeIn className={className} placeholderClassName={placeholderClassName} display={display}>
          {text}
        </FadeIn>
      ) : (
        <div className={placeholderClassName} />
      )}
    </>
  )
}
