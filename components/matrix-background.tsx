"use client"

import { useEffect, useRef } from "react"

const CONFIG = {
  fontSize: 16,
  maxDrops: 160,
  fadeSpeed: 0.03,
  dropSpeedMin: 80,
  dropSpeedMax: 160,
  brightnessBoost: 50,
  colors: {
    primary: "#00D4FF",
    secondary: "#00FFB4",
    background: "rgba(0,10,20,0.04)",
  },
  characters:
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⏺⭓〇◇◆",
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animationId: number

    const chars = CONFIG.characters.split("")
    let drops = Array(Math.floor(width / CONFIG.fontSize)).fill(1)
    let lastTime = 0

    function resize() {
      width = canvas!.width = window.innerWidth
      height = canvas!.height = window.innerHeight
      drops = Array(Math.floor(width / CONFIG.fontSize)).fill(1)
    }

    window.addEventListener("resize", resize)

    function draw(time: number) {
      if (time - lastTime < 40) {
        animationId = requestAnimationFrame(draw)
        return
      }
      lastTime = time

      ctx!.fillStyle = CONFIG.colors.background
      ctx!.fillRect(0, 0, width, height)
      ctx!.font = `bold ${CONFIG.fontSize}px monospace`
      ctx!.textAlign = "center"

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * CONFIG.fontSize
        const y = drops[i] * CONFIG.fontSize

        const gradient = ctx!.createLinearGradient(x, y - CONFIG.fontSize, x, y)
        gradient.addColorStop(0, CONFIG.colors.secondary)
        gradient.addColorStop(1, CONFIG.colors.primary)

        const brightness = 100 + Math.random() * CONFIG.brightnessBoost
        ctx!.fillStyle = gradient
        ctx!.globalAlpha = brightness / 100

        ctx!.fillText(char, x + CONFIG.fontSize / 2, y)
        ctx!.globalAlpha = 1

        if (
          time - drops[i] * 100 >
          (Math.random() * (CONFIG.dropSpeedMax - CONFIG.dropSpeedMin) + CONFIG.dropSpeedMin) * 50
        ) {
          drops[i]++
        }

        if (drops[i] * CONFIG.fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20 dark:opacity-30 pointer-events-none"
      aria-hidden="true"
    />
  )
}
