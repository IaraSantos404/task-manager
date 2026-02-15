import formatDate from "../../../utils/date";
import { IoTimeOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

interface TasksDashboardProps {
  tasks: {
    title: string;
    description: string;
    category: string;
    date: string;
  }[];
}

export default function TasksDashboard({ tasks }: TasksDashboardProps) {
  const [checkedTasks, setCheckedTasks] = useState<Set<number>>(new Set());

  const toggleTask = (index: number) => {
    setCheckedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <section className="w-full flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div key={`${task.title}-${index}`} className={`card bg-secondary text-text p-4
            rounded-lg w-full flex flex-col gap-4 items-start border border-gray-800 `}>
            <div className="flex items-center gap-3 justify-between w-full">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => toggleTask(index)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200
                  ${checkedTasks.has(index)
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-500 hover:border-gray-400'
                    }`}
                >
                  {checkedTasks.has(index) && (
                    <FaCheck className="text-white text-[10px]" />
                  )}
                </div>

                <label
                  onClick={() => toggleTask(index)}
                  className={`cursor-pointer ${checkedTasks.has(index) ? "line-through" : ""}`}>
                  {task.title}
                </label>
              </div>

              <div className="text-gray-400 cursor-pointer hover:text-text hover:bg-primary rounded-lg p-1 transition-colors duration-200">
                <BsThreeDotsVertical />
              </div>
              

            </div>
            <p className={checkedTasks.has(index) ? "opacity-30" : ""}>{task.description}</p>
            <div className={`flex items-center gap-4 ${checkedTasks.has(index) ? "opacity-50" : ""}`}>
              <p className="bg-primary py-1 px-2 text-text rounded-2xl text-[12px]">{task.category}</p>
              <p className=" py-1 px-2 bg-[rgba(100,20,0,0.2)] text-red-500 rounded-2xl text-[12px] flex items-center gap-1">
                <span><IoTimeOutline /></span>
                {formatDate(new Date(task.date))}</p>
            </div>
          </div>
        ))}

      </section>
    </>
  )
}