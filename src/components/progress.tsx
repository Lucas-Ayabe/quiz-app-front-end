import { twJoin } from "tailwind-merge";

type ProgressProps = {
  className?: string;
  max: number;
  value: number;
};

export function Progress({ value, max, className = "" }: ProgressProps) {
  const percent = max === 0 ? 0 : (value / max) * 100;

  return (
    <div
      role="progressbar"
      className={twJoin("progress", "p-[4px] rounded-full bg-white", className)}
    >
      <div
        className={twJoin("bar h-[8px] bg-primary rounded-full")}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
