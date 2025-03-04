"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Auth from "./Auth"
import AdminLink from "./AdminLink"
import { TransitionLink } from "../interface/TransitionLink"
import { usePathname } from "next/navigation"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import BurgerMenu from "./BurgerMenu"
import { trackFacebookEvent } from "@/helpers/pixel"
import { Store } from "@/constants/store"

const Links = [
  { label: "Головна", href: "/" },
  { label: "Товари", href: "/catalog" },
  { label: "Улюблені", href: "/liked" },
  { label: "Мої замовлення", href: "/myOrders" },
  { label: "Інформація", href: "/info" },
]

const infoNames = ["Контакти", "Доставка та оплата", "Гарантія та послуги"]

export default function Header({ email, user }: { email: string; user: string }) {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const isInView = useInView(headerRef, { once: true })

  const userInfo = JSON.parse(user)

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const handleLead = (label: string) => {
    trackFacebookEvent("Lead", {
      lead_type: label,
    })
  }

  return (
    <header ref={headerRef} className="w-full min-w-[320px] h-20 flex justify-center items-center">
      <div className="w-full max-w-[1680px] h-full flex justify-between items-center bg-green-900 px-5 max-[600px]:px-9 max-[500px]:px-7">
        <div className="size-5 hidden max-lg:flex"></div>
        <div>
          <Link href="/" className="w-fit flex gap-2 justify-center items-center">
            {/* <Logo /> */}
            <p className="text-base-semibold text-white">{Store.name}</p>
          </Link>
        </div>
        <nav className="w-fit h-11 flex gap-1 justify-center items-center rounded-xl bg-green-800/50 px-2 max-lg:hidden">
          <AdminLink />
          {Links.map(({ label, href }, index) => {
            const isActive = (pathname.includes(href) && href.length > 1) || pathname === href

            if (["Улюблені", "Мої замовлення"].includes(label)) {
              if (!email) return null

              return (
                <div key={label}>
                  <div
                    className={`w-fit h-8 text-green-300 flex justify-center items-center border-green-700 rounded-lg px-[0.885rem] ${isActive && "bg-emerald-500/10 text-emerald-400 border"}`}
                  >
                    <TransitionLink
                      href={`${href}${label === "Улюблені" ? "/" + userInfo?._id : ""}`}
                      className={`text-small-medium font-normal hover:text-emerald-400 transition-all ${isActive && "text-emerald-400"}`}
                      onClick={() => handleLead(label)}
                    >
                      {label}
                    </TransitionLink>
                  </div>
                </div>
              )
            } else if (label === "Інформація") {
              return (
                <div key={label}>
                  <Menubar className="h-8 border-0 p-0 space-x-0">
                    <MenubarMenu>
                      <MenubarTrigger
                        className={`w-fit h-8 text-green-300 flex justify-center items-center border-green-700 rounded-lg cursor-pointer px-[0.885rem] ${isActive && "bg-emerald-500/10 text-emerald-400 border"}`}
                      >
                        <p
                          className={`text-small-medium font-normal hover:text-emerald-400 transition-all ${isActive && "text-emerald-400"}`}
                        >
                          {label}
                        </p>
                      </MenubarTrigger>
                      <MenubarContent className="min-w-[9rem] bg-green-800 text-green-300 border-green-700 rounded-lg">
                        {["contacts", "delivery-payment", "warranty-services"].map((subItem, index) => (
                          <MenubarItem
                            key={subItem}
                            className="text-small-medium font-normal cursor-pointer hover:text-emerald-400 transition-all"
                          >
                            <TransitionLink href={`/info/${subItem}`} onClick={() => handleLead(`/info/${subItem}`)}>
                              {infoNames[index]}
                            </TransitionLink>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              )
            } else {
              return (
                <div key={label}>
                  <div
                    className={`w-fit h-8 text-green-300 flex justify-center items-center border-green-700 rounded-lg px-[0.885rem] ${isActive && "bg-emerald-500/10 text-emerald-400 border"}`}
                  >
                    <TransitionLink
                      href={href}
                      className={`text-small-medium font-normal hover:text-emerald-400 transition-all ${isActive && "text-emerald-400"}`}
                    >
                      {label}
                    </TransitionLink>
                  </div>
                </div>
              )
            }
          })}
        </nav>
        <div className="w-fit flex justify-center items-center max-lg:hidden">
          <Auth email={email} user={user} />
        </div>
        <div className="w-fit h-8 hidden mt-1 max-lg:flex">
          <BurgerMenu email={email} user={user} />
        </div>
      </div>
    </header>
  )
}

