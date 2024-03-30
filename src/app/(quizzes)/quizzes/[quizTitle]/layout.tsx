import { Header } from "@/components";
import { QuizGateway } from "@/data";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { quizTitle: string };
}>) {
  const quiz = await QuizGateway.findByTitle(params.quizTitle);

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
