import type { Question } from "./question";

export type Quiz = {
  id: number;
  title: string;
  icon: string;
  questions: Question[];
};
