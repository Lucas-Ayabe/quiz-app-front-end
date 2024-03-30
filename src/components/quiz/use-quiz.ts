import { Question } from "@/domain";
import { useReducer } from "react";
import { QuizState, quizReducer } from "./quiz.reducer";

const questionOptionState = (question: Question) => {
  return ({ state, selectedOption }: QuizState) => {
    return (option: string) => {
      if (state !== "answered") return "idle";
      if (option !== selectedOption) {
        return option === question.answer ? "correct" : "locked";
      }
      return selectedOption === question.answer
        ? "correct-selected"
        : "incorrect";
    };
  };
};

export const useQuiz = (questions: Question[]) => {
  const [quizState, dispatch] = useReducer(quizReducer, {
    questions: questions,
    score: 0,
    currentQuestion: 0,
    error: null,
    state: "idle",
    selectedOption: null,
  } satisfies QuizState);

  const { currentQuestion } = quizState;

  const question = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  return {
    state: quizState,
    dispatch,
    question: {
      ...question,
      stateOf: questionOptionState(question)(quizState),
    },
    isLast,
    idle: () => dispatch({ type: "idle" }),
    choose: (option: string) => {
      return dispatch({ type: "choose", payload: { option } });
    },
    submit: () => dispatch({ type: "submit" }),
    nextQuestion: () => dispatch({ type: "nextQuestion" }),
  };
};
