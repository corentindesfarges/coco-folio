"use client"

import { useEffect, useState } from "react"

import FadeInSection from "@/components/FadeInSection"
import Logo from "@/components/Logo"
import { getExperiences } from "@/services/api"

export default function Parcours() {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    getExperiences().then((xps) => setExperiences(xps))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:pt-0 lg:p-10">
      <div className="relative lg:fixed bg-blue-crackled border-0 p-4 lg:p-10 z-10 w-full lg:max-w-4xl text-sm lg:flex items-center shadow-[0_4px_2px_-2px_rgba(0,0,0,0.05)]">
        <Logo />
        <div className="flex flex-col text-center lg:text-left m-4">
          <h1 className="lg:ml-10 text-3xl lg:text-5xl font-bold">{`Mon parcours`}</h1>
          <h1 className="lg:ml-10 text-2xl lg:text-5xl font-extralight">{`De la France au Québec !`}</h1>
        </div>
      </div>

      <div className="mb-16 lg:pt-56">
        {experiences.map((xp, index) => (
          <FadeInSection key={index}>
            <div className="lg:w-[800px] rounded-xl bg-opacity-25 bg-black p-5 lg:p-10 lg:pt-5 m-5 ">
              <p className="lg:text-xl font-light italic text-right">{xp.date}</p>
              <p className={`text-lg lg:text-3xl font-extrabold ${xp.description ? "mb-2" : ""}`}>{xp.title}</p>
              {xp.description &&
                xp.description.map((desc, index) => (
                  <p key={index} className="text-lg lg:text-2xl font-extralight mb-2">
                    {desc}
                  </p>
                ))}
              {xp.highlight && <p className="text-lg lg:text-2xl font-semibold mt-2">{xp.highlight}</p>}
            </div>
          </FadeInSection>
        ))}
      </div>
    </main>
  )
}
