"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CrystalClearLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.phone.trim()) errors.phone = "Phone is required"
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) errors.phone = "Valid 10-digit phone required"
    if (!formData.message.trim()) errors.message = "Message is required"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", message: "" })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <Image src="/logo.png" alt="Crystal Clear Logo" width={50} height={50} className="rounded-lg" />
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                Crystal Clear
              </div>
              <div className="text-xs text-[#9630b7]">Auto Detailing</div>
            </div>
          </motion.div>
          <motion.a href="tel:7206412574" whileHover={{ scale: 1.05 }}>
            <Button className="bg-gradient-to-r from-[#9630b7] to-[#7c2887] hover:from-[#8021d7] hover:to-[#6b2276] text-white border-0 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              (720) 641-2574
            </Button>
          </motion.a>
        </div>
      </motion.header>

      {/* Main Hero Section - Continuous throughout page */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-20">
        <div className="container mx-auto px-4 w-full max-w-5xl flex flex-col items-center">
          {/* Hero Image & Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mb-12"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-100 mb-12">
              <Image
                src="https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg"
                alt="Professional car detailing service"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Business Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 w-full"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Crystal Clear Auto Detailing
            </h1>
            <p className="text-2xl md:text-3xl text-[#9630b7] font-semibold mb-8">
              Premium Mobile Detailing for Your Vehicle
            </p>
          </motion.div>

          {/* What We Do - Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12 w-full max-w-2xl"
          >
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#9630b7] font-bold">•</span>
                Professional interior and exterior detailing with showroom-quality finishes
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#9630b7] font-bold">•</span>
                Mobile service – we come to you, no appointment needed
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#9630b7] font-bold">•</span>
                Premium paint protection and ceramic coating services
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#9630b7] font-bold">•</span>
                Serving Parker, Castle Rock, Franktown, Elizabeth & Greater Denver Metro
              </p>
            </div>
          </motion.div>

          {/* Service Areas & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16 w-full"
          >
            <p className="text-gray-600 text-lg mb-2">
              <span className="font-semibold">Service Areas:</span> Parker • Castle Rock • Franktown • Elizabeth • Denver Metro
            </p>
            <p className="text-gray-600 text-lg">
              <span className="font-semibold">Available:</span> Monday – Sunday, 8 AM – 6 PM
            </p>
          </motion.div>

          {/* Contact Section - Massive & Focused */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full border-t border-gray-200 pt-16 pb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">Book your appointment or get a free quote today</p>
            </div>

            {/* Large Contact Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              {/* Phone */}
              <motion.a
                href="tel:7206412574"
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 border-2 border-[#9630b7] rounded-xl hover:bg-[#9630b7]/5 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <Phone className="w-12 h-12 text-[#9630b7]" />
                </div>
                <p className="text-gray-600 text-sm mb-2">Call us now</p>
                <p className="text-4xl font-bold text-[#9630b7]">(720) 641-2574</p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:Tallyn.adams@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 border-2 border-[#9630b7] rounded-xl hover:bg-[#9630b7]/5 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-[#9630b7]" />
                </div>
                <p className="text-gray-600 text-sm mb-2">Email us</p>
                <p className="text-xl font-bold text-[#9630b7] break-all">Tallyn.adams@gmail.com</p>
              </motion.a>
            </div>

            {/* Contact Form - Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-gray-50 rounded-xl border border-gray-200 p-8"
              id="contact-form"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(720) 123-4567"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your vehicle and what you need..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 min-h-32"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#9630b7] to-[#7c2887] hover:from-[#8021d7] hover:to-[#6b2276] text-white border-0 font-bold text-lg py-6 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book Appointment"} <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 text-center font-semibold">
                    ✓ Request sent! We'll contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-700 text-center font-semibold">
                    ✗ Error submitting. Please try again.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Crystal Clear Auto Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
