import { twMerge } from "tailwind-merge";

export function Moon({ className = "fill-dark-1" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.77503 1.5225C10.0455 1.62306 11.2694 2.04571 12.3312 2.75056C13.393 3.45541 14.2577 4.41922 14.8436 5.551C15.4296 6.68278 15.7174 7.9452 15.68 9.21911C15.6427 10.493 15.2813 11.7364 14.63 12.8319C13.9787 13.9273 13.059 14.8388 11.9577 15.4802C10.8564 16.1215 9.60978 16.4717 8.33559 16.4976C7.06139 16.5235 5.80162 16.2242 4.67517 15.6281C3.54872 15.032 2.59277 14.1586 1.89753 13.0905C4.00203 12.5205 6.87153 11.1375 8.13753 7.764C8.96553 5.553 9.01353 3.3555 8.77503 1.5225ZM17.184 9C17.184 7.79163 16.9406 6.59565 16.4683 5.48337C15.9961 4.37108 15.3047 3.36529 14.4355 2.52595C13.5662 1.68661 12.5367 1.03092 11.4086 0.597978C10.2804 0.165037 9.07666 -0.0362902 7.86903 0.00600278C7.76094 0.00955256 7.65491 0.0364339 7.55819 0.0848036C7.46146 0.133173 7.37635 0.201887 7.30867 0.286234C7.24099 0.370581 7.19236 0.468566 7.1661 0.573471C7.13983 0.678376 7.13657 0.787719 7.15653 0.894003C7.50153 2.715 7.57653 4.986 6.73203 7.236C5.53203 10.437 2.52903 11.496 0.616527 11.8425C0.502675 11.8631 0.39513 11.9097 0.302306 11.9788C0.209481 12.0479 0.133893 12.1375 0.0814549 12.2406C0.0290168 12.3437 0.00115 12.4576 3.48434e-05 12.5733C-0.00108031 12.689 0.0245861 12.8034 0.0750265 12.9075C0.959673 14.7448 2.44205 16.2273 4.27934 17.112C6.11663 17.9967 8.19991 18.2312 10.1879 17.7772C12.1759 17.3232 13.9508 16.2075 15.2219 14.6128C16.4929 13.0182 17.1847 11.0392 17.184 9Z"
        className={twMerge("fill-dark-1", className)}
      />
    </svg>
  );
}