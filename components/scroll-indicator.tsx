"use client"

import { useState, useEffect } from "react"

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.pageYOffset
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100)
      }
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#D72638] to-[#D72638]/60 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
