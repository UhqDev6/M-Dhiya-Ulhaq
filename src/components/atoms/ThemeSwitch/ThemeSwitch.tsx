import { useTheme } from "@/contex/ThemeContextProvider/ThemeContextProvider";
import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="
        fixed 
        bottom-5 
        right-5
        bg-violet-300
        w-[3rem]
        h-[3rem]
        bg-opacity-80
        backdrop-blur-[0.5rem]
        border
        border-white
        border-opacity-40
        shadow-2xl
        rounded-full
        flex
        items-center
        justify-center
        hover:scale-[1.15]
        active:scale-105
        transition-all
      "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
