import { useTheme } from 'next-themes';

export default function useToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return [toggle];
}
