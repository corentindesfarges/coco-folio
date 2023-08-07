import { Nunito } from "next/font/google"

import { NavBar } from "../components/nav"
import "../globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Corentin Desfarges",
  description: "Développeur web",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${nunito.className}`}>
        <div className="flex w-full min-h-screen justify-center bg-black lg:px-4 xl:px-8">
          <div className="fixed top-0 left-0 z-50 w-full hidden bg-black md:block lg:h-4 xl:h-8"></div>
          <div className="w-full max-w-screen-xl">
            <main className="flex justify-center rounded-md lg:h-[calc(100%-16px)] xl:h-[calc(100%-32px)] bg-blue-crackled lg:mt-4 xl:mt-8">
              {children}
            </main>
          </div>
          <NavBar />
          <div className="fixed bottom-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
        </div>
      </body>
    </html>
  )
}
