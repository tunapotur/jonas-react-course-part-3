import { createContext, useContext, useState } from "react";

// 1) CREATE A CONTEXT
const QuizContext = createContext();

function QuizProvider({ children }) {
  const allQuiz = null;
  // 2) PROVIDE VALUE TO CHILD COMPONENTS
  return (
    <QuizContext.Provider value={{ quiz: allQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
