import type { Quiz } from "./quiz";

export type Result = {
  id: number;
  quiz: Quiz;
  score: number;
};
