import React from "react";
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const [quizData, setQuizData] = useState([
    {
      question: "Which language is primarily used for web page structure?",
      options: ["CSS", "HTML", "JavaScript", "Python"],
      correctOption: "HTML",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Django", "React", "Laravel", "Flask"],
      correctOption: "React",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      correctOption: "Cascading Style Sheets",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "string", "define"],
      correctOption: "var",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which database is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      correctOption: "MongoDB",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
  ]);

  const [index, setIndex] = useState(0);
  const [questionNO, setQuestionNO] = useState(0);

  //Check the Right option:- Update the quizData
  const optionCheck = (option, index) => {
    const temp = [...quizData]
    const question = temp[index];
    if (question.status == "pending") {
      question.status = "completed";
      question.optionSelected = option
      question.correct= (question.correctOption==option)
    }
    setQuizData(temp)
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-6 px-8">
      <h1 className="text-center text-4xl mb-5">Quiz Title</h1>
      <div className="flex gap-5">
        {/* Questions container */}
        <div className="grow bg-slate-900 p-6 rounded-xl flex flex-col">
          <Question
            key={questionNO}
            num={questionNO + 1}
            data={quizData[index]}
            optionHandler={(optionSelect) => optionCheck(optionSelect, index)}
          />
          <div className="flex justify-center gap-5 mt-3">
            <button
              className="cursor-pointer py-2 px-5 rounded bg-slate-700 active:scale-90 transition ease-in-out"
              onClick={() => {
                setIndex(index - 1);
                setQuestionNO(questionNO - 1);
              }}
            >
              Previous
            </button>
            <button
              className="cursor-pointer py-2 px-5 rounded bg-slate-700 active:scale-90 transition ease-in-out"
              onClick={() => {
                setIndex(index + 1);
                setQuestionNO(questionNO + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
        {/* Number of questions */}
        <div className="w-87.5 border p-5">
          <h1 className="text-xl">Question 1/8</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
