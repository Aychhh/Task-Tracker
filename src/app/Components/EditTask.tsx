"use client";
import React, { ChangeEvent, FormEvent } from "react";
import { useStateContext } from "../Context/AuthContext";

const EditTask = () => {
  const { seteTask, eTask, handleSave, setisEdit, isEdit } = useStateContext();

  const handleOnEdit = (e: ChangeEvent<HTMLInputElement>) => {
    seteTask({ ...eTask, [e.target.name]: e.target.value });
  };

  const onEdit = (e: FormEvent) => {
    e.preventDefault();
    handleSave(eTask.id, eTask.etitle);
    setisEdit(false);
  };
  return (
    <>
      {isEdit ? (
        <div className="flex flex-col items-center text-gray-800">
          <div className="flex items-center justify-center mt-12">
            <h1 className="text-3xl font-bold text-center">Edit Task </h1>
          </div>
          <div className="input-field flex items-center justify-center mt-8">
            <form onSubmit={onEdit}>
              <input
                className="border-2 w-[250px] border-gray-500 outline-0 rounded-2xl p-1.5 text-center text-gray-600"
                type="text"
                placeholder="Add Task"
                onChange={handleOnEdit}
                value={eTask.etitle}
                name="etitle"
              />
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditTask;
