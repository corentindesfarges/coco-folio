"use client"

import { useEffect, useState } from "react"

import FadeInSection from "@/components/FadeInSection"
import Logo from "@/components/Logo"
import GitHub from "@/components/svg/github"
import LinkSvg from "@/components/svg/link"
import { getProjects } from "@/services/api"

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then((pro) => setProjects(pro))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-2 lg:pt-0 lg:p-10 w-full">
      <div className="relative lg:fixed bg-blue-crackled border-0 p-10 z-10 w-full lg:max-w-4xl xl:max-w-6xl text-sm lg:flex items-center shadow-[0_4px_2px_-2px_rgba(0,0,0,0.05)]">
        <Logo />
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="lg:ml-10 text-3xl lg:text-5xl font-bold">{`Mes réalisations`}</h1>
        </div>
      </div>

      <div className="flex flex-col lg:grid grid-cols-2 mb-16 lg:pt-56 gap-5 lg:max-w-4xl xl:max-w-6xl px-1">
        {projects.map((projet, index) => (
          <FadeInSection key={index} className="flex flex-col rounded-xl bg-opacity-25 bg-black lg:pt-0 lg:p-x-0">
            <p className={`text-lg lg:text-3xl font-extrabold rounded-t-xl bg-opacity-25 bg-black p-5`}>
              {projet.title}
            </p>
            <div className="flex flex-col flex-1 justify-between mr-5 p-5 pb-0 pr-0">
              {projet.description &&
                projet.description.map((desc, index) => (
                  <p key={index} className="text-lg lg:text-xl font-extralight mb-2">
                    {desc}
                  </p>
                ))}

              <div className="flex justify-end">
                {projet.preview && (
                  <a href={projet.preview} target="_blank">
                    <div className="flex flex-row items-center">
                      <div className="w-12">
                        <LinkSvg />
                      </div>
                      <span>{projet.customPreviewText ?? `Accéder au site`}</span>
                    </div>
                  </a>
                )}
                {projet.github && (
                  <a href={projet.github} target="_blank">
                    <div className="flex flex-row items-center">
                      <div className="w-12">
                        <GitHub />
                      </div>
                      <span>{`Voir le code`}</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </main>
  )
}
