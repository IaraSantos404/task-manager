import { BiTask } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiMoonLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

import { NavLink } from "react-router-dom";

export default function Aside() {

  const tema = "Escuro";
  const cssActive = "bg-primary-300";

  const menu = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, link: "/dashboard" },
    { name: "Pendentes", icon: <MdPendingActions />, link: "/pendentes" },
    { name: "Concluídas", icon: <BiTask />, link: "/concluidas" },
  ]

  const categories = [
    { name: "Estudos", icon: <BsBook />, link: "/estudos" },
    { name: "Trabalho", icon: <MdOutlineWorkOutline />, link: "/trabalho" },
    { name: "Pessoal", icon: <IoPersonOutline />, link: "/pessoal" },
  ]
  return (
    <>
      <aside className="bg-secondary w-62.5 h-screen">
        <div className="flex  items-center gap-2 border-r border-b border-gray-800 p-5">
          {/* logo aqui */}
          <div className="bg-primary-300 rounded-lg p-1">
            <BiTask className="text-gray-300 text-3xl" />
          </div>
          <h1>TaskFlow</h1>
        </div>

        <div className="flex flex-col justify-center gap-2 border-r border-gray-800">
          <div className="px-2.5">
            <h1 className="my-5">Menu</h1>
            {menu.map((item) => (
              <NavLink key={item.name} to={item.link} className={({ isActive }) => 
              `flex flex-col mb-2 items-center w-full p-3 rounded-lg cursor-pointer hover:bg-primary-300 transition-colors duration-300 ${isActive ? cssActive : ""}`}>
                <ul className="flex gap-2 items-center w-full">
                  <span className="text-2xl">{item.icon}</span>
                  <li>{item.name}</li>
                </ul>
              </NavLink>
            ))}
          </div>

          <div className="border-y border-gray-800 w-full px-2.5 py-3 mb-2">
            <h1 className="my-5">Categorias</h1>
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.link}
                className={({ isActive }) => `flex flex-col mb-2 items-center w-full p-3 rounded-lg cursor-pointer hover:bg-primary-300
                transition-colors duration-300 ${isActive ? cssActive : ""}`}
              >
                <ul className="flex gap-2 items-center w-full">
                  <span className="text-2xl">{category.icon}</span>
                  <li>{category.name}</li>
                </ul>
              </NavLink>
            ))}
          </div>

          <div className="">
            <div className="flex items-center gap-2 p-3 mx-2 rounded-lg hover:bg-primary-300 cursor-pointer transition-all duration-300">
              <RiMoonLine className="text-2xl " />
              <p>Modo {tema}</p>
            </div>
            <div className="flex mt-2 items-center gap-2 p-3 mx-2 rounded-lg hover:text-text hover:bg-red-500 group cursor-pointer transition-all duration-400">
              <IoIosLogOut className="text-2xl text-red-500 group-hover:text-text" />
              <p className="text-red-500 group-hover:text-text">Sair</p>
            </div>
          </div>

        </div>
      </aside>
    </>
  )
}