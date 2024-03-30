import { twJoin } from "tailwind-merge";

export function Progress({ className = "" }: { className?: string }) {
  return (
    <div
      role="progressbar"
      className={twJoin(
        "progress h-1 w-full bg-primary rounded-full",
        className
      )}
    ></div>
  );
}
