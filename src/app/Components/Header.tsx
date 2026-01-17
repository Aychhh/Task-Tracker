'use client'
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import StoreContext from "../Context/AuthContext";

interface Task {
    title : string
    id : number
}
const Header = () => {

    const {value, setValue} = useContext(StoreContext)

    const [task, setTask] = useState<Task>({title : '' , id : 0});

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name] : e.target.value})
    }

 
  useEffect(() => {
    const savedTasks =  localStorage.getItem("myTasks");
    if(savedTasks){
      setValue(JSON.parse(savedTasks));
    }
  }, [])

  // 🔹 Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(value))
  }, [value])

  
    const onSubmit = (e : FormEvent) => {
        e.preventDefault()
        const newTask : Task = {
            title : task.title,
            id : Date.now()
        }
        setValue(value.concat(newTask))
        setTask({title : '', id : 0})
    }
  return (
    <div className="flex flex-col items-center text-gray-800">
      <div className="flex items-center justify-center mt-12">
        <h1 className="text-3xl font-bold text-center">My Task Tracker</h1>
      </div>
      <div className="input-field flex items-center justify-center mt-8">
        <form onSubmit={onSubmit}>
          <input
            className="border-2 w-[250px] border-gray-500 outline-0 rounded-2xl p-1.5 text-center text-gray-600"
            type="text"
            placeholder="Add Task"
            onChange={handleOnChange}
            value={task.title}
            name="title"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;

//Show me my daily 14-week internship roadmap