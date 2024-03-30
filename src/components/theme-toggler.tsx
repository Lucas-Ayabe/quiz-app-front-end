"use client";
import React, { useEffect, useReducer } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { Moon, Sun } from "./icons";

export const ThemeToggler = ({ className = "" }: { className?: string }) => {
  const [isDark, toggle] = useReducer((bool: boolean) => !bool, false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className={twMerge("flex items-baseline gap-4", className)}>
      <Sun className="fill-dark-1 dark:fill-white" />
      <label className="theme-toggler relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          name="theme"
          className="sr-only"
          checked={isDark}
          onChange={toggle}
        />
        <span
          className={twJoin(
            "slider",
            "mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 bg-primary"
          )}
        >
          <span
            className={twJoin(
              "dot",
              "h-[18px] w-[18px] rounded-full bg-white duration-200",
              isDark ? "translate-x-6" : ""
            )}
          ></span>
        </span>
      </label>
      <Moon className="fill-dark-1 dark:fill-white" />
    </div>
  );
};
