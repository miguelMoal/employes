import { useState } from "react";

const useToogleTheme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  return [theme, toggleTheme];
};

export default useToogleTheme;
