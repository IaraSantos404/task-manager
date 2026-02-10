import Head from "./components/head";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen scroll-smooth">
        <Head active="login" />

        <div className="card p-10 mt-5 bg-secondary rounded-[14px] border-primary border glow-primary">
          {/* Colocar o  icon depois */}
          {/* <h1>Bem-vindo de volta</h1> */}

          <div className="flex flex-col gap-1.5 mt-3">
            <label className="text-gray-400" htmlFor="email">E-mail</label>
            <div className="flex px-3 py-1 items-center gap-3 bg-secondary border-gray-600 border-2 rounded-xl transition-all duration-300
            focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.4),0_0_6px_rgba(59,130,246,0.6)]
            group">
              <MdEmail className="text-gray-600 transition-colors duration-300
                group-focus-within:text-blue-700" />
              <input className="input bg-secondary" placeholder="seu@email.com" id="email" type="email" />
            </div>

            <label className="text-gray-400" htmlFor="password">Senha</label>
            <div className="flex px-3 py-1 items-center gap-3 bg-secondary border-gray-600 border-2 rounded-xl transition-all duration-300
            focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.4),0_0_6px_rgba(59,130,246,0.6)]
            group">
              <FaLock className="text-gray-600 transition-colors duration-300
                group-focus-within:text-blue-700" />
              <input className="input bg-secondary" placeholder="********" id="password" type="password" />
            </div>
          </div>
          <button className="bg-primary rounded-2xl w-full p-2 font-semibold my-4 cursor-pointer glow-primary
            transition-all duration-300 hover:brightness-110 active:translate-y-0">Entrar</button>
          <p className="text-text">Ainda não tem conta? cadastre-se
            <span className="text-primary-300 cursor-pointer"onClick={()=> navigate("/cadastro")}> aqui</span>
          </p>
        </div>
      </section>
    </>
  )
}