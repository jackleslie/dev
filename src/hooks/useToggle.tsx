import { useTheme } from "next-themes";

export function useToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return [toggle];
}
