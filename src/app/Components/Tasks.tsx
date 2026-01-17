'use client'
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import StoreContext from "../Context/AuthContext";

interface Task {
    title : string
    id : number
}
const Tasks = () => {
    const {value , deletTask, updateTask} = useContext(StoreContext)
  return (
    <>
   <div className="flex flex-col items-center text-white font-semibold mt-8">
             {value.map((task :Task) => (    
                      
      <div key={task.id} className="bg-red-600 w-[600px] rounded-3xl p-3 flex justify-between mb-6 gap-2">
          <div>
          <p className="ml-4">
            {task.title}
          </p>
        </div>
        <div className="flex gap-2 mr-4 text-xl cursor-pointer">
          <FaRegEdit onClick={() => updateTask(task)}/>
          <MdDelete onClick={() => deletTask(task.id)}/>
        </div>
      </div>
       ))}
    </div>
    </>
  );
};

export default Tasks;
