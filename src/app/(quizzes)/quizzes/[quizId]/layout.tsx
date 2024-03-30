import { Header } from "@/components";
import { QuizGateway } from "@/data/quiz.gateway";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { quizId: string };
}>) {
  const quiz = await QuizGateway.findByTitle(params.quizId);

  if (!quiz) {
    redirect("/");
  }

  return (
    <div className="container max-w-[1160px] mx-auto py-20">
      <Header logo={{ icon: quiz.icon, text: quiz.title }} />
      <main className="mt-20 grid gap-16 grid-cols-1 lg:grid-cols-2">
        {children}
      </main>
    </div>
  );
}
