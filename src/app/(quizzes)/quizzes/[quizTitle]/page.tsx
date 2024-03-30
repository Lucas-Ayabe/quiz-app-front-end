import { redirect } from "next/navigation";
import { Quiz } from "@/components";
import { ResultGateway, QuizGateway } from "@/data";
import { cookies } from "next/headers";

export default async function QuizPage({
  params,
}: {
  params: { quizTitle: string };
}) {
  const quiz = await QuizGateway.findByTitle(params.quizTitle);

  if (!quiz) {
    redirect("/");
  }

  const recordResult = async (formData: FormData) => {
    "use server";

    const score = parseInt(formData.get("score") as string);

    await ResultGateway.register({ quizId: quiz.id, score });
    cookies().set("score", "" + score);
    redirect(`/quizzes/${quiz.title}/result`);
  };

  return <Quiz quiz={quiz} onFinish={recordResult} />;
}
