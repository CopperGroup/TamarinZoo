"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, ShieldCheck, Truck } from "lucide-react"

const brandValues = [
  {
    icon: Heart,
    title: "Турбота і Комфорт",
    description:
      "Ми пропонуємо товари, які забезпечують максимальний комфорт та турботу для ваших домашніх улюбленців.",
  },
  {
    icon: ShieldCheck,
    title: "Якість і Безпека",
    description:
      "Ми ретельно відбираємо продукцію від перевірених виробників, гарантуючи безпеку та якість кожного товару.",
  },
  {
    icon: Truck,
    title: "Швидка Доставка",
    description: "Ми забезпечуємо швидку та надійну доставку, щоб ваші улюбленці отримали все необхідне вчасно.",
  },
]

export default function Brand() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-heading1-bold mb-12 text-center text-green-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Наші Основні Цінності
        </motion.h2>
        <motion.p
          className="text-body-medium text-green-700 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ми пропонуємо не просто товари — ми створюємо комплексну екосистему для догляду за вашими улюбленцями,
          поєднуючи якість, турботу та надійність.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-heading3-bold mb-4 text-green-800">{value.title}</h3>
              <p className="text-base-regular text-green-600 max-w-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

