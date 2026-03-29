import React from "react";

const Option = (props) => {
  const { option, highlight } = props;

  return (
    <>
      {highlight == "gray" && (
        <div
          className="shadow-3xl rounded py-2 px-5 text-lg font-medium bg-slate-300 text-gray-900 cursor-pointer active:scale-98 transition ease-in-out duration-75 mb-3"
          onClick={() => props.clickHandler()}
        >
          <h1>{option}</h1>
        </div>
      )}
      {highlight == "green" && (
        <div
          className="shadow-3xl rounded py-2 px-5 text-lg font-medium bg-green-400 text-gray-900 cursor-pointer active:scale-98 transition ease-in-out duration-75 mb-3"
          onClick={() => props.clickHandler()}
        >
          <h1>{option}</h1>
        </div>
      )}
      {highlight == "red" && (
        <div
          className="shadow-3xl rounded py-2 px-5 text-lg font-medium bg-red-400 text-gray-900 cursor-pointer active:scale-98 transition ease-in-out duration-75 mb-3"
          onClick={() => props.clickHandler()}
        >
          <h1>{option}</h1>
        </div>
      )}
    </>
  );
};

export default Option;
