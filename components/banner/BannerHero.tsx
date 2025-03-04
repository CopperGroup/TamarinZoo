import { Button } from "@/components/ui/button"
import { PawPrintIcon as Paw, Heart } from "lucide-react"
import Link from "next/link"

export default function BannerHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-green-50">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="object-cover w-full h-full transform">
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/20 to-green-700/10">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-heading1-bold text-green-50 sm:text-[56px] md:text-[64px] lg:text-[72px]">
              Найкращі товари
              <br />
              <span className="text-emerald-300">для вашого улюбленця</span>
            </h1>
            <p className="text-body-medium text-green-100 max-w-xl">
              Відкрийте для себе якісні аксесуари та корми для вашого домашнього улюбленця, які забезпечать йому
              комфорт, здоров&apos;я та радість.
            </p>
            <div className="flex gap-4 max-[600px]:flex-col">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-base-semibold text-white"
              >
                <Link href="/catalog?page=1&sort=default" className="flex items-center gap-2">
                  <Paw className="w-5 h-5" />
                  Купити аксесуари
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-400 px-8 py-6 text-base-semibold text-emerald-100 hover:bg-emerald-800/30"
              >
                <Link href="/catalog?page=1&sort=default" className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Переглянути корми
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

