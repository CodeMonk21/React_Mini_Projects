import React from "react";

const Numbers = (props) => {
  const { status, correct } = props.quizData;

  return (
    <>
      {status == "pending" && (
        <div className="bg-slate-500 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={props.numClickHandler}>
          <h1 className="text-xl font-semibold">{props.num}</h1>
        </div>
      )}
      {status == "completed" && correct && (
        <div className="bg-green-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={props.numClickHandler}>
          <h1 className="text-xl font-semibold">{props.num}</h1>
        </div>
      )}
      {status == "completed" && !correct && (
        <div className="bg-red-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={props.numClickHandler}>
          <h1 className="text-xl font-semibold">{props.num}</h1>
        </div>
      )}
    </>
  );
};

export default Numbers;
