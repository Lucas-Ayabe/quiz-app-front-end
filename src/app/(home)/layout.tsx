import { Header } from "@/components";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-[1160px] mx-auto py-20">
      <Header />
      <main className="mt-20 grid gap-16 grid-cols-1 lg:grid-cols-2">
        {children}
      </main>
    </div>
  );
}
