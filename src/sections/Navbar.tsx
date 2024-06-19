"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "light"
      : "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="container mx-auto my-5 px-6 text-center h-40 md:h-20 flex flex-col items-center justify-center md:flex-row md:justify-between">
      <div className="font-crimsonText text-4xl font-bold ">Electroser</div>
      <div className="flex items-center justify-center space-x-4 md:space-x-10 ">
        <a href="#features" className="hover:text-accentCyan">
          Servicios
        </a>
        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonios
        </a>
        <button
          id="theme-toggle"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4
            focus:ring-gray-700 rounded-lg text-sm p-2 "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <FaMoon className="w-5 h-5" />
          ) : (
            <FaSun className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
