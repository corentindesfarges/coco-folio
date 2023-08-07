"use client"

import Logo from "@/components/Logo"

export default function Contact() {
  return (
    <main className="flex min-h-screen lg:min-h-[unset] flex-col items-center p-2 lg:pt-0 lg:p-10 w-full">
      <div className="relative lg:fixed bg-blue-crackled border-0 p-10 z-10 w-full lg:max-w-4xl text-sm lg:flex items-center">
        <Logo />
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="lg:ml-10 text-3xl lg:text-5xl font-bold">{`Rencontrons-nous !`}</h1>
        </div>
      </div>

      <div className="flex flex-col p-3 lg:p-20 h-full lg:justify-center text-center">
        <h2 className="text-2xl lg:text-4xl font-extralight italic">{`Vous avez une idée, un besoin, un projet ?`}</h2>
        <a href="https://calendly.com/corentin-dev/1h" target="_blank">
          <h3 className="text-2xl lg:text-4xl font-bold hover:text-white/80 transition-colors py-10">
            📅 Réservez un premier <span className="underline">rendez-vous</span> !
          </h3>
        </a>
      </div>
    </main>
  )
}
