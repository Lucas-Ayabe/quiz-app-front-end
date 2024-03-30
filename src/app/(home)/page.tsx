import { QuizLink } from "@/components";
import { QuizGateway } from "@/data/quiz.gateway";

export default async function Home() {
  const quizzes = await QuizGateway.list();

  return (
    <>
      <div className="max-w-[465px]">
        <h1 className="text-heading-l font-light leading-none">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>

        <p className="text-body-s text-dark-1 dark:text-light-2 italic mt-12">
          Pick a subject to get started.
        </p>
      </div>
      <nav className="flow">
        {quizzes.map((quiz) => (
          <QuizLink
            src={quiz.icon}
            href={`/quizzes/${quiz.title}`}
            key={quiz.title}
          >
            {quiz.title}
          </QuizLink>
        ))}
      </nav>
    </>
  );
}
