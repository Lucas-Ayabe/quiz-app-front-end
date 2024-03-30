import { PropsWithChildren } from "react";
import { Check, Error as ErrorIcon } from "./icons";
import { twMerge } from "tailwind-merge";

const states = {
  idle: {
    icon: <></>,
  },
  correct: {
    icon: <Check className="ml-auto" />,
  },
  "correct-selected": {
    icon: <Check className="ml-auto" />,
  },
  incorrect: {
    icon: <ErrorIcon className="ml-auto" />,
  },
} as const;

type OptionState = "idle" | "correct" | "incorrect" | "correct-selected";

type QuestionOptionProps = PropsWithChildren<{
  state?: OptionState;
}>;

export function QuestionOption({
  children,
  state = "idle",
}: QuestionOptionProps) {
  return (
    <label
      className={twMerge(
        "question-option group flex gap-8 items-center cursor-pointer p-5 bg-white text-dark-3 border-[3px] border-white rounded-box shadow-small dark:bg-dark-2 dark:border-dark-2 dark:text-white dark:shadow-small-dark",
        state === "idle" ? "has-[:checked]:border-primary" : "",
        state === "correct-selected" ? "!border-success" : "",
        state === "incorrect" ? "!border-danger" : ""
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={state !== "idle"}
      />
      <span
        className={twMerge(
          "grid place-items-center text-heading-s rounded-lg bg-light-1 aspect-square w-[56px] dark:text-dark-3",
          state === "idle"
            ? "group-hover:bg-primary-light group-hover:text-primary peer-checked:bg-primary peer-checked:text-white"
            : "",
          state === "correct-selected" ? "!bg-success !text-white" : "",
          state === "incorrect" ? "!bg-danger !text-white" : ""
        )}
      >
        A
      </span>
      <span className="text-[1.125rem] sm:text-heading-s font-medium">
        {children}
      </span>
      {states[state].icon}
    </label>
  );
}
