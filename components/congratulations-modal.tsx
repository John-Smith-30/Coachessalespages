"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Calendar, Clock, Mail, Phone, Sparkles, ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import confetti from "canvas-confetti"

interface CongratulationsModalProps {
  isOpen: boolean
  onClose: () => void
  applicantName: string
}

export default function CongratulationsModal({ isOpen, onClose, applicantName }: CongratulationsModalProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen && !showConfetti) {
      setShowConfetti(true)

      // Trigger confetti animation
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#D72638", "#FFFFFF", "#F5F5F5"],
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#D72638", "#FFFFFF", "#F5F5F5"],
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isOpen, showConfetti])

  const handleClose = () => {
    setShowConfetti(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] bg-[#0D0D0D]/95 backdrop-blur-md border-[#D72638]/30 text-[#F5F5F5] p-0 overflow-hidden">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#D72638] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#D72638] rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#D72638] to-[#D72638]/80 p-8 text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full mx-auto animate-ping"></div>
            </div>

            <DialogTitle className="font-serif text-2xl sm:text-3xl text-white font-bold mb-2">
              🎉 Congratulations, {applicantName.split(" ")[0]}!
            </DialogTitle>
            <DialogDescription className="text-white/90 text-lg">
              Your application has been successfully submitted
            </DialogDescription>
          </div>

          {/* Content */}
          <div className="p-8 relative">
            <div className="text-center mb-8">
              <h3 className="font-serif text-xl text-[#D72638] mb-4 font-semibold">
                Welcome to The Clarity Method™ Application Process
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Thank you for taking this important step toward transforming your business. We're excited to learn more
                about your goals and how we can help you achieve them.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
              <h4 className="font-serif text-lg text-[#F5F5F5] mb-4 font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D72638]" />
                What happens next:
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D72638] flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Application Review</p>
                    <p className="text-gray-300 text-sm">
                      Our team will carefully review your application within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D72638] flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Clarity Call Invitation</p>
                    <p className="text-gray-300 text-sm">
                      If you're a good fit, we'll invite you to a complimentary clarity call
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D72638] flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Strategy Session</p>
                    <p className="text-gray-300 text-sm">
                      We'll discuss your goals and create a custom roadmap for your success
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#D72638]/10 to-[#D72638]/5 border border-[#D72638]/20 rounded-lg p-6 mb-8">
              <h4 className="font-serif text-lg text-[#F5F5F5] mb-4 font-semibold">We'll be in touch soon!</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-[#D72638]" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-[#D72638]" />
                  <span>Check your email inbox</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[#D72638]" />
                  <span>Possible phone call</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-[#D72638]" />
                  <span>Clarity call scheduling</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button className="w-full bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] transition-all duration-300 h-12 font-semibold uppercase tracking-wider">
                  <Home className="w-4 h-4 mr-2" />
                  BACK TO HOME
                </Button>
              </Link>
              <Button
                onClick={handleClose}
                variant="outline"
                className="flex-1 border-white/20 text-[#F5F5F5] hover:bg-white/10 hover:border-[#D72638] transition-all duration-300 h-12 font-semibold uppercase tracking-wider"
              >
                CLOSE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Additional Support */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Questions about your application?{" "}
                <a href="mailto:hello@claritymethod.com" className="text-[#D72638] hover:underline">
                  Contact us directly
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
