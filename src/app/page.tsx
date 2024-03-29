import { ThemeToggler } from "@/components/theme-toggler";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Hello World!</h1>
      <h2>Haaa</h2>
      <ThemeToggler />
      <div className="p-4 bg-white">
        <button className="button w-full">Click Me!</button>
      </div>
    </div>
  );
}
