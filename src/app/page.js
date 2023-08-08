"use client"

import { useEffect, useState } from "react"

import FadeInSection from "@/components/FadeInSection"
import FadeInWord from "@/components/FadeInWord"
import Logo from "@/components/Logo"
import TextSwap from "@/components/TextSwap"
import TypeWriter from "@/components/TypeWriter"
import SocialNavItem from "@/components/nav/SocialNavItem"
import GitHub from "@/components/svg/github"
import LinkedIn from "@/components/svg/linkedin"
import { getIntroductions } from "@/services/api"

export default function Home() {
  const [introductions, setIntroductions] = useState([])

  useEffect(() => {
    getIntroductions().then((intro) => setIntroductions(intro))
  }, [])

  const [displayFirstKeyword, showFirstKeyword] = useState(false)
  const [displaySecondKeyword, showSecondKeyword] = useState(false)
  const [displayThirdKeyword, showThirdKeyword] = useState(false)
  return (
    <main className="flex flex-col items-center justify-between p-4 lg:p-10">
      <div className="z-10 w-full max-w-5xl text-sm lg:flex items-center">
        <Logo large={true} />
        <div className="flex flex-col lg:ml-16 mt-5 lg:mt-20">
          <TypeWriter
            className="font-bold text-3xl lg:text-4xl text-center lg:text-left"
            start={true}
            prefix={">"}
            suffix={"_"}
            text={"Corentin Desfarges"}
            onFinished={() => {
              setTimeout(() => showFirstKeyword(true), 500)
              setTimeout(() => showSecondKeyword(true), 1500)
              setTimeout(() => showThirdKeyword(true), 2500)
            }}
          />
          <div className="flex flex-col lg:flex-row text-2xl lg:text-4xl">
            <div className="">
              <TextSwap prefix={"Développeur"} words={["web", "mobile", "node.js"]} />
            </div>
            <div className="flex-col flex items-center lg:items-start mt-4 lg:mt-0 mb-5 lg:mb-0">
              <FadeInWord
                text={"🔥 passionné"}
                className="w-40 lg:w-auto lg:ml-4 block font-semibold text-amber-400"
                placeholderClassName={"h-[32px] lg:h-[40px]"}
                display={displayFirstKeyword}
              />
              <FadeInWord
                text={"💡 créatif"}
                className="w-40 lg:w-auto lg:ml-20 block animated-text creative"
                placeholderClassName={"h-[32px] lg:h-[40px]"}
                display={displaySecondKeyword}
              />
              <FadeInWord
                text={"⚡ impactant"}
                className="w-40 lg:w-auto lg:ml-28 block animated-text impacting"
                placeholderClassName={"h-[32px] lg:h-[40px]"}
                display={displayThirdKeyword}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 lg:p-20 text-center">
        <h2 className="text-3xl lg:text-6xl font-extralight italic">{`Une idée, un projet ?`}</h2>
        <h3 className="text-xl lg:text-4xl font-bold">
          <span>{`Je peux sûrement vous `}</span>
          <span className="underline">{`aider`}</span> !
        </h3>
      </div>

      <h4 className="text-lg lg:text-2xl font-semibold p-4 text-center italic">
        <div>{`Choisir de travailler avec moi,`}</div>
        <div>{`c'est choisir :`}</div>
      </h4>

      <FadeInSection>
        <div className="flex flex-col items-center">
          {introductions.map((intro, index) => (
            <div key={index} className="rounded-xl bg-opacity-25 bg-black p-5 mb-3 w-full lg:w-2/3">
              <h5 className="text-xl font-bold">{intro.title}</h5>
              {intro.description && <span className="text-lg font-extralight">{intro.description}</span>}
              {intro.quote && <span className="text-lg font-extralight italic">{intro.quote}</span>}
              {intro.highlight && <div className="text-lg font-normal">{intro.highlight}</div>}
              {intro.conclusion && <div className="text-2xl font-black text-center pt-8">{intro.conclusion}</div>}
            </div>
          ))}
        </div>

        <div className="flex gap-5 justify-center mb-16 mt-10 md:mb-0">
          <SocialNavItem label={"GitHub"} icon={<GitHub />} href="https://github.com/corentindesfarges" />
          <SocialNavItem
            label={"LinkedIn"}
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/corentin-desfarges/"
          />
        </div>
      </FadeInSection>
    </main>
  )
}
