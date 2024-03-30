import { Logo } from "@/components";
import { QuizGateway } from "@/data/quiz.gateway";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function QuizResult({
  params,
}: {
  params: { quizId: string };
}) {
  const quiz = await QuizGateway.findByTitle(params.quizId);

  if (!quiz) {
    redirect("/");
  }

  return (
    <>
      <div className="max-w-[465px]">
        <h1 className="text-heading-m font-light leading-none sm:text-heading-l">
          Quiz completed <span className="font-medium">You scored...</span>
        </h1>
      </div>
      <div className="flow">
        <article className="flex flex-col items-center gap-10 p-12 bg-white rounded-box dark:bg-dark-2">
          <Logo src={quiz.icon}>{quiz.title}</Logo>
          <div className="flex flex-col gap-4 text-center">
            <span className="text-[88px] sm:text-display font-medium text-dark-3 leading-none dark:text-white">
              8
            </span>
            <span className="text-body-m sm:text-body-m text-dark-1 dark:text-light-2">
              out of 10
            </span>
          </div>
        </article>

        <Link href="/" className="button">
          Play Again
        </Link>
      </div>
    </>
  );
}
