"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Download, Mail, User, ArrowRight, Gift, Sparkles } from "lucide-react"

interface FunnelFormProps {
  className?: string
}

interface FormData {
  name: string
  email: string
}

interface FormErrors {
  name?: string
  email?: string
}

export default function FunnelForm({ className = "" }: FunnelFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "First name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Funnel form submitted:", formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleDownload = () => {
    // Simulate download
    console.log("Downloading 10 Systems Guide...")
    // In a real app, this would trigger the actual download
  }

  if (isSubmitted) {
    return (
      <Card className={`glass-card bg-white/5 backdrop-blur-md border border-[#D72638] ${className}`}>
        <CardContent className="p-8 text-center">
          {/* Success Animation */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-[#D72638]/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle className="w-10 h-10 text-[#D72638]" />
            </div>
            <div className="absolute inset-0 w-16 h-16 bg-[#D72638]/10 rounded-full mx-auto animate-ping"></div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-[#D72638] mb-4 font-bold">Success! Check Your Email</h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We've sent the <span className="text-[#D72638] font-semibold">"10 Systems to Scale Your Solo Biz"</span>{" "}
            guide to <span className="text-[#F5F5F5]">{formData.email}</span>
          </p>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
            <h4 className="font-serif text-lg text-[#F5F5F5] mb-2 font-semibold">What's in your inbox:</h4>
            <ul className="text-sm text-gray-300 space-y-1 text-left">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D72638] rounded-full"></div>
                The complete 10 Systems guide (PDF)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D72638] rounded-full"></div>
                Bonus: Quick-start implementation checklist
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#D72638] rounded-full"></div>
                Exclusive invitation to our next masterclass
              </li>
            </ul>
          </div>

          <Button
            onClick={handleDownload}
            className="w-full bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] transition-all duration-300 mb-4 h-12 font-semibold uppercase tracking-wider"
          >
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD NOW
          </Button>

          <p className="text-xs text-gray-400">
            Don't see the email? Check your spam folder or{" "}
            <button onClick={() => setIsSubmitted(false)} className="text-[#D72638] hover:underline">
              try again
            </button>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={`glass-card bg-white/5 backdrop-blur-md border border-[#D72638]/30 hover:border-[#D72638] transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D72638] to-[#D72638]/80 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">FREE DOWNLOAD</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-2">
            10 Systems to Scale Your Solo Biz to 6 Figures
          </h3>
          <p className="text-white/90 text-sm">The exact systems I used to build a $120K business without a team</p>
        </div>
      </div>

      <CardContent className="p-6">
        {/* What's Inside */}
        <div className="mb-6">
          <h4 className="font-serif text-lg text-[#F5F5F5] mb-3 font-semibold">What you'll discover:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "The 3-step offer clarity framework that eliminates confusion",
              "My 'Set & Forget' client onboarding system",
              "The 15-minute daily routine that generates consistent leads",
              "Pricing strategies that attract premium clients",
              "Boundary-setting templates that prevent burnout",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#D72638] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="funnel-name" className="text-[#F5F5F5] font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-[#D72638]" />
              First Name *
            </Label>
            <Input
              id="funnel-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-11 ${
                errors.name ? "border-red-500 focus:border-red-500" : ""
              }`}
              placeholder="Enter your first name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-400 text-xs flex items-center gap-1">
                <span className="w-3 h-3 text-red-400">⚠</span>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="funnel-email" className="text-[#F5F5F5] font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D72638]" />
              Email Address *
            </Label>
            <Input
              id="funnel-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-11 ${
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }`}
              placeholder="Enter your email address"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-400 text-xs flex items-center gap-1">
                <span className="w-3 h-3 text-red-400">⚠</span>
                {errors.email}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] transition-all duration-300 h-12 text-base font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed premium-button"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                SENDING GUIDE...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                GET FREE GUIDE
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </form>

        {/* Trust Elements */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D72638]" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-[#D72638]" />
              <span>No Spam</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#D72638]" />
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Join <span className="text-[#D72638] font-semibold">2,847+</span> entrepreneurs who've downloaded this guide
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
