"use client"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Store } from "@/constants/store"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white z-40 pt-16 pb-8 w-full min-w-[320px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-2xl mx-auto px-4 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-heading4-medium mb-4">Підтримка клієнтів</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/contact" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Зв&apos;язатися з нами
                </Link>
              </li>
              <li>
                <Link href="/support/shipping" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Доставка та повернення
                </Link>
              </li>
              <li>
                <Link href="/support/warranty" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Гарантія та обслуговування
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Часті запитання
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-heading4-medium mb-4">Товари</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/food" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Корми
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="text-base-regular hover:text-emerald-400 transition-colors"
                >
                  Аксесуари
                </Link>
              </li>
              <li>
                <Link href="/products/toys" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Іграшки
                </Link>
              </li>
              <li>
                <Link href="/products/health" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Здоров&apos;я та гігієна
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-heading4-medium mb-4">Компанія</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Вакансії
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-base-regular hover:text-emerald-400 transition-colors">
                  Партнери
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-heading4-medium mb-4">Контакти</h3>
            <p className="text-base-regular mb-2">Телефон: 0-800-PET-STORE</p>
            <p className="text-base-regular mb-4">Email: support@petstore.com</p>
            <h4 className="text-base-semibold mb-2">Слідкуйте за нами</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-green-800 pt-8 mt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-small-regular text-green-400 mb-4 lg:mb-0 text-center lg:text-left">
              © {currentYear} <span className="font-semibold">{Store.name}</span>. Всі права захищені.
            </p>
            <div className="flex flex-col items-center lg:items-end space-y-2 lg:space-y-0">
              <span className="text-small-regular text-green-400 text-center lg:text-right">Безпечні платежі від</span>
              <div className="flex space-x-4 mt-2 lg:mt-1">
                {/* <Image
                  className="h-6 w-auto"
                  width={50}
                  height={24}
                  src="/placeholder.svg?height=24&width=50"
                  alt="Payment method 1"
                />
                <Image
                  className="h-6 w-auto"
                  width={50}
                  height={24}
                  src="/placeholder.svg?height=24&width=50"
                  alt="Payment method 2"
                /> */}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

