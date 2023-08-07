import Image from "next/image"

import Contact from "../svg/contact"
import GitHub from "../svg/github"
import LinkedIn from "../svg/linkedin"
import Parcours from "../svg/parcours"
import Realisations from "../svg/realisations"

import NavItem from "./NavItem"
import SocialNavItem from "./SocialNavItem"

export default function NavBar() {
  return (
    <div className="flex-col items-center justify-between md:flex fixed left-0 top-full z-50 w-full md:w-16 md:sticky md:top-20 md:h-[calc(100vh-theme(space.28))] md:translate-y-0 -translate-y-16">
      <div className="grid grid-cols-4 w-full bg-[#0a1838] md:block">
        <NavItem
          label={"Qui je suis"}
          icon={
            <Image
              key={Math.random()}
              className="rounded-full border-2"
              src={"/me.jpeg"}
              alt={"Qui je suis"}
              width={40}
              height={40}
              priority
            />
          }
          photo={true}
          href={"/"}
        />
        <NavItem label={"Parcours"} icon={<Parcours />} href={"/parcours"} />
        <NavItem label={"Projets"} icon={<Realisations />} href={"/projets"} />
        <NavItem label={"Contact"} icon={<Contact />} href={"/contact"} />
      </div>
      <div className="flex flex-col flex-wrap">
        <SocialNavItem label={"GitHub"} icon={<GitHub />} href="https://github.com/corentindesfarges" />
        <SocialNavItem label={"LinkedIn"} icon={<LinkedIn />} href="https://www.linkedin.com/in/corentin-desfarges/" />
      </div>
    </div>
  )
}
