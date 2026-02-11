import { Outlet } from "react-router-dom";
import Aurora from "../components/ui/aurora";

export default function AuthLayout(){
  return(
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background text-text">
        <Aurora
          colorStops={["#0E3459", "#05112c", "#2B6CB0"]}
          blend={0.5}
          amplitude={3.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10">
        <Outlet />
      </div>
    </section>
  )
}