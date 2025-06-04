"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ApplicationModal from "./application-modal"

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight

      // Show after scrolling 100vh and hide on desktop
      if (scrolled > viewportHeight && window.innerWidth < 768) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D] border-t border-[#D72638]/20 p-4 md:hidden">
      <ApplicationModal>
        <Button className="w-full bg-[#D72638] hover:bg-white hover:text-[#D72638] border border-transparent hover:border-[#D72638] transition-all duration-300 py-4 text-base font-medium uppercase tracking-wider">
          APPLY NOW - LIMITED SPOTS
        </Button>
      </ApplicationModal>
    </div>
  )
}
