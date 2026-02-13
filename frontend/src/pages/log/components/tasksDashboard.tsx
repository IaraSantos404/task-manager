import formatDate from "../../../utils/date";
import { IoTimeOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

interface TasksDashboardProps {
  name: string;
  tasks: {
    title: string;
    description: string;
    category: string;
    date: string;
  }[];
}

export default function TasksDashboard({ name, tasks }: TasksDashboardProps) {
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
      <section className="w-full lg:w-1/2 my-12 flex flex-col gap-4">
        <div className="flex justify-between ">
          <li>{name}</li>
          <p>{tasks.length} tarefa{tasks.length > 1 ? "s" : ""}</p>
        </div>
        {tasks.map((task, index) => (
          <div key={`${task.title}-${index}`} className="card bg-secondary text-text p-4 rounded-lg w-full flex flex-wrap gap-4 items-center border border-gray-800">
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
                className="cursor-pointer"
              >
                {task.title}
              </label>
            </div>
            <p>{task.description}</p>
            <div className="flex items-center gap-4">
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