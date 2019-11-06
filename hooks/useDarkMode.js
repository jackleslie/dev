/* global document */
import { useState } from "react";

export const useDarkMode = () => {
  const [dark, toggleDark] = useState(false);

  const update = () => {
    document.documentElement.classList.toggle("dark");
    toggleDark(!dark);
  };

  return [dark, update];
};
