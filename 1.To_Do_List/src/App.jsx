import React, { useEffect, useState } from "react";
import Task from "./components/Task";

function App() {
  const [taskList, setTaskList] = useState(localStorage.getItem("taskArr")?JSON.parse(localStorage.getItem("taskArr")):[])
  const [inputTask, setInputTask] = useState("")


  //Checkbox handler:- Change status of task when chekbox is clicked
  const taskStatus = (index,checked)=>{
    const temp = [...taskList]
    if(checked){
      temp[index].status = "completed"
    }else{
      temp[index].status = "pending"
    }
    setTaskList(temp)
    return temp[index].status
  }

  //Edit Handler:- Edit the input text
  const taskEdit = (input,index) =>{
    const temp = [...taskList]
    temp[index].task = input
    setTaskList(temp)
  }

  //Delete Handler:- Delete the element which has been clicked
  const taskDelete = (index) =>{
    const temp = [...taskList]
    temp.splice(index,1)
    setTaskList(temp)
  }
  
  //Form Submit Handler
  function formHandler(e){
    e.preventDefault()
    setTaskList([...taskList,{task:inputTask,status:"pending"}])

    //Clear Input
    setInputTask("")
  }

  // useEffect(()=>{
  //   if(localStorage.getItem("taskArr")){
  //     setTaskList(JSON.parse(localStorage.getItem("taskArr")))
  //   }
  //   console.log(taskList);
  // },[])
  useEffect(()=>{
    localStorage.setItem("taskArr",JSON.stringify(taskList))
    console.log(taskList);
  },[taskList])

  

  return (
    <div className="min-h-screen bg-gray-950 text-blue-50 flex flex-col items-center py-10">
      <h1 className="text-5xl font-semibold uppercase tracking-wider text-slate-400 mb-10">ToDo List</h1>
      <div className="min-w-2/4">
        <form className=" flex gap-2 my-5" onSubmit={formHandler}>
          <input type="text" className="border outline-0 grow bg-blue-50 text-slate-900 font-semibold py-2 px-5 rounded" placeholder="New Task"
          value={inputTask}
          onChange={(e)=>setInputTask(e.target.value)}
          />
          <button className="bg-blue-500 py-2 px-5 rounded">Add Task</button>
        </form>
        <div className="py-5 px-6 bg-gray-500 rounded flex flex-col gap-4">
          {taskList.map((task,index)=>{
            return <Task key={index} task={task} checkHandler={(checkStatus)=>taskStatus(index,checkStatus)} deleteHandler={()=>taskDelete(index)} editHandler={(input)=>taskEdit(input,index)}  />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
