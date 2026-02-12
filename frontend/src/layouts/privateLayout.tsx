//rotas logadas
import { Outlet } from "react-router-dom"
import Aside from "../components/aside"
import { useState, useEffect } from "react"

export default function PrivateLayout() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const root = document.documentElement

    if (theme === "light") {
      root.classList.add("light")
    } else {
      root.classList.remove("light")
    }
  }, [theme])
  return (
    <section className={`flex text-text bg-background ${theme}`} >
      <Aside theme={theme} setTheme={setTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
    </section>
  )
}