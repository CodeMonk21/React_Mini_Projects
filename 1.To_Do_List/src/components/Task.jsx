import React, { useEffect, useState } from "react";

const Task = (props) => {
  const { task, status } = props.task;

  const [taskStatus, setTaskStatus] = useState(status);
  const [editEnable, setEditEnable] = useState(false);
  const [taskInput, setTaskInput] = useState(task);

  const inputFormHandler = (e) => {
    e.preventDefault();
    props.editHandler(taskInput);
    setEditEnable(false);
  };

  return (
    <div className="bg-white text-gray-950  py-2 px-3 flex justify-between gap-3 items-center rounded">
      {/* CheckBox */}
      {status == "pending" ? (
        <input
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          name=""
          id=""
          onChange={(e) => {
            const status = props.checkHandler(e.target.checked);
            setTaskStatus(status);
          }}
        />
      ) : (
        <input
          type="checkbox"
          className="h-6 w-6 cursor-pointer"
          name=""
          id=""
          checked
          onChange={(e) => {
            const status = props.checkHandler(e.target.checked);
            setTaskStatus(status);
          }}
        />
      )}
      {/* Task Input */}
      <div className="grow self-start  p-0 font-semibold text-slate-800">
        <form onSubmit={inputFormHandler}>
          {editEnable ? (
            <input
              type="text"
              className="text-md border outline-0"
              style={{
                textDecoration: `${taskStatus == "pending" ? "" : "line-through"}`,
              }}
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="text-md border-0 outline-0"
              style={{
                textDecoration: `${taskStatus == "pending" ? "" : "line-through"}`,
              }}
              disabled
              value={taskInput}
            />
          )}
        </form>
      </div>
      {/* Icons  */}
      <div>
        <i
          className="ri-delete-bin-4-fill text-md rounded  p-1 mx-3 bg-gray-300 cursor-pointer "
          onClick={props.deleteHandler}
        ></i>
        <i
          className="ri-pencil-fill text-md p-1 bg-gray-300 cursor-pointer"
          onClick={() => setEditEnable(true)}
        ></i>
      </div>
    </div>
  );
};

export default Task;
