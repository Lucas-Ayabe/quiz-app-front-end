"use client";

import { QuestionOption } from "..";
import { Progress } from "../progress";
import { Error as ErrorIcon } from "../icons";
import type { Quiz as IQuiz } from "@/domain";
import { useQuiz } from "./use-quiz";

type QuizProps = {
  quiz: IQuiz;
  onFinish: (formData: FormData) => void;
};

export function Quiz({ quiz, onFinish }: QuizProps) {
  const quizModel = useQuiz(quiz.questions);
  const { isLast, question } = quizModel;
  const { currentQuestion, error, selectedOption, state } = quizModel.state;

  return (
    <>
      <div className="max-w-[465px] flex flex-col">
        <span className="text-body-s italic text-dark-1 dark:text-light-2">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </span>
        <h1 className="text-heading-m font-medium leading-none mt-7">
          {question.question}
        </h1>

        <Progress
          value={currentQuestion + 1}
          max={quiz.questions.length}
          className="mt-6 sm:mt-10 lg:mt-auto lg:mb-[126px]"
        />
      </div>
      <div className="flow">
        {question.options.map((option, idx) => (
          <QuestionOption
            name="option"
            value={option}
            index={idx}
            onChange={quizModel.choose}
            selected={option === selectedOption}
            key={option}
            state={question.stateOf(option)}
          >
            {option}
          </QuestionOption>
        ))}

        {state !== "answered" && (
          <button className="button" onClick={quizModel.submit}>
            Submit Answer
          </button>
        )}

        {!isLast && state === "answered" && (
          <button className="button" onClick={quizModel.nextQuestion}>
            Next Question
          </button>
        )}

        {isLast && state === "answered" && (
          <form action={onFinish}>
            <input type="hidden" name="quizId" value={quiz.id} />
            <input type="hidden" name="score" value={quizModel.state.score} />
            <button className="button">Next Question</button>
          </form>
        )}

        {state === "error" && (
          <p className="flex justify-center gap-2 text-danger text-lg sm:text-body-m mt-8">
            <ErrorIcon />
            {error}
          </p>
        )}
      </div>
    </>
  );
}
