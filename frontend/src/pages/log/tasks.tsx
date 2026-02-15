import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import NotTaskFound from "./components/notTaskFound";
import TasksDashboard from "./components/tasksDashboard";

export default function Tasks() {
  const tasks = [
    {
      title: "Estudar React",
      description: "Revisar os conceitos básicos e avançados de React para aprimorar minhas habilidades de desenvolvimento.",
      category: "Estudo",
      date: "2026-02-13"
    },
    {
      title: "Finalizar projeto de trabalho",
      description: "Concluir o desenvolvimento do projeto de trabalho para apresentação ao cliente.",
      category: "Trabalho",
      date: "2024-01-20"
    },
  ]
  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="titles">
          <h1 className="font-bold text-4xl">Minhas Tarefas</h1>
          <p className="text-text mt-1 ">{tasks.length} tarefa{tasks.length > 1 ? "s" : ""} no total</p>
        </div>
        <button className="bg-primary text-[#ced7e0] py-2.5 px-4 rounded-lg cursor-pointer hover:bg-primary-300 transition-color duration-300 flex items-center gap-2">
          <FaPlus />
          Nova Tarefa
        </button>
      </div>

      <div className="filters mt-5 flex-col lg:flex-row flex items-between gap-4 mb-7">
        <div className="flex border border-gray-800 rounded-[14px] p-2 items-center gap-2 flex-2">
          <FaMagnifyingGlass className="text-gray-600" />
          <input className="bg-transparent w-full" type="text" placeholder="Buscar tarefas..." />
        </div>

        {/* filtro de estado */}
        <div className="flex flex-1 ">
          <select className="p-2.5 text-text bg-background rounded-[14px] border border-gray-800 cursor-pointer w-full">
            <option value="">Todas</option>
            <option value="concluida">Concluídas</option>
            <option value="pendente">Pendentes</option>
            <option value="andamento">Em andamento</option>
          </select>
        </div>

        {/* ordenação */}
        <div className="flex flex-1 w-full">
          <select className="p-2.5 text-text bg-background rounded-[14px] border border-gray-800 cursor-pointer w-full">
            <option value="Data">Data</option>
            <option value="Status">Status</option>
            <option value="Nome">Nome</option>
          </select>
        </div>
      </div>

      {tasks.length === 0 ? (
        <NotTaskFound />
      ) : <TasksDashboard tasks={tasks} />}

    </section >
  )
}