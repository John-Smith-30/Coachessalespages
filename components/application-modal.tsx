"use client"

import type React from "react"
import { useRouter } from "next/navigation"

interface ApplicationModalProps {
  children: React.ReactNode
}

export default function ApplicationModal({ children }: ApplicationModalProps) {
  const router = useRouter()

  const handleApplyClick = () => {
    router.push("/apply")
  }

  return (
    <div onClick={handleApplyClick} className="cursor-pointer">
      {children}
    </div>
  )
}
