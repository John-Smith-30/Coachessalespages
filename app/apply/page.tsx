"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  User,
  Mail,
  Phone,
  Building,
  DollarSign,
  Target,
  MessageSquare,
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"
import CongratulationsModal from "@/components/congratulations-modal"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  businessType: string
  currentRevenue: string
  biggestChallenge: string
  goals: string
  timeline: string
  experience: string
  additionalInfo: string
}

interface FormErrors {
  [key: string]: string
}

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCongratulations, setShowCongratulations] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    currentRevenue: "",
    biggestChallenge: "",
    goals: "",
    timeline: "",
    experience: "",
    additionalInfo: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.businessType) newErrors.businessType = "Please select your business type"
    if (!formData.currentRevenue) newErrors.currentRevenue = "Please select your current revenue range"
    if (!formData.biggestChallenge.trim()) newErrors.biggestChallenge = "Please describe your biggest challenge"
    if (!formData.goals.trim()) newErrors.goals = "Please describe your goals"
    if (!formData.timeline) newErrors.timeline = "Please select your timeline"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))
      console.log("Application submitted:", formData)
      setShowCongratulations(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#D72638] rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-[#D72638] rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-[#D72638] rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-[#D72638] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Sales Page</span>
          </Link>
          <div className="text-center">
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#D72638] glow-text">The Clarity Method™</h1>
            <p className="text-xs sm:text-sm text-gray-400">Application Form</p>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-8 sm:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-[#D72638]/10 text-[#D72638] border border-[#D72638]/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              PREMIUM APPLICATION
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Apply for The Clarity Method™
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward building a $10K/month business with systems that scale. We'll review your
              application and contact you within 24 hours.
            </p>
          </div>

          {/* Application Form */}
          <Card className="glass-card bg-white/5 backdrop-blur-md border border-white/10">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-[#D72638]" />
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5]">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#F5F5F5] font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-12 ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your first name"
                        disabled={isSubmitting}
                      />
                      {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#F5F5F5] font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-12 ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your last name"
                        disabled={isSubmitting}
                      />
                      {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#F5F5F5] font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#D72638]" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-12 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#F5F5F5] font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#D72638]" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 h-12 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                      />
                      {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="w-5 h-5 text-[#D72638]" />
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5]">Business Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-[#F5F5F5] font-medium">
                        Business Type *
                      </Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleSelectChange("businessType", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger
                          className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] focus:border-[#D72638] focus:ring-[#D72638]/20 h-12 ${
                            errors.businessType ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D0D0D] border-white/20">
                          <SelectItem value="coach">Coach</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="copywriter">Copywriter</SelectItem>
                          <SelectItem value="strategist">Strategist</SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="agency-owner">Agency Owner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.businessType && <p className="text-red-400 text-sm">{errors.businessType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentRevenue" className="text-[#F5F5F5] font-medium flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#D72638]" />
                        Current Monthly Revenue *
                      </Label>
                      <Select
                        value={formData.currentRevenue}
                        onValueChange={(value) => handleSelectChange("currentRevenue", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger
                          className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] focus:border-[#D72638] focus:ring-[#D72638]/20 h-12 ${
                            errors.currentRevenue ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select revenue range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D0D0D] border-white/20">
                          <SelectItem value="0-1k">$0 - $1,000</SelectItem>
                          <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5k-8k">$5,000 - $8,000</SelectItem>
                          <SelectItem value="8k-10k">$8,000 - $10,000</SelectItem>
                          <SelectItem value="10k+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.currentRevenue && <p className="text-red-400 text-sm">{errors.currentRevenue}</p>}
                    </div>
                  </div>
                </div>

                {/* Goals & Challenges */}
                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-[#D72638]" />
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5]">Goals & Challenges</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="biggestChallenge" className="text-[#F5F5F5] font-medium">
                        What's your biggest business challenge right now? *
                      </Label>
                      <Textarea
                        id="biggestChallenge"
                        name="biggestChallenge"
                        value={formData.biggestChallenge}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 min-h-[100px] resize-none ${
                          errors.biggestChallenge ? "border-red-500" : ""
                        }`}
                        placeholder="Describe your biggest challenge in detail..."
                        disabled={isSubmitting}
                      />
                      {errors.biggestChallenge && <p className="text-red-400 text-sm">{errors.biggestChallenge}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-[#F5F5F5] font-medium">
                        What are your business goals for the next 6-12 months? *
                      </Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 min-h-[100px] resize-none ${
                          errors.goals ? "border-red-500" : ""
                        }`}
                        placeholder="Share your specific goals and what success looks like to you..."
                        disabled={isSubmitting}
                      />
                      {errors.goals && <p className="text-red-400 text-sm">{errors.goals}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-[#F5F5F5] font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D72638]" />
                          When do you want to start? *
                        </Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleSelectChange("timeline", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger
                            className={`bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] focus:border-[#D72638] focus:ring-[#D72638]/20 h-12 ${
                              errors.timeline ? "border-red-500" : ""
                            }`}
                          >
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0D0D0D] border-white/20">
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="within-2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="within-month">Within a month</SelectItem>
                            <SelectItem value="within-3-months">Within 3 months</SelectItem>
                            <SelectItem value="just-exploring">Just exploring</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.timeline && <p className="text-red-400 text-sm">{errors.timeline}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-[#F5F5F5] font-medium">
                          Previous coaching experience?
                        </Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleSelectChange("experience", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] focus:border-[#D72638] focus:ring-[#D72638]/20 h-12">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0D0D0D] border-white/20">
                            <SelectItem value="none">No previous coaching</SelectItem>
                            <SelectItem value="some">Some coaching experience</SelectItem>
                            <SelectItem value="extensive">Extensive coaching experience</SelectItem>
                            <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-[#D72638]" />
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F5F5F5]">
                      Additional Information
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo" className="text-[#F5F5F5] font-medium">
                      Anything else you'd like us to know?
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="bg-white/5 backdrop-blur-sm border-white/20 text-[#F5F5F5] placeholder:text-gray-400 focus:border-[#D72638] focus:ring-[#D72638]/20 transition-all duration-300 min-h-[80px] resize-none"
                      placeholder="Share any additional context that would help us understand your situation better..."
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-white/10">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] transition-all duration-300 h-14 text-lg font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed premium-button"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        SUBMITTING APPLICATION...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        SUBMIT APPLICATION
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting this application, you agree to receive communications about The Clarity Method™. Your
                    information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Elements */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D72638]" />
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D72638]" />
                <span>24-hour Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D72638]" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Congratulations Modal */}
      <CongratulationsModal
        isOpen={showCongratulations}
        onClose={() => setShowCongratulations(false)}
        applicantName={`${formData.firstName} ${formData.lastName}`}
      />
    </div>
  )
}
