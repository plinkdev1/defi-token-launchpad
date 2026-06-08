"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import "./cosmic-toggle.css"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <label className="cosmic-toggle">
        <input className="toggle" type="checkbox" disabled />
        <div className="slider">
          <div className="cosmos"></div>
          <div className="energy-line"></div>
          <div className="energy-line"></div>
          <div className="energy-line"></div>
          <div className="toggle-orb">
            <div className="inner-orb"></div>
            <div className="ring"></div>
          </div>
          <div className="particles">
            <div style={{ "--angle": "30deg" } as React.CSSProperties} className="particle"></div>
            <div style={{ "--angle": "60deg" } as React.CSSProperties} className="particle"></div>
            <div style={{ "--angle": "90deg" } as React.CSSProperties} className="particle"></div>
            <div style={{ "--angle": "120deg" } as React.CSSProperties} className="particle"></div>
            <div style={{ "--angle": "150deg" } as React.CSSProperties} className="particle"></div>
            <div style={{ "--angle": "180deg" } as React.CSSProperties} className="particle"></div>
          </div>
        </div>
      </label>
    )
  }

  return (
    <label className="cosmic-toggle">
      <input
        className="toggle"
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className="slider">
        <div className="cosmos"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="toggle-orb">
          <div className="inner-orb"></div>
          <div className="ring"></div>
        </div>
        <div className="particles">
          <div style={{ "--angle": "30deg" } as React.CSSProperties} className="particle"></div>
          <div style={{ "--angle": "60deg" } as React.CSSProperties} className="particle"></div>
          <div style={{ "--angle": "90deg" } as React.CSSProperties} className="particle"></div>
          <div style={{ "--angle": "120deg" } as React.CSSProperties} className="particle"></div>
          <div style={{ "--angle": "150deg" } as React.CSSProperties} className="particle"></div>
          <div style={{ "--angle": "180deg" } as React.CSSProperties} className="particle"></div>
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </label>
  )
}
