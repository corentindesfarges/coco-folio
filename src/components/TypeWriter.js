import React, { useEffect, useState } from "react"

import "./TypeWriter.css"

const defaultSpeed = 50

export default function Typewriter({
  prefix = "",
  suffix = "",
  text,
  onFinished = () => {},
  start = false,
  className = "",
}) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  if (!Array.isArray(text)) text = [text]

  useEffect(() => {
    if (start) {
      const timeout = setTimeout(
        () => {
          if (currentTextIndex < text[currentStringIndex].length) {
            setCurrentTextIndex(currentTextIndex + 1)
          } else {
            if (currentStringIndex < text.length - 1) {
              setTimeout(() => {
                setCurrentTextIndex(0)
                setCurrentStringIndex(currentStringIndex + 1)
              }, defaultSpeed)
            } else {
              onFinished()
            }
          }
        },
        defaultSpeed + Math.random() * defaultSpeed
      )
      return () => clearTimeout(timeout)
    }
  }, [currentStringIndex, currentTextIndex, onFinished, start, text])

  return (
    <div className={className}>
      {prefix} {text[currentStringIndex].substring(0, currentTextIndex)}
      <span className={"cursor"}>{suffix}</span>
    </div>
  )
}
