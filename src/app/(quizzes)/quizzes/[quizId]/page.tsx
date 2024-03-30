import { QuestionOption, QuizLink } from "@/components";
import { Progress } from "@/components/progress";
import { QuizGateway } from "@/data/quiz.gateway";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Quiz({ params }: { params: { quizId: string } }) {
  const quiz = await QuizGateway.findByTitle(params.quizId);

  if (!quiz) {
    redirect("/");
  }

  return (
    <>
      <div className="max-w-[465px]">
        <span className="text-body-s italic text-dark-1 dark:text-light-2">
          Question 6 of 10
        </span>
        <h1 className="text-heading-m font-medium leading-none mt-7">
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </h1>

        <p className="text-body-s text-dark-1 dark:text-light-2 italic mt-12">
          Pick a subject to get started.
        </p>

        <Progress className="mt-6 sm:mt-10 lg:mt-40" />
      </div>
      <div className="flow">
        {quiz.questions[0].options.map((option) => (
          <QuestionOption key={option}>{option}</QuestionOption>
        ))}

        <Link href={`/quizzes/${params.quizId}/result`} className="button">
          Submit Answer
        </Link>
      </div>
    </>
  );
}
