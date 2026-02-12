import Header from "./components/header"
import { FiTarget } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


export default function Dashboard() {
  const cards = [
    {
      nome: "Total", quantidade: 10, icon: <FiTarget />, bgColor: "#0E3459"
    },
    {
      nome: "Concluídas", quantidade: 7, icon: <IoMdCheckmarkCircleOutline />, bgColor: "#01a807"
    },
    {
      nome: "Pendentes", quantidade: 3, icon: <IoIosInformationCircleOutline />, bgColor: "#a80101"
    },
    {
      nome: "Em andamento", quantidade: 2, icon: <IoTimeOutline />, bgColor: "#0E3459"
    }

  ]
  return (
    <>
      <section className="p-8 w-full">
        <Header user="João" />
        <div className="cards-container flex flex-wrap lg:flex-nowrap justify-between gap-2 w-full mt-8">
          {cards.map((card) => (
            <div key={card.nome} className="card bg-secondary text-text p-4 rounded-lg lg:w-1/4 w-full flex gap-4 items-center border border-gray-800">
              <p className="text-[12px] md:text-3xl p-1.5 rounded-2xl" style={{ background: card.bgColor, color: "#ced7e0" }}>{card.icon}</p>
              <div>
                <h2 className="text-2xl font-bold">{card.quantidade}</h2>
                <p className="md:text-[16px] text-[12px] font-light">{card.nome}</p>
              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  )
}