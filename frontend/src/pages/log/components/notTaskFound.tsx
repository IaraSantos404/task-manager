import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NotTaskFound() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <FaMagnifyingGlass className="text-gray-600 text-4xl" />
      <p className="text-gray-600">Nenhuma tarefa encontrada</p>
    </div>
  )
}