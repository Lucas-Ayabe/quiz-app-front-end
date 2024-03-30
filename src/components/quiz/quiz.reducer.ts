import { Question } from "@/domain";

type BaseQuizState = {
  questions: Question[];
  score: number;
  currentQuestion: number;
};

type IdleQuiz = {
  state: "idle";
  selectedOption: string | null;
  error: null;
};

type ErrorQuiz = {
  state: "error";
  selectedOption: null;
  error: string;
};

type AnsweredQuiz = {
  state: "answered";
  selectedOption: string;
  error: null;
};

type IdleAction = { type: "idle" };
type ChooseAction = { type: "choose"; payload: { option: string } };
type SubmitAction = { type: "submit" };
type NextQuestionAction = { type: "nextQuestion" };

export type QuizAction =
  | IdleAction
  | ChooseAction
  | SubmitAction
  | NextQuestionAction;
export type QuizState = BaseQuizState & (IdleQuiz | ErrorQuiz | AnsweredQuiz);

export const quizReducer = (
  state: QuizState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case "idle":
      return { ...state, state: "idle", selectedOption: null, error: null };
    case "choose":
      return {
        ...state,
        state: "idle",
        selectedOption: action.payload.option,
        error: null,
      };
    case "submit":
      if (state.selectedOption) {
        const question = state.questions[state.currentQuestion];
        const isCorrect = question.answer === state.selectedOption;

        return {
          ...state,
          state: "answered",
          selectedOption: state.selectedOption,
          error: null,
          score: isCorrect ? state.score + 1 : state.score,
        };
      }
      return {
        ...state,
        state: "error",
        selectedOption: null,
        error: "Please select an option",
      };
    case "nextQuestion":
      return {
        ...state,
        state: "idle",
        selectedOption: null,
        error: null,
        currentQuestion: Math.min(
          state.currentQuestion + 1,
          state.questions.length - 1
        ),
      };
    default:
      return state;
  }
};
