import React from "react";
import Question from "./components/Question";
import { useState } from "react";
import Numbers from "./components/Numbers";

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
    {
      question:
        "Which symbol is used for comments in JavaScript (single line)?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctOption: "//",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "What is the output of typeof null in JavaScript?",
      options: ["null", "object", "undefined", "string"],
      correctOption: "object",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question:
        "Which method is used to add an element at the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctOption: "push()",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which HTTP status code means 'Not Found'?",
      options: ["200", "301", "404", "500"],
      correctOption: "404",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
      correctOption: "Sun Microsystems",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Program Integration",
        "Application Process Integration",
        "Automated Programming Interface",
      ],
      correctOption: "Application Programming Interface",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question:
        "Which Git command is used to upload local commits to a remote repository?",
      options: ["git push", "git pull", "git commit", "git clone"],
      correctOption: "git push",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctOption: "<a>",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "Which of the following is used for version control?",
      options: ["Git", "Docker", "Kubernetes", "Jenkins"],
      correctOption: "Git",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
    {
      question: "What does JSON stand for?",
      options: [
        "JavaScript Object Notation",
        "Java Syntax Object Notation",
        "JavaScript Oriented Notation",
        "Java Source Open Network",
      ],
      correctOption: "JavaScript Object Notation",
      optionSelected: "",
      status: "pending",
      correct: "",
    },
  ]);

  const [index, setIndex] = useState(0);

  //Check the Right option:- Update the quizData
  const optionCheck = (option, index) => {
    const temp = [...quizData];
    const question = temp[index];
    if (question.status == "pending") {
      question.status = "completed";
      question.optionSelected = option;
      question.correct = question.correctOption == option;
    }
    setQuizData(temp);
  };

  const numberCheck = (num) => {
    setIndex(num);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-6 px-8">
      <h1 className="text-center text-4xl mb-5">Quiz Title</h1>
      <div className="flex gap-5">
        {/* Questions container */}
        <div className="grow bg-slate-900 p-6 rounded-xl flex flex-col">
          <Question
            key={index}
            num={index + 1}
            data={quizData[index]}
            optionHandler={(optionSelect) => optionCheck(optionSelect, index)}
          />
          <div className="flex justify-center gap-5 mt-3">
            <button
              className="cursor-pointer py-2 px-5 rounded bg-slate-700 active:scale-90 transition ease-in-out"
              onClick={() => {
                if (index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              Previous
            </button>
            <button
              className="cursor-pointer py-2 px-5 rounded bg-slate-700 active:scale-90 transition ease-in-out"
              onClick={() => {
                if (index < quizData.length - 1) {
                  setIndex(index + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
        {/* Number of questions */}
        <div className="w-87.5  p-5 shadow-xl/30 bg-slate-900 rounded-2xl">
          <h1 className="text-xl">
            Question {index + 1}/{quizData.length}
          </h1>
          <div className="flex gap-5 flex-wrap my-8">
            {quizData.map((data, index) => {
              return (
                <Numbers
                  key={index}
                  quizData={data}
                  num={index + 1}
                  numClickHandler={() => numberCheck(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
