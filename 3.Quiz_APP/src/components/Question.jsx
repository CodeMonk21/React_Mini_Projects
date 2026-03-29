import React from "react";
import Option from "./Option";
import { useState } from "react";

const Question = (props) => {
  const {status,options,correctOption,optionSelected} = props.data
  
  
  return(
  <div className="flex flex-col gap-10">
    <div className=" rounded py-3 px-5 bg-slate-700">
        <h1 className="text-xl mb-3">Question {props.num}</h1>
        <p className="text-lg font-semibold ">{props.data.question}</p>
    </div>
    <div>
        {options.map((option,index)=>{
          if(status=="completed" && (option==optionSelected || option==correctOption)){
            return option==correctOption?<Option key={index} option={option} clickHandler={()=>props.optionHandler(option)} highlight="green" />:<Option key={index} option={option} clickHandler={()=>props.optionHandler(option)} highlight="red" />
          }
          return <Option key={index} option={option} clickHandler={()=>props.optionHandler(option)} highlight="gray" />

        })}     
    </div>
    
  </div>
  ) 
};

export default Question;
