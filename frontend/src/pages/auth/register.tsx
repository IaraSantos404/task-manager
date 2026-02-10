import Head from "./components/head"
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <Head active="signup" />
        <div className="card p-10 mt-5 bg-secondary rounded-[14px] border-primary border glow-primary">
          {/* Colocar o  icon depois */}
          {/* <h1>Crie sua conta</h1> */}

          <div className="flex flex-col gap-1.5 mt-3">
            <label className="text-gray-400" htmlFor="name">Nome de usuário</label>
            <div className="flex px-5 py-1 items-center gap-3 bg-secondary border-gray-600 border-2 rounded-xl transition-all duration-300
                    focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.4),0_0_6px_rgba(59,130,246,0.6)]
                    group">
              <IoPersonSharp className="text-gray-600 transition-colors duration-300
                        group-focus-within:text-blue-700" />
              <input className="input bg-secondary" placeholder="username" id="name" type="text" />
            </div>

            <label className="text-gray-400" htmlFor="email">E-mail</label>
            <div className="flex px-5 py-1 items-center gap-3 bg-secondary border-gray-600 border-2 rounded-xl transition-all duration-300
                    focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.4),0_0_6px_rgba(59,130,246,0.6)]
                    group">
              <MdEmail className="text-gray-600 transition-colors duration-300
                        group-focus-within:text-blue-700" />
              <input className="input bg-secondary" placeholder="seu@email.com" id="email" type="email" />
            </div>

            <label className="text-gray-400" htmlFor="password">Senha</label>
            <div className="flex px-5 py-1 items-center gap-3 bg-secondary border-gray-600 border-2 rounded-xl transition-all duration-300
                    focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.4),0_0_6px_rgba(59,130,246,0.6)]
                    group">
              <FaLock className="text-gray-600 transition-colors duration-300
                        group-focus-within:text-blue-700" />
              <input className="input bg-secondary" placeholder="********" id="password" type="password" />
            </div>
          </div>
          <button className="bg-primary rounded-2xl w-full p-2 font-semibold my-4 cursor-pointer glow-primary
                    transition-all duration-300 hover:brightness-110 active:translate-y-0">Cadastrar</button>
          <p className="text-center">Já tem conta? Faça login
            <span className="text-primary-300 cursor-pointer" onClick={() => navigate("/login")}> aqui</span>
          </p>

        </div>
      </section>
    </>
  )
}