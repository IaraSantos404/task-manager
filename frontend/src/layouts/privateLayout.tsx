//rotas logadas
import { Outlet } from "react-router-dom"
import Aside from "../components/aside"

type PrivateLayoutProps = {
  theme?: string | null
}

export default function PrivateLayout({theme = 'dark'}: PrivateLayoutProps){
  return(
    <section className={`flex ${theme}`} >
      <Aside />
      <main>
        <Outlet />
      </main>
    </section>
  )
}