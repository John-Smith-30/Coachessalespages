"use client"

import { useState, useEffect } from "react"

export default function LiveCounter() {
  const [count, setCount] = useState(4)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 2) return 4
        if (prev === 4) return 3
        if (prev === 3) return 2
        return 4
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return <span className="text-[#D72638] font-bold animate-pulse">{count}</span>
}
