import { useState, useEffect } from "react"

function getWindowDimensions() {
  if (typeof window !== `undefined`) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else {
    const width = "100vw"
    const height = "100vw"
    return {
      width,
      height,
    }
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    if (typeof window !== `undefined`) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowDimensions
}
