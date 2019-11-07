/* global document */
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [dark, toggleDark] = useState(null);

  useEffect(() => {
    const darkMode = window.localStorage.getItem("jackleslie-dark-mode");
    if (darkMode == 1) {
      document.documentElement.classList.add("dark-init");
      document.documentElement.classList.add("dark");
      toggleDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("dark-init");
      toggleDark(false);
    }
  }, []);

  const update = () => {
    document.documentElement.classList.remove("dark-init");
    document.documentElement.classList.toggle("dark");
    window.localStorage.setItem("jackleslie-dark-mode", !dark ? 1 : 0);
    toggleDark(!dark);
  };

  return [dark, update];
};
